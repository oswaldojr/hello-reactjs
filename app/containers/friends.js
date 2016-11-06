var React = require('react');
var ShowList = require ('../components/showlist');

var friends = React.createClass({
	render: function(){
		var name = 'Oswaldo Jr';
		var friends = ['Erico', 'Eurik', 'Bruno', 'Samuelzin', 'Tim'];
		return (
			<div>
				<h3>Name: {name}</h3>
				<ShowList names={friends}/>
			</div>
		)
	}
});

module.exports = friends;