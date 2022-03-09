function myFunction() {
  console.log("Hello, World!");
}

function once(cb) {
    let times = 0
    times++

    if(times > 0)  return false
    return cb
}

const myFunctionOnce = once(myFunction);

myFunctionOnce();
// no me tiene que dejar
myFunctionOnce();
