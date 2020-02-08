import React, { Component } from 'react';

import TypesGenerateor from '../../modules/typesGenerator';

import { storeData, storeKeys, storeDescription } from '../../store/reducer';

import { accordionData, accordionKeys, mainDescription } from '../../store/accordion';
class AccordionWebsite extends Component {

    constructor(props) {
        super(props);
    }

    /**
     * dispatch dtata to the redux store
     */
    dispatchData(){
        storeDescription.dispatch({
            type: 'mainDescription',
            mainDescription
        });
        storeData.dispatch({
            type: 'data',
            data: accordionData
        });
        storeKeys.dispatch({
            type: 'keys',
            keys: accordionKeys
        });
    }
    
    /**
     * Return modules data
     */
    moduleData() {
        return {
            subTitle: 'Accordion',
            examples: storeData.getState(),
            keys: storeKeys.getState(),
            mainDescription: storeDescription.getState()
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
export default AccordionWebsite;