// ex libs
var program = require("commander")

// app libs
var compiler = require("./lib/compiler");
,   

program
    .version("0.0.1")

program.parse(process.argv);

compiler.compile("index");