var React = require('react');
var ReactRouter = require('react-router');

var Main = require('../containers/main');
var FriendsContainer = require('../containers/friends');

var {Router, Route, hashHistory} = ReactRouter;

var routes = (
	<Router history={hashHistory}>
		<Route  path='/' component={Main}>
			<Route path='/friends' component={FriendsContainer}/>
		</Route>
	</Router>
);

module.exports = routes;
