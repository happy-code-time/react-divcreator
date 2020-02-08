import * as React from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

import Clouds from './pages/clouds';

import Water from './pages/water';

import Fire from './pages/fire';

class website404 extends React.Component {
    constructor(props) {
        super(props);

        this.type = 'Website404';
        this.requiredProps = {};
        this.state = {
            type: this.props.type ? this.props.type : 'clouds'
        };
        this.buildTimeStart = Date.now();
    }

    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
    }

    render() {
        const checkProps = checkRequiredProps(this.props, this.requiredProps);

        if (true == checkProps.keysAvailable && false == checkProps.type) {

            if(typeof "x" === typeof this.state.type){
                switch(this.state.type.toLowerCase()){
                    case 'clouds' : {
                        return (
                            <Clouds 
                                props={this.props} 
                            />
                        );
                    }
                    case 'water' : {
                        return (
                            <Water 
                                props={this.props} 
                            />
                        );
                    }
                    case 'fire' : {
                        return (
                            <Fire 
                                props={this.props} 
                            />
                        );
                    }
                    default : {
                        return (
                            <Clouds 
                                props={this.props} 
                            />
                        );
                    }
                }
            }
            else{
                console.info(`%c React-divcreator (component: ${this.type}) %c Failed to build component. The key: "type" has incorrect type. Given type [${typeof this.state.type}] but should be string.`, 
                    'font-family: Arial, Times, serif; font-size: 16px; color:#00BCD4; background-color: #11112D',
                    'font-family: Arial, Times, serif; font-size: 14px; color:#F44559; background-color: rgb(255,255,255)'
                );
                return null;
            }
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default website404;
