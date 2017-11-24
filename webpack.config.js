var path = require("path");

module.exports = {
    context: path.resolve("src/js"),
    entry: "./app",
    output: {
        path: path.resolve("build/"),
        publicPath: "/public/assets/",
        filename: "bundle.js"
    },
    watch: true,
    plugins: [],
    devServer: {
        contentBase: "src/public"
    },
    module: { },
    resolve: {
        extensions: [".js"]
    }
}