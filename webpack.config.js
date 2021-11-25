const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = "development";
let target = "web";
if (process.env.NODE_ENV === "production") {
    mode = "production";
}

module.exports = {
    mode: mode,
    target: target,
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource"
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, { loader: "css-loader", options: { modules: true } }],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        hot: true,
    }
};