module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
        '../bower_components/alertify.js/lib/alertify.js',
        '../node_modules/angular/angular.js',
        '../ng-alertify.js',
        '../node_modules/check-types/src/check-types.js',
        '../node_modules/check-more-types/check-more-types.js',
        '../node_modules/lazy-ass/index.js',
        '../node_modules/angular-mocks/angular-mocks.js',
        '../node_modules/lazy-ass-helpful/lazy-ass-helpful-browser.js',
        '../node_modules/lazy-ass-helpful/lazy-ass-helpful-bdd.js',
        '../node_modules/ng-describe/ng-describe.js',
        '../lib/sinon.js',
        './*-spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        '../ng-alertify.js': []
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['nested'],

    coverageReporter: {
        type : 'lcov',
        dir : 'coverage/'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    plugins: [
        'karma-nested-reporter',
        'karma-mocha',
        'karma-phantomjs-launcher'
    ]
  });
};
