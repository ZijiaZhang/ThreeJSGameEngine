module.exports = function(config) {
    config.set({
        frameworks: ['mocha', 'karma-typescript'],
        files: [{pattern: 'test/**/*.ts'},
            {pattern: 'src/**/!(StartGame).ts'}],
        reporters: ['dots',"karma-typescript"],
        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },
        port: 9876,  // karma web server port
        colors: true,
        browsers: ['ChromeHeadless'],
        autoWatch: false,
        // singleRun: false, // Karma captures browsers, runs the tests and exits
        concurrency: Infinity,
        karmaTypescriptConfig: {
            coverageOptions: {
                threshold: {
                    global: {
                        statements: 100,
                        branches: 100,
                        functions: 100,
                        lines: 100,
                        excludes: [
                            "src/modules/examples/**/*.js"
                        ]
                    }
                }
            },
            reports: {
                json: {
                    directory: "coverage",
                    filename: "coverage.json"
                },
                html: "coverage"
            },
            compilerOptions: {
                module: "commonjs"
            },
            tsconfig: "./tsconfig.json"
        },
    })
};