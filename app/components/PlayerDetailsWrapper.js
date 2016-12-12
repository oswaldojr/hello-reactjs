var React = require('react');
var PropTypes = React.PropTypes;

var PlayerDetailsWrapper = (props) => (            
    <div className="col-sm-8 col-sm-offset-2">
        <h1>{props.header}</h1>
        {props.subHeader && <h2>{props.subHeader}</h2>}
        {props.children}
    </div>        
);

module.exports = PlayerDetailsWrapper; 