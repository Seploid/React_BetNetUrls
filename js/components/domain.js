'use strict';

class GroupOfDomains extends React.Component {

    constructor(props) {
        super(props);
    }

    // componentDidMount() {

    // }
  
    // componentWillUnmount() {
  
    // }

    render () {
        let domains = this.props.domains.map(function(domain, index) {
            return <Domain key={index} code={domain.code} prodlink={domain.prodlink}/>
        });

        return (
            <div>
                <h2>{this.props.name}</h2>
                {domains}
            </div>
        );
    }
}

class Domain extends React.Component {

    constructor(props) {
        super(props);
    }

    // componentDidMount() {

    // }
  
    // componentWillUnmount() {
  
    // }

    render () {
        return (
            <div>
                <a href={this.props.prodlink}>{this.props.code}</a>
            </div>
        );
    }
}
