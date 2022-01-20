const preprocessor = require('@cypress/browserify-preprocessor');
const pathmodify = require('pathmodify');

const browserifyOptions = preprocessor.defaultOptions.browserifyOptions;

browserifyOptions.paths = [
  // the process.cwd() depends on the cypress process being started from
  //  the project root. You can also use an absolute path here.
  require('path').resolve(process.cwd()),
];

// -----------------------------------------------------------------------------
// (2) regard paths starting with `/` as project-relative paths
// -----------------------------------------------------------------------------

browserifyOptions.plugin = browserifyOptions.plugin || [];
browserifyOptions.plugin.unshift([
  pathmodify,
  {
    mods: [
      // strip leading `/` when resolving paths
      pathmodify.mod.re(/^/, ''),
    ],
  },
]);

// -----------------------------------------------------------------------------
// (3) compile spec files when they're run
// -----------------------------------------------------------------------------

const compileFile = preprocessor(preprocessor.defaultOptions);

module.exports = (on) => {
  on('file:preprocessor', (file) => {
    return compileFile(file);
  });
};
