import React, { Component } from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';
class videobackground extends Component {
    
    constructor(props) {
        super(props);
        this.setAttributes = this.setAttributes.bind(this);
        this.resize = this.resize.bind(this);
        this.type = 'Videobackground';
        this.defaultClass = 'react-divcreator-videobackground';
        this.defaultClassMounted = 'react-divcreator-videobackground-mounted mounted';
        this.requiredProps = {
            'src': 'string'
        };
        this.state = {
            uuid: `video-uuid-${customKey()}-${customKey()}`,
            errorMessage: this.props.errorMessage ? this.props.errorMessage : 'Your browser does not support HTML5 video.',
            mounted: false
        };
        this.buildTimeStart = Date.now();
    }

    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;

        window.addEventListener('resize', this.resize);
        document.addEventListener('readystatechange', this.resize);
        this.resize();

        setTimeout( () => {
            this.setAttributes();
        }, 500);

        setTimeout( () => {
            this.setAttributes();
        }, 1500);
    }


    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
        document.removeEventListener('readystatechange', this.resize);
    }

    setAttributes() {
        const singleVideoTag = document.getElementById(this.state.uuid);

        if (singleVideoTag) {
            const mutedVideo = this.props.muted ? this.props.muted : false;
            const controlsVideo = this.props.controls ? this.props.controls : false;
            const loopVideo = this.props.loop ? this.props.loop : false;
            const autoplayVideo = this.props.autoplay ? this.props.autoplay : false;

            if (singleVideoTag) {
                singleVideoTag.muted = mutedVideo;
                singleVideoTag.controls = controlsVideo;
                singleVideoTag.loop = loopVideo;
                singleVideoTag.autoplay = autoplayVideo;
            }
        }
    }
    resize() {
        const ASPECT_RATIO = 9 / 16;
        let newHeight = 0;

        if (document.getElementById(this.state.uuid)) {
            const singleVideoTag = document.getElementById(this.state.uuid);
            
            if(!this.props.setAsBackground){
                const videoStyle = singleVideoTag.getBoundingClientRect();
                const parent = singleVideoTag.parentNode.getBoundingClientRect();
    
                const videoRatio = videoStyle.width / videoStyle.height;
                const parentRatio = parent.width / parent.height;
    
                let value = parentRatio / videoRatio * 1.02;
    
                if (videoRatio < parentRatio) {
                    value = parentRatio / videoRatio * 1.02;
                } else if (parentRatio < videoRatio) {
                    value = videoRatio / parentRatio * 1.02;
                }
    
                singleVideoTag.setAttribute('transform', 'scale(' + value + ',' + value + ')');
                singleVideoTag.style.transform = 'scale(' + value + ',' + value + ')';
    
                if (videoStyle.width) {
                    newHeight = (ASPECT_RATIO * videoStyle.width);
                    singleVideoTag.setAttribute('width',  (videoStyle.width).toString());
                    singleVideoTag.setAttribute('height', newHeight.toString());
                }
            }

            // Horizontal displaying in fullscreen mode
            if(this.props.setAsBackground){

                const docWidth = document.documentElement.getBoundingClientRect().width;
                const docHeight = document.documentElement.getBoundingClientRect().height;

                let zoomFactor = 1;
                // x
                if(docWidth > docHeight){
                    zoomFactor = docWidth / docHeight * 0.3;
                }
                // y
                if(docHeight+200 > docWidth){
                    zoomFactor = docHeight / docWidth * 0.5;
                }

                singleVideoTag.setAttribute('transform', 'scale(' + zoomFactor  + ',' + zoomFactor  + ')');
                singleVideoTag.style.transform = 'scale(' + zoomFactor  + ',' + zoomFactor  + ')';
            }
            this.setAttributes();
        }
    }

    render() {
        let checkProps = checkRequiredProps(this.props, this.requiredProps);
        /**
         * User properties
         */
        // div
        let rootClass = this.props.class ? this.props.class : '';
        /**
         * Return modules html
         */
        let masterClass = `${this.defaultClass} ${rootClass} ${this.props.setAsBackground ? 'react-divcreator-videobackground-fullscreen' : ''} ${this.state.mounted ? this.defaultClassMounted : 'before-mount'}`;
        let masterId = `${this.props.id ? this.props.id : customKey()}`;
        const typeVideo = this.props.type ? this.props.type : 'video/mp4';

        const content = (
            <div className={`${this.defaultClass}--div`} key={customKey()}>
                <div className={`${this.defaultClass}--div-child`} key={customKey()}>
                    {
                        this.props.data && this.props.data
                    }
                </div>
                <video id={this.state.uuid} className={`${this.defaultClass}--video`}>
                    <source
                        type={typeVideo}
                        src={this.props.src}
                        media="(orientation:landscape)"
                    />
                    <source
                        type={typeVideo}
                        src={this.props.src}
                        media="(orientation:portrait)"
                    />
                    <div className="video-error">{ this.state.errorMessage}</div>
                </video>
            </div>
        );


        if (true == checkProps.keysAvailable && false == checkProps.type) {
            return (
                <div
                    id={masterId}
                    className={masterClass}
                    key={customKey()}
                >
                    {
                        content && content
                    }
                </div>
            );
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default videobackground;
