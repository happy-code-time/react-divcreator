import React, { Component } from 'react';

import { menuAnimationSquareData, menuAnimationSquareKeys} from '../../store/menuanimationsquare';

import TypesGenerateor from '../../modules/typesGenerator';

import { storeData, storeKeys } from '../../store/reducer';

class MenuAnimationSquareWebsite extends Component {

    constructor(props) {
        super(props)
    }
    /**
     * dispatch dtata to the redux store
     */
    dispatchData(){
        storeData.dispatch({
            type: 'data',
            data : menuAnimationSquareData
        });
        storeKeys.dispatch({
            type: 'keys',
            keys : menuAnimationSquareKeys
        });
    }
    /**
     * Return modules data
     */
    moduleData() {
        return {
            subTitle: 'MenuAnimationSquare',
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
export default MenuAnimationSquareWebsite;
