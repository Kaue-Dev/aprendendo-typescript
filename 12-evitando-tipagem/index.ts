function sendSpaceship(spaceship: { pilot: string, copilot?: string }) {
  // CODE HERE
}

sendSpaceship({ pilot: 'Han Solo', copilot: 'Chewbacca' })

sendSpaceship({ pilot: 'Luke' })


// Tipo Unknown

var teste1: unknown 
teste1 = 1
teste1 = ''
teste1 = true


// Tipo  Any

var teste2: any 
teste2 = 1
teste2 = ''
teste2 = true

var text: string

text = teste2