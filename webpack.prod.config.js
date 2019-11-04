module.exports = {
    entry: './src/x-toast.js',
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'index.min.js',
      library: 'XToast',
      sourceMapFilename: 'index.min.map',
      libraryTarget: 'umd'
    },
    devtool: 'source-map'
  };