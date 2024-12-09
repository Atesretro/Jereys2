// This is a module export statement for exporting an object
module.exports = {
  // This is an object containing various settings
  settings: {
    prefix: '!', // the prefix for commands example, !help
    botName: 'OnurxV', // this is your bot name, it has to be the same in game
    owerName: 'OnurV', // change this to the owner name
    ownerId: '6417b7c9b38fcbc2f504a811', // change this with the owner of the bot ID
    botId: '39da48650d335d5bdf239a31ee0bac789ad77d8dd2bcb2c203f15f3ba03a3061', // change this with your bot ID, you can get the bot id once you start the bot.
    developers: ['OnurV'], // you can add as many as you want
    moderators: ['Changeme',
], // add as many as you want
    roomName: 'Changeme', // change this to your room name
    // change this to where you want the bot to teleport on start
    coordinates: {
      x: 30,
      y: 0,
      z: 18,
      facing: 'FrontRight'
    },
    reactionName: 'wink' // the reaction you want to use to kick players, 'wink', 'wave, 'heart', 'clap', 'thumbsup'
  },
  // This is an object containing authentication data
  authentication: {
    room:"659fb5435a5905047342306d" , // your room ID can be found in highrise.game/room/
    token: "1df1fb08a8fce0ff255caf83390ed337d8ac96bd05efcf4ce438dd4f1e8d286e" // your token ID     you can get one from https://highrise.game
  }
}
