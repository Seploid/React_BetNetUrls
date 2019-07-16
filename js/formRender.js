'use strict';

function Form() {

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
                <input list="tails"/>
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

ReactDOM.render(
    <Form/>,
    document.getElementById('root')
);