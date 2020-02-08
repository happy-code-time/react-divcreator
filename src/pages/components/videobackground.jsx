import React, { Component } from 'react';

import { videobackgroundData, videobackgroundKeys} from '../../store/videobackground';

import TypesGenerateor from '../../modules/typesGenerator';

import { storeData, storeKeys } from '../../store/reducer';

class VideobackgroundWebsite extends Component {

    constructor(props) {
        super(props);
    }
    /**
     * dispatch dtata to the redux store
     */
    dispatchData(){
        storeData.dispatch({
            type: 'data',
            data : videobackgroundData
        });
        storeKeys.dispatch({
            type: 'keys',
            keys : videobackgroundKeys
        });
    }
    /**
     * Return modules data
     */
    moduleData() {
        return {
            subTitle: 'Videobackground',
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
export default VideobackgroundWebsite;
