'use strict';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tail: '',
            env: 'prod',
            targetLink: undefined
        };

        console.log('Tail by default is ' + this.state.tail);
        console.log('Environment by default is ' + this.state.env);

        //important part
        this.handleChangeTail = this.handleChangeTail.bind(this);
        this.handleChangeEnv = this.handleChangeEnv.bind(this);
        this.handleClickOnDomain = this.handleClickOnDomain.bind(this);
    }

    handleChangeTail(event) {
        this.setState({"tail": event.target.value});
        console.log('Tail was changed on ' + event.target.value);
    }

    handleChangeEnv(event) {
        this.setState({"env": event.target.value});
        console.log('Environment was changed on ' + event.target.value);
    }

    handleClickOnDomain(event) {
        if (this.state.env === 'prod') {
            this.setState({targetLink: event.target.prodlink})
        } else {
            let link = 'https://www.' + event.target.code + '.' + this.state.env + '.com';
            this.setState({targetLink: link})
        }
        window.open(this.state.targetLink, '_blank');
    }

    render() {
        let groups = GROUPS_OF_DOMAINS.map(function(group, index) {

            return (
                <GroupOfDomains key={index} name={group.groupname} domains={group.domains}/>
            );
        })

        return (
            <div>
                <div className="envs" onChange={this.handleChangeEnv}>
                    <div className="mainEnvs">
                        {ENVS.mainEnvs}
                    </div>
                    <div className="extraEnvs">
                        {ENVS.extraEnvs}
                    </div>
                </div>
                <div className="tail">
                    <input list="tails" onChange={this.handleChangeTail}/>
                    <datalist id="tails">
                        {TAILS}
                    </datalist>
                </div>
                <div onClick={this.handleClickOnDomain}>
                    {groups}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Form/>,
    document.getElementById('root')
);