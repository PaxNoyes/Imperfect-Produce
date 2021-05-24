describe("Verifies bacon Wiki info", () => {
    it("clicks on bacon Wikipdeia link and verifies info", () => {
      cy.googleBacon();
      cy.get('*[class^="LC20lb DKV0Md"]').contains("Bacon - Wikipedia").click();
      cy.get('.tocsection-13 > a > .toctext').contains("Nutrients").click();
      cy.get('#Nutrients').should('be.visible')
      //there is no drop down under "Nutrients" so I have to skip that step
    });
  });