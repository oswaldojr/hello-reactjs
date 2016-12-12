var React = require('react');
var PropTypes = React.PropTypes;
var MainWrapper = require('./MainWrapper');

var Prompt = (props) => 
	(
		<MainWrapper>
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
		</MainWrapper>
	);

Prompt.PropTypes = {
	header: PropTypes.string.isRequired,
	onSubmitUser: PropTypes.func.isRequired,
	onUpdateUser: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired
};

module.exports = Prompt;