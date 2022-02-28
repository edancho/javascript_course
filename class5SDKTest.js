//const axios = require('axios').default;
import {default as axios} from 'axios';

//goal: find the average number of goals for a player in the nhl
//goal: find the average number of games played for a player in the nhl
async function getPlayer(id) {
    let resp = await axios.get('https://statsapi.web.nhl.com/api/v1/people/' + id)
    let data = resp.data
    console.log(data)
    return{
        fullName: data.name   
    }
}
console.log(await getHockeyData(8447400))
async function getPlayerStats(){
    let resp = await axios.get('https://statsapi.web.nhl.com/api/v1/people/8447400/stats')
    let data = resp.data
    console.log(data)
    
}
console.log(await getPlayerStats());
