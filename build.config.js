var path = require('path');
module.exports = {
  // the optional configurations.
  options: {
    // the location related gruntfile of your projects root folder.
    // put web, admin into /*
    projectRoot: './',

    devServer: {
      host: '172.16.233.137',
      port: 3000,
      publicPath: 'http://172.16.233.137:3000/public/'
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
      dev: 'http://172.16.233.137:3000/public/',
      prod: 'http://172.16.233.137:4000/public/'
    }
  },
  projects: {
    // ${projectName}, project layers, Note for webpack optimze suggestion,
    // if we have some submodule in projecet (multi) page, we need to attach submodule
    // into this project as multi entry points.
    docs: {
      // the project meta config
      _metaInfo: {
        version: '?20151001'
      },
      home: {
        match: /^\/(docs\/|docs)?$/,
        // entry point, must be string.
        entry: './docs/app/home/index.js',
        routes: './docs/app/home/routes.js',
        jsBundles: ['browser-polyfill.js', 'docs/reactlib.js${version}', 'docs/home/bundle.js${version}'],
        cssBundles: ['http://172.16.233.137:2000/shared/less/public/common.css','docs/home/bundle.css${version}']
      },
      // ${subModule}, it contains multi module in business domain.
      react: {
        // server rendering url matching.
        match: /^\/docs\/react(\/)?/,
        // entry point, must be string.
        entry: './docs/app/react/index.js',
        routes: './docs/app/react/routes.js',
        jsBundles: ['browser-polyfill.js', 'docs/reactlib.js${version}', 'docs/react/bundle.js${version}'],
        cssBundles: ['http://172.16.233.137:2000/shared/less/public/common.css','docs/react/bundle.css${version}']
      },
      mobile: {
        // server rendering url matching.
        match: /^\/docs\/mobile(\/)?/,
        // entry point, must be string.
        entry: './docs/app/mobile/index.js',
        routes: './docs/app/mobile/routes.js',
        jsBundles: ['browser-polyfill.js', 'docs/reactlib.js${version}', 'docs/mobile/bundle.js${version}'],
        cssBundles: ['http://172.16.233.137:2000/shared/less/public/common.css','docs/mobile/bundle.css${version}']
      },
      less: {
        // server rendering url matching.
        match: /^\/docs\/less(\/)?/,
        // entry point, must be string.
        entry: './docs/app/less/index.js',
        routes: './docs/app/less/routes.js',
        jsBundles: ['browser-polyfill.js', 'docs/reactlib.js${version}', 'docs/less/bundle.js${version}'],
        cssBundles: ['http://172.16.233.137:2000/shared/less/public/common.css','docs/less/bundle.css${version}']
      }
    }
  }
};
