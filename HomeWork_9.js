const fs = require('fs')
const readline = require('readline')
const filePath = 'ImRobot.txt'

let totalWords = 0

function countWords(line) {
    const wordRegex = /\b\w+\b/g
    return (line.match(wordRegex) || []).length
}

const reader = readline.createInterface({
    input: fs.createReadStream(filePath, { encoding: 'latin1' }),
    output: process.stdout,
    terminal: false
})

reader.on('line', (line) => {
    console.log(line)
    totalWords += countWords(line)
})

reader.on('close', () => {
    console.log(`Total words: ${totalWords}`)
})
