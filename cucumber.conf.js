const fs = require('fs');
const path = require('path');
const faker = require('faker');
const { setDefaultTimeout, After, Before, AfterAll, BeforeAll } = require('cucumber');
const { client, createSession, closeSession, startWebDriver, stopWebDriver } = require('nightwatch-api');
const reporter = require('cucumber-html-reporter');

const attachedScreenshots = getScreenshots();

function getScreenshots() {
    try {
        const folder = path.resolve(__dirname, 'screenshots');
        return fs.readdirSync(folder).map(file => path.resolve(folder, file));
    } catch (err) {
        return [];
    }
}

setDefaultTimeout(60000);

BeforeAll(async () => {
    await startWebDriver();
    await createSession();
});

Before(function () {
    client.resizeWindow(1920, 1080)
})

AfterAll(async () => {
    await closeSession();
    await stopWebDriver();
    setTimeout(() => {
        reporter.generate({
            theme: 'bootstrap',
            jsonFile: 'report/cucumber_report.json',
            output: 'report/cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                'App Version': '1.0.0',
                'Test Environment': 'DynaMed'
            }
        });
    }, 0);
});

After(function () {
    let shotPath = path.resolve(`./screenshots/${faker.random.uuid()}.png`);

    return new Promise((resolve) => {
        client
            .saveScreenshot(shotPath)
            .then((res) => {
                resolve(res)
                return this.attach(fs.readFileSync(shotPath), 'image/png');
            })
    })
});