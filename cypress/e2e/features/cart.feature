Feature: Cart

Scenario: Add items to cart and validate
Given I login
When access to product screen
Then Add items to cart
Then cart screen access
And I validate that the items have been add to the cart
Then remove items from cart 
And validated that the products were successfully removed from the cart
