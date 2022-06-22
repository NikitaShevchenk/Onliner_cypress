/// <reference types="cypress"/>

const userLogin = "cypresstestsemail0003@gmail.com"
const userPassword = "123QWE321"

describe('First suite', () => {
    it ('Login', () => {
        cy.openHomePage() 

        cy.get('[id="userbar"]')
        cy.contains('Вход').click()
        cy.contains('div', 'Вход')
        cy.get('form').find('[placeholder="Ник или e-mail"]').type(userLogin)
        cy.get('form').find('[placeholder="Пароль"]').type(userPassword)
        cy.get('form').find('.auth-button').should('contain', 'Войти').click()
       // cy.get('iframe').wait(1000).find('.rc-anchor')
       cy.solveGoogleReCAPTCHA()
    })



})