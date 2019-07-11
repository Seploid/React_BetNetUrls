'use strict';

//this variable stores configuration of Environments
var envs = 
{
    mainEnvs:[
        <EnvironmentLink key="0" code="dev"/>,
        <EnvironmentLink key="1" code="beta"/>
    ],
    extraEnvs:[
        <EnvironmentLink key="0" code="dev2a"/>,
        <EnvironmentLink key="1" code="dev2b"/>,
        <EnvironmentLink key="2" code="dev2c"/>
    ]
};

function EnvironmentLink(props) {
    return <button value={props.code}>{props.code}</button>;
}