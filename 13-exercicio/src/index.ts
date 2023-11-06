const spaceships = []

const nome: string = prompt("Digite o nome da nave")
const piloto: string = prompt("Digite o nome do piloto")
const tripulacaoMax: number = parseInt(prompt("Digite o número máximo da tripulção"))
const tripulacao: string[] = []
const inMission: boolean = false

function createSpaceship(nome: string, piloto: string, tripulacaoMax: number, tripulacao: string[], inMission: boolean) {
  const spaceship = {
    nome: nome,
    piloto: piloto,
    tripulacaoMax: tripulacaoMax,
    tripulacao: tripulacao,
    inMission: inMission,
  }

  spaceships.push(spaceship)
  return spaceship
}

const newSpaceship = createSpaceship(nome, piloto, tripulacaoMax, tripulacao, inMission)

function adicionarTripulante (nome: string, spaceship: { tripulacaoMax: number, tripulacao: string[] }) {
  if (spaceship.tripulacao.length === spaceship.tripulacaoMax) {
    alert("Limite máximo da tripulção atingido.")
  } else {
    spaceship.tripulacao.push(nome)
  }
}

adicionarTripulante("Andre", newSpaceship)

function enviarEmMissao (spaceship: { nome: string, tripulacaoMax: number, tripulacao: string[], inMission: boolean}) {
  const umTerco = Math.floor(spaceship.tripulacaoMax / 3)
  
  if (spaceship.tripulacao.length >= umTerco) {
    alert(`Enviando a ${spaceship.nome} para uma missão.`)
    spaceship.inMission = true
  } else {
    alert("A tripulação precisa ser de no minimo 1/3 da capacidade total.")
  }
}

console.log(spaceships[0]);
enviarEmMissao(newSpaceship)
console.log(spaceships[0]);