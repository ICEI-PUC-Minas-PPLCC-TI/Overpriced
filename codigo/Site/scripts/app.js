// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Granblue Fantasy: Versus",
            "cidade": "Steam",
            "categoria": "PS4",
            "email": "R$26,90",
            "telefone": "R$35,00"
        } 
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "telefone": contato.telefone,
        "cidade" : contato.cidade,
        "categoria": contato.categoria
    };

    var deuErro = false;

    // Insere o novo objeto no array
    if (novoContato.nome == '') {
        deuErro = true;
        displayMessage("Campo obrigatório vazio!");
    }
    if (novoContato.email == '') {
        deuErro = true;
        displayMessage("Campo obrigatório vazio!");
    }
    if (novoContato.telefone == '') {
        deuErro = true;
        displayMessage("Campo obrigatório vazio!");
    }
    if (novoContato.cidade == '') {
        deuErro = true;
        displayMessage("Campo obrigatório vazio!");
    }
    if (!deuErro) {
        db.data.push(novoContato);
        displayMessage("Jogo inserido com sucesso!");
    }
}
    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].cidade = contato.cidade,
    db.data[index].categoria = contato.categoria

    displayMessage("Jogo alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Jogo removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}