
export class catalogPage {
    elements = {
    catalog: () => cy.get('a[href="https://catalog.onliner.by"]').contains('Каталог'),
    section: () => cy.contains('span','Электроника'),
    subSection: () => cy.contains('.catalog-navigation-list__aside-title',' Мобильные телефоны и аксессуары '),
    product: () =>cy.get('.catalog-navigation-list__dropdown-list')
    }


    navigateToCatalog(){
        this.elements.catalog().click('topLeft', {force: true})
    }
    navigateToSection(){
        this.elements.section().click()
    }
    navigateToSubsection(){
        this.elements.subSection().click()
    }
    navigateToProductList(){
        this.elements.product().find('[href="https://catalog.onliner.by/mobile"]').click()
    }
}


export const catalogNavigation  = new catalogPage();
