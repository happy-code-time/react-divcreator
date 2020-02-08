import React, { Component } from 'react';

import { buttonsNavigationData, buttonsNavigationKeys} from '../../store/buttonsNavigation';

import TypesGenerateor from '../../modules/typesGenerator';

import { storeData, storeKeys } from '../../store/reducer';

class ButtonsNavigationWebsite extends Component {

    constructor(props) {
        super(props)
    }
    /**
     * dispatch dtata to the redux store
     */
    dispatchData(){
        storeData.dispatch({
            type: 'data',
            data : buttonsNavigationData
        });
        storeKeys.dispatch({
            type: 'keys',
            keys : buttonsNavigationKeys
        });
    }
    /**
     * Return modules data
     */
    moduleData() {
        return {
            subTitle: 'ButtonsNavigation',
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
export default ButtonsNavigationWebsite;
