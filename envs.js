'use strict';

function EnvironmentLink(props) {
    return <a href={props.prodLink}>{props.code}</a>;
}

function Envs() {
    return (
        <div>
            <EnvironmentLink code="dev" prodLink="http://google.com"/>
            <EnvironmentLink code="beta" prodLink="http://yandex.ru"/>
        </div>
    );
}

ReactDOM.render(
    <Envs />,
    document.getElementById('envs')
);