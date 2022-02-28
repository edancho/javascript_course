//const axios = require('axios').default;
import {default as axios} from 'axios';
import promptPKG from 'prompt-sync';
const prompt = promptPKG();

//goal: find the average number of goals for a player in the nhl
//goal: find the average number of games played for a player in the nhl

let operation = prompt('Please enter a team id(1-50)');

async function getPlayer(id) {
    let rosterLength = 28;
    for (i=1;i<28;i++){

    }
    let resp = await axios.get('https://statsapi.web.nhl.com/api/v1/people/' + id)
    let data = resp.data
    console.log(data);
}
/*
async function Team(id){
    let resp = await axios.get('https://statsapi.web.nhl.com/api/v1/people/' + id)
    let data = resp.data
    console.log(data)
    return{

    }


}
*/

/*
console.log(await getHockeyData(8447400))
async function getPlayerStats(){
    let resp = await axios.get('https://statsapi.web.nhl.com/api/v1/people/8447400/stats')
    let data = resp.data
    console.log(data)
    
}
console.log(await getPlayerStats());
*/
getPlayer(8478476);
//result.data.teams.find(e =>)