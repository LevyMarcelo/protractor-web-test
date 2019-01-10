const Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");
const SpecReporter = require("jasmine-spec-reporter").SpecReporter;

module.exports = (providedConfig) => {
    const defaultConfig = {
        baseUrl: "https://www.google.com/",
        specs: ["specs/*.spec.js"],
        directConnect: true,
        onPrepare: () => {
            browser.ignoreSynchronization = true;
            jasmine.getEnv().addReporter(new SpecReporter({
                displayFailuresSummary: true,
                displayFailedSpec: true,
                displaySuiteNumber: true,
                displaySpecDuration: true,
            }));
            jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
                savePath: "html-report",
                fileName: "report",
                fixedScreenshotName: true,
                cleanDestination: true,
                consolidate: true,
                takeScreenshotsOnlyOnFailures: true,
            }));
            afterEach(() => {
                browser.manage().deleteAllCookies();
                return browser.executeScript("sessionStorage.clear(); localStorage.clear();");
            });
        },
    };

    return Object.assign(
        {},
        defaultConfig,
        providedConfig
    );
};
