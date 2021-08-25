describe("kumpulan test case", function () {
  it("tc-1", function () {
    cy.visit("https://demoqa.com/automation-practice-form");

    // Isi nama dan email, lalu klik button “email me!”.
    cy.get("#firstName").type("Ruben").should("have.value", "Ruben");
    cy.get("#lastName")
      .type("Ambarita")
      .should("have.value", "Ambarita");
      cy.get("#userEmail")
      .type("test@gmail.com")
      .should("have.value", "test@gmail.com");
  }),
  it("tc-2", function(){
      cy.visit("https://demoqa.com/automation-practice-form");
      cy.get('[value="Male"]').should("have.value", "Male")
  }),
  it("tc-3", function(){
      cy.visit("https://demoqa.com/automation-practice-form");
      cy.get('#userNumber').type("6212345678").should("have.value","6212345678");
  }),
  it("tc-4", function(){
      cy.visit("https://demoqa.com/automation-practice-form");
      cy.get('#hobbies-checkbox-1').should("have.value","1");
  }),
  it("tc-5", function(){
      cy.visit("https://demoqa.com/automation-practice-form");
      cy.get('#currentAddress').type("Haloooooo");
  }),
  it("tc-6", function(){
      cy.visit("https://demoqa.com/automation-practice-form");
      cy.contains("Submit").click();
  })
});
