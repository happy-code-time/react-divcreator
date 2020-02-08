import React, { Component } from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

class image extends Component {
    constructor(props) {
        super(props)
        this.type = 'Image';
        this.defaultClass = 'react-divcreator-image';
        this.defaultClassMounted = 'react-divcreator-image-mounted mounted';
        this.requiredProps = {
            'src': 'string'
        }
        this.state = {
            mounted: false
        }
        this.buildTimeStart = Date.now();
    }

    componentDidMount(){
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
    }

    render() {
        let checkProps = checkRequiredProps(this.props, this.requiredProps);

        if (true == checkProps.keysAvailable && false == checkProps.type) {
            /**
             * User properties
             */
            // div
            let rootClass = this.props.class ? this.props.class : '';
            /**
             * Return modules html
             */
            let masterClass = `${this.state.mounted ? this.defaultClassMounted : 'before-mount'} ${this.defaultClass} ${rootClass} ${this.props.fullscreen ? 'react-divcreator-image__fullscreen' : ''}`;
            let masterId = this.props.id ? this.props.id : customKey();


            if(this.props.fullscreen){
                return (
                    <div id={masterId}
                        className={masterClass}
                        key={customKey()}
                    >
                        {
                            this.props.src && 
                            <div 
                                className="react-divcreator-image__fullscreen-data"
                                style={{
                                    backgroundImage: `url('${this.props.src}')`
                                }}
                            >
                                {
                                    this.props.data && this.props.data
                                }
                            </div>
                        }
                    </div>
                );
            } 
            if(this.props.onlyImage){
                return (
                    <div id={masterId}
                        className={masterClass}
                        key={customKey()}
                    >
                        {
                            this.props.src && <img src={this.props.src} alt="..." />
                        }
                    </div>
                );
            } 
            if(!this.props.onlyImage){
                return (
                    <div id={masterId}
                        className={masterClass}
                        key={customKey()}
                    >
                        {
                            <div className="react-divcreator-image-child">
                                {
                                    this.props.src && <img src={this.props.src} alt="..." />
                                }
                                {
                                    this.props.data && 
                                    <div className="react-divcreator-image-child__custom-data">
                                    {
                                        this.props.data
                                    }
                                    </div>
                                }
                            </div>
                        }
                    </div>
                );
            }
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default image;
