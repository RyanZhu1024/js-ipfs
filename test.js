var ipfsAPI = require('ipfs-api');
var ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'});
ipfs.util.addFromURL('https://upload.wikimedia.org/wikipedia/zh/a/a7/NAMI_2_YEARS_LATER_IN_ONE_PIECE_FILM_Z.jpg', (err, result) => {
    if (err) {
        throw err;
    }
    console.log(result);
})
ipfs.files.get('QmTAu9Qa9an5nboZ28835FSqyXPdvTub6vEnqxsveMtj8F', (err, stream) => {
    stream.on('data', (file) => {
        file.content.pipe(process.stdout);
    })
})
