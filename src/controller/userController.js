// Uma API tem vários endpoints = rotas
// Controler = recebe a requisição e faz oq tem que fazer (define a logica a ser usada, function)

// Controlador para listar todos os usuários
const getAllUsers = (req, res) => { // vai ter uma rota na API - antiga: (http://localhost:8000/); nova: (http://localhost:8000/users) rota p/ as funcionalidade dos usuários
    const users = userModel.findAll();
    res.status(200).json9(users);
}