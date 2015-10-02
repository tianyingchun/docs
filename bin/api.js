var path = require('path');
var express = require('express');
var cors = require('cors');
var favicon = require('serve-favicon');
var compression = require('compression');
var debug = require('debug')('iso:api');
var fs = require('fs-extra');
var fsp = require('fs-promise');
var app = express();
var NODE_ENV = app.get('env') || 'production';
var port = process.env.PORT || 5000;

// compress all requests
app.use(compression());
app.use('/api/*', cors());

var reactRootPath = path.join(process.cwd(), 'shared/react/components');

// read directories
function readDir(dir, res) {
  var root = '';
  return fsp.readdir(dir).then(function (files) {
    var result = [];
    files.forEach(function (fileName) {
      var filePath = path.join(dir, fileName); // filePath with root
      var relFilePath = path.relative(root, filePath);
      var stats = fs.statSync(filePath);
      var isDir = stats.isDirectory();
      result.push({
        isDir: isDir,
        name: fileName
      });
    });
    return result;
  });
}

function readReactManifest() {
  var reactManifest = require(path.join(reactRootPath, 'manifest.js'));

  return reactManifest;
}

function parseMarkDown(file) {
  fsp.readFile();
}
// get all menus
app.get('/api/docs/react/dockmenus', function (req, res, next) {
  // debug('react component path: %s', reactRootPath);
  // readDir(reactRootPath).then(function (result) {
  //   res.send(result);
  // }).catch(function (err) {
  //   res.status(400).send(err);
  // });
  setTimeout(function() {
    res.send(readReactManifest());
  }, 3000);
});

// get guide detail info.
app.get('/api/docs/react/guide-detail', function (req, res, next) {
  var guideInfo = {

  };

  res.send(guideInfo);
});

var server = app.listen(port, function () {
  console.log('===Express server listening on port %d ===', server.address().port);
});
