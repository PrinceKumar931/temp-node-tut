// * Modules -- In Node.js, each file is treated as a separate module.
// * Moudules - encapsulated code (only share minimum)
const names=require('./4-names')
const sayHi=require('./5-utils')
const data=require('./6-alternative-flavour');


// * we just required the function, we didn't even need to 
// * invoke the function.

// * when you import a module, YOU INVOKE IT
require('./7-mind-grenade')



// sayHi('Prince');
// sayHi(names.kriti);
// sayHi(names.ekta);
// sayHi(names.hardik);
// sayHi(names.krishanveer);