var port = process.env.PORT || 3000;

module.exports = {
    entry: './main.js',
    output: {
        path: './',
        filename: "index.js",
        publicPath: '/'
    },
    devServer: {
        inline: true,
        port: port
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};