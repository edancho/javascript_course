//const axios = require('axios').default;
import {default as axios} from 'axios';
import promptPKG from 'prompt-sync';
const prompt = promptPKG();

//goal: find the average number of goals for a player in the nhl
//goal: find the average number of games played for a player in the nhl

let operation = prompt('Please enter a player id(8478470-8478480): ');

async function getPlayer(id) {
    let rosterLength = 28;
    let resp = await axios.get('https://statsapi.web.nhl.com/api/v1/people/' + id)
    let data = resp.data.people[0];
    return{
        fullName: data.fullName,
        height: data.height,
        weight: data.weight,
    }
}

let playerData = await getPlayer(operation);

console.log('Name: ', playerData.fullName)
console.log('Weight: ', playerData.weight)
console.log('Height: ', playerData.height)

