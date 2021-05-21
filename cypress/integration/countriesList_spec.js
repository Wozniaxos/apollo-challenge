describe("Country list initialization of url query", () => {
  it("successfully initializes ?page query", () => {
    cy.visit("/countries");
    cy.get("[data-testid=next-button]").click();
    cy.url().should("include", "?page");
    cy.get("[data-testid=country-list-item]");
  });
});

describe("Country list - back button disabled", () => {
  it("blocks the back button on first page", () => {
    cy.visit("/countries");
    cy.get("[data-testid=back-button]").should("be.disabled");

    cy.get("[data-testid=next-button]").click();

    cy.get("[data-testid=back-button]").click();

    cy.get("[data-testid=back-button]").should("be.disabled");
  });
});

describe("Country list - last page button disabled", () => {
  it("disables the next button on last page", () => {
    cy.visit("/countries?page=20");
    cy.get("[data-testid=next-button]").click();
    cy.url().should("include", "?page=21");
    cy.get("[data-testid=next-button]").should("be.disabled");
  });
});

describe("Country list - Click test", () => {
  it("successfully clicks & loads first, third and last country", () => {
    cy.visit("/countries");
    cy.get("[data-testid=country-list-item]")
      .first()
      .invoke("text")
      .then((text) => {
        cy.get("[data-testid=country-list-item]").first().click();
        cy.get("[data-testid=country-name]").should("have.text", text);
      });
    cy.go("back");
    cy.get("[data-testid=country-list-item]")
      .eq(3)
      .invoke("text")
      .then((text) => {
        cy.get("[data-testid=country-list-item]").eq(3).click();
        cy.get("[data-testid=country-name]").should("have.text", text);
      });

    cy.go("back");
    cy.get("[data-testid=country-list-item]")
      .last()
      .invoke("text")
      .then((text) => {
        cy.get("[data-testid=country-list-item]").last().click();
        cy.get("[data-testid=country-name]").should("have.text", text);
      });
  });
});
