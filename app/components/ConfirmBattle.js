var React = require('react');
var Style = require('../styles/index');
var PropTypes = React.PropTypes; 

function ConfirmBattle(props){    

    function getThumbnails(playersInfo){

        var cols = playersInfo.map(function(info, index){
            var offset = (3 - index);
            return (
                <div className={`col-md-2 col-md-offset-${offset}`} key={index}>
                    <div className="thumbnail">
                        <img src={info.avatar_url} href={info.url} alt={info.name} title={info.name} style={Style.cursorPointer}/>
                        <div className="caption">
                            <h3>{info.name}</h3>
                            <p><a href={info.url}>{info.login}</a></p>
                            <p>{info.bio}</p>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className='jumbotron col-sm-12 text-center' style={Style.transparentBg}>
                <h1>Confirm Battle</h1>
                <p className='lead'>Who is winner?</p>
                <div className="row">
                    {cols}
                </div>                
		    </div>
        );
    };


    return props.isLoading === true 
    ? <p>Loading...</p>
    : getThumbnails(props.playersInfo)
};

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired
};       

module.exports = ConfirmBattle;