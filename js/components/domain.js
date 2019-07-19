'use strict';

class Domain extends React.Component {

    constructor(props) {
        super(props);

    }

    buildLink(prodLink, domainCode, env, tail) {
        let link = "";
        if (env == "prod") {
            link = prodLink;
        } else {
            link = `https://www${domainCode}.${env}.webglb.com/`;
        }
        link = link + tail;
        return link;
    }

    render () {
        return (
            <div class="domain">
                <a href={this.buildLink(this.props.prodLink, this.props.domainCode, this.props.env, this.props.tail)} target="_blank">{this.props.domainCode}</a>
            </div>
        );
    }
}
