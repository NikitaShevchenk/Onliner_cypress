import {catalogPage, catalogNavigation} from "../../pages/onliner/CatalogPage"
import { productList} from "../../pages/onliner/ProductListPage"
import { addToCart } from "../../pages/onliner/ProductProfile"



describe ('POM addToCart',() =>{
    beforeEach(() => {
        cy.openHomePage()
    })


    it.only('AddToCart', () =>{
        catalogNavigation.navigateToCatalog()
        catalogNavigation.navigateToSection()
        catalogNavigation.navigateToSubsection()
        catalogNavigation.navigateToProductList()
        productList.selectProduct()
        addToCart.getPrimoryOfferPrice()
        addToCart.putInCart()
        addToCart.navigateToCart()
        
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