var React = require('react');
var {Link} = require('react-router');
var style = require('../styles/index');

var Home = () => (
		<div className='jumbotron col-sm-12 text-center' style={style.transparentBg}>
			<h1>Git Battle</h1>
			<p className='lead'>What even is a Query?</p>
			<Link to='/playerOne'>
				<button type='button' className='btn btn-lg btn-success'>Get Starded</button>
			</Link>
		</div>
	);

module.exports = Home;