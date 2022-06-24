export class productProfilePage{
    elements = {
        primoryOffer: () =>cy.get('.product-aside__offers-item_primary'),
        cartButton: () => cy.contains('В корзину'),
        navToCartButton: () => cy.contains(' Перейти в корзину')  
    }
    
    getPrimoryOfferPrice(){
        this.elements.primoryOffer().find('.js-short-price-link').invoke('text').as('MarketPrice')
        
    }

    putInCart(){
        this.elements.cartButton().click().wait(2000)

    }
    
    navigateToCart(){
        this.elements.navToCartButton().click()
    }
}

export const addToCart = new productProfilePage()