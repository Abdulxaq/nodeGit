// info about currebt user
const user = os.userInfo();
console.log(user);

// how many time passed after this laptop was turned on
console.log(`this has been working for ${os.uptime()/60} minuts`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);