const assert = require('assert-plus')

context('Actions', () => {
    before(() => {
        cy.visit('https://qa-sandbox.apps.htec.rs/intro')
    })

    it('Locate elements on login page', () => {
        cy.get('b').then(res => {
            assert.strictEqual(res[0].innerText, "QA Sandbox")
        })
        let niz = []
        cy.get('#mobile-nav li').then(res => {
            for (let i = 0; i < res.length; i++) {
                niz.push(res[i].innerText)
            }
            console.log(niz)
        })
    })
    it('Login with correct username and password', () => {
        cy.get('a').contains('Login').click()
        cy.get('[name="email"]').type("vukan.vujanovic@gmail.com")
        cy.get('[name="password"]').type("vujanovic12345")
        cy.get('[type="submit"]').click()
        cy.url().should('contains', "dashboard")
        cy.get('a').contains('Logout').click()
    })

    it('Login with wrong username and correct password', () => {
        cy.get('a').contains('Login').click()
        cy.get('[name="email"]').type("vukan.vujanovic1@gmail.com")
        cy.get('[name="password"]').type("vujanovic12345")
        cy.get('[type="submit"]').click()

        cy.get('.invalid-feedback').then(res => {
            assert.strictEqual(res[0].innerText, "User not found")
            console.log(res[0].innerText)
        })
    })
    it('Login with correct username and wrong password', () => {
        cy.reload()
        cy.get('[name="email"]').type("vukan.vujanovic@gmail.com")
        cy.get('[name="password"]').type("vujanovic123456")
        cy.get('[type="submit"]').click()

        cy.get('.invalid-feedback').then(res => {
            assert.strictEqual(res[0].innerText, "Password incorrect")
            console.log(res[0].innerText)
        })
    })

})