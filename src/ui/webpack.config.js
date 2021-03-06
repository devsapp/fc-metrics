const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // 入口文件的路径
  entry: './src/index.tsx',
  output: {
    // 打包的输出路径
    path: path.resolve(__dirname, 'dist/static'),
    filename: 'bundle.js',
  },
  // 添加需要解析的文件格式
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  plugins: [
    new CleanWebpackPlugin(['dist/static']),
    new HtmlWebpackPlugin({
      title: '监控',
      template: './index.html',
    }),
  ],
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {},
      }],
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    },
    {
      test: /\.tsx?$/,
      use: ['ts-loader'],
      exclude: /node_modules/,
    },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist/static'),
    inline: true,
    port: 8081,
  },
  // 启用sourceMap
  devtool: 'source-map',
};
