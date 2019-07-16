'use strict';

class Environment extends React.Component {

    constructor(props) {
        super(props);
        if (props.code === 'prod') {
            this.state = {byDefault: true};
        } else {
            this.state = {byDefault: false};
        }
        
    }


    // componentDidMount() {

    // }
  
    // componentWillUnmount() {
  
    // }

    render () {
        return (
            <div>
                <input type="radio" name="environment"  value={this.props.code} id={this.props.code} defaultChecked={this.state.byDefault} onChange={this.props.handleChangeEnv}></input>
                <label htmlFor={this.props.code}>{this.props.code}</label>
            </div>
        );
    }
}
