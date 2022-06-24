export class ProductListPage {
    elements = {
        productName: () =>  cy.get('.schema-product__group').find('.js-product-title-link')
        
    }

    selectProduct(){
        this.elements.productName().first().click().invoke('text').as('productName')
    // нужен ли тут invoke?
    }


}


export const productList = new ProductListPage ()
