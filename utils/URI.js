import url from 'wurl';
import lang from '../shared/react/utils/lang';
import PATH from '../shared/react/utils/path';
import STRING from '../shared/react/utils/string';

const URI = {
  /**
   * Get current base url http://example.com
   * @param  {String} path  the url path '/workspace/list'
   * @param  {Object} query parameters {root:''}
   * @return {String}       the final path
   */
  getUrl (path, query) {
    const port = url('port'); // 443, 80.
    const hostname = url('hostname');
    const protocol = url('protocol');
    let finalPath = STRING.stringFormat('{0}://{1}{2}{3}', protocol, hostname, (port === 443 || port === 80) ? '' : (':' + port), PATH.normalizePath(path));
    if (lang.isObject(query)) {
      var queryPath = [];
      Object.keys(query).forEach((key) => {
        queryPath.push(`${key}=${query[key]}`);
      });
      return finalPath + '?' + queryPath.join('&').replace(/^&+/, '');
    } else {
      return finalPath;
    }
  },
  /**
   * get url path.
   * @param  {String} path  the url path '/workspace/list'
   * @param  {Object} query parameters {root:''}
   * @return {String}       the final path
   */
  getYunRoot (path, query) {
    return getUrl(path, query);
  },

  getWorkspaceRoot (path, query) {
    return getYunRoot(PATH.normalizePath('/workspace', path), query);
  },

  getDocumentRoot (path, query) {
    return getYunRoot(PATH.normalizePath('/document', path), query);
  }
};

export default URI;
