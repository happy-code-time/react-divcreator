import React, { Component } from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

class dashboard extends Component {

    constructor(props) {
        super(props);
        this.resizeDashboard = this.resizeDashboard.bind(this);

        this.type = 'Dashboard';
        this.defaultClass = 'react-divcreator-dashboard';
        this.defaultClassMounted = 'react-divcreator-dashboard-mounted mounted';
        this.requiredProps = {};
        this.top__uuid = `top-${customKey()}-${customKey()}`;
        this.left__uuid = `left-${customKey()}-${customKey()}`;
        this.center__uuid = `center-${customKey()}-${customKey()}`;
        this.right__uuid = `right-${customKey()}-${customKey()}`;
        this.bottom__uuid = `bottom-${customKey()}-${customKey()}`;

        this.state = {
            mounted: false,
            border: this.props.border ? this.props.border : false,
            leftWidth : '100%',
            rightWidth: '100%',
            centerWidth: '100%',
            vector: this.props.vector ? this.props.vector : 'px',
            responsive: this.props.responsive ? this.props.responsive : false,
            responsiveClass: '',
            responsiveX: this.props.responsiveX ? this.props.responsiveX : 1024
        }
        this.buildTimeStart = Date.now();

        if (this.props.left && typeof true === typeof this.props.left && true === this.props.left) {
            this.requiredProps.leftWidth = 'number';
        }
        if (this.props.right && typeof true === typeof this.props.right && true === this.props.right) {
            this.requiredProps.rightWidth = 'number';
        };
    }

    componentDidMount(){
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;

        if (this.state.responsive) {
            window.addEventListener('resize', this.resizeDashboard);
            this.resizeDashboard();
        }
    }

    componentWillUnmount(){
        if (this.state.responsive) {
            window.removeEventListener('resize', this.resizeDashboard);
        }
    }

    resizeDashboard(){
        const self = this;
        let leftWidth = `100%`;
        let rightWidth = '100%';
        let centerWidth = '100%';

        if (this.state.responsiveX <= document.documentElement.getBoundingClientRect().width) {
            let storedLeftRightWidth = 0;
            
            // left
            if (self.props.leftWidth) {
                leftWidth = `${self.props.leftWidth}${self.state.vector}`;
                storedLeftRightWidth += self.props.leftWidth;
            }
            // right
            if (self.props.rightWidth) {
                rightWidth = `${self.props.rightWidth}${self.state.vector}`;
                storedLeftRightWidth += self.props.rightWidth;
            }
            // center
            centerWidth = `calc(100% - ${storedLeftRightWidth}${self.state.vector})`;

            if(!this.isRegular){
                this.isRegular = true;
                this.isResponsive = false;
                
                self.setState({
                    leftWidth,
                    rightWidth,
                    centerWidth,
                    responsiveClass: ''
                });
            }

        } else {
            if(!this.isResponsive){
                this.isResponsive = true;
                this.isRegular = false;

                self.setState({
                    leftWidth,
                    rightWidth,
                    centerWidth,
                    responsiveClass: 'react-divcreator-dashboard--responsive'
                });
            }
        }
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
            let masterClass = `${this.state.mounted ? this.defaultClassMounted : 'before-mount'} ${this.state.border ? 'border' : ''} ${this.defaultClass} ${this.state.responsiveClass} ${rootClass}`;
            let masterId = this.props.id ? this.props.id : `${customKey()}`;

            const leftStyle = { maxWidth: this.state.leftWidth, minWidth: this.state.leftWidth };
            const rigthStyle = { maxWidth: this.state.rightWidth, minWidth: this.state.rightWidth };
            const centerStyle = { maxWidth: this.state.centerWidth, minWidth: this.state.centerWidth };

            return (
                <div id={masterId}
                    className={masterClass}
                    key={customKey()}
                >
                    {
                        this.props.top &&
                        <div id={this.top__uuid} className="react-divcreator-dashboard-top">
                            {
                                this.props.topData &&
                                <div id={this.top__uuid__data} className="react-divcreator-dashboard-top__data">
                                    {
                                        this.props.topData
                                    }
                                </div>
                            }
                        </div>
                    }
                    <div className={`react-divcreator-dashboard__main-content`}>
                        {
                            this.props.left &&
                            <div
                                id={this.left__uuid}
                                className="react-divcreator-dashboard-left"
                                style={leftStyle}
                            >
                                {
                                    this.props.leftData &&
                                    <div id={this.left__uuid__data} className="react-divcreator-dashboard-left__data">
                                        {
                                            this.props.leftData
                                        }
                                    </div>
                                }
                            </div>
                        }
                        {
                            this.props.center &&
                            <div
                                id={this.center__uuid}
                                className="react-divcreator-dashboard-center"
                                style={centerStyle}
                            >
                                {
                                    this.props.centerData &&
                                    <div id={this.center__uuid__data} className="react-divcreator-dashboard-center__data">
                                        {
                                            this.props.centerData
                                        }
                                    </div>
                                }
                            </div>
                        }
                        {
                            this.props.right &&
                            <div
                                id={this.right__uuid}
                                style={rigthStyle}
                                className="react-divcreator-dashboard-right"
                            >
                                {
                                    this.props.rightData &&
                                    <div id={this.right__uuid__data} className="react-divcreator-dashboard-right__data">
                                        {
                                            this.props.rightData
                                        }
                                    </div>
                                }
                            </div>
                        }
                    </div>
                    {
                        this.props.bottom &&
                        <div id={this.bottom__uuid} className="react-divcreator-dashboard-bottom">
                            {
                                this.props.bottomData &&
                                <div id={this.bottom__uuid__data} className="react-divcreator-dashboard-bottom__data">
                                    {
                                        this.props.bottomData
                                    }
                                </div>
                            }
                        </div>
                    }
                </div>
            )
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default dashboard;
