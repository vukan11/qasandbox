/// <reference types="cypress" />
const assert = require('assert-plus')

context('Actions', () => {
    before(() => {
        cy.visit('https://qa-sandbox.apps.htec.rs/intro')
        cy.get('a').contains('Login').click()
        cy.get('[name="email"]').type("vukan.vujanovic@gmail.com")
        cy.get('[name="password"]').type("vujanovic12345")
        cy.get('[type="submit"]').click()
        cy.url().should('contains', "dashboard")
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
    it('Create Use case', () => {
        cy.get('h5').contains('Playground').click()
        cy.get('span').contains(' CREATE PROJECT').click()
        cy.get('[name="project_title"]').type(' Test Project 1')
        cy.get('.fa-arrow-left').click()
        cy.get('div').contains('TEAMS').click()
        cy.get('span').contains(' CREATE TEAM').click()
        cy.get('[name="role_name"]').type('Team One')
        cy.get('button').contains('Submit').click({ force: true })
        cy.get('.fa-arrow-left').click()
        // cy.get('span').contains('ADD STEP').click()
        // cy.get('[name="testStepId-2"]').type('Test step Test case 3')
        // cy.get('span').contains('ADD STEP').click()
        // cy.get('[name="testStepId-3"]').type('Test step Test case 4')

    })

})
