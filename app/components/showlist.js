var React = require('react');

var ShowList = React.createClass({
	render: function () {

		var listFriends = this.props.names.map(function (friend, index) {
			return <li key={index}>{friend}</li>
		});

		return (
			<div>
				<h3>Friends:</h3>
				<ul>
					{listFriends}
				</ul>
			</div>
		)
	}
});

module.exports = ShowList;