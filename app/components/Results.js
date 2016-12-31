var React = require('react');
var MainWrapper = require('./MainWrapper');
var PlayerDetailsWrapper = require('./PlayerDetailsWrapper');
var PlayerDetails = require('./PlayerDetails');
var Style = require('../styles/index');
var Link = require('react-router').Link;
var Loading = require('./Loading');

function Reestart(props){
    return (
        <div className="col-sm-8 col-sm-offset-2">                
            <div className="row" style={Style.marginTop}>
                <Link to="/playerOne">
                    <button className="btn btn-lg btn-danger">Reestart</button>
                </Link>
            </div>
        </div>
    ); 
};

function Results(props){
    
    if(props.isLoading == true){
        return <Loading/>
    }
    
    var playerOneInfo = props.playersInfo[0];
    var playerTwoInfo = props.playersInfo[1];

    playerOneInfo.result = props.scores[0] > props.scores[1] ? 'Winner' : 'Loser';
    playerTwoInfo.result = playerOneInfo.result === 'Winner' ? 'Loser' : 'Winner';

    if(props.scores[0] === props.scores[1]){        
        return (
            <MainWrapper>
                <h1>Draw!</h1>
                <Reestart/>
            </MainWrapper>
        );
    }else{
        return (
            <MainWrapper>                        
                <PlayerDetailsWrapper header="Results">
                    <PlayerDetails header={playerOneInfo.result} subHeader={'Score: ' + props.scores[0]} info={playerOneInfo}/>
                    <PlayerDetails header={playerTwoInfo.result} subHeader={'Score: ' + props.scores[1]} info={playerTwoInfo}/>
                </PlayerDetailsWrapper>
                <Reestart/>
            </MainWrapper>
        );
    }
    
}

Results.propTypes = {
    playersInfo: React.PropTypes.array.isRequired,
    isLoading: React.PropTypes.bool.isRequired,
    scores: React.PropTypes.array.isRequired
}

module.exports = Results;