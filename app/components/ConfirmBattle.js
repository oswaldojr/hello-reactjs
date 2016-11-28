var React = require('react');
var Style = require('../styles/index');
var PropTypes = React.PropTypes;
var PlayerDetailsWrapper = require('./PlayerDetailsWrapper');
var PlayerDetails = require('./PlayerDetails');

function ConfirmBattle(props){
    return props.isLoading === true 
    ? <p>Loading...</p>
    : <PlayerDetailsWrapper>
        <PlayerDetails header="PlayerOne" info={props.playersInfo[0]}/>
        <PlayerDetails header="PlayerTwo" info={props.playersInfo[1]}/>
     </PlayerDetailsWrapper>
};

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired
};       

module.exports = ConfirmBattle;