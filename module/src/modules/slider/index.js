import React, { Component } from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

class slider extends Component {

    constructor (props) {
        super(props);
        this.getMouseDirection = this.getMouseDirection.bind(this);
        this._onMouseMove = this._onMouseMove.bind(this);
        this.getMouseDirectionMD = this.getMouseDirectionMD.bind(this);
        this._onMouseMoveMD = this._onMouseMoveMD.bind(this);
        this.handleSingleClick = this.handleSingleClick.bind(this);

        this.type = 'Slider';
        this.defaultClass = 'react-divcreator-slider';
        this.defaultClassMounted = 'react-divcreator-slider-mounted mounted';
        this.requiredProps = {
            'data': 'object',
            'end': 'boolean',
            'slideTime': 'number'
        };
        this.animateSliderStop = false;
        this.animationStopped = false;
        this.intervaller = "";
        /**
         * If the animation should start automatically
         * then require more keys
         */
        if (typeof true === typeof this.props.animateSlider && true === this.props.animateSlider) {
            this.requiredProps.animateSliderDirection = 'string';
            this.requiredProps.animateSliderTime = 'number';
            this.requiredProps.rebuildSliderAfter = 'number';
        }
        if (this.props.slideValue && typeof 222 === typeof parseInt(this.props.slideValue)) {
            this.requiredProps.countInSingleData = 'number';
        }
        this.numberToSlide = 1;
        this.uniqueIdUl = `react-divcreator-slider-uuid-${customKey()}`;
        this.uniqueIdNext = `react-divcreator-slider-next-uuid-${customKey()}`;
        this.uniqueIdPrev = `react-divcreator-slider-prev-uuid-${customKey()}`;
        this.uniqueIdUlDots = `react-divcreator-slider-dots-uuid-${customKey()}`;
        this.buildTimeStart = Date.now();

        this.state = {
            mounted: false,
            moveSlider: this.props.moveSlider ? this.props.moveSlider : false,
            slideValue: this.props.slideValue ? this.props.slideValue : 100,
            data: this.props.data ? this.props.data : [],
            displayButtons: this.props.displayButtons ? this.props.displayButtons : false,
            sliderSpeed: this.props.sliderSpeed ? this.props.sliderSpeed : 5
        };
        this.isMouseDown = false;
        this.currentMovedSlider = 100;
        this.oldX = 0;
        this.xDirection = '';
        this.oldY = 0;
        this.yDirection = '';
        this.keyDownOnX = 0;
        this.keyDownOnY = 0;
        this.capturedMouseMoves = 0;
    }

    /**
     * check what buttons to display
     * 1
     * becouse of the user wish to display the first slide
     * then do not display the prev button (slider with end)
     * 2
     * if the user wish to start with the last slide
     * then do not display the next button (slider with end)
     * 3
     * check with dot should be marked as slided (clicked | choosed | current slide)
     */
    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
        this.checkButtonsDisplay();
        this.checkSetIntervaller(true);
        document.addEventListener('mousemove', this.getMouseDirection, false);
        document.addEventListener('touchmove', this.getMouseDirectionMD, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.getMouseDirection, false);
        document.removeEventListener('touchmove', this.getMouseDirectionMD, false);
    }

    getMouseDirection(e) {

        if (this.oldX < e.pageX) {
            this.xDirection = "right";
        }

        else {
            this.xDirection = "left";
        }

        if (this.oldY < e.pageY) {
            this.yDirection = "down";
        }

        else {
            this.yDirection = "up";
        }

        this.oldX = e.pageX;
        this.oldY = e.pageY;
    }

    getMouseDirectionMD(e) {

        if (this.oldX < e.changedTouches[0].clientX) {
            this.xDirection = "right";
        }

        else {
            this.xDirection = "left";
        }

        if (this.oldY < e.changedTouches[0].clientY) {
            this.yDirection = "down";
        }

        else {
            this.yDirection = "up";
        }

        this.oldX = e.changedTouches[0].clientX;
        this.oldY = e.changedTouches[0].clientY;
    }

    checkSetIntervaller(start = false) {
        let time = (typeof 1 === typeof this.props.animateSliderTime && 1 <= this.props.animateSliderTime) ? this.props.animateSliderTime : 5000;
        /**
         * if the user turned the animation on
         */
        if (typeof true === typeof this.props.animateSlider && true === this.props.animateSlider) {
            /**
             * set the intervaller
             */
            if (start) {
                this.intervaller = setInterval(() => {
                    this.slideIntervaller();
                }, time);
            }
            /**
             * stop the intervaller
             * if user clicked on the buttons
             * next
             * prev
             * dots
             */
            else {
                clearInterval(this.intervaller);
                /**
                 * Stop the animation
                 * If the user click an element again
                 * then to not run second time
                 * the timeouter
                 * wait before the first timeouter ends
                 */
                if (!this.animationStopped) {
                    this.animationStopped = true;
                    /**
                     * reset the sliders animation
                     * to default functionality by setting the intervaller
                     */
                    this.setTimeoutToRestartAnimation();
                }
            }
        }
    }
    /**
     * Main reset method for the slider
     */
    setTimeoutToRestartAnimation() {
        let rebuildSliderAfter = (typeof 1 === typeof this.props.rebuildSliderAfter && 1 <= this.props.rebuildSliderAfter) ? this.props.rebuildSliderAfter : 5000;

        setTimeout(() => {

            this.checkButtonsDisplay();
            this.animationStopped = false;
            this.animateSliderStop = false;
            this.checkSetIntervaller(true);

        }, rebuildSliderAfter);
    }
    /**
     * Animation slider function
     */
    slideIntervaller() {
        let direction = this.numberToSlide;

        switch (this.props.animateSliderDirection.toLowerCase()) {
            case 'left': {
                direction++;
                direction = this.calculateDirection(direction);
                break;
            }
            case 'right': {
                direction--;
                direction = this.calculateDirection(direction);
                break;
            }
            default: {
                direction++;
                direction = this.calculateDirection(direction);
                break;
            }
        }
        this.numberToSlide = direction;
        /**
         * if the user have activated the animated slider
         * and if the user clicked on some element
         * prev button
         * next button
         * dots
         * then the value of this.animateSliderStop is true,
         * so the animation is stopped
         */
        if (!this.animateSliderStop) {
            this.slide(direction, false);
        }
    }
    /**
     * With buttons should be displayed
     * prev
     * next
     * dots
     */
    checkButtonsDisplay() {
        let shouldSliderEnd = (typeof true === typeof this.props.end && true === this.props.end) ? true : false;
        let dotsActive = (typeof true === typeof this.props.dots && true === this.props.dots) ? true : false;
        let prevButton = document.getElementById(this.uniqueIdPrev);
        let nextButton = document.getElementById(this.uniqueIdNext);
        /**
         * check with dot should be marked
         */
        if (dotsActive) {
            let ulDots = document.getElementById(this.uniqueIdUlDots);

            if ('undefined' !== ulDots && null !== ulDots) {
                let childsDots = ulDots.childNodes;
                let count = 0;

                if (1 <= childsDots.length) {
                    for (let x = 0; x <= childsDots.length - 1; x++) {
                        count++;

                        if (count === this.numberToSlide) {
                            childsDots[x].classList.add('react-divcreator-slider-dots-active');
                        }
                        else {
                            childsDots[x].classList.remove('react-divcreator-slider-dots-active');
                        }
                    }
                }
            }
        }
        /**
         * user is on first page
         */
        if (!shouldSliderEnd) {
            return null;
        }
        if (this.numberToSlide === 1 && 'undefined' !== prevButton && null !== prevButton) {
            prevButton.classList.add('react-divcreator-slider-hide-button');
        }
        else {
            if ('undefined' !== prevButton && null !== prevButton) {
                prevButton.classList.remove('react-divcreator-slider-hide-button');
            }
        }
        /**
         * user is on last page
         */
        if (this.numberToSlide === this.props.data.length && 'undefined' !== nextButton && null !== nextButton) {
            nextButton.classList.add('react-divcreator-slider-hide-button');
        }
        else {
            if ('undefined' !== nextButton && null !== nextButton) {
                nextButton.classList.remove('react-divcreator-slider-hide-button');
            }
        }
    }
    /**
     * Sliders content
     */
    generateSlidersContent() {
        let items = [];

        if (1 <= this.props.data.length) {
            this.props.data.map((object, index) => {
                let divWithBackground = {};

                if (object.src) {
                    divWithBackground = {
                        backgroundImage: `url('${object.src}')`,
                    };

                    if (object.backgroundOptions) {
                        const backgroundOptions = object.backgroundOptions;
                        divWithBackground = { ...divWithBackground, ...backgroundOptions }
                    }
                }

                items.push(
                    <li className='react-divcreator-slider-ul-li' key={customKey()}>
                        {
                            object.src &&
                            <div
                                className='react-divcreator-slider-ul-li--image'
                                style={divWithBackground}
                            />
                        }
                        {
                            object.data &&
                            <span
                                className='react-divcreator-slider-ul-li--custom-data'
                            >
                                {
                                    object.data
                                }
                            </span>
                        }
                    </li>
                );
            });
        }

        return items;
    }
    /**
     * The automated slider always goes to the right site
     * @param {number} numberToSlide 
     * @param {stirne|number} direction 
     */
    animateSlider(numberToSlide, direction, dot) {
        const ul = document.getElementById(this.uniqueIdUl);
        const px = this.props.slideValue ? parseInt(this.props.slideValue) : false;
        const count = this.props.countInSingleData ? parseInt(this.props.countInSingleData) : false;
        const vector = this.props.slideVector ? this.props.slideVector : 'px';

        if ('undefined' !== ul && null !== ul) {
            if (px && count) {
                switch (direction) {
                    case 'next':
                    case 'prev': {
                        if (this.props.horizontal) {
                            ul.style.top = -((numberToSlide - 1) * px) + vector;
                        } else {
                            if (count <= 1) {
                                if (this.props.horizontal) {
                                    ul.style.top = '0' + vector;
                                } else {
                                    ul.style.left = '0' + vector;
                                }
                            }
                            else {
                                if (this.props.horizontal) {
                                    ul.style.top = -((numberToSlide - 1) * px) + vector;
                                }
                                else {
                                    ul.style.left = -((numberToSlide - 1) * px) + vector;
                                }
                            }
                        }
                        break;
                    }
                    default: {
                        if (count) {
                            if (count <= 1) {
                                if (this.props.horizontal) {
                                    ul.style.top = '0' + vector;
                                } else {
                                    ul.style.left = '0' + vector;
                                }
                            }
                            else {
                                if (this.props.horizontal) {
                                    ul.style.top = -((numberToSlide - 1) * px) + vector;
                                }
                                else {
                                    ul.style.left = -((numberToSlide - 1) * px) + vector;
                                }
                            }
                        } else {
                            if (this.props.horizontal) {
                                ul.style.top = -((numberToSlide - 1) * px) + vector;
                            }
                            else {
                                ul.style.left = ((numberToSlide - 1) * px) + vector;
                            }
                        }
                    }
                }
            }
            else {
                switch (direction) {
                    case 'next':
                    case 'prev': {
                        if (this.props.horizontal) {
                            ul.style.top = -(numberToSlide * 100) + 100 + '%';
                        }
                        else {
                            ul.style.left = -(numberToSlide * 100) + 100 + '%';
                        }
                        break;
                    }
                    default: {
                        if (this.props.horizontal) {
                            ul.style.top = -(numberToSlide * 100) + 100 + '%';
                        }
                        else {
                            ul.style.left = -(numberToSlide * 100) + 100 + '%';
                        }
                    }
                }
            }
            this.capturedMouseMoves = 0;
            this.checkButtonsDisplay();
        }
    }
    /**
     * If slider should end
     * if the user on the last page, then don´t change the page
     * if user on the first page, then dont change the page
     * 
     * 
     * If slider shouldn´t end
     * if the user on the last page, then change the page to the 1 page
     * if user on the first page, then change the page to the last page
     *  
     * @param {number} value 
     */
    calculateDirection(value) {
        const count = this.props.countInSingleData ? parseInt(this.props.countInSingleData) : false;
        const sliderShouldEnd = (typeof true === typeof this.props.end && true === this.props.end) ? true : false;
        /**
         * if the user wish that the slider should end
         * then if the value is 
         */
        if (sliderShouldEnd) {
            if (this.props.horizontal) {
                if (value == 0) {
                    return 1;
                }
                if (value >= this.props.data.length) {
                    return this.props.data.length;
                }
            }
            else {
                if (value === 0) {
                    return 1;
                }
                if (count) {
                    if (value >= this.props.data.length) {
                        return this.props.data.length * count - 1;
                    } else {

                    }
                }
                else {
                    if (value >= this.props.data.length) {
                        return this.props.data.length;
                    }
                }
            }
        }
        /**
         * if the user wish, that the slider shouldn´t end
         * then if the value is 0, then slide the item to the last direction
         */
        else {
            if (this.props.horizontal) {
                if (value > this.props.data.length) {
                    return 1;
                }
                if (value == 0) {
                    return this.props.data.length;
                }
                if (count) {
                    if (value > this.props.data.length * count - 1) {
                        return 1;
                    }
                }
                else {
                    if (value > this.props.data.length) {
                        return 1;
                    }
                }
            }
            else {
                if (value == 0 && count) {
                    return this.props.data.length * count - 1;
                }
                if (value == 0) {
                    return this.props.data.length;
                }
                if (count) {
                    if (value > this.props.data.length * count - 1) {
                        return 1;
                    }
                }
                else {
                    if (value > this.props.data.length) {
                        return 1;
                    }
                }
            }
        }
        return value;
    }
    /**
     * Calculate the number of slide
     * If the user wish to track the customer
     * then make the users functions here 
     * 
     * @param {number|string} number 
     * @param {boolean} clicked 
     */
    slide(number, clicked = false, dot = false) {
        let numberToSlide = this.numberToSlide;
        let direction = number;

        /**
         * disable animation if started
         */
        if (typeof true === typeof this.props.animateSlider && true === this.props.animateSlider && clicked) {
            this.animateSliderStop = true;
            this.setNewIntervaller();
        }

        switch (number) {
            case 'prev': {
                numberToSlide--;
                numberToSlide = this.calculateDirection(numberToSlide);
                this.props.prevFunction ? (this.props.prevFunctionData ? (this.props.prevFunction)(numberToSlide, 'prev', this.props.prevFunctionData) : (this.props.prevFunction)(numberToSlide, 'prev')) : null;
                break;
            }
            case 'next': {
                numberToSlide++;
                numberToSlide = this.calculateDirection(numberToSlide);
                this.props.nextFunction ? (this.props.nextFunctionData ? (this.props.nextFunction)(numberToSlide, 'next', this.props.nextFunctionData) : (this.props.nextFunction)(numberToSlide, 'next')) : null;
                break;
            }
            default: {
                numberToSlide = number;
                numberToSlide = this.calculateDirection(numberToSlide);
                /**
                 * by default if the intervaller run
                 * then do not log anythink
                 */
                if (clicked) {
                    this.props.dotsFunction ? (this.props.dotsFunctionData ? (this.props.dotsFunction)(numberToSlide, 'dots', this.props.dotsFunctionData) : (this.props.dotsFunction)(numberToSlide, 'next')) : null;
                }
                break;
            }
        }
        this.capturedMouseMoves = 0;
        this.numberToSlide = numberToSlide;
        this.animateSlider(numberToSlide, direction, dot);
    }
    setNewIntervaller() {
        this.checkSetIntervaller(false);
    }

    /**
     * Dots generator
     */
    generateDots() {
        const count = this.props.countInSingleData ? parseInt(this.props.countInSingleData) : false;
        let items = [];

        if (this.props.horizontal && this.props.slideValue) {
            items = [];

            this.props.data.map((object, index) => {
                if (0 == index) {
                    items.push(
                        <li className={`react-divcreator-slider-dots-active react-divcreator-slider-dots-ul-li react-divcreator-slider-dots-ul-li-${index + 1}`}
                            key={customKey()}
                            onClick={e => { this.slide(index + 1, true, 'dot'); }}
                        />
                    );
                } else {
                    items.push(
                        <li className={`react-divcreator-slider-dots-ul-li react-divcreator-slider-dots-ul-li-${index + 1}`}
                            key={customKey()}
                            onClick={e => { this.slide(index + 1, true, 'dot'); }}
                        />
                    );
                }
            });
            return items;
        }

        if (count && 1 <= this.props.data.length) {
            items = [];
            for (let x = 0; x <= this.props.data.length * count - 2; x++) {
                if (x == 0) {
                    items.push(
                        <li className={`react-divcreator-slider-dots-active react-divcreator-slider-dots-ul-li react-divcreator-slider-dots-ul-li-${x + 1}`}
                            key={customKey()}
                            onClick={e => { this.slide(x + 1, true, 'dot'); }}
                        />
                    );
                } else {
                    items.push(
                        <li className={`react-divcreator-slider-dots-ul-li react-divcreator-slider-dots-ul-li-${x + 1}`}
                            key={customKey()}
                            onClick={e => { this.slide(x + 1, true, 'dot'); }}
                        />
                    );
                }
            }
        } else {
            items = [];
            if (1 <= this.props.data.length) {
                this.props.data.map((object, index) => {
                    if (0 == index) {
                        items.push(
                            <li className={`react-divcreator-slider-dots-active react-divcreator-slider-dots-ul-li react-divcreator-slider-dots-ul-li-${index + 1}`}
                                key={customKey()}
                                onClick={e => { this.slide(index + 1, true, 'dot'); }}
                            />
                        );
                    } else {
                        items.push(
                            <li className={`react-divcreator-slider-dots-ul-li react-divcreator-slider-dots-ul-li-${index + 1}`}
                                key={customKey()}
                                onClick={e => { this.slide(index + 1, true, 'dot'); }}
                            />
                        );
                    }
                });
            }
        }
        return items;
    }

    moveSiderStart(e) {
        this.keyDownOnX = e.pageX;
        this.keyDownOnY = e.pageY;

        if (!this.state.moveSlider) {
            return false;
        }

        this.isMouseDown = true;
    }

    moveSiderEnd() {

        if (!this.state.moveSlider || this.capturedMouseMoves < 2) {
            return false;
        }

        const ul = document.getElementById(this.uniqueIdUl);

        // vertical slider
        if (ul && !this.props.horizontal) {
            if ('left' == this.xDirection) {
                if (this.numberToSlide < this.props.data.length) {
                    this.numberToSlide += 1;
                }
            } else {
                if ('right' == this.xDirection) {
                    if (this.numberToSlide > 1) {
                        this.numberToSlide -= 1;
                    }
                }
            }

            if (this.numberToSlide > this.props.data.length) {
                this.numberToSlide -= 1;
            }

            if (this.numberToSlide == 0) {
                this.numberToSlide += 1;
            }

            if ('right' == this.xDirection) {
                this.animateSlider(this.numberToSlide, 'next');
            }
            if ('left' == this.xDirection) {
                this.animateSlider(this.numberToSlide, 'prev');
            }
        }

        // horizontal slider
        if (ul && this.props.horizontal) {

            if ('up' == this.yDirection) {
                if (this.numberToSlide < this.props.data.length) {
                    this.numberToSlide += 1;
                }
            } else {
                if ('down' == this.yDirection) {
                    if (this.numberToSlide > 1) {
                        this.numberToSlide -= 1;
                    }
                }
            }

            if (this.numberToSlide > this.props.data.length) {
                this.numberToSlide -= 1;
            }

            if (this.numberToSlide == 0) {
                this.numberToSlide += 1;
            }

            this.animateSlider(this.numberToSlide, this.yDirection);
        }

        this.isMouseDown = false;
    }

    /**
     * Mobile devices support
     * @param {Object} event 
     */
    _onMouseMoveMD(event) {
        const ul = document.getElementById(this.uniqueIdUl);

        if (!this.state.moveSlider || !ul || !this.isMouseDown) {
            return false;
        }

        /**
         * Horizontal slider
         */
        if (!this.props.horizontal) {
            /**
             * px value with the current value from left
             * have to find out 100% for the current entry
             */
            let currentFromLeft = ul.getBoundingClientRect().left;
            const currentUlWidth = ul.getBoundingClientRect().width;
            const singleElementWidth = currentUlWidth / this.state.data.length;

            if (0 > currentFromLeft) {
                currentFromLeft = Math.abs(currentFromLeft);
            }

            let currentMovedSlider = this.oldX - this.keyDownOnX;
            currentMovedSlider = Math.abs(currentMovedSlider);
            this.capturedMouseMove = currentMovedSlider;

            let toSlideRight = -(currentFromLeft - currentMovedSlider * this.state.sliderSpeed);
            let toSlideLeft = -(currentFromLeft + currentMovedSlider * this.state.sliderSpeed);

            /**
             * Dont allow to slide right if the user is on the 1 slide
             */
            if (toSlideRight > 0) {
                toSlideRight = 0;
            }

            if ('right' == this.xDirection) {
                ul.style.left = toSlideRight + 'px';
            }

            if ('left' == this.xDirection) {
                /**
                 * Dont allow to slide left if the user is on the last slide
                 */
                if (currentUlWidth < Math.abs(toSlideLeft)) {
                    ul.style.left = -(currentUlWidth - singleElementWidth - 100) + 'px';
                }
                else {
                    ul.style.left = toSlideLeft + 'px';
                }
            }

            /**
             * disable animation if started
             */
            if (typeof true === typeof this.props.animateSlider && true === this.props.animateSlider) {
                this.animateSliderStop = true;
                this.setNewIntervaller();
            }

            return;
        }

        // horizontal
        if (this.isMouseDown && this.props.horizontal && this.node.contains(event.target)) {
            this.capturedMouseMove = (this.oldY / 8);

            if ('down' == this.yDirection) {
                this.currentMovedSlider = this.numberToSlide * this.state.slideValue - this.capturedMouseMove;
            } else {
                this.currentMovedSlider = this.numberToSlide * this.state.slideValue + this.capturedMouseMove;
            }

            const ul = document.getElementById(this.uniqueIdUl);

            if (ul) {
                if (-(this.currentMovedSlider) > -(this.state.data.length * this.state.slideValue)) {
                    this.currentMovedSlider = 1 * this.state.slideValue;
                }

                if ((this.currentMovedSlider) > (this.state.data.length * this.state.slideValue)) {
                    this.currentMovedSlider = (this.state.data.length - 1) * this.state.slideValue;
                }

                ul.style.top = -(this.currentMovedSlider) + '%';

                /**
                 * disable animation if started
                 */
                if (typeof true === typeof this.props.animateSlider && true === this.props.animateSlider) {
                    this.animateSliderStop = true;
                    this.setNewIntervaller();
                }
            }
        }
    }

    /**
     * Desktop support
     * @param {Object} event 
     */
    _onMouseMove(event) {
        const ul = document.getElementById(this.uniqueIdUl);

        if (!this.state.moveSlider || !ul || !this.isMouseDown) {
            return false;
        }

        /**
         * Vertical slider
         */
        if (!this.props.horizontal && this.node.contains(event.target)) {
            /**
             * px value with the current value from left
             * have to find out 100% for the current entry
             */
            let currentFromLeft = ul.getBoundingClientRect().left;
            const currentUlWidth = ul.getBoundingClientRect().width;
            const singleElementWidth = currentUlWidth / this.state.data.length;

            if (0 > currentFromLeft) {
                currentFromLeft = Math.abs(currentFromLeft);
            }

            let currentMovedSlider = this.oldX - this.keyDownOnX;
            currentMovedSlider = Math.abs(currentMovedSlider);

            this.capturedMouseMove = currentMovedSlider;

            let toSlideRight = -(currentFromLeft - currentMovedSlider * this.state.sliderSpeed);
            let toSlideLeft = -(currentFromLeft + currentMovedSlider * this.state.sliderSpeed);

            /**
             * Dont allow to slide right if the user is on the 1 slide
             */
            if (toSlideRight > 0) {
                toSlideRight = 0;
            }

            if ('right' == this.xDirection) {

                if(1 < this.numberToSlide){
                    if (currentMovedSlider > singleElementWidth*0.5) {
                        currentMovedSlider = singleElementWidth;

                        this.capturedMouseMove = currentMovedSlider;
                        toSlideRight = Math.abs((currentFromLeft-singleElementWidth) - currentMovedSlider * this.state.sliderSpeed);

                        ul.style.left = -(singleElementWidth*(this.numberToSlide-2)) + 'px';
                    } 

                    else {
                        ul.style.left = (toSlideRight) + 'px';
                    }
                } 
                else {
                    ul.style.left = (toSlideRight) + 'px';
                }
                this.capturedMouseMoves += 1;
            }

            if ('left' == this.xDirection) {
                /**
                 * Dont allow to slide left if the user is on the last slide
                 */
                if (currentUlWidth < Math.abs(toSlideLeft)) {

                    // Allow only slide with the mouse 1 element to the right or left
                    let toSlideLeft = currentUlWidth - singleElementWidth;

                    if (Math.abs(toSlideLeft) > Math.abs(singleElementWidth * this.numberToSlide)) {
                        toSlideLeft = singleElementWidth * this.numberToSlide;
                        ul.style.left = -(toSlideLeft - 100) + 'px';
                    }

                    else {
                        ul.style.left = -(toSlideLeft - 100) + 'px';
                    }
                }
                else {
                    // Allow only slide with the mouse 1 element to the right or left
                    if (Math.abs(toSlideLeft) > Math.abs(singleElementWidth * this.numberToSlide)) {
                        toSlideLeft = singleElementWidth * this.numberToSlide;
                        ul.style.left = -(Math.abs(toSlideLeft)) + 'px';
                    }

                    else {
                        ul.style.left = -(Math.abs(toSlideLeft)) + 'px';
                    }
                }
                this.capturedMouseMoves += 1;
            }

            /**
             * disable animation if started
             */
            if (typeof true === typeof this.props.animateSlider && true === this.props.animateSlider) {
                this.animateSliderStop = true;
                this.setNewIntervaller();
            }
        }

        // horizontal
        if (this.isMouseDown && this.props.horizontal && this.node.contains(event.target)) {
            this.capturedMouseMove = (this.oldY / 8);

            if ('down' == this.yDirection) {
                this.currentMovedSlider = this.numberToSlide * this.state.slideValue - this.capturedMouseMove;
            } else {
                this.currentMovedSlider = this.numberToSlide * this.state.slideValue + this.capturedMouseMove;
            }

            const ul = document.getElementById(this.uniqueIdUl);

            if (ul) {
                if (-(this.currentMovedSlider) > -(this.state.data.length * this.state.slideValue)) {
                    this.currentMovedSlider = 1 * this.state.slideValue;
                }

                if ((this.currentMovedSlider) > (this.state.data.length * this.state.slideValue)) {
                    this.currentMovedSlider = (this.state.data.length - 1) * this.state.slideValue;
                }

                ul.style.top = -(this.currentMovedSlider) + '%';
                this.capturedMouseMoves += 1;

                /**
                 * disable animation if started
                 */
                if (typeof true === typeof this.props.animateSlider && true === this.props.animateSlider) {
                    this.animateSliderStop = true;
                    this.setNewIntervaller();
                }
            }
        }
    }

    handleSingleClick(e) {
        e.preventDefault();
        this.isMouseDown = false;
        this.capturedMouseMove = 0;
    }

    render() {
        let checkProps = checkRequiredProps(this.props, this.requiredProps);

        if (true == checkProps.keysAvailable && false == checkProps.type) {
            /**
             * User properties
             */
            // div
            let rootClass = this.props.class ? this.props.class : '';
            /**
             * Return modules html
             */
            let masterClass = `${this.defaultClass} ${rootClass} ${this.state.mounted ? this.defaultClassMounted : 'before-mount'}`;
            let masterId = `${this.props.id ? this.props.id : customKey()}`;
            let slidersContent = this.generateSlidersContent();
            let prevButton = this.props.prevButton ? this.props.prevButton : '<';
            let nextButton = this.props.nextButton ? this.props.nextButton : '>';
            let slidersTime = (typeof 1 === typeof this.props.slideTime && 0 <= this.props.slideTime) ? this.props.slideTime : 500;
            let ulStyle = {
                width: (100 * this.props.data.length) + '%',
                transitionDuration: slidersTime + 'ms'
            };

            if (this.props.horizontal) {
                ulStyle = {
                    height: (100 * this.props.data.length) + '%',
                    transitionDuration: slidersTime + 'ms'
                };
            }

            let shouldDisplayDots = (typeof true === typeof this.props.dots && true === this.props.dots) ? true : false;
            let dots = this.generateDots();

            let shouldDisplayButton = true;

            if (this.props.end && 1 == this.numberToSlide) {
                shouldDisplayButton = false;
            }

            return (
                <div
                    id={masterId}
                    className={masterClass}
                    key={customKey()}
                    ref={node => this.node = node}
                    // Desktop friendly
                    onMouseUp={(e) => this.moveSiderEnd(e)}
                    // Devices friendly
                    onTouchEnd={(e) => this.moveSiderEnd(e)}
                >
                    <div className='react-divcreator-slider-holder'>
                        {
                            slidersContent &&
                            <ul className={this.props.horizontal ? 'react-divcreator-slider-ul-horizontal' : 'react-divcreator-slider-ul'}
                                style={ulStyle}
                                id={this.uniqueIdUl}
                                // Desktop friendly
                                onMouseDown={(e) => this.moveSiderStart(e)}
                                onMouseMove={this._onMouseMove.bind(this)}
                                // Devices friendly
                                onTouchStart={(e) => this.moveSiderStart(e)}
                                onTouchMove={this._onMouseMoveMD.bind(this)}
                                // CLick
                                onClick={(e) => this.handleSingleClick(e)}
                            >
                                {
                                    slidersContent
                                }
                            </ul>
                        }
                        {
                            shouldDisplayDots && dots &&
                            <div className='react-divcreator-slider-dots'>
                                <ul id={this.uniqueIdUlDots} className='react-divcreator-slider-dots-ul'>
                                    {
                                        dots
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                    {
                        this.state.displayButtons &&
                        <div
                            className={`${shouldDisplayButton ? '' : 'react-divcreator-slider-hide-button'} ${this.props.horizontal ? 'react-divcreator-slider-prev react-divcreator-slider-prev-horizontal' : 'react-divcreator-slider-prev'}`}
                            onClick={e => { this.slide('prev', true) }}
                            id={this.uniqueIdPrev}
                        >
                            <span className='react-divcreator-slider-prev-span'>
                                {
                                    prevButton
                                }
                            </span>
                        </div>
                    }
                    {
                        this.state.displayButtons &&
                        <div
                            className={this.props.horizontal ? 'react-divcreator-slider-next react-divcreator-slider-next-horizontal' : 'react-divcreator-slider-next'}
                            onClick={e => { this.slide('next', true) }}
                            id={this.uniqueIdNext}
                        >
                            <span className='react-divcreator-slider-next-span'>
                                {
                                    nextButton
                                }
                            </span>
                        </div>
                    }
                </div>
            );
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default slider;
