var axios = require('axios');

const URL = 'https://api.github.com/';
const RESOURCE = 'users/'; 
const TOKEN = 'YOUR_TOKEN';
const params = '?access_token=' + TOKEN;


function getUserInfo(username){
    return axios.get(URL + RESOURCE + username + params);
};

function getRepos(username){
    return axios.get(URL + RESOURCE + username + '/repos' + params + '&per_page=100');
};

function getTotalStars(repos){
    return repos.data.reduce(function(prev, current){        
        return prev + current.stargazers_count;        
    }, 0);
};

function calculateScores(players){    
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars, 
    ];
};

function getPlayerData(player){
    return getRepos(player.login)
        .then(getTotalStars)
        .then(function(totalStars){
            return {
                followers: player.followers,
                totalStars: totalStars 
            }
        });
};

var helpers = {
    
    getPlayersInfo: function (playersName){
        return axios.all(playersName.map(function(playerName){
            return getUserInfo(playerName);
        }))
        .then(function(infos){
            return infos.map(function(info){
                return info.data;    
            });
        })
        .catch(function(err){
            console.warn('Error in getPlayersInfo: ', err);    
        });
    },

    battle: function(players){       

        var playerOneData = getPlayerData(players[0]);
        var playerTwoData = getPlayerData(players[1]);

        return axios.all([playerOneData, playerTwoData])
                    .then(calculateScores)
                    .catch(function(err){
                        console.warn('Error in getPlayersInfo: ', err);
                    });
         
    }

}

module.exports = helpers;