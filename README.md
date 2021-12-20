## todo-list
# Um todo - list tem como objetivo adicionar listas tarefas ou até mesmo fazer listas de compras, para se manter organizado e não esquecer do que é necessário.

# Nesse projeto foi criado uma pagina em HTML e estilizado com CSS, a linguagem que utilizada para programação foi JavaScript.

## JavaScript
 # Osdados do usuário foi trabalhada com um banco de dados (local storage) que vai armazenar as tarefas que o usário informar.

 # Basicamente foram feitas funçoes:
 # Na "function criarItem" tem como parametros (tarefa, status, indice), vai criar as caixas de tarefas que o usário irá informar, os status informa se o checkbox esta marcado ou não e o indice funciona como identificador de elementos da tag criada, para que ao longo do codigo possa ser removido ou até mesmo marcada como concluida.

 # Na "function limparTarefas" é responsavel por limpar cada tarefa que for armazenada no banco de dados aos selecionar o item.

 # Na "function atualizarTela" renderiza na tela, toda vez que o banco de dados for mudado(tarefa for informada ou removida) vai ser atualizado a tela.

 # "function inserirItem" estabelece a condição de apenas adicionar um item se  clicar a tecla Enter e ao clicar na mesma é adcionado a tarefa e limpa a tarefa da caixa principal em que o usuário digita a tarefa.

 # "function removerItem":  o item vai ser removido a partir do indice que for recebido, ou seja,  ao clicar no botao "x", é removido a tarefa do banco de dados.

 # "function atualizar item":se o status estiver 'checked' a tarefa desmarca e se estiver desmarcado é marcado a tarefa como concluida/checked.

 # "function click": item informa qual elemento foi clicado. Se for do tipo 'button' ira ser removido e se for do tipo 'checkbox' vai ser atualizado o item.

## HTML

 # No HTML na div "todo", está toda a estrutura da página. Possui uma div class com o titulo e outro para adicionar os itens.

## CSS
 # O CSS foi estilizado de forma simples, com os conhecimentos básicos.
  