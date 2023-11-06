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
function adicionarTripulante(nome, spaceship) {
    if (spaceship.tripulacao.length === spaceship.tripulacaoMax) {
        alert("Limite máximo da tripulção atingido.");
    }
    else {
        spaceship.tripulacao.push(nome);
    }
}
function enviarEmMissao(spaceship) {
    var umTerco = Math.floor(spaceship.tripulacaoMax / 3);
    if (spaceship.tripulacao.length >= umTerco) {
        alert("Enviando a ".concat(spaceship.nome, " para uma miss\u00E3o."));
        spaceship.inMission = true;
    }
    else {
        alert("A tripulação precisa ser de no minimo 1/3 da capacidade total.");
    }
}
var newSpaceship = createSpaceship(nome, piloto, tripulacaoMax, tripulacao, inMission);
adicionarTripulante("John", newSpaceship);
adicionarTripulante("Kelly", newSpaceship);
adicionarTripulante("Richard", newSpaceship);
enviarEmMissao(newSpaceship);
console.log(spaceships[0]);
