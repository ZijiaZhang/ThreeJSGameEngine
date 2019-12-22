const path = require('path');


module.exports = [{
    entry: './src/modules/StartGame.js',
    output: {
        path: path.resolve(__dirname, 'public/javascripts'),
        filename: 'main.js'
    }
}];
module.rules = [
        {
            test: /\.worker\.js$/,
            use: {
                loader: 'worker-loader',
                options: { inline: true, fallback: false }
            }
        }
    ];
