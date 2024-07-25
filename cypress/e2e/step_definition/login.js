// cypress/e2e/duckduckgo.ts
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("enter the principal page", () => {
    //cy.visit("https://www.duckduckgo.com");
    cy.log('Hola')
});

When("I visit duckduckgo.com", () => {
    cy.visit("https://www.duckduckgo.com");
});

Then("I should see a search bar", () => {
    cy.get("#searchbox_input").should(
    "have.attr",
    "placeholder",
    "Search without being tracked"
    );
});
