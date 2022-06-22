/// <reference types="cypress"/>



        beforeEach( () => {
            cy.openHomePage()
            cy.get('a[href="https://catalog.onliner.by"]').contains('Каталог').click('topLeft', {force: true})
            cy.contains ('span', 'Электроника').click()
            cy.contains ('.catalog-navigation-list__aside-title',' Мобильные телефоны и аксессуары ').click()
            cy.get('.catalog-navigation-list__dropdown-list').then( catalogNavigation => {
                cy.wrap(catalogNavigation).find('[href="https://catalog.onliner.by/mobile"]').click()
                cy.get('.schema-product__group').find('.js-product-title-link').first().click()
                cy.contains('В корзину').click()
                cy.contains ('Перейти в корзину').click()
           
               })
        })
       
        describe ('Cart management',() =>{
            it('Delete from cart', () =>{
                cy.get('.cart-form__button_remove').click({force: true})
                cy.contains ('.cart-form__link', 'Закрыть').click()
                cy.get ('.cart-message__title').should('have.text', '\n        Ваша корзина пуста\n      ')
            })

            it.only('productAmount', () => {
                cy.get('.cart-form__offers-part_total')
                    .find('.cart-form__description_condensed-other')
                    .should('have.text', '\n            1 товар на сумму:\n          899,00 р.')
                cy.get( '.cart-form__button_increment').click()
                cy.get('.cart-form__offers-part_total')
                    .find('.cart-form__description_condensed-other')
                    .should('have.text', '\n            2 товара на сумму:\n          1798,00 р.')
                cy.get('.cart-form__button_decrement').click()
                cy.get('.cart-form__offers-part_total')
                    .find('.cart-form__description_condensed-other')
                    .should('have.text', '\n            1 товар на сумму:\n          899,00 р.')
            })
                





        })