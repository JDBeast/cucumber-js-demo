const chromedriver = require('chromedriver');

module.exports = {
    src_folders: ["steps"],
    page_objects_path: 'pages/',
    test_settings: {
        default: {
            screenshots: {
                enabled: true,
                path: 'screenshots'
            },
            launch_url: 'https://www.dynamed.com/',
            webdriver: {
                start_process: true,
                server_path: chromedriver.path,
                port: 9515
            },
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    }
};