describe("Searching for bacon", () => {
    it("navigates to Google and searches for bacon", () => {
      // navigates to google.com
      // searches for bacon
      // verifies that the results include "Bacon - Wikipedia"
      // can see this all if you go to the commands file
      cy.googleBacon();
      // validating that the first result contains "Bacon - Wikipedia"
      cy.get('*[class^="GyAeWb"]').first().contains("Bacon - Wikipedia");
      // validating that the first result does not contain "Sir Francis Bacon"
      cy.get('*[class^="GyAeWb"]').first().contains("Sir Francis Bacon").should('not.exist');
      // reloading the page
      cy.reload();
      // validating that the first result contains "Bacon - Wikipedia"
      cy.get('*[class^="GyAeWb"]').first().contains("Bacon - Wikipedia");
    });
  });