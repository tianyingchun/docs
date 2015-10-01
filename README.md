docs
==========
The docs used to show the guideline of react components, less css components
``` 
│
├── `buildtool` (the alias name of `webpack-buildtool`)
├──  docs 
│    ├── app
│    │   ├── sub_project1 (sub_module1) The app entry point (index.js, routes.js)
│    │   ├── sub_project2 (sub_module2) The app entry point.
│    │   ├── sub_project3 (sub_module3) The app entry point.
│    │   └── ...
│    │
│    ├── actions
│    ├── constants
│    ├── reducers
│    ├── services
│    ├── stylesheets
│    ├── componentes
│    └── views
│
├── shared/
│    ├── less # the less components 
│    └── react # the react componnets
├── utils/
├── build.config.js (required by buildtool) copy and rename `complex.build.config.js` to `build.config.js`
├── gruntfile.js
├── isomorphic.js
└── server.js
```
