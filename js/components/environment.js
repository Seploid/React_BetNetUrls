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

    render () {
        return (
            <label>
                <input type="radio" name="environment"  value={this.props.code} id={this.props.code + '-env'} defaultChecked={this.state.byDefault} onChange={this.props.handleChangeEnv}></input>
                <span>{this.props.code}</span>
            </label>
        );
    }
}
