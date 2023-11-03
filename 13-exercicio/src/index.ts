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

function adicionarTripulante (nome: string) {
  if (newSpaceship.tripulacao.length === newSpaceship.tripulacaoMax) {
    alert("Limite máximo da tripulção atingido.")
  } else {
    newSpaceship.tripulacao.push(nome)
  }
}

adicionarTripulante("Andre")

console.log({spaceships});
