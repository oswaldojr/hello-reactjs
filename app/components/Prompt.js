var React = require('react');
var PropTypes = React.PropTypes;
var Style = require('../styles/index');

var Prompt = (props) => 
	(
		<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={Style.transparentBg}>
			<h1>{props.header}</h1>
			<div className="col-sm-12">
				<form onSubmit={props.onSubmitUser}>
					<div className="form-group">
						<input 
							className="form-control"
							onChange={props.onUpdateUser}
							placeholder="Github username"
							type="text"
							value={props.username}
						/>						
						<button className="form-control btn btn-block btn-success" type="submit">Continue</button>
					</div>					
				</form>
			</div>
		</div>
	);

Prompt.PropTypes = {
	header: PropTypes.string.isRequired,
	onSubmitUser: PropTypes.func.isRequired,
	onUpdateUser: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired
};

module.exports = Prompt;