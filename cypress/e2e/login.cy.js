import LoginPage from '../pages/LoginPage' 
import 'cypress-mochawesome-reporter/register'

const login = new LoginPage() 

describe('Login Page Test Suite', () => {
  beforeEach(() => {
    login.visit() 
  }) 

  it('TC01 - Login with valid credentials', () => {
    login.enterUsername('noman')
    cy.wait(500)
    login.enterPassword('nom@n1234')
    cy.wait(500)
    login.clickLogin()
    cy.wait(500)
    login.assertRedirectToDashboard()
    cy.wait(500)
  }) 

  it('TC02 - Login with invalid username', () => {
    login.enterUsername('wrongUser') 
    cy.wait(500)
    login.enterPassword('nom@n1234')
    cy.wait(500)
    login.clickLogin()
    cy.wait(500)
    login.assertErrorMessage()
    cy.wait(500)
  }) 

  it('TC03 - Login with invalid password', () => {
    login.enterUsername('noman')
    cy.wait(500)
    login.enterPassword('wrongPass')
    cy.wait(500)
    login.clickLogin()
    cy.wait(500)
    login.assertErrorMessage()
    cy.wait(500)
  }) 

  it('TC04 - Login with empty username', () => {
    login.enterPassword('nom@n1234')
    cy.wait(500)
    login.clickLogin()
    cy.wait(500)
    login.assertFieldValidation('Username is required')
    cy.wait(500)
  }) 

  it('TC05 - Login with empty password', () => {
    login.enterUsername('noman')
    cy.wait(500)
    login.clickLogin()
    cy.wait(500)
    login.assertFieldValidation('Password is required')
    cy.wait(500) 
  }) 

  it('TC06 - Password input should be masked', () => {
    login.assertPasswordMasked()
    cy.wait(500)
  }) 

  it('TC07 - SQL Injection attempt in username', () => {
    login.enterUsername(`' OR '1'='1`)
    cy.wait(500) 
    login.enterPassword('nom@n1234')
    cy.wait(500) 
    login.clickLogin()
    cy.wait(500)
    login.assertErrorMessage()
    cy.wait(500)
  }) 

  it('TC08 - XSS script input in username', () => {
    login.enterUsername(`<script>alert("xss")</script>`)
    cy.wait(500)
    login.enterPassword('nom@n1234')
    cy.wait(500)
    login.clickLogin()
    cy.wait(500)
    login.assertErrorMessage()
    cy.wait(500)
  }) 

  it('TC09 - Login button disabled when fields are empty', () => {
    login.getLoginButton()
    .should('be.disabled')
    cy.wait(500)
  }) 

  it('TC10 - Case sensitivity check (wrong case password)', () => {
    login.enterUsername('noman')
    cy.wait(500)
    login.enterPassword('NOM@N1234')  // wrong case
    cy.wait(500)
    login.clickLogin()
    cy.wait(500) 
    login.assertErrorMessage()
    cy.wait(500)
  }) 
}) 
