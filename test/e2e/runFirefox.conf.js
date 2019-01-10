module.exports.config = require("./protractorConfig.js")({
    capabilities: {
        browserName: "firefox",
        "marionette": true,
        //"moz:firefoxOptions": {
            //"args": ["--headless"]
        //} 
    }
});
