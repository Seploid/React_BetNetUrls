'use strict';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tail: '',
            env: 'prod'
        };

        //important part
        this.handleChangeTail = this.handleChangeTail.bind(this);
    }

    handleChangeTail(event) {
        this.setState({"tail": event.target.value});
    }

    handleChangeEnv(event) {
        this.setState({"env": event.target.value})
    }

    render() {
        let groups = GROUPS_OF_DOMAINS.map(function(group, index) {

            return (
                <GroupOfDomains key={index} name={group.groupname} domains={group.domains}/>
            );
        })

        return (
            <div>
                <div className="envs">
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
                <div>
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