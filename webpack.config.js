const path = require('path');

module.exports = [{
    entry: './src/modules/StartGame.js',
    output: {
        path: path.resolve(__dirname, 'public/javascripts'),
        filename: 'main.js'
    }
},
    {
        entry: './test/ViewPortManager.spec.js',
        output: {
            path: path.resolve(__dirname, 'test/compiled'),
            filename: 'ViewPortManagerTest.js'
        }
    }];