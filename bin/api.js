var path = require('path');
var express = require('express');
var cors = require('cors');
var favicon = require('serve-favicon');
var compression = require('compression');
var debug = require('debug')('iso:api');
var util = require('./server/util');
var app = express();
var NODE_ENV = app.get('env') || 'production';
var port = process.env.PORT || 5000;

// compress all requests
app.use(compression());
app.use('/api/*', cors());

var reactRootPath = path.join(process.cwd(), 'shared/react/components');

function readReactManifest() {
  return require(path.join(reactRootPath, 'manifest.js'));
}

// get all menus
app.get('/api/docs/react/dockmenus', function (req, res, next) {
  setTimeout(function () {
    res.send(readReactManifest());
  }, 3000);
});

// get guide detail info.
app.get('/api/docs/react/guideinfo', function (req, res, next) {
  var query = req.query;
  var componentName = query.component;
  if (!componentName) {
    res.status(400).send('the query `component` is required');
    return;
  }
  var componentDemoPath = path.join(reactRootPath, componentName, 'demo');
  util.parseMarkDown(componentDemoPath)
    .then(function (guideInfo) {
      res.send(guideInfo);
    }).catch(function (err) {
      res.status(400).send(err);
    });
});

var server = app.listen(port, function () {
  console.log('===Express server listening on port %d ===', server.address().port);
});
