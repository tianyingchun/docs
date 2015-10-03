var path = require('path');
var Q = require('q');
var fs = require('fs-extra');
var fsp = require('fs-promise');
var _ = require('lodash');
var marked = require("marked");
var debug = require('debug')('iso:apiUtil');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

/**
 * Loop all first child file or directoy info
 * @param  {string} dir directory path
 * @return {array}      found file or directories.
 */
function loopDirFiles(dir) {
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

function parseMarkDown(component) {
  debug('parseMarkDown', component);
  return loopDirFiles(component).then(function (demoGuides) {
    var result = [];
    _.each(demoGuides || [], function (item) {
      var demoMdPath = path.join(component, item.name);
      if (path.extname(demoMdPath).toLowerCase() === ".md") {
        debug('demoMdPath: %s', demoMdPath);
        var fileContent = fs.readFileSync(demoMdPath, 'utf-8');
        result.push(marked(fileContent));
      }
    });
    return result;
  });
}

module.exports.loopDirFiles = loopDirFiles;
module.exports.parseMarkDown = parseMarkDown;
