var React = require('react');

var Main = React.createClass({
	render: function () {
		return (
			<div className='container-main'>
				<div className='head'><h1>Bem vindo {this.props.user}</h1></div>
				{this.props.children}
			</div>
		)
	}
});

module.exports = Main;