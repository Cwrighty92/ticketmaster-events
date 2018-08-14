describe("Api Stud", () => {
  it("Returns correct number of results", () => {
    cy.seedAndVisit();
    cy.get(".event-box").should("have.length", 100);
  });
  it("Check first element contains data required", () => {
    cy.seedAndVisit();
    cy.get(".event-box")
      .first()
      .children()
      .should("have.length", 3);
  });
  it("Check first element contains specific tag", () => {
    cy.seedAndVisit();
    cy.get(".event-box")
      .first()
      .children()
      .get("img")
    // .contains("JAY-Z and BEYONCÉ - OTR II");
  });
});
