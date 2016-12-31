var React = require('react');

class Loading extends React.Component{
    
    constructor(props, context){
        super(props, context);
        this.state = {
            text: this.props.text,
            speed: this.props.speed
        };
    }

    componentDidMount(){
        var originalText = this.props.text + ' ';
        this.setInterval = setInterval(function(){
            if(this.state.text === originalText + '...'){
                this.setState({
                    text: originalText
                });
            }else{
                this.setState({
                    text: this.state.text + '.'
                });
            }
         }.bind(this)
        , this.props.speed);
    }

    componentWillUnmount(){
        clearInterval(this.setInterval);
    }

    render(){
        return (
            <h1>{this.state.text}</h1>
        );
    }
}

Loading.defaultProps = {
    text: 'Loading',
    speed: 200
};

Loading.propTypes = {
    text: React.PropTypes.string,
    speed: React.PropTypes.number
};

module.exports = Loading;