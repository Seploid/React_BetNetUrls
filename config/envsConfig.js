'use strict';

class EnvironmentLink extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {isActive: false};
    // }

    // componentDidMount() {

    // }
  
    // componentWillUnmount() {
  
    // }

    render () {
        return (
            <button value={this.props.code}>{this.props.code}</button>
        );
    }
}

//this variable stores configuration of Environments
var envs = 
{
    mainEnvs:[
        <EnvironmentLink key="0" code="dev"/>,
        <EnvironmentLink key="1" code="beta"/>
    ],
    extraEnvs:[
        <EnvironmentLink key="0" code="dev2a"/>,
        <EnvironmentLink key="1" code="dev2b"/>,
        <EnvironmentLink key="2" code="dev2c"/>
    ]
};

