'use strict';

class GroupOfDomains extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <ul>
                <h2>{this.props.name}</h2>
                {this.props.domains.map((domain, index) =>
                    <Domain key={index} domainCode={domain.domainCode} prodLink={domain.prodLink} env={this.props.env} tail={this.props.tail}/>
                )}
            </ul>
        );
    }
}

class Domain extends React.Component {

    constructor(props) {
        super(props);

    }

    buildLink(prodLink, domainCode, env, tail) {
        let link = "";
        if (env == "prod") {
            link = prodLink;
        } else {
            link = `https://www.${domainCode}.${env}.webgl.com/`;
        }
        link = link + tail;
        return link;
    }

    render () {
        return (
            <li>
                <a href={this.buildLink(this.props.prodLink, this.props.domainCode, this.props.env, this.props.tail)}>{this.props.domainCode}</a>
            </li>
        );
    }
}
