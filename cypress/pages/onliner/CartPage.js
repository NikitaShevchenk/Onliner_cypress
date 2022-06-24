export class cartPage {
    elements = {
        deleteButton: () => cy.get('.cart-form__button_remove'),
        closeButton: () => cy.contains('.cart-form__link', 'Закрыть'),
        prodAmount: () => cy.get('.cart-form__offers-part_total'),
        incrementButton: () => cy.get('.cart-form__button_increment'),
        decrementButton: () => cy.get('.cart-form__button_decrement')
    }

    deleteProductFromCart(){
        this.elements.deleteButton().click({force: true})

    }

    backToCart(){
        this.elements.closeButton().click()
    }
    
    getEmptyCart(){
       return cy.get(".cart-message__title") 
    }
    
    getProductQuantity(){
        this.elements.prodAmount().find('.cart-form__description_condensed-other').invoke('text').as('initialQuantity')
    }

    getPlusQuantity(){
        this.elements.prodAmount().find('.cart-form__description_condensed-other').invoke('text').as('plusQuantity')
    }

    clickPlusQuantity(){
        this.elements.incrementButton().click().wait(2000)
    }

    clickMinusQuantity(){
        this.elements.decrementButton().click().wait(2000)
    }

    getMinusQuantity(){
        this.elements.prodAmount().find('.cart-form__description_condensed-other').invoke('text').as('minusQuantity')
    }
}

export const cartManagement = new cartPage();