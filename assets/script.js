let bancoDeDados = [];

const getbancoDeDados = () => JSON.parse(localStorage.getItem ('todoList')) ?? [];
const setbancoDeDados = (bancoDeDados) => localStorage.setItem ('todoList', JSON.stringify(bancoDeDados));

function criarItem (tarefa, status, indice) {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox" ${ status ? "checked": ""} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X" data-indice=${indice}>
    `;
    document.getElementById('todoList').appendChild(item);
}

function limparTarefas() {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

function atualizarTela() {
    limparTarefas();
    const banco = getbancoDeDados(); 
    banco.forEach ( (item, indice) => criarItem (item.tarefa, item.status, indice));
}

function inserirItem (evento) {
    const tecla = evento.key;
    const texto = evento.target.value;
    if (tecla === 'Enter'){
        const bancoDeDados = getbancoDeDados();
        bancoDeDados.push ({'tarefa': texto, 'status': ''});
        setbancoDeDados(bancoDeDados);
        atualizarTela();
        evento.target.value = '';
    }
}

function removerItem (indice) {
    const bancoDeDados = getbancoDeDados();
    bancoDeDados.splice (indice, 1);
    setbancoDeDados(bancoDeDados);
    atualizarTela();
}

function atualizarItem  (indice)  {
    const bancoDeDados = getbancoDeDados();
    bancoDeDados[indice].status = bancoDeDados[indice].status === '' ? 'checked' : '';
    setbancoDeDados(bancoDeDados);
    atualizarTela();
}

function clickItem (evento) {
    const elemento = evento.target;
    console.log (elemento.type);
    if (elemento.type === 'button') {
        const indice = elemento.dataset.indice;
        removerItem (indice);
    }else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
        atualizarItem (indice);
    }
}

document.getElementById('newItem').addEventListener('keypress', inserirItem);
document.getElementById('todoList').addEventListener('click', clickItem);

atualizarTela();

