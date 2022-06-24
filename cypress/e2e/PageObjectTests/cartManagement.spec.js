
import { cartManagement } from "../../pages/onliner/CartPage"
import {catalogPage, catalogNavigation} from "../../pages/onliner/CatalogPage"
import { productList} from "../../pages/onliner/ProductListPage"
import { addToCart } from "../../pages/onliner/ProductProfile"



describe ('POM addToCart',() =>{
    beforeEach(() => {
        cy.openHomePage()
        catalogNavigation.navigateToCatalog()
        catalogNavigation.navigateToSection()
        catalogNavigation.navigateToSubsection()
        catalogNavigation.navigateToProductList()
        productList.selectProduct()
        addToCart.getPrimoryOfferPrice()
        addToCart.putInCart()
        addToCart.navigateToCart()
        
    })


    it('Delete from cart', () =>{
      
        cartManagement.deleteProductFromCart()
        cartManagement.backToCart()
        cartManagement.getEmptyCart().should('have.text','\n        Ваша корзина пуста\n      ')
       
    }) 

    it.only('quantityChange', () => {
        cartManagement.getProductQuantity()
        cartManagement.clickPlusQuantity()
        cartManagement.getPlusQuantity()
        cartManagement.clickMinusQuantity()
        cartManagement.getMinusQuantity()
        cy.get('@initialQuantity').then((initialQuantity) => {
            cy.get('@plusQuantity').then((plusQuantity) => {
                expect(plusQuantity.trim()).to.not.eq(initialQuantity.trim())
                    })
                })
    
        cy.get('@initialQuantity').then((initialQuantity) => {
                cy.get('@minusQuantity').then((minusQuantity) => {
                    expect(minusQuantity.trim()).to.eq(initialQuantity.trim())
                    })
                })    
        

    })

})