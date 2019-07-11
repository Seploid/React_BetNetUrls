'use strict';

class EnvironmentLink extends React.Component {

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

//this variable stores configuration of Environments
var envs = 
{
    mainEnvs:[
        <EnvironmentLink key="0" code="dev"/>,
        <EnvironmentLink key="1" code="beta"/>,
        <EnvironmentLink key="2" code="prod"/>
    ],
    extraEnvs:[
        <EnvironmentLink key="0" code="dev2a"/>,
        <EnvironmentLink key="1" code="dev2b"/>,
        <EnvironmentLink key="2" code="dev2c"/>
    ]
};

