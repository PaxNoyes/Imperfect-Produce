import * as selectors from "../support/selectors.js";

const noFinishSelected = "Select an option";
const silverFinish = "STERLING SILVER";

describe("Goes to etsy for dropdown test", () => {
    it("selects a ring finish from the drop down", () => {
      cy.visit('https://www.etsy.com/listing/776377544/double-name-ring-two-name-ring-in?ref=hp_prn-1&pro=1&frs=1');
      cy.get(selectors.finishDropDown).contains(`${noFinishSelected}`);
      cy.get(selectors.finishDropDown).select(`${silverFinish}`);
      cy.get(selectors.finishDropDown).contains(`${silverFinish}`);
    });
  });

  // there was no drop down as specified on the bacon page of Wikipedia, so
  // I used a shop on etsy to show that I can automate a drop down selection, and
  // verify the dropdown has updated post selection

  // in this test I've broken out the selectors to be in a separate selectors file 
  // and instead renamed them to hopefully help readability so the test is easier to 
  // follow without comments on each line