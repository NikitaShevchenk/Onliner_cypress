  export class homePage {

    elements = {
        loginInput: () => cy.get('[placeholder="Ник или e-mail"]'),
        passwordInput: () => cy.get ('[placeholder="Пароль"]'),
        logInButton: () => cy.get ('.auth-button_primary'),
        openLogin: () => cy.get('[id="userbar"]').contains('Вход')
    }

    typeUsername(username){
        this.elements.loginInput().type(username) // refeference to elementse up on this string

    }

    typePassword(password){
        this.elements.passwordInput().type(password) // refeference to elementse up on this string

    }

    clickOpenLogIn(){
        this.elements.openLogin().click()
    }
    clickLogBttn(){
        this.elements.logInButton().click()
    }
    
  }

 export const navigateTo = new homePage()