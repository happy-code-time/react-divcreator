import React, { Component } from 'react';

import { menuAnimationHamburgerData, menuAnimationHamburgerKeys } from '../../store/menuanimationhamburger';

import TypesGenerateor from '../../modules/typesGenerator';

import { storeData, storeKeys } from '../../store/reducer';

class MenuAnimationHamburgerWebsite extends Component {

    constructor(props) {
        super(props)
    }
    /**
     * dispatch dtata to the redux store
     */
    dispatchData(){
        storeData.dispatch({
            type: 'data',
            data : menuAnimationHamburgerData
        });
        storeKeys.dispatch({
            type: 'keys',
            keys : menuAnimationHamburgerKeys
        });
    }
    /**
     * Return modules data
     */
    moduleData() {
        return {
            subTitle: 'MenuAnimationHamburger',
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
export default MenuAnimationHamburgerWebsite;
