var     fs          = require("fs")
,       swig        = require("swig")
,       mini        = require("html-minifier").minify
,       beautify    = require("js-beautify").html_beautify

const TEMPLATE_DIRECTORY = "templates/";

module.exports = {
    compile: function(template) {
        var vars = {
            page: {
                title: "My Index Page"
            },
            posts: [
                {
                    title: "My Post",
                    content: "<p>This is my content.</p><p>I have formatted it using P tags</p>"
                },
                {
                    title: "My Second Post",
                    content: "<p>This is my second post. It's a bit shitter.</p>"
                }
            ]
        }

        // set our options
        swig.setDefaults({
            autoescape: false,
            cache: false
        })
        swig.renderFile(
            TEMPLATE_DIRECTORY + template + '.html', vars, function(err, rendered) {
                if (err) {
                    return false
                }
                var debug = true;

                if(debug == true) {
                    // minify the output
                    var minification_options = {
                        collapseWhitespace: true
                    }
                    var rendered = mini(rendered, minification_options);

                    // pretty print it
                
                    var rendered = beautify(rendered, { indent_inner_html: true });
                }
                console.log(rendered);
        });

    }
}

