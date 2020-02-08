import React, { Component } from 'react';

import { boxmenuData, boxmenuKeys, mainDescription } from '../../store/boxmenu';

import TypesGenerateor from '../../modules/typesGenerator';

import { storeData, storeKeys } from '../../store/reducer';

class BoxMenuWebsite extends Component {

    constructor(props) {
        super(props)
    }
    /**
     * dispatch dtata to the redux store
     */
    dispatchData(){
        storeData.dispatch({
            type: 'data',
            data : boxmenuData
        });
        storeKeys.dispatch({
            type: 'keys',
            keys : boxmenuKeys
        });
    }
    /**
     * Return modules data
     */
    moduleData() {
        return {
            subTitle: 'BoxMenu',
            examples: storeData.getState(),
            keys : storeKeys.getState(),
            mainDescription
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
export default BoxMenuWebsite;
