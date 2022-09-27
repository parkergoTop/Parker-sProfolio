const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: "eval-source-map",

  devServer: {
    historyApiFallback: true},

    // tell webpack the name and location of our bundle file that will be generated whn we produce a production build
    //we pass the "output" obeject
    // Remember that webpack is a module bundler meanings it takes a group of file and budles them into a smaller groups of file
    // so in here we are gonna turning all our javascript file into one file called "bundle.js"
    
    module:{
        rules:[
            {
            test: /.js$/, 
            exclude:/node_modules/,
            use:{
                loader: 'babel-loader',
                options:{
                    presets:['@babel/preset-env', '@babel/preset-react']
                }
            }
            },
           {
             test: /\.(png|jpe?g|svg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                    name: '[path][name].[ext]',
                    esModule: false,
                  },
              } ],
              type: 'javascript/auto',
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },  
          {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        } 
        ],
    }
    
}




