'use strict';

function Envs() {
    return (
        <div>
            <div className="mainEnvs">
                {envs.mainEnvs}
            </div>
            <div className="extraEnvs">
                {envs.extraEnvs}
            </div>
        </div>
    );
}

ReactDOM.render(
    <Envs/>,
    document.getElementById('envs')
);