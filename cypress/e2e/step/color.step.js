import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import color from '../page/color.page'

Given('access to the shopping environment', () => {
 color.acessandoambiente()
})
When('I visualize the add to card buttons', () => {
color.nomebtn()
})

Then('they must be in red color', () => {
color.color()
})