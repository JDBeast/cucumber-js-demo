const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

let mainPage = client.page.mainPage();

Given(/^DynaMed's main page is opened$/, function () {
    return mainPage.navigateToMainPage();
});

Then(/^I see that DynaMed logo is displayed$/, function () {
    return mainPage.logoIsDisplayed();
});

Then(/^I verify that login button is displayed$/, function () {
    return mainPage.loginButtonIsDisplayed();
});

When(/^I log in as user "([^"]*)" with "([^"]*)"$/, function (user, pass) {
    return mainPage.login(user, pass);
});

Then(/^I verify that displayed username is "([^"]*)"$/, function (userName) {
    return mainPage.verifyUserName(userName);
});

Then(/^Sign out button is displayed$/, function () {
    return mainPage.signOutButtonIsDisplayed();
});