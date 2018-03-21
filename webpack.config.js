const path = require("path");
const fs = require("fs");
const webpack = require("webpack");

const entry = fs.readdirSync("./src").reduce((obj, name) => {
  obj[name.replace(".js", "")] = `./src/${name}`;
  return obj;
}, {});

module.exports = {
  mode: "production",
  entry,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),
  }
};
