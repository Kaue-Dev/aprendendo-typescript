interface CelestialBody {
  name: string
  mass: number
}

interface Star extends CelestialBody {
  age: number
  planets: Planet[]
}

interface Planet extends CelestialBody {
  population: number
  addSatellite: (name: string) => void
}

class TestPlanet implements Planet {
  name: string
  mass: number
  population: number

  constructor(name: string, mass: number, population: number,) {
    this.name = name
    this.mass = mass
    this.population = population
  }

  addSatellite(name: string) {
    // CODE HERE ...
  }
}