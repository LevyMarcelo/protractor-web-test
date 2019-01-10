module.exports.config = require("./protractorConfig.js")({
    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            args: [
                "--headless",
                "--disable-gpu",
                "--window-size=1280,1024"
            ]
        }
    }
});
