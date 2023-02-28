Feature: Products

Scenario: Add items to cart and validate
Given I login 
When access to product screen
Then Add items to cart
Then cart screen access
Then I validate that the items have been added to the cart


Scenario: Create error
Given logging in
When access to products screen
Then cart screen access
And validate the title "Your cart" on the screen

