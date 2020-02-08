import React, { Component } from 'react';

import { menuAnimationDotsData, menuAnimationDotsKeys} from '../../store/menuanimationdots';

import TypesGenerateor from '../../modules/typesGenerator';

import { storeData, storeKeys } from '../../store/reducer';

class MenuAnimationDotsWebsite extends Component {

    constructor(props) {
        super(props)
    }
    /**
     * dispatch dtata to the redux store
     */
    dispatchData(){
        storeData.dispatch({
            type: 'data',
            data : menuAnimationDotsData
        });
        storeKeys.dispatch({
            type: 'keys',
            keys : menuAnimationDotsKeys
        });
    }
    /**
     * Return modules data
     */
    moduleData() {
        return {
            subTitle: 'MenuAnimationDots',
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
export default MenuAnimationDotsWebsite;
