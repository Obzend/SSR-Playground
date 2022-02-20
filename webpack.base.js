module.exports = {
  // Tell webpack to run babel on every file in runs through
  module: {
    rules: [
      {
        test: /\.js?$/, // only .js files
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
           // rules for transpaling 
          presets: [
            'react', // jsx to js
            'stage-0', // handles async
            [
              'env', { 
                targets: { // runs all transform rules needed for the last 2 versions of the browsers
                  browsers: ['last 2 versions']
                }
              }
            ] 
          ]
        }
      }
    ]
  }
}