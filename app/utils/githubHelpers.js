var axios = require('axios');

const URL = 'https://api.github.com/';
const RESOURCE = 'users/'; 
const TOKEN = 'MY_TOKEN';
const params = '?access_token=' + TOKEN;


function getUserInfo(username){
    return axios.get(URL + RESOURCE + username + params);
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
    }

}

module.exports = helpers;