import React, { Component } from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

class cube extends Component {
    constructor(props) {
        super(props)
        this.type = 'Cube';
        this.defaultClass = `react-divcreator-cube`;
        this.defaultClassChild = `react-divcreator-cube-child`;
        this.defaultClassMounted = 'react-divcreator-cube-mounted mounted';
        this.requiredProps = {
            'dobule': 'boolean',
            'listenOn': 'string',
            'data': 'object',
            'animationY' : 'boolean',
            'destroyScale' : 'number',
            'translate' : 'number'
        }
        /**
         * check if user wish to 
         * make the Y animation
         */
        if (this.props.animationY && typeof true === typeof this.props.animationY && true === this.props.animationY) {
            this.requiredProps.animationYtime = 'number';
            this.requiredProps.animationYvalue = 'number';
        }
        /**
         * check if user wish to 
         * make the X animation
         */
        if (this.props.animationX && typeof true === typeof this.props.animationX && true === this.props.animationX) {
            this.requiredProps.animationXtime = 'number';
            this.requiredProps.animationXvalue = 'number';
        }
        /**
         * if user wish to add child
         * then require child data
         */
        if (this.props.dobule && typeof true === typeof this.props.dobule && true === this.props.dobule) {
            this.requiredProps.dataChild = 'object';
            this.requiredProps.translateChild = 'number';
            this.requiredProps.destroyScaleChild = 'number';
            this.requiredProps.destroyChild = 'boolean';
        }
        
        this.state = {
            mounted: false
        };
        this.buildTimeStart = Date.now();
    }

    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
    }

    render() {
        let checkProps = checkRequiredProps(this.props, this.requiredProps);

        if (true == checkProps.keysAvailable && false == checkProps.type) {
            /**
             * User properties
             */
            // div
            let rootClass = this.props.class ? this.props.class : '';
            rootClass = `${this.state.mounted ? this.defaultClassMounted : 'before-mount'} ${rootClass}`;

            let root_id = this.props.id ? this.props.id : `${customKey()}`;

            if (1) {

                let classNameOfBox_root___rect = this.defaultClass;
                let classNameOfBox_child___rect = this.defaultClassChild;
                let listenOn = this.props.listenOn;

                let startAnimationX = this.props.startX ? this.props.startX : 15;
                let startAnimationY = this.props.startY ? this.props.startY : -20;
                // automatically start animation on X and Y axis
                if (this.props.animationX) {
                    let animationTimeX = 5;
                    let animationValueX = 1;
                    if (this.props.animationXtime && Number.isInteger(this.props.animationXtime)) {
                        animationTimeX = this.props.animationXtime;
                    }
                    if (this.props.animationXvalue && Number.isInteger(this.props.animationXvalue)) {
                        animationValueX = this.props.animationXvalue;
                    }
                    setInterval(function () {
                        startAnimationX += animationValueX;
                        $('.' + classNameOfBox_root___rect).css({
                            transform: 'rotateX(' + startAnimationX + 'deg) rotateY(' + startAnimationY + 'deg)'
                        });
                    }, animationTimeX);
                }
                if (this.props.animationY) {
                    let animationTimeY = 5;
                    let animationValueY = 1;
                    if (this.props.animationYtime && Number.isInteger(this.props.animationYtime)) {
                        animationTimeY = this.props.animationYtime;
                    }
                    if (this.props.animationYvalue && Number.isInteger(this.props.animationYvalue)) {
                        animationValueY = this.props.animationYvalue;
                    }
                    setInterval(function () {
                        startAnimationY += animationValueY;
                        $('.' + classNameOfBox_root___rect).css({
                            transform: 'rotateX(' + startAnimationX + 'deg) rotateY(' + startAnimationY + 'deg)'
                        });
                    }, animationTimeY);
                }
                $.mousedirection();
                let degreesY = 0;
                let degreesX = 0;
                let default___value_rect___speed_easy = 1;

                let cube_speed_speedUp = this.props.speedUp ? this.props.speedUp : 2;
                let cube_speed_speedUpLeft = this.props.speedUpLeft ? this.props.speedUpLeft : 2;
                let cube_speed_speedUpRight = this.props.speedUpRight ? this.props.speedUpRight : 3;
                let cube_speed_speedLeft = this.props.speedLeft ? this.props.speedLeft : 5;
                let cube_speed_speedRight = this.props.speedRight ? this.props.speedRight : 2;
                let cube_speed_speedDown = this.props.speedDown ? this.props.speedDown : 1;
                let cube_speed_speedDownLeft = this.props.speedDownLeft ? this.props.speedDownLeft : 1;
                let cube_speed_speedDownRight = this.props.speedDownRight ? this.props.speedDownRight : 1;

                if (!this.props.animationX && !this.props.animationY) {
                    setTimeout(function () {
                        $(listenOn).bind("mousedirection", function (e) {
                            switch (e.direction) {
                                case "up": {
                                    degreesX += default___value_rect___speed_easy * cube_speed_speedUp;
                                    $('.' + classNameOfBox_root___rect).css({
                                        transform: 'rotateX(' + degreesX + 'deg) rotateY(' + degreesY + 'deg)'
                                    });
                                }
                                case "top-right": {
                                    degreesX += default___value_rect___speed_easy * cube_speed_speedUpRight;
                                    degreesY += default___value_rect___speed_easy;
                                    $('.' + classNameOfBox_root___rect).css({
                                        transform: 'rotateX(-' + degreesX + 'deg) rotateY(' + degreesY + 'deg)'
                                    });
                                }
                                case "top-left": {
                                    degreesX += default___value_rect___speed_easy * cube_speed_speedUpLeft;
                                    degreesY += default___value_rect___speed_easy;
                                    $('.' + classNameOfBox_root___rect).css({
                                        transform: 'rotateX(' + degreesX + 'deg) rotateY(-' + degreesY + 'deg)'
                                    });
                                }
                                case "down": {
                                    degreesX -= default___value_rect___speed_easy * cube_speed_speedDown;
                                    $('.' + classNameOfBox_root___rect).css({
                                        transform: 'rotateX(' + degreesX + 'deg) rotateY(' + degreesY + 'deg)'
                                    });
                                }
                                case "bottom-right": {
                                    degreesX -= default___value_rect___speed_easy * cube_speed_speedDownRight;
                                    degreesY += default___value_rect___speed_easy;
                                    $('.' + classNameOfBox_root___rect).css({
                                        transform: 'rotateX(' + degreesX + 'deg) rotateY(' + degreesY + 'deg)'
                                    });
                                }
                                case "bottom-left": {
                                    degreesX -= default___value_rect___speed_easy * cube_speed_speedDownLeft;
                                    degreesY -= default___value_rect___speed_easy;
                                    $('.' + classNameOfBox_root___rect).css({
                                        transform: 'rotateX(' + degreesX + 'deg) rotateY(' + degreesY + 'deg)'
                                    });
                                }
                                case "left": {
                                    degreesY -= default___value_rect___speed_easy * cube_speed_speedLeft;
                                    $('.' + classNameOfBox_root___rect).css({
                                        transform: 'rotateX(' + degreesX + 'deg) rotateY(' + degreesY + 'deg)'
                                    });
                                }
                                case "right": {
                                    degreesY += default___value_rect___speed_easy * cube_speed_speedRight;
                                    $('.' + classNameOfBox_root___rect).css({
                                        transform: 'rotateX(' + degreesX + 'deg) rotateY(' + degreesY + 'deg)'
                                    });
                                }
                            }
                        });
                    }, 1000);
                }
                let dynamic_item_to_create_multiple_rectangles_root = Math.floor(Math.random() * 9999999999999);
                let default___style_rect___front = "react-divcreator-cube---front--" + dynamic_item_to_create_multiple_rectangles_root;
                let default___style_rect___back = "react-divcreator-cube--back--" + dynamic_item_to_create_multiple_rectangles_root;
                let default___style_rect___right = "react-divcreator-cube--right--" + dynamic_item_to_create_multiple_rectangles_root;
                let default___style_rect___left = "react-divcreator-cube--left--" + dynamic_item_to_create_multiple_rectangles_root;
                let default___style_rect___top = "react-divcreator-cube--top--" + dynamic_item_to_create_multiple_rectangles_root;
                let default___style_rect___bottom = "react-divcreator-cube--bottom--" + dynamic_item_to_create_multiple_rectangles_root;
                // child
                let dynamic_item_to_create_multiple_rectangles_child = Math.floor(Math.random() * 9999999999999);
                let child___style_rect___front = "react-divcreator-cube-child--front--" + dynamic_item_to_create_multiple_rectangles_child;
                let child___style_rect___back = "react-divcreator-cube-child--back--" + dynamic_item_to_create_multiple_rectangles_child;
                let child___style_rect___right = "react-divcreator-cube-child--right--" + dynamic_item_to_create_multiple_rectangles_child;
                let child___style_rect___left = "react-divcreator-cube-child--left--" + dynamic_item_to_create_multiple_rectangles_child;
                let child___style_rect___top = "react-divcreator-cube-child--top--" + dynamic_item_to_create_multiple_rectangles_child;
                let child___style_rect___bottom = "react-divcreator-cube-child--bottom--" + dynamic_item_to_create_multiple_rectangles_child;
                // root
                let default___value_style_rect___data_inside_rects = [];
                if (this.props.data && this.props.data.length == 6) {
                    default___value_style_rect___data_inside_rects = this.props.data;
                }
                else {
                    default___value_style_rect___data_inside_rects = [
                        "front",
                        "back",
                        "right",
                        "left",
                        "top",
                        "bottom"
                    ];
                }
                // child
                let child___value_style_rect___data_inside_rects = [];
                if (this.props.dataChild && this.props.dataChild.length == 6) {
                    child___value_style_rect___data_inside_rects = this.props.dataChild;
                }
                else {
                    child___value_style_rect___data_inside_rects = [
                        "front",
                        "back",
                        "right",
                        "left",
                        "top",
                        "bottom"
                    ];
                }
                ////////////////////////////////////////////////////////////////////////////////
                // Build default style for the root box
                ////////////////////////////////////////////////////////////////////////////////
                // root
                let default___value_style_child_rects_translateZ = this.props.translate;

                // child
                let child___value_style_child_rects_translateZ = this.props.translateChild;

                ////////////////////////////////////////////////////////////////////////////////
                // Build default style for the childs of the root box
                ////////////////////////////////////////////////////////////////////////////////  
                let default___single_box_style_front = { "transform": "rotateY(0deg) translateZ(" + default___value_style_child_rects_translateZ + "px)" };
                let default___single_box_style_back = { "transform": "rotateY(180deg) translateZ(" + default___value_style_child_rects_translateZ + "px)" };
                let default___single_box_style_left = { "transform": "rotateY(-90deg) translateZ(" + default___value_style_child_rects_translateZ + "px)" };
                let default___single_box_style_right = { "transform": "rotateY(90deg) translateZ(" + default___value_style_child_rects_translateZ + "px)" };
                let default___single_box_style_top = { "transform": "rotateX(90deg) translateZ(" + default___value_style_child_rects_translateZ + "px)" };
                let default___single_box_style_bottom = { "transform": "rotateX(-90deg) translateZ(" + default___value_style_child_rects_translateZ + "px)" };
                // child
                let child___single_box_style_front = { "transform": "rotateY(0deg) translateZ(" + child___value_style_child_rects_translateZ + "px)" };
                let child___single_box_style_back = { "transform": "rotateY(180deg) translateZ(" + child___value_style_child_rects_translateZ + "px)" };
                let child___single_box_style_left = { "transform": "rotateY(-90deg) translateZ(" + child___value_style_child_rects_translateZ + "px)" };
                let child___single_box_style_right = { "transform": "rotateY(90deg) translateZ(" + child___value_style_child_rects_translateZ + "px)" };
                let child___single_box_style_top = { "transform": "rotateX(90deg) translateZ(" + child___value_style_child_rects_translateZ + "px)" };
                let child___single_box_style_bottom = { "transform": "rotateX(-90deg) translateZ(" + child___value_style_child_rects_translateZ + "px)" };
                ////////////////////////////////////////////////////////////////////////////////
                // Default values for Rectangle there are nestet
                ////////////////////////////////////////////////////////////////////////////////
                // normal
                let isDestroyed_rect = false;
                let isDestroyed_rect_child = false;

                const destroyNormality___rect = () => {
                    let destroyed = default___value_style_child_rects_translateZ * (this.props.destroyScale ? this.props.destroyScale : 1.4);

                    let destroyed_child = child___value_style_child_rects_translateZ * (this.props.destroyScaleChild ? this.props.destroyScaleChild : 1);
                    let childcanBeDestroyed = this.props.destroyChild ? this.props.destroyChild : false;

                    if (!isDestroyed_rect) {

                        isDestroyed_rect = true;
                        $('.' + default___style_rect___front).css("transform", "rotateY(0deg) translateZ(" + destroyed + "px)");
                        $('.' + default___style_rect___back).css("transform", "rotateY(180deg) translateZ(" + destroyed + "px)");
                        $('.' + default___style_rect___right).css("transform", "rotateY(90deg) translateZ(" + destroyed + "px)");
                        $('.' + default___style_rect___left).css("transform", "rotateY(-90deg) translateZ(" + destroyed + "px)");
                        $('.' + default___style_rect___top).css("transform", "rotateX(90deg) translateZ(" + destroyed + "px)");
                        $('.' + default___style_rect___bottom).css("transform", "rotateX(-90deg) translateZ(" + destroyed + "px)");

                        // check to destroy child
                        if (childcanBeDestroyed) {
                            if(!isDestroyed_rect_child){
                                isDestroyed_rect_child = true;
                                $('.' + child___style_rect___front).css("transform", "rotateY(0deg) translateZ(" + destroyed_child + "px)");
                                $('.' + child___style_rect___back).css("transform", "rotateY(180deg) translateZ(" + destroyed_child + "px)");
                                $('.' + child___style_rect___right).css("transform", "rotateY(90deg) translateZ(" + destroyed_child + "px)");
                                $('.' + child___style_rect___left).css("transform", "rotateY(-90deg) translateZ(" + destroyed_child + "px)");
                                $('.' + child___style_rect___top).css("transform", "rotateX(90deg) translateZ(" + destroyed_child + "px)");
                                $('.' + child___style_rect___bottom).css("transform", "rotateX(-90deg) translateZ(" + destroyed_child + "px)");
                            }
                        }
                    }
                    else {
                        isDestroyed_rect = false;
                        $('.' + default___style_rect___front).css("transform", "rotateY(0deg) translateZ(" + default___value_style_child_rects_translateZ + "px)");
                        $('.' + default___style_rect___back).css("transform", "rotateY(180deg) translateZ(" + default___value_style_child_rects_translateZ + "px)");
                        $('.' + default___style_rect___right).css("transform", "rotateY(90deg) translateZ(" + default___value_style_child_rects_translateZ + "px)");
                        $('.' + default___style_rect___left).css("transform", "rotateY(-90deg) translateZ(" + default___value_style_child_rects_translateZ + "px)");
                        $('.' + default___style_rect___top).css("transform", "rotateX(90deg) translateZ(" + default___value_style_child_rects_translateZ + "px)");
                        $('.' + default___style_rect___bottom).css("transform", "rotateX(-90deg) translateZ(" + default___value_style_child_rects_translateZ + "px)");

                        // check to destroy child
                        if (childcanBeDestroyed) {
                            if(isDestroyed_rect_child){
                                isDestroyed_rect_child = false;
                                $('.' + child___style_rect___front).css("transform", "rotateY(0deg) translateZ(" + child___value_style_child_rects_translateZ + "px)");
                                $('.' + child___style_rect___back).css("transform", "rotateY(180deg) translateZ(" + child___value_style_child_rects_translateZ + "px)");
                                $('.' + child___style_rect___right).css("transform", "rotateY(90deg) translateZ(" + child___value_style_child_rects_translateZ + "px)");
                                $('.' + child___style_rect___left).css("transform", "rotateY(-90deg) translateZ(" + child___value_style_child_rects_translateZ + "px)");
                                $('.' + child___style_rect___top).css("transform", "rotateX(90deg) translateZ(" + child___value_style_child_rects_translateZ + "px)");
                                $('.' + child___style_rect___bottom).css("transform", "rotateX(-90deg) translateZ(" + child___value_style_child_rects_translateZ + "px)");
                            }
                        }
                    }
                };
                /**
                 * return html
                 */
                if (false === this.props.dobule) {
                    return (
                        <div style={{
                            "perspective": "500px",
                            "perspectiveOrigin": "50% 50%"
                        }}>
                            <div key={customKey()} id={root_id} className={`${classNameOfBox_root___rect} ${rootClass}`} onClick={destroyNormality___rect}>
                                <div className={default___style_rect___front + " react-divcreator-cube-wall"} style={default___single_box_style_front}>{default___value_style_rect___data_inside_rects[0]}</div>
                                <div className={default___style_rect___back + " react-divcreator-cube-wall"} style={default___single_box_style_back}>{default___value_style_rect___data_inside_rects[1]}</div>
                                <div className={default___style_rect___right + " react-divcreator-cube-wall"} style={default___single_box_style_right}>{default___value_style_rect___data_inside_rects[2]}</div>
                                <div className={default___style_rect___left + " react-divcreator-cube-wall"} style={default___single_box_style_left}>{default___value_style_rect___data_inside_rects[3]}</div>
                                <div className={default___style_rect___top + " react-divcreator-cube-wall"} style={default___single_box_style_top}>{default___value_style_rect___data_inside_rects[4]}</div>
                                <div className={default___style_rect___bottom + " react-divcreator-cube-wall"} style={default___single_box_style_bottom}>{default___value_style_rect___data_inside_rects[5]}</div>
                            </div>
                        </div>
                    )
                }
                if (true === this.props.dobule) {
                    return (
                        <div style={{
                            "perspective": "500px",
                            "perspectiveOrigin": "50% 50%"
                        }}>
                            <div key={customKey()} id={root_id} className={`${classNameOfBox_root___rect} ${rootClass}`} onClick={destroyNormality___rect}>
                                <div className={classNameOfBox_child___rect}>
                                    <div className={child___style_rect___front + " react-divcreator-cube-child-wall"} style={child___single_box_style_front}>{child___value_style_rect___data_inside_rects[0]}</div>
                                    <div className={child___style_rect___back + " react-divcreator-cube-child-wall"} style={child___single_box_style_back}>{child___value_style_rect___data_inside_rects[1]}</div>
                                    <div className={child___style_rect___right + " react-divcreator-cube-child-wall"} style={child___single_box_style_right}>{child___value_style_rect___data_inside_rects[2]}</div>
                                    <div className={child___style_rect___left + " react-divcreator-cube-child-wall"} style={child___single_box_style_left}>{child___value_style_rect___data_inside_rects[3]}</div>
                                    <div className={child___style_rect___top + " react-divcreator-cube-child-wall"} style={child___single_box_style_top}>{child___value_style_rect___data_inside_rects[4]}</div>
                                    <div className={child___style_rect___bottom + " react-divcreator-cube-child-wall"} style={child___single_box_style_bottom}>{child___value_style_rect___data_inside_rects[5]}</div>
                                </div>
                                <div className={default___style_rect___front + " react-divcreator-cube-wall"} style={default___single_box_style_front}>{default___value_style_rect___data_inside_rects[0]}</div>
                                <div className={default___style_rect___back + " react-divcreator-cube-wall"} style={default___single_box_style_back}>{default___value_style_rect___data_inside_rects[1]}</div>
                                <div className={default___style_rect___right + " react-divcreator-cube-wall"} style={default___single_box_style_right}>{default___value_style_rect___data_inside_rects[2]}</div>
                                <div className={default___style_rect___left + " react-divcreator-cube-wall"} style={default___single_box_style_left}>{default___value_style_rect___data_inside_rects[3]}</div>
                                <div className={default___style_rect___top + " react-divcreator-cube-wall"} style={default___single_box_style_top}>{default___value_style_rect___data_inside_rects[4]}</div>
                                <div className={default___style_rect___bottom + " react-divcreator-cube-wall"} style={default___single_box_style_bottom}>{default___value_style_rect___data_inside_rects[5]}</div>
                            </div>
                        </div>
                    )
                }
            }
            else {
                return <p>No enought data passed to the type: {this.type}</p>;
            }
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default cube;
