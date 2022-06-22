/// <reference types="cypress"/>



    describe ('Second test suite', () => {
        it('Add to cart', () => {
            cy.openHomePage()
            cy.get('a[href="https://catalog.onliner.by"]').contains('Каталог').click('topLeft', {force: true})
            cy.contains ('span', 'Электроника').click()
            cy.contains ('.catalog-navigation-list__aside-title',' Мобильные телефоны и аксессуары ').click()
            cy.get('.catalog-navigation-list__dropdown-list').then( catalogNavigation => {
                cy.wrap(catalogNavigation).find('[href="https://catalog.onliner.by/mobile"]').click()
            })
            cy.get('.schema-product__group')
                .find('.js-product-title-link').first().click()
            cy.get('.offers-description__price_secondary').then(firstPrice => {
               cy.wrap(firstPrice).invoke('text')
                })
                .as('MarketPrice')                
            cy.contains('В корзину').click()
            cy.contains ('Перейти в корзину').click()
            cy.get('.cart-form__description_condensed-another').find( 'span').then( secondPrice => {
               cy.wrap(secondPrice).invoke('text')
                 })
                    .as('PriceInCart') 
            cy.get('@PriceInCart').should('have.value', '@PriceInMarket')
                
                             
        })


    })