import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import color from '../page/color.page'

Given('acesso o ambiente de compra', () => {
 color.acessandoambiente()
})
When('visualizo os botões add to card', () => {
color.nomebtn()
})

Then('eles devem estar na cor vermelha', () => {
color.color()
})