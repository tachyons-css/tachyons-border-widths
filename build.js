// dependencies

var fs = require("fs")
var autoprefixer = require("autoprefixer")
var postcss = require("postcss")
var atImport = require("postcss-import")
var cssvariables = require('postcss-css-variables')
var compressor = require('node-minify')
var conditionals = require('postcss-conditionals')
var customMedia = require("postcss-custom-media")

// css to be processed
var css = fs.readFileSync("src/tachyons-border-widths.css", "utf8")

// process css
var output = postcss([autoprefixer])
  .use(atImport())
  .use(cssvariables())
  .use(conditionals())
  .use(customMedia())
  .process(css, {
    from: "src/tachyons-border-widths.css",
    to: "css/tachyons-border-widths.css"
  })
  .css

fs.writeFile("css/tachyons-border-widths.css", output, 'utf-8')

// Using YUI Compressor for CSS
new compressor.minify({
    type: 'sqwish',
    fileIn: 'css/tachyons-border-widths.css',
    fileOut: 'css/tachyons-border-widths.min.css',
    callback: function(err, min){
    //console.log('Sqwish');
    //console.log(err);
    }
});
