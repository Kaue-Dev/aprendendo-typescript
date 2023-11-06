var spaceships = [];
function createSpaceship() {
    alert("Inciando cria\u00E7\u00E3o da ".concat(spaceships.length + 1, "\u00B0 nave."));
    var nome = prompt("Digite o nome da nave");
    var piloto = prompt("Digite o nome do piloto");
    var tripulacaoMax = parseInt(prompt("Digite o número máximo da tripulção"));
    var tripulacao = [];
    var inMission = false;
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
        alert("Enviando a nave \"".concat(spaceship.nome, "\" para uma miss\u00E3o."));
        spaceship.inMission = true;
    }
    else {
        alert("A tripulação precisa ser de no minimo 1/3 da capacidade total.");
    }
}
function listarNaves() {
    alert("Exibindo array de naves no console");
    console.log(spaceships);
}
var primeiraNave = createSpaceship();
var segundaNave = createSpaceship();
adicionarTripulante("John", primeiraNave);
adicionarTripulante("Kelly", primeiraNave);
enviarEmMissao(primeiraNave);
adicionarTripulante("Richard", segundaNave);
adicionarTripulante("Math", segundaNave);
listarNaves();
