// Network Call Code
export default async function doNetworkCall() {
  const URL =
    "https://gist.githubusercontent.com/therealdhruvgarg/ff8347e5fded74a0d4578eeabf1a2f2b/raw/05694902f615a8d63a4506e968e992c6acd55bba/Pizza.json";
  try {
    const response = await fetch(URL);
    const object = await response.json();
    console.log("Object is ", object);
    return object;
  } catch (err) {
    throw err;
  }
}

// const promise = fetch(URL);
// promise.then(response=>{
//     const promise2 = response.json();
//     promise2.then(json=>console.log(json))
//     .catch(e=>console.log('JSON error ', e))
// }).catch(e=>console.log(e));

// const promise = fetch(URL);
// console.log('Promise is ', promise);
// promise.then(function(response){
//     console.log(response);
//     return response;
// }).catch(function(err){
//     console.log('Error ', err);
// });
// console.log('Good Bye ');
