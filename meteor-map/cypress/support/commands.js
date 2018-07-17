import apiKey from "../../src/config";

Cypress.Commands.add("seedAndVisit", (seedData = "fixture:ticketMaster") => {
  cy.server();
  cy.route(
    "GET",
    `https://app.ticketmaster.com/discovery/v2/events.json?size=100&apikey=${apiKey}`,
    seedData
  );
  cy.visit("/");
});
