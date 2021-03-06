var path = require("path");
var webpack = require("webpack");

// plugin
var DefineWebpackPlugin = webpack.DefinePlugin;
var nodeExternals = require("webpack-node-externals");

module.exports = {
    target : "node",
    externals : [nodeExternals()],
    resolve : {
        alias : {
            proj4 : path.resolve("..", "node_modules", "proj4", "dist", "proj4.js"),
            gp : path.resolve("..", "node_modules", "geoportal-access-lib", "dist", "GpServices-src.js"),
            sortable : path.resolve("..", "node_modules", "sortablejs", "Sortable.js")
        }
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : "babel-loader"
            }
        ]
    },
    plugins : [
        // on ne veut pas de logger !
        new DefineWebpackPlugin({
            __PRODUCTION__ : JSON.stringify(true)
        })
    ]
};
