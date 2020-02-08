import React, { Component } from 'react';

import { menuHorizontalClickData, menuHorizontalClickKeys, mainDescription } from '../../store/menuHorizontalClick';

import TypesGenerateor from '../../modules/typesGenerator';

import { storeData, storeKeys } from '../../store/reducer';

class MenuHorizontalClickWebsite extends Component {

    constructor(props) {
        super(props)
    }
    /**
     * dispatch dtata to the redux store
     */
    dispatchData(){
        storeData.dispatch({
            type: 'data',
            data : menuHorizontalClickData
        });
        storeKeys.dispatch({
            type: 'keys',
            keys : menuHorizontalClickKeys
        });
    }
    /**
     * Return modules data
     */
    moduleData() {
        return {
            subTitle: 'MenuHorizontalClick',
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
export default MenuHorizontalClickWebsite;
