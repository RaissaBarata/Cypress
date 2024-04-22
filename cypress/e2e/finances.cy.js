/// <reference types="cypress" />

import { beforeEach, describe, it } from "mocha";

describe("Transações", () => {
  beforeEach(() => {
    cy.visit("https://dev-finance.netlify.app");
  });

  it("Cadastrar uma entrada", () => {
    criarTransacao("Freela", 250);
    cy.get("tbody tr td.description").should("have.text", "Freela");
  });

  it("Cadastrar uma saída", () => {
    criarTransacao("Cinema", -45);
    cy.get("tbody tr td.description").should("have.text", "Cinema");
  });

  it("Excluir Transação", () => {
    criarTransacao("Freela", 100);

    cy.contains(".description", "Freela").parent().find("img").click();
  });
});

function criarTransacao(descricao, valor) {
  cy.contains("Nova Transação").click();
  cy.get("#description").type(descricao);
  cy.get("#amount").type(valor);
  cy.get("#date").type("1993-11-16");

  cy.contains("button", "Salvar").click();
}
