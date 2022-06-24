/// <reference types="cypress"/>

import { homePage, navigateTo } from "../../pages/onliner/HomePage"

const userLogin = "cypresstestsemail0003@gmail.com"
const userPassword = "123QWE321"



describe ('POM check', () =>{

    beforeEach(() =>{
        cy.openHomePage()
    
    })

    it ('Login',() =>{
       navigateTo.clickOpenLogIn()
     
       navigateTo.typeUsername(userLogin)
       navigateTo.typePassword(userPassword)
       navigateTo.clickLogBttn()
    })


})