module.exports = {
  entry: "./game.js",
  output: {
    path: __dirname,
    filename: "public/bundle.js"
  },
  module: {
    loaders: []
  }
}
