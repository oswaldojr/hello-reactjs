var React = require('react');
var Style = require('../styles/index');
var Link = require('react-router').Link;

module.exports = (props) => (
    <div className="jumbotron col-sm-12 text-center" style={Style.transparentBg}>
        <h1>Confirm Battle</h1>
        <p className="lead">Who is winner?</p>
        <div className="col-sm-8 col-sm-offset-3">
            {props.children}
        </div>
        <div className="col-sm-8 col-sm-offset-2">
            <div className="row" style={Style.marginTop15}>
                <button className="btn btn-lg btn-success" onClick={props.onInitialBattle}>Initial Battle</button>
            </div>               
            <div className="row" style={Style.marginTop15}>
                <Link to="/playerOne">
                    <button className="btn btn-lg btn-danger">Reselect Players</button>
                </Link>
            </div>
        </div>
	</div>
); 