Feature: DynaMed login

  Scenario: Main page
    Given DynaMed's main page is opened
    Then I see that DynaMed logo is displayed
    And I verify that login button is displayed

  Scenario Outline: Login
    Given DynaMed's main page is opened
    When I log in as user "<user>" with "<password>"
    Then I verify that displayed username is "<userName>"
    And Sign out button is displayed

    Examples:
    | user                  | password      | userName                    |
    | DHEAdminForAutomation | GhostRiders1$ | Automation Testing Customer |