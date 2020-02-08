import React, { Component } from 'react';

import { website404Data, website404Keys } from '../../store/website404';

import TypesGenerateor from '../../modules/typesGenerator';

import { storeData, storeKeys } from '../../store/reducer';

class Website404Website extends Component {

    constructor(props) {
        super(props);
    }
    /**
     * dispatch dtata to the redux store
     */
    dispatchData(){
        storeData.dispatch({
            type: 'data',
            data : website404Data
        });
        storeKeys.dispatch({
            type: 'keys',
            keys : website404Keys
        });
    }
    /**
     * Return modules data
     */
    moduleData() {
        return {
            subTitle: 'Website404',
            examples: storeData.getState(),
            keys : storeKeys.getState()
        };
    }
    render() {
        this.dispatchData();
        const moduleData = this.moduleData();

        return (
            <div className='divcreator-types'>
                <TypesGenerateor data={moduleData} />
            </div>
        );
    }
};
export default Website404Website;
