import path from 'path';
import express from 'express';
import cors from 'cors';
import favicon from 'serve-favicon';
import compression from 'compression';
import getRenderParams from '../utils/getISORenderParams';

const app = express();
const NODE_ENV = app.get('env') || 'production';
const port = process.env.PORT || 40000;
// compress all requests
app.use(compression());
app.use(favicon(path.join(__dirname, '../public/favicon.ico')));

// Use this middleware to serve up static files built into the dist directory
app.use("/public", cors(), express.static(path.join(__dirname, '../public')));
app.use("/shared", cors(), express.static(path.join(__dirname, '../shared')));
app.use("/components", cors(), express.static(path.join(__dirname, '../components')));
app.use("/docs", cors(), express.static(path.join(__dirname, '../docs')));
app.use("/", function (req, res) {
    // Resolve current server rendering params.
  let { project, routes, jsBundles, cssBundles } = getRenderParams(req, NODE_ENV);

  if (!routes || !project)  {
    console.log('router match failed in build.config.js, 404 not found!');
    // should give 404.
    res.status(404).send('Not found');
    return;
  }
  let stylesHtml = cssBundles.map(function (cssLink) {
    return ('<link name="'+cssLink.name+'" rel="stylesheet" type="text/css" href="'+cssLink.href+'">');
  }).join('');

  let scriptsHtml = jsBundles.map(function (jsLink) {
    return ('<script src="' + jsLink + '"></script>');
  }).join('');

  var html = '<!DOCTYPE html>' +
    ' <html>' +
    '  <head>' +
    '  <meta charset="utf-8">' +
    '  <meta name="renderer" content="webkit">' +
    '  <meta http-equiv="Cache-Control" content="no-siteapp">' +
    '  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">' +
    '  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">' +
    stylesHtml +
    '</head>' +
    '  <body>' +
    '    <div id="react-view"></div>' +
    scriptsHtml +
    '  </body>' +
    '</html>';

  res.send(html);
});
var server = app.listen(port, function () {
  console.log('===Express server listening on port %d ===', server.address().port);
});
