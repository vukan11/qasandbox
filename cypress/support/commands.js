import "cypress-localstorage-commands";

Cypress.Commands.add('loginAs', (UserEmail, UserPwd) => {
    cy.request({
        method: 'POST',
        url: "https://qa-sandbox.apps.htec.rs/api/users/login",
        body: {

            email: UserEmail,
            password: UserPwd,

        }
    })
        .its('body')
        .then((body) => {
            cy.setLocalStorage("jwtToken", body.token);
            cy.setLocalStorage("jwtRefreshToken", body.refreshToken);
        });
});