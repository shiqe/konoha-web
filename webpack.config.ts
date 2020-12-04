import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack, { Configuration } from "webpack";

const webpackConfig = (env: any): Configuration => ({
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "/dist"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    devServer: {
        contentBase: path.resolve(__dirname, "out"),
        compress: true,
        hot: true,
        port: 3000,
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                        },
                    },
                    {
                        loader: "babel-loader",
                        options: {
                            babelrc: true,
                        },
                    },
                ],
                exclude: [/dist/, /node_modules/],
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.(sass|scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: "file-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./public/index.html" }),

        new webpack.DefinePlugin({
            "process.env.PRODUCTION": env.production || !env.development,
            "process.env.NAME": JSON.stringify(require("./package.json").name),
            "process.env.VERSION": JSON.stringify(
                require("./package.json").version
            ),
        }),
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: "./src/**/*.{ts,tsx,js,jsx}",
            },
        }),
    ],
});

export default webpackConfig;
