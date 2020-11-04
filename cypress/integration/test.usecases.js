const assert = require('assert-plus')
let funkcije = require('../../utils.js')

describe('Test cases for Use Case', () => {
    // before(() => {
    // cy.visit('https://qa-sandbox.apps.htec.rs/')
    // cy.get('a').contains('Login').click()
    // cy.get('[name="email"]').type("vukan.vujanovic@gmail.com")
    // cy.get('[name="password"]').type("vujanovic12345")
    // cy.get('[type="submit"]').click()
    // cy.url().should('contains', "dashboard")
    // })
    // beforeEach(() => {
    // cy.restoreLocalStorage();
    // });

    // afterEach(() => {
    // cy.saveLocalStorage();
    // });

    before(() => {
        cy.loginas("vukan.vujanovic@gmail.com", "vujanovic12345");
        cy.saveLocalStorage();
    });

    beforeEach(() => {
        cy.restoreLocalStorage();
    });
    afterEach(() => {
        cy.saveLocalStorage();
    });


    after('Log out', () => {
        console.log("Logging out...")
    })
    it('Locate elements on login page', () => {
        cy.visit("https://qa-sandbox.apps.htec.rs/dashboard");
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

    it('Create Use case 1', () => {
        cy.get('h5').contains('Use Cases').click()
        cy.get('a').contains('CREATE USE CASE').click()
        cy.get('[name="title"]').type('Test case Test case 1')
        cy.get('[name="description"]').type('This is Description for Use Case 1')
        cy.get('[name="expected_result"]').type('This is expected result')
        cy.get('[name="testStepId-0"]').type('Test step Test case 1')
        cy.get('span').contains('ADD STEP').click()
        cy.get('[name="testStepId-1"]').type('Test step Test case 2')
        cy.get('span').contains('ADD STEP').click()
        cy.get('[name="testStepId-2"]').type('Test step Test case 3')
        cy.get('span').contains('ADD STEP').click()
        cy.get('[name="testStepId-3"]').type('Test step Test case 4')
        cy.get('[for="switch"]').click()
        cy.get('[type="submit"]').click()
    })
    it('Create Use case 2', () => {
        cy.wait(1000)
        cy.get('a').contains('CREATE USE CASE').click()
        cy.get('[name="title"]').type('Test case Test case 2')
        cy.get('[name="description"]').type('This is Description for Use Case 2')
        cy.get('[name="expected_result"]').type('This is expected result')
        cy.get('[name="testStepId-0"]').type('Test step Test case 1')
        cy.get('span').contains('ADD STEP').click()
        cy.get('[name="testStepId-1"]').type('Test step Test case 2')
        cy.get('span').contains('ADD STEP').click()
        cy.get('[name="testStepId-2"]').type('Test step Test case 3')
        cy.get('span').contains('ADD STEP').click()
        cy.get('[name="testStepId-3"]').type('Test step Test case 4')
        cy.get('[for="switch"]').click()
        cy.get('[type="submit"]').click()
    })
    it('Create Use case 3', () => {
        cy.wait(1000)
        cy.get('a').contains('CREATE USE CASE').click()
        cy.get('[name="title"]').type('Test case Test case 3')
        cy.get('[name="description"]').type('This is Description for Use Case 3')
        cy.get('[name="expected_result"]').type('This is expected result')
        cy.get('[name="testStepId-0"]').type('Test step Test case 1')
        cy.get('span').contains('ADD STEP').click()
        cy.get('[name="testStepId-1"]').type('Test step Test case 2')
        cy.get('span').contains('ADD STEP').click()
        cy.get('[name="testStepId-2"]').type('Test step Test case 3')
        cy.get('span').contains('ADD STEP').click()
        cy.get('[name="testStepId-3"]').type('Test step Test case 4')
        cy.get('[for="switch"]').click()
        cy.get('[type="submit"]').click()
    })
    it('Create Use case 4', () => {
        cy.wait(1000)
        cy.get('a').contains('CREATE USE CASE').click()
        cy.get('[name="title"]').type('Test case Test case 4')
        cy.get('[name="description"]').type('This is Description for Use Case 4')
        cy.get('[name="expected_result"]').type('This is expected result')
        cy.get('[name="testStepId-0"]').type('Test step Test case 1')
        cy.get('span').contains('ADD STEP').click()
        cy.get('[name="testStepId-1"]').type('Test step Test case 2')
        cy.get('span').contains('ADD STEP').click()
        cy.get('[name="testStepId-2"]').type('Test step Test case 3')
        cy.get('span').contains('ADD STEP').click()
        cy.get('[name="testStepId-3"]').type('Test step Test case 4')
        cy.get('[for="switch"]').click()
        cy.get('[type="submit"]').click()
    })
    it('Create Use case 5', () => {
        cy.wait(1000)
        cy.get('a').contains('CREATE USE CASE').click()
        cy.get('[name="title"]').type('Test case Test case 5')
        cy.get('[name="description"]').type('This is Description for Use Case 5')
        cy.get('[name="expected_result"]').type('This is expected result')
        cy.get('[name="testStepId-0"]').type('Test step Test case 1')
        cy.get('span').contains('ADD STEP').click()
        cy.get('[name="testStepId-1"]').type('Test step Test case 2')
        cy.get('span').contains('ADD STEP').click()
        cy.get('[name="testStepId-2"]').type('Test step Test case 3')
        cy.get('span').contains('ADD STEP').click()
        cy.get('[name="testStepId-3"]').type('Test step Test case 4')
        cy.get('[for="switch"]').click()
        cy.get('[type="submit"]').click()
    })
    it('Edit Use case 1', () => {
        cy.wait(1000)
        cy.get('a').contains('Test case Test case 1').click()
        cy.get('[name="description"]').clear()
        cy.get('[name="description"]').type(`${funkcije.randomString(10)}`)
        cy.get('[type="submit"]').click()
    })
    it('Edit Use case 2', () => {
        cy.wait(1000)
        cy.get('a').contains('Test case Test case 2').click()
        cy.get('[name="description"]').clear()
        cy.get('[name="description"]').type(`${funkcije.randomString(10)}`)
        cy.get('[type="submit"]').click()
    })
    it('Edit Use case 3', () => {
        cy.wait(1000)
        cy.get('a').contains('Test case Test case 3').click()
        cy.get('[name="description"]').clear()
        cy.get('[name="description"]').type(`${funkcije.randomString(10)}`)
        cy.get('[type="submit"]').click()
    })
    it('Edit Use case 4', () => {
        cy.wait(1000)
        cy.get('a').contains('Test case Test case 4').click()
        cy.get('[name="description"]').clear()
        cy.get('[name="description"]').type(`${funkcije.randomString(10)}`)
        cy.get('[type="submit"]').click()
    })
    it('Edit Use case 5', () => {
        cy.wait(1000)
        cy.get('a').contains('Test case Test case 5').click()
        cy.get('[name="description"]').clear()
        cy.get('[name="description"]').type(`${funkcije.randomString(10)}`)
        cy.get('[type="submit"]').click()
    })
    it('Delete Use case 1', () => {
        cy.wait(1000)
        cy.get('a').contains('Test case Test case 1').click()
        cy.get('.fa-trash-alt').click()
        cy.wait(1000)
        cy.get('button').contains('Delete').click()
    })
    it('Delete Use case 2', () => {
        cy.wait(1000)
        cy.get('a').contains('Test case Test case 2').click()
        cy.get('.fa-trash-alt').click()
        cy.wait(1000)
        cy.get('button').contains('Delete').click()
    })
    it('Delete Use case 3', () => {
        cy.wait(1000)
        cy.get('a').contains('Test case Test case 3').click()
        cy.get('.fa-trash-alt').click()
        cy.wait(1000)
        cy.get('button').contains('Delete')
    })
    it('Delete Use case 4', () => {
        cy.wait(1000)
        cy.get('a').contains('Test case Test case 4').click()
        cy.get('.fa-trash-alt').click()
        cy.wait(1000)
        cy.get('button').contains('Delete').click()
    })
    it('Delete Use case 5', () => {
        cy.wait(1000)
        cy.get('a').contains('Test case Test case 5').click()
        cy.get('.fa-trash-alt').click()
        cy.wait(1000)
        cy.get('button').contains('Delete').click()
    })

})