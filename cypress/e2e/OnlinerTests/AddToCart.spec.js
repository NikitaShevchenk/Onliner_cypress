/// <reference types="cypress"/>



    describe ('Second test suite', () => {
        it('Add to cart', () => {
            cy.openHomePage()
            cy.get('a[href="https://catalog.onliner.by"]')
                .contains('Каталог')
                .click('topLeft', {force: true})

            cy.contains ('span', 'Электроника')
                .click()
            cy.contains ('.catalog-navigation-list__aside-title',' Мобильные телефоны и аксессуары ')
                .click()
            cy.get('.catalog-navigation-list__dropdown-list').then( catalogNavigation => {
                cy.wrap(catalogNavigation)
                .find('[href="https://catalog.onliner.by/mobile"]').click()
            })

            cy.get('.schema-product__group')
                .find('.js-product-title-link').first()
                .click()
                .invoke('text')
                .as('productName')       

            cy.get('.product-aside__offers-item_primary')
                .find('.js-short-price-link')
                .invoke('text')
                .as('MarketPrice')
            
          
            cy.contains('В корзину').click()

            cy.contains ('Перейти в корзину').click()

            cy.get('.cart-form__offers-part_total')
                .find( 'span')
                .invoke('text')
                .as('CartPrice')

            cy.get('.cart-form__offers-part_data')
                .find('a')
                .invoke('text')
                .as('productNameInCart')
            
                cy.get('@productNameInCart').then((productNameInCart) => {
                    cy.get('@productName').then((productName) => {
                        expect(productName.trim()).to.eq(productNameInCart.trim())
                    })
                })

            cy.get('@MarketPrice').then((MarketPrice) => {
                cy.get('@CartPrice').then((CartPrice) => {
                    expect(CartPrice.trim()).to.eq(MarketPrice.trim())
                })
            })
           
                             
        })


    })