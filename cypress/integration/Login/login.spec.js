describe("Login Parabank", () => {
  it("Visit the website", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });

  it("Visit the website using BaseURL", () => {
    cy.visit("/");
  });

  it("Login with username and password", () => {
    cy.get(':nth-child(2) > .input').type('pedroR')
    cy.get(':nth-child(4) > .input').type('87654321')
    cy.get(':nth-child(5) > .button').click()
  })

  

 

});
