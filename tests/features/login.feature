Feature: Login Test

Scenario Outline: Login with multiple users

Given user opens login page
When user enters "<username>" and "<password>"
Then user should see dashboard

Examples:

| username | password |
| standard_user | secret_sauce |
| problem_user | secret_sauce |