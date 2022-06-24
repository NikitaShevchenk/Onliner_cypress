/// <reference types="cypress"/>



        beforeEach( () => {
            cy.openHomePage()
            cy.get('a[href="https://catalog.onliner.by"]').contains('Каталог').click('topLeft', {force: true})
            cy.contains ('span', 'Электроника').click()
            cy.contains ('.catalog-navigation-list__aside-title',' Мобильные телефоны и аксессуары ').click()
            cy.get('.catalog-navigation-list__dropdown-list').then( catalogNavigation => {
                cy.wrap(catalogNavigation).find('[href="https://catalog.onliner.by/mobile"]').click()
                cy.get('.schema-product__group').find('.js-product-title-link').first().click()
                cy.contains('В корзину').click().wait(2000)
                cy.contains ('Перейти в корзину').click()
           
               })
        })
       
        describe ('Cart management',() =>{
            it('Delete from cart', () =>{
                cy.get('.cart-form__button_remove')
                .click({force: true})

                cy.contains ('.cart-form__link', 'Закрыть')
                    .click()

                cy.get ('.cart-message__title')
                .should('have.text', '\n        Ваша корзина пуста\n      ')
            })

            it('productAmount', () => {
                cy.get('.cart-form__offers-part_total')
                    .find('.cart-form__description_condensed-other')
                    .invoke('text')
                    .as('initialQuantity')
                    
                cy.get( '.cart-form__button_increment')
                     .click().wait(2000)

                cy.get('.cart-form__offers-part_total')
                     .find('.cart-form__description_condensed-other')
                     .invoke('text')
                     .as('plusQuantity')
                    
                cy.get('@initialQuantity').then((initialQuantity) => {
                cy.get('@plusQuantity').then((plusQuantity) => {
                    expect(plusQuantity.trim()).to.not.eq(initialQuantity.trim())
                        })
                    })
              
                cy.get('.cart-form__button_decrement').click().wait(2000)

              
                cy.get('.cart-form__offers-part_total')
                    .find('.cart-form__description_condensed-other')
                    .invoke('text')
                    .as('minusQuantity')

               cy.get('@initialQuantity').then((initialQuantity) => {
                    cy.get('@minusQuantity').then((minusQuantity) => {
                        expect(minusQuantity.trim()).to.eq(initialQuantity.trim())
                        })
                    })
            })
                





        })