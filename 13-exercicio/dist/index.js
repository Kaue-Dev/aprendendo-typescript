var spaceships = [];
var nome = prompt("Digite o nome da nave");
var piloto = prompt("Digite o nome do piloto");
var tripulacaoMax = parseInt(prompt("Digite o número máximo da tripulção"));
var tripulacao = [];
var inMission = false;
function createSpaceship(nome, piloto, tripulacaoMax, tripulacao, inMission) {
    var spaceship = {
        nome: nome,
        piloto: piloto,
        tripulacaoMax: tripulacaoMax,
        tripulacao: tripulacao,
        inMission: inMission,
    };
    spaceships.push(spaceship);
    return spaceship;
}
var newSpaceship = createSpaceship(nome, piloto, tripulacaoMax, tripulacao, inMission);
function adicionarTripulante(nome) {
    if (newSpaceship.tripulacao.length === newSpaceship.tripulacaoMax) {
        alert("Limite máximo da tripulção atingido.");
    }
    else {
        newSpaceship.tripulacao.push(nome);
    }
}
adicionarTripulante("Andre");
console.log({ spaceships: spaceships });
