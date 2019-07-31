module.exports = {
  entry: `${__dirname}/client/src/index.jsx`,
  output: {
    path: `${__dirname}/client/dist`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [ /node_modules/, /spec/ ],
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};