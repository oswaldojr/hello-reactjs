var React = require('react');
var Prompt = require('../components/Prompt');

header: PropTypes.string.isRequired,
onSubmitUser: PropTypes.func.isRequired,
onUpdateUser: PropTypes.func.isRequired,
username: PropTypes.string.isRequired

var PromptContainer = React.createClass({
	
	contextTypes:{
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		return {
			username: ''
		}
	},
	handleSubmitUser: function (e) {
		e.preventDefault();
		var username = this.state.username;
		
		this.setState({
			username: ''
		});

		if(this.props.routeParams.playerOne){
			this.context.router.push({
				pathname: '/battle',
				query:{
					playerOne: this.props.routeParams.playerOne,
					playerTwo: this.state.username
				}
			});
		}else{
			this.context.router.push('/playerTwo' + this.state.username);
		}

	},
	handleUpdateUser: function () {
		// body...
	},
	render: function () {
		// body...
		return (
			<Prompt header={props.routes.header} onSubmitUser={} onUpdateUser={} username={} />
		)
	}

});