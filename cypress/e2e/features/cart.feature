Feature: Cart

Scenario: Adicionar e remover items no carrinho e validar
Given realizo login
When acesso a tela de produtos
Then Adiciono os itens no carrinho
Then acesso a tela de carrinho  
And valido que os itens foram adicionados no carrinho
Then removo os itens do carrinho 
And valido que os produtos foram removidos com sucesso do carrinho
