'use strict';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tail: '',
            env: 'prod'
        };

        console.log('Tail by default is ' + this.state.tail);
        console.log('Environment by default is ' + this.state.env);

        //important part
        this.handleChangeTail = this.handleChangeTail.bind(this);
        this.handleChangeEnv = this.handleChangeEnv.bind(this);
    }

    

    handleChangeTail(event) {
        this.setState({"tail": event.target.value});
        console.log('Tail was changed on ' + event.target.value);
        this.update
    }

    handleChangeEnv(event) {
        this.setState({"env": event.target.value});
        console.log('Environment was changed on ' + event.target.value);
    }

    render() {
        return (
            <div>
                <div className="envs" onChange={this.handleChangeEnv}>
                    {ENVS.map((env, index) => (
                        <div key={index}>
                            <h2>{env.groupName}</h2>
                            <div>
                                {env.envs.map(e => <Environment key={e} code={e}/>)}
                            </div>
                        </div>
                        ))}
                </div>
                <div className="tail">
                    <label>
                        <span>Tail</span>
                        <input list="tails" onChange={this.handleChangeTail}/>
                        <datalist id="tails">
                            {TAILS.map((tail, index) => 
                                <Tail key={index} value={tail}/>
                                )}
                        </datalist>
                    </label>
                </div>
                <div id="domains" class="links">
                    {GROUPS_OF_DOMAINS.map((group, index) => (
                        <div class="section" key={index}>
                            <h3>{group.groupName}</h3>
                            {group.domains.map((domain, index) => (
                                <Domain key={index} domainCode={domain.domainCode} prodLink={domain.prodLink} env={this.state.env} tail={this.state.tail}/>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Form/>,
    document.getElementById('root')
);