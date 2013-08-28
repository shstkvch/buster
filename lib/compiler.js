var     fs      = require("fs")
,       swig    = require("swig");

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
            autoescape: false
        })
        swig.renderFile(
            TEMPLATE_DIRECTORY + template + '.html', vars, function(err, rendered) {
                console.log(err || rendered)
        });

    }
}

