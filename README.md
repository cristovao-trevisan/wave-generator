## Installation
`npm install wave-generator --save`

## API

### All
#### Parameters
- size: Generated array size
- f: wave frequency
- fs: sample frequency
- [amplitude = 1]
- [useCounter = true]: If false all calls will start from the beginning of the array,
true (default) will give continuous data

### Sawtoothwave
#### Extra Parameters
- [inverted = false]: Sawtooth direction |\\|\ or /|/|

## Usage

```js
// import constructors
const { Sinewave, Squarewave, Trianglewave, Sawtoothwave } = require('wave-generator')

const sine440 = Sinewave(2048, 440, 44100, 30)

console.log(sine440(100)) // Array with 100 points
console.log(sine440(100)) // Array with the next 100 points

const square220 = Sinewave(2048, 220, 44100, 20, false)

console.log(square220(100)) // Array with 100 points
console.log(square220(100)) // Array with the same 100 points
```

## TODO

- Tests
