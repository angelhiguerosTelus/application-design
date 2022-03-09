// ---------------------- INTRODUCCION TO NODE JS ----------------------

// - An example Node.js Application

const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

// ----------------------  HOW TO EXIT FROM A NODE JS PROGRAM ----------------------

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hi!')
})

const server = app.listen(3000, () => console.log('Server ready'))

process.on('SIGTERM', () => { // It's better than procces.exit(1)
  server.close(() => {
    console.log('Process terminated')
  })
})

// ----------------------  HOW TO READ ENVIRONMENT VARIABLES ----------------------


// If you have multiple environment variables in your node project, you can also create an .env 
// file in the root directory of your project, and then use the dotenv package to load them during runtime.
require('dotenv').config();


// ---------------------- OUTPUT THE COMMANT LINE ----------------------
// console.count() will count the number of times a string is printed, and print the count next to it:

const x = 1
const y = 2
const z = 3
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of y is ' + y + 
  ' and has been checked .. how many times?'
)

// The value of x is 1 and has been checked .. how many times?: 1
// The value of x is 1 and has been checked .. how many times?: 2
// The value of y is 2 and has been checked .. how many times?: 1

// ---------------------- ACCEPT INPUT FROM THE COMMAND LINE ----------------------
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`)
    readline.close()
  })
  

// ---------------------- AN INTRODUCTION TO THE NPM PACKAGE MANAGER ----------------------

// Often you'll see more flags added to this command:

// --save-dev installs and adds the entry to the package.json file devDependencies
// --no-save installs but does not add the entry to the package.json file dependencies
// --save-optional installs and adds the entry to the package.json file optionalDependencies
// --no-optional will prevent optional dependencies from being installed