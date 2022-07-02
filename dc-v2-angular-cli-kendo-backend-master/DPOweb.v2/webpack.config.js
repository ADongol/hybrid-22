 
////const path = require('path');
////const webpack = require('webpack');
////const typescript = require('typescript');
////const { AotPlugin } = require('@ngtools/webpack');

////const rules = [
////    { test: /\.html$/, loader: 'html-loader' },
////    { test: /\.scss$/, loaders: ['raw-loader', 'sass-loader'] },
////    { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader' }
////];

////const plugins = [
////    new webpack.DefinePlugin({
////        'process.env': {
////            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
////        }
////    }),
////    new webpack.optimize.CommonsChunkPlugin({
////        name: 'vendor',
////        minChunks: (module) => module.context && /node_modules/.test(module.context)
////    })
////];

////if (process.env.NODE_ENV === 'production') {
////    rules.push({
////        test: /\.ts$/, loaders: ['@ngtools/webpack']
////    });
////    plugins.push(
////        new AotPlugin({
////            tsConfigPath: './tsconfig.json',
////            entryModule: './src/app/app.module#AppModule'
////        }),
////        new webpack.LoaderOptionsPlugin({
////            minimize: true,
////            debug: false
////        }),
////        new webpack.optimize.UglifyJsPlugin({
////            sourceMap: true,
////            beautify: false,
////            mangle: {
////                screw_ie8: true
////            },
////            compress: {
////                unused: true,
////                dead_code: true,
////                drop_debugger: true,
////                conditionals: true,
////                evaluate: true,
////                drop_console: true,
////                sequences: true,
////                booleans: true,
////                screw_ie8: true,
////                warnings: false
////            },
////            comments: false
////        })
////    );
////} else {
////    rules.push({
////        test: /\.ts$/,
////        loaders: [
////            'awesome-typescript-loader', 'angular-router-loader', 'angular2-template-loader'
////        ]
////    });
////    plugins.push(
////        new webpack.NamedModulesPlugin(),
////        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, path.resolve(__dirname, './notfound'))
////    );
////}

////module.exports = {
////    cache: true,
////    context: __dirname,
////    devServer: {
////        contentBase: __dirname,
////        historyApiFallback: true,
////        stats: {
////            chunks: false,
////            chunkModules: false,
////            chunkOrigins: false,
////            errors: true,
////            errorDetails: false,
////            hash: false,
////            timings: false,
////            modules: false,
////            warnings: false
////        },
////        publicPath: '/build/',
////        port: 3000
////    },
////    devtool: 'sourcemap',
////    entry: {
////        app: ['zone.js/dist/zone', './src/main.ts']
////    },
////    output: {
////        filename: './dist/[name].js',
////        chunkFilename: './dist/[name]-chunk.js',
////        publicPath: './dist',
////        path: path.resolve(__dirname, 'dist')
////    },
////    node: {
////        console: false,
////        global: true,
////        process: true,
////        Buffer: false,
////        setImmediate: false
////    },
////    module: {
////        rules
////    },
////    resolve: {
////        extensions: ['.ts', '.js'],
////        modules: [
////            './src',
////            './node_modules'
////        ]
////    },
////    plugins
////};
 







//const path              = require('path');
//const webpack           = require('webpack');
//const htmlPlugin        = require('html-webpack-plugin');
//const openBrowserPlugin = require('open-browser-webpack-plugin'); 
//const dashboardPlugin   = require('webpack-dashboard/plugin');
//const autoprefixer      = require('autoprefixer'); 

//const PATHS = {
//  app: path.join(__dirname, './src'),
//  images:path.join(__dirname,'./src/assets/'),
//  build: path.join(__dirname, 'dist')
//};

//const options = {
//  host:'localhost',
//  port:'62801'
//};

//module.exports = {
//    entry: './src/main',

//    output: {
//        path: path.join(__dirname, 'dist')
//    },
//  //output: {
//  //  path: PATHS.build,
//  //  filename: 'bundle.[hash].js'
//  //  },
//    //output: {
//    //    filename: './dist/[name].js',
//    //    chunkFilename: './dist/[name]-chunk.js',
//    //    publicPath: '/build/',
//    //    path: path.resolve(__dirname, 'build')
//    //},
//  devServer: {
//      historyApiFallback: true,
//      hot: true,
//      inline: true,
//      stats: 'errors-only',
//      host: options.host,
//      port: options.port 
//    },
//    module: {
       
//        loaders: [
//          {
//            test: /\.js$/,
//            exclude: /(node_modules|bower_components)/,
//            loader: 'babel',
//            query: {
//              cacheDirectory: true,
//              presets: ['es2015']
//            }
//          },
//          {
//            test: /\.css$/,
//            loaders: ['style', 'css', 'postcss'],
//            include:PATHS.app
//          },
//            {
//                test: /\.ts$/,
//                loaders: [
//                    'awesome-typescript-loader',
//                    'angular-router-loader',
//                    'angular2-template-loader'
//                ]
//            },
//          {
//            test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,        
//            loader: 'file',
//            query: {
//              name: '[path][name].[ext]'
//            }
//          },      
//    ]
//  },
//  postcss: function() {
//    return [
//      autoprefixer({
//        browsers: [
//          '>1%',
//          'last 4 versions',
//          'Firefox ESR',
//          'not ie < 9',
//        ]
//      }),
//    ];
//  },
//  plugins:[
//    new dashboardPlugin(),
//    new webpack.HotModuleReplacementPlugin({
//        multiStep: true
//    }),
//    new htmlPlugin({
//      template:path.join(PATHS.app,'index.html'),
//      inject:'body'
//    }),
//    new openBrowserPlugin({
//      url: `http://${options.host}:${options.port}`
//    })
//  ]
//};