var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var GitHubHelper = require('../utils/githubHelpers');

class ConfirmBattleContainer extends React.Component {    

    constructor(props, context){
        super(props, context);        
        this.state = {
            isLoading: true,
            playersInfo: []
        }
    }    

    componentWillMount(){
        console.log('componentWillMount');
    }

    componentDidMount(){       

        GitHubHelper.getPlayersInfo([
           this.props.location.query.playerOne,
           this.props.location.query.playerTwo
        ]).then(function(playersInfo){
            this.setState({
                isLoading: false,
                playersInfo: playersInfo 
            });
        }.bind(this));
       
    }

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }

    componentWillUnmount(){
       console.log('componentWillUnMount');     
    }

    render(){ 
        return <ConfirmBattle isLoading={this.state.isLoading} playersInfo={this.state.playersInfo} />
    }
};

ConfirmBattleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = ConfirmBattleContainer;