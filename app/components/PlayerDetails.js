var React = require('react');
var PropTypes = React.PropTypes;
var Style = require('../styles/index');

var PlayerDetails = (props) =>
(
    <div className="col-sm-4 col-sm-offset-1">
        <h3>{props.header}</h3>
        {props.subHeader && <p>{props.subHeader}</p>}
        <div className="thumbnail">
            <img src={props.info.avatar_url} href={props.info.html_url} alt={props.info.name} title={props.info.name} style={Style.cursorPointer} target="_blank"/>
            <div className="caption">
                <h3>{props.info.name}</h3>
                <li className="list-group-item"><a href={props.info.html_url} target="_blank">{props.info.login}</a></li>
                {props.info.bio && <li className="list-group-item">Bio: {props.info.bio}</li>}
            </div>
        </div>
    </div>
); 

PlayerDetails.propTypes = {
    header: PropTypes.string.isRequired,
    info: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        name: PropTypes.string,
        login: PropTypes.string.isRequired,
        bio: PropTypes.string
    })
};


module.exports = PlayerDetails; 