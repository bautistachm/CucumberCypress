
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("el usuario ingresa a la pagina del login", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});

When("se digita el usuario incorrecto", () => {
    cy.get("input[name='username']").type('administrador');
});

And("se digita la contraseña correcta", () => {
    cy.get("input[name='password']").type('admin123');
});

Then("el usuario no puede ingresar sesion", () => {
    cy.get("button[type='submit']").click()
    cy.contains('Invalid credentials').should('be.visible')

});



When("se digita el usuario correcto", () => {
    cy.get("input[name='username']").type('Admin');
});

And("se digita la contraseña incorrecta", () => {
    cy.get("input[name='password']").type('admin1234');
});





Then("el usuario puede ingresar sesion", () => {
    cy.get("button[type='submit']").click()
});