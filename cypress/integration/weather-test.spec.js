describe("finding Sat forecast for Bacon, IN", () => {
    it("finds Bacon, IN then checks Saturday forecast to ensure it's above freezing", () => {
      // goes to weather app page
      cy.visit('https://www.weather.gov/documentation/services-web-api#');
      // confirms url matches the one navigated to
      cy.url().should('match', /services-web-api#/);
      // types Bacon, IN, USA into the search bar
      cy.get('#inputstring').type("Bacon, IN, USA{enter}");
      // selects first option, then hits enter
      cy.get('[data-index="0"]').click();
      // confirms new page for Bacon, IN contains Louisville, KY
      cy.get('.contentArea').contains("Louisville, KY");
      // Locates Detailed Forecast section
      cy.get('#detailed-forecast > .panel-heading > .panel-title').contains("Detailed Forecast");
      // Locates Saturday under Detailed Forecast
      cy.get('#detailed-forecast-body > :nth-child(12)').contains("Saturday")
      //needed validation that it's over 32 degrees

      // Locates Saturday Night under Detailed Forecast
      cy.get('#detailed-forecast-body > :nth-child(13)').contains("Saturday Night");
    });
});