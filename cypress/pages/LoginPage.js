class LoginPage {
  visit() {
    cy.visit('http://localhost:8080/') 
  }

  getUsernameField() {
    return cy.get('[placeholder="Enter Username"]')
  }

  getPasswordField() {
    return cy.get('[placeholder="password"]') 
  }

  getLoginButton() {
    return cy.get('.sc-bZQynM')
  }

  enterUsername(username) {
    this.getUsernameField()
    .clear()
    .type(username) 
  }

  enterPassword(password) {
    this.getPasswordField()
    .clear()
    .type(password) 
  }

  clickLogin() {
    this.getLoginButton()
    .click() 
  }

  assertRedirectToDashboard() {
    cy.url()
    .should('include', '/dashboard') 
    cy.contains('Welcome')
    .should('be.visible') 
  }

  assertErrorMessage(expectedText = 'Invalid username or password') {
    cy.contains(expectedText)
    .should('be.visible') 
  }

  assertFieldValidation(fieldText) {
    cy.contains(fieldText)
    .should('be.visible') 
  }

  assertPasswordMasked() {
    this.getPasswordField()
    .should('have.attr', 'type', 'password') 
  }

  assertLoginButtonDisabled() {
    this.getLoginButton()
    .should('be.disabled') 
  }

  assertLoginButtonEnabled() {
    this.getLoginButton()
    .should('not.be.disabled') 
  }
}

export default LoginPage 
