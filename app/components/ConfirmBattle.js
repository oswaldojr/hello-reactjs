var React = require('react');
var Style = require('../styles/index');
var PropTypes = React.PropTypes;
var PlayerDetailsWrapper = require('./PlayerDetailsWrapper');
var PlayerDetails = require('./PlayerDetails');
var MainWrapper = require('./MainWrapper');
var Link = require('react-router').Link;

function ConfirmBattle(props){
    return props.isLoading === true 
    ? <p>Loading...</p>
    : <MainWrapper>                        
            <PlayerDetailsWrapper header="Confirm Battle" subHeader="Who is winner?">
                <PlayerDetails header="PlayerOne" info={props.playersInfo[0]}/>
                <PlayerDetails header="PlayerTwo" info={props.playersInfo[1]}/>
            </PlayerDetailsWrapper>
            <div className="col-sm-8 col-sm-offset-2">
                <div className="row" style={Style.marginTop}>
                    <button className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>Initial Battle</button>
                </div>               
                <div className="row" style={Style.marginTop}>
                    <Link to="/playerOne">
                        <button className="btn btn-lg btn-danger">Reselect Players</button>
                    </Link>
                </div>
            </div>
        </MainWrapper>
};

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onInitiateBattle: PropTypes.func.isRequired,
    playersInfo: PropTypes.array.isRequired
};       

module.exports = ConfirmBattle;