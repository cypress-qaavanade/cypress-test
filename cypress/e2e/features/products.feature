Feature: Products

Scenario: Adicionar items no carrinho e validar
Given realizo login
When acesso a tela de produtos
Then Adiciono os itens no carrinho
Then acesso a tela de carrinho  
And valido que os itens foram adicionados no carrinho

@focus
Scenario: Criar erro
Given realizando o login
When acesso a tela produtos
Then adiciono menos itens no carrinho
And valido o título "Your cart" na tela

