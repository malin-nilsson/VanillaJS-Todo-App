describe("todo list test", () => {
    it("it should add item to the list", () => {
      // 1. Arrange
      cy.visit("http://127.0.0.1:5500/");
  
      cy.get("#input").type("Boka resa");
  
      // 2. Act
      cy.get("#add-btn").click();
  
      // 3. Assert
      cy.get("ul li").should("have.length", 1);
    });
  
    it("should allow for several items to be added", () => {
      // 1. Arrange
      cy.visit("http://127.0.0.1:5500/");
      cy.get("#input").type("Handla");
      cy.get("button").click();
      cy.get("ul li").should("have.length", 1);
      cy.get("#input").type("Ring mamma");
  
      // 2. Act
      cy.get("#add-btn").click();
  
      // 3. Assert
      cy.get("ul li").should("have.length", 2);
    });
  
    it("should empty the input after click", () => {
      // 1. Arrange
      cy.visit("http://127.0.0.1:5500/");
  
      cy.get("#input").type("Se nya avsnittet av Ozark");
  
      // 2. Act
      cy.get("#add-btn").click();
  
      // 3. Assert
      cy.get("#input").should("have.value", "");
    });
  
    it("should mark item as done", () => {
      cy.visit("http://127.0.0.1:5500/");
      cy.get("#input").type("Hämta paket");
      cy.get("#add-btn").click();
  
      cy.get("ul li:first > .check:first").click();
  
      cy.get(".finished-list li:first").should("have.class", "finished");
    });
  
    it("should remove items from the list", () => {
      // 1. Arrange
      cy.visit("http://127.0.0.1:5500/");
  
      cy.get("#input").type("Yoga");
  
      // 2. Act
      cy.get("#add-btn").click();
  
      // 3. Assert
      cy.get("ul li").should("have.length", 1);

      cy.get("ul li:first > .check:first").click();
  
      cy.get(".finished-list li:first > .remove-icon").click();
  
      cy.get(".finished-list li").should("have.length", 0);
    });
  
    it("should maintain the list on refresh", () => {
      cy.visit("http://127.0.0.1:5500/");
  
      cy.get("input").type("Träna");
  
      // 2. Act
      cy.get("button").click();
  
      // 3. Assert
      cy.get("ul li").should("have.length", 1);
  
      cy.reload();
  
      cy.get("ul li").should("have.length", 1);
    });
  });