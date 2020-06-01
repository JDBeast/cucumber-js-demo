var mainPageActions = {
    navigateToMainPage: function () {
        return this
            .navigate()
            .waitForElementVisible('body', 1000)
    },
    logoIsDisplayed: function () {
        return this
            .waitForElementVisible('@logo', 10000)
            .assert.attributeContains('@logo', 'alt', 'DynaMed')
    },
    loginButtonIsDisplayed: function () {
        return this.waitForElementVisible('@loginButton', 10000)
    },
    login: function (user, pass) {
        return this
            .click('@loginButton')
            .waitForElementVisible('@signInLink',10000)
            .click('@signInLink')
            .setValue('@emailInput', user)
            .setValue('@passInput', pass)
            .click('@signInButton')
    },
    verifyUserName: function (userName) {
        return this
            .waitForElementVisible('@loginButton', 10000)
            .click('@loginButton')
            .assert.containsText('@userName', userName)
    },
    signOutButtonIsDisplayed: function () {
        return this
            .waitForElementVisible('@signOutButton', 10000)
    }
}

module.exports = {
    url: '/',
    commands: [mainPageActions],
    elements: {
        logo: 'img.AppBar_logo',
        loginButton: 'button.UserDetailTrigger svg',
        signInLink: 'div.RCL_UserLayer a.RCL_Anchor',
        emailInput: '#username',
        passInput: '#password',
        signInButton: '#btn-login',
        userName: 'div.RCL_UserHeader_info',
        signOutButton: 'a.RCL_UserFooter_anchorUppercase'
    }
}