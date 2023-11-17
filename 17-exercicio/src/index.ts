const planets = []

type Planet = { 
  name: string, 
  coordinates: [number, number, number, number], 
  situation: 'Habitado' | 'Habitavel' | 'Inabitavel' | 'Inexplorado' ,
  satelities: string[]
}

function createPlanet() {
  let coordinates: [number, number, number, number] = [0, 0, 0, 0]
  const satelities: string[] = []

  const planetName = prompt("Digite o nome do planeta")
  
  for (let i = 0; i < 4; i++) {
    const coordinate = Number(prompt(`Digite a ${i+1}° coordenada do planeta ${planetName}`))
    coordinates[i] = coordinate 
  }

  const planetSituation: string = prompt(`Qual a situação do planeta ${planetName}? (Habitado, Habitavel, Inabitavel ou Inexplorado)`)
  const satelitiesNumber: number = parseInt(prompt(`Quantos satelites existem no planeta ${planetName}`))

  if (satelitiesNumber > 0) {
    for (let i = 0; i < satelitiesNumber; i++) {
      const satelite: string = prompt(`Qual o nome do ${i+1}° satelite do planeta ${planetName}`)
      satelities.push(satelite) 
    }
  }

  const planet = {
    name: planetName,
    coordinates,
    situation: planetSituation,
    satelities
  }

  planets.push(planet)
  return planet
}

function changeSituation(planet: Planet, situation: 'Habitado' | 'Habitavel' | 'Inabitavel' | 'Inexplorado') {
  planet.situation = situation
  return planet
}

function addSatelitie(planet: Planet) {
  const satelitieName: string = prompt(`Digite o nome do satelite que deseja adicionar a ${planet.name}`)
  planet.satelities.push(satelitieName)
  return planet
}

function removeSatelitie(planet: Planet) {
  const satelitieName: string = prompt(`Digite o nome do satelite que deseja remover de ${planet.name}`)

  const indexToRemove: number = planet.satelities.indexOf(satelitieName)

  if (indexToRemove !== -1) {
    planet.satelities.splice(indexToRemove, 1)  
    alert(`Satélite "${satelitieName}" removido com sucesso.`);
  } else {
    alert(`Satélite "${satelitieName}" não encontrado.`)
  }

  return planet
}

function viewPlanets() {
  console.log(planets)
}