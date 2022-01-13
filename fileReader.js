const fs = require('fs')

console.log(fs.readFileSync('mds/1.md', 'uft8').split('\n'))