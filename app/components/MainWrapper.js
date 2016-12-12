var React = require('react');
var style = require('../styles/index');

module.exports = (props) => (
    <div className='jumbotron col-sm-12 text-center' style={style.transparentBg}>
        {props.children}
    </div>
);