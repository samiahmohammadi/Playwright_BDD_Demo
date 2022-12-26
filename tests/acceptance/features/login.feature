Feature: login tests

Scenario: Login with valid credentials
    Given a registered user wants to login using the "login" link
    When the user enters "samiahmohammadi13@gmail.com" in field with id "email"
    And the user enters "Test123$" in field with id "password"
    And the user click submit button
    Then the user should be redirected to the "/" URL
