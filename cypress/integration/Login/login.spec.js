describe("Login Parabank", () => {
  it("Visit the website", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });

  it("Visit the website using BaseURL", () => {
    cy.visit("/");
  });

  it("Login with username and password", () => {
    const username = 'pedroR'
    const password = '12'
    cy.get(':nth-child(2) > .input').type(username)
    cy.get(':nth-child(4) > .input').type(password)
    cy.get(':nth-child(5) > .button').click()
  })

  it("Login with username and password REST", ()=> {
    cy.request("http://parabank.parasoft.com:443/parabank/services/ParaBank")
  })

  it()

});
