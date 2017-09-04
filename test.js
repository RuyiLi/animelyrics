const search = require('./index.js');

search('caste room').then(song => {
    console.log(song.anime)
    console.log('-------------')
    console.log(song.lyrics)
})