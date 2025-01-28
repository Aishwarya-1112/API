console.log(
  fetch("https://official-joke-api.appspot.com/jokes/programming/random")
);

//FETCH

fetch("https://official-joke-api.appspot.com/jokes/programming/random")
  .then((res) => res.json())
  .then((msg) => {
    msg[0].setup, msg[0].punchline;
    console.log(msg);
  })

  .catch((err) => console.log(err));

//PROMISE

function ticket() {
  return new Promise((resolve, reject) => {
    let ticketSuccess = false;
    if (ticketSuccess) {
      resolve();
    } else reject();
  });
}

ticket()
  .then((resolve) => console.log("super"))
  .catch(() => console.log("sad"));

//ASYNC //await

function fun() {}

setTimeout(() => console.log("step1"), 4000);

let reachA = new Promise((resolve, reject) => {
  const reached = true;
  if (reached) {
    setTimeout(resolve, 3000, "reached");
  } else reject("not");
});

async function fun() {
  console.log("hi");
  let res = await reachA;
  console.log(res);
  console.log("bye");
}
fun();
//fun().then((msg) => console.log(msg));
