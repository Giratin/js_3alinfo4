const fetch = require("node-fetch");

const json1 = "https://jsonplaceholder.typicode.com/todos/1"
const json2 = "https://jsonplaceholder.typicode.com/todos/2"
const json3 = "https://jsonplaceholder.typicode.com/todos/3"


const requests = [json1, json2, json3];


const getResult = async (json, i) => {
    console.log("should be the first instruction", i)
    const response = await fetch(json)
    const result = await response.json();
    console.log(result, i)
    console.log("should be the last instruction", i)
    return result;
}


async function getAll(){
    for (let i = 0; i < requests.length; i++) {
        const result=  await getResult(requests[i], i)
        console.log(result);
    }

    requests.forEach(async (json, i) => {
        const result = await getResult(json, i)
        // console.log(result);
        requests.forEach(async (json, i) => {
            const result = await getResult(json, i)
            // console.log(result);
        })
    })
}


getAll().then(() => {})

// const getResult2 = () => {
//     console.log("should be the first instruction 2")
//     fetch(json2)
//         .then((res)=> res.json())
//         .then((result)=>{
//             console.log(result);
//         })
//     console.log("should be the last instruction 2")
// }
// const getResult3 = () => {
//     console.log("should be the first instruction 3")
//     fetch(json3)
//         .then((res)=> res.json())
//         .then((result)=>{
//             console.log(result);
//         })
//     console.log("should be the last instruction 3")
// }

// getResult1();
// getResult2();
// getResult3();
// console.log("done of executing");