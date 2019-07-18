'use strict';

class Tail extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <option value={this.props.value} />
        );
    }
}
