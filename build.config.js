var path = require('path');
module.exports = {
  // the optional configurations.
  options: {
    // the location related gruntfile of your projects root folder.
    // put web, admin into /*
    projectRoot: './',

    devServer: {
      host: 'localhost',
      port: 3000,
      publicPath: 'http://localhost:3000/public/'
    },
    built: {
      // where the built files should be placed?
      baseDir: path.join(__dirname, 'public')
    },
    // assets public path (stylesheets,...)
    assets: {
      // the urlLoaderQuery used in buildtool/webpack.base.config.js <url-loader> config node.
      urlLoaderQuery: {
        context: '${projectName}/stylesheets',
        name: '${projectName}/[path][name].[ext]'
      },
      dev: 'http://localhost:3000/public/',
      prod: 'http://cdn.yingchun.com/public/'
    }
  },
  projects: {
    // ${projectName}, project layers
    docs: {
      home: {
        match: /^\/(docs\/|docs)?$/,
        // entry point, must be string.
        entry: './docs/app/home/index.js',
        routes: './docs/app/home/routes.js',
        version: '',
        jsBundles: ['browser-polyfill.js', 'reactkits.js', 'docs/home/bundle.js${version}'],
        cssBundles: ['http://localhost:2000/shared/less/public/common.css','docs/home/bundle.css${version}']
      },
      // ${subProjectName}, it contains multi module in business domain.
      react: {
        // server rendering url matching.
        match: /^\/docs\/react(\/)?/,
        // entry point, must be string.
        entry: './docs/app/react/index.js',
        routes: './docs/app/react/routes.js',
        version: '',
        jsBundles: ['browser-polyfill.js', 'reactkits.js', 'docs/react/bundle.js${version}'],
        cssBundles: ['http://localhost:2000/shared/less/public/common.css','docs/react/bundle.css${version}']
      },
      less: {
        // server rendering url matching.
        match: /^\/docs\/less(\/)?/,
        // entry point, must be string.
        entry: './docs/app/less/index.js',
        routes: './docs/app/less/routes.js',
        version: '',
        jsBundles: ['browser-polyfill.js', 'reactkits.js', 'docs/less/bundle.js${version}'],
        cssBundles: ['http://localhost:2000/shared/less/public/common.css','docs/less/bundle.css${version}']
      }
    }
  }
};
