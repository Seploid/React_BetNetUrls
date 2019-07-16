'use strict';

class Environment extends React.Component {

    constructor(props) {
        super(props);
        if (props.code === 'prod') {
            this.state = {isToggleOn: true};
        } else {
            this.state = {isToggleOn: false};
        }
        
        //important part  
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    // componentDidMount() {

    // }
  
    // componentWillUnmount() {
  
    // }

    render () {
        return (
            <button istoggleon={this.state.isToggleOn.toString()} value={this.props.code} onClick={this.handleClick}>
                {this.props.code}
            </button>
        );
    }
}
