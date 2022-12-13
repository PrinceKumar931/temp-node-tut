// * local

const secret= 'super secret'

// * shared
const kriti='kriti'
const krishanveer='krishanveer'
const hardik = 'hardik'
const ekta = 'ekta'

// * this is how we share from one module to other.
module.exports = {kriti,krishanveer,hardik,ekta};
console.log(module.exports);
