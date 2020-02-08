import React, { Component } from 'react';

import { menuHorizontalHoverData, menuHorizontalHoverKeys } from '../../store/menuHorizontalHover';

import TypesGenerateor from '../../modules/typesGenerator';

import { storeData, storeKeys } from '../../store/reducer';

class MenuHorizontalHoverWebsite extends Component {

    constructor(props) {
        super(props)
    }
    /**
     * dispatch dtata to the redux store
     */
    dispatchData(){
        storeData.dispatch({
            type: 'data',
            data : menuHorizontalHoverData
        });
        storeKeys.dispatch({
            type: 'keys',
            keys : menuHorizontalHoverKeys
        });
    }
    /**
     * Return modules data
     */
    moduleData() {
        return {
            subTitle: 'MenuHorizontalHover',
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
export default MenuHorizontalHoverWebsite;
