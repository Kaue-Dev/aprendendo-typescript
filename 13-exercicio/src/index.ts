const spaceships = []

function createSpaceship() {
  alert(`Inciando criação da ${spaceships.length + 1}° nave.`)

  const nome: string = prompt("Digite o nome da nave")
  const piloto: string = prompt("Digite o nome do piloto")
  const tripulacaoMax: number = parseInt(prompt("Digite o número máximo da tripulção"))
  const tripulacao: string[] = []
  const inMission: boolean = false
  
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

function adicionarTripulante (nome: string, spaceship: { tripulacaoMax: number, tripulacao: string[] }) {
  if (spaceship.tripulacao.length === spaceship.tripulacaoMax) {
    alert("Limite máximo da tripulção atingido.")
  } else {
    spaceship.tripulacao.push(nome)
  }
}

function enviarEmMissao (spaceship: { nome: string, tripulacaoMax: number, tripulacao: string[], inMission: boolean}) {
  const umTerco = Math.floor(spaceship.tripulacaoMax / 3)
  
  if (spaceship.tripulacao.length >= umTerco) {
    alert(`Enviando a nave "${spaceship.nome}" para uma missão.`)
    spaceship.inMission = true
  } else {
    alert("A tripulação precisa ser de no minimo 1/3 da capacidade total.")
  }
}

function listarNaves() {
  alert("Exibindo array de naves no console")
  console.log(spaceships);
}

const primeiraNave = createSpaceship()
const segundaNave = createSpaceship()

adicionarTripulante("John", primeiraNave)
adicionarTripulante("Kelly", primeiraNave)
enviarEmMissao(primeiraNave)

adicionarTripulante("Richard", segundaNave)
adicionarTripulante("Math", segundaNave)

listarNaves()