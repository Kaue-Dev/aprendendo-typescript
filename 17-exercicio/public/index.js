var planets = [];
function createPlanet() {
    var coordinates = [0, 0, 0, 0];
    var satelities = [];
    var planetName = prompt("Digite o nome do planeta");
    for (var i = 0; i < 4; i++) {
        var coordinate = Number(prompt("Digite a ".concat(i + 1, "\u00B0 coordenada do planeta ").concat(planetName)));
        coordinates[i] = coordinate;
    }
    var planetSituation = prompt("Qual a situa\u00E7\u00E3o do planeta ".concat(planetName, "? (Habitado, Habitavel, Inabitavel ou Inexplorado)"));
    var satelitiesNumber = parseInt(prompt("Quantos satelites existem no planeta ".concat(planetName)));
    if (satelitiesNumber > 0) {
        for (var i = 0; i < satelitiesNumber; i++) {
            var satelite = prompt("Qual o nome do ".concat(i + 1, "\u00B0 satelite do planeta ").concat(planetName));
            satelities.push(satelite);
        }
    }
    var planet = {
        name: planetName,
        coordinates: coordinates,
        situation: planetSituation,
        satelities: satelities
    };
    planets.push(planet);
    return planet;
}
function changeSituation(planet, situation) {
    planet.situation = situation;
    return planet;
}
function addSatelitie(planet) {
    var satelitieName = prompt("Digite o nome do satelite que deseja adicionar a ".concat(planet.name));
    planet.satelities.push(satelitieName);
    return planet;
}
function removeSatelitie(planet) {
    var satelitieName = prompt("Digite o nome do satelite que deseja remover de ".concat(planet.name));
    var indexToRemove = planet.satelities.indexOf(satelitieName);
    if (indexToRemove !== -1) {
        planet.satelities.splice(indexToRemove, 1);
        alert("Sat\u00E9lite \"".concat(satelitieName, "\" removido com sucesso."));
    }
    else {
        alert("Sat\u00E9lite \"".concat(satelitieName, "\" n\u00E3o encontrado."));
    }
    return planet;
}
function viewPlanets() {
    console.log(planets);
}
