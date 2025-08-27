// Responsável por fazer a integração com o banco de dados através de comandos SQL, falar para a API executar comando SQL = criar funções

// Imagine que você tem uma tabela Usuários no banco de dados tem que fazer a API interagir com ela

// Simulação de um Banco de Dados em mémoria
let users = [
    {id:1, name:'Milla', email:'milla@gmail.com'}, // 0
    {id:2, name:'Luana', email:'luana@gmail.com'}, // 1
    {id:3, name:'Rebeca', email:'rebeca@gmail.com'} // 2
];

// Função p/ buscar todos os usuários
const findAll = () => {
    return users;
}

// Função para buscar um usuário por ID
const findById = (id) => {
    return users.find(user => user.id === id); // ==== estritamente igual ao conteudo (mesmo valor, mesmo tipo)
}

// Função para adicionar um novo usuário
const create = (newUser) => { // condição ternario if simplificado
    const newId = users.length > 0 ? users[users.legth - 1].id + 1 : 1;
    
    // users.legth = tamanho do array > 0 tem itens dentro do array
    // users[users.legth - 1].id + 1 = entrar dentro da tabela users => [tamanho do array - 1] (pq começa a contar do 0 mas o array acha que tem 3).id = user.legth[2].id (posição 2) + 1 => id:3 + 1 => id:4
    // else = : 1 (se não for verdade o 1º elemento vai ter o id = 1)

    const userWithId = {id: newId, ...newUser} // ... = spreadOperator, junta dois arrays
    users.push(userWithId); 
    return userWithId;
}

// Exportar as funções (que foram declaradas)
module.exports = {
    findAll, 
    findById, 
    create
}