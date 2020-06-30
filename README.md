## **React divcreator** module and website

### To run the websites code

    git clone https://github.com/janitzed/react-divcreator.git react-divcreator
    cd react-divcreator
    npm install

    npm run server
    npm run build:dev

### To run the modules code

    git clone https://github.com/janitzed/react-divcreator.git react-divcreator
    cd react-divcreator/module
    npm install
    npm run build:dev

#### Template for empty module

    import React, { Component } from 'react';

    import checkRequiredProps from '../funtions/checkRequiredProperties';

    import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

    import customKey from '../funtions/customKey';

    import { logBuildTime } from '../funtions/logBuildTime';

    class <name> extends Component {

        constructor(props) {
            super(props);
            this.type = '<name>';
            this.defaultClass = 'react-divcreator-<name>';
            this.defaultClassMounted = 'react-divcreator-<name>-mounted mounted';
            this.requiredProps = {};
            this.state = {
                mounted: false,
            };
            this.buildTimeStart = Date.now();
        }

        componentDidMount() {
            window.requestAnimationFrame(() => this.setState({ mounted: true }));
            this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
        }

        render() {
            const checkProps = checkRequiredProps(this.props, this.requiredProps);
            const rootClass = this.props.class ? this.props.class : '';
            const masterClass = `${this.defaultClass} ${rootClass} ${this.state.mounted ? this.defaultClassMounted : 'before-mount'}`;
            const masterId = `${this.props.id ? this.props.id : customKey()}`;

            if (true == checkProps.keysAvailable && false == checkProps.type) {
                return (
                    <div
                        id={masterId}
                        className={masterClass}
                        key={customKey()}
                    >
                        
                    </div>
                );
            } else {
                return missingKeyOrInvalidType(checkProps, this.type);
            }
        }
    }
    export default <name>;
