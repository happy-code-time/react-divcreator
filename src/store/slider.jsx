import React from 'react';

import { Cards, Slider } from '../../module/build/react-divcreator';

const consoleLog = (numberToSlide, action, customData) => {
    console.clear();
    console.info(numberToSlide, action, customData);
};

const sliderData = [
    {
        class: 'slider-example',
        description: 'Example with endless slider with auto slide each 5 seconds.',
        html: (
            <Slider
                id=''
                class='slider-example-1'
                end={false}
                slideTime={1000}
                dots={true}
                prevFunction={consoleLog}
                prevFunctionData={"button prev"}
                nextFunction={consoleLog}
                nextFunctionData={"button next"}
                dotsFunction={consoleLog}
                dotsFunctionData={"button dots"}
                animateSlider={true}
                animateSliderTime={5000}
                rebuildSliderAfter={1}
                animateSliderDirection='left'
                displayButtons={true}
                data={[
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    },
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    },
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    },
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    },
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    },
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    }
                ]}
            />
        ),
        cssCode: (
`.react-divcreator-slider{
    max-width:1024px;
    margin:0 auto;
    min-height:250px;
    height: auto;
    overflow: auto;
    clear:both;
    transition-duration:300ms;
}
.slider-example-1{
    width:100%;

    .react-divcreator-slider-next,
    .react-divcreator-slider-prev{
        width: 50px;
        height: 50px;
        top: calc(50% - 25px);
        line-height: 50px;
        transition-duration: 300ms;
        border-radius:50%;
        background:rgba(69,69,69,0.5);
        color:rgb(255,255,255);
        text-align:center;
    }
    .react-divcreator-slider-next:hover,
    .react-divcreator-slider-prev:hover{
        cursor: pointer;
    }
    .react-divcreator-slider-next{
        right:40px;
    }
    .react-divcreator-slider-prev{
        left:60px;
    }
    .react-divcreator-slider-next-horizontal,
    .react-divcreator-slider-prev-horizontal{
        -webkit-transform: rotateZ(90deg);
        -moz-transform: rotateZ(90deg);
        -o-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
    }

    .react-divcreator-slider-holder{
        height:100%;
        clear:both;
        border-radius:5px;

        .react-divcreator-slider-dots{
            width: auto;
            
            ul {
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
            }

            .react-divcreator-slider-dots-ul-li{
                border:1px solid rgb(63,162,242);
            }
            .react-divcreator-slider-dots-active{
                background: rgb(63,162,242);
            }
            .react-divcreator-slider-dots-ul-li:hover{
                background: rgb(63,162,242);
            }
        }

        .react-divcreator-slider-ul,
        .react-divcreator-slider-ul-horizontal{
            width:100%;
            height:100%;
        }
    }
}

@media screen and (min-width: 45rem){
    .react-divcreator-slider{
        height:200px
    }
}
@media screen and (min-width: 55rem){
    .react-divcreator-slider{
        height:300px
    }
}
@media screen and (min-width: 65rem){
    .react-divcreator-slider{
        height:400px
    }
}`
        ),
        reactCode: (
`import { Slider } from 'react-divcreator';

<Slider
    id=''
    class='slider-example-1'
    end={false}
    slideTime={1000}
    dots={true}
    prevFunction={consoleLog}
    prevFunctionData={"button prev"}
    nextFunction={consoleLog}
    nextFunctionData={"button next"}
    dotsFunction={consoleLog}
    dotsFunctionData={"button dots"}
    animateSlider={true}
    animateSliderTime={5000}
    rebuildSliderAfter={1}
    animateSliderDirection='left'
    displayButtons={true}
    data={[
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        },
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        },
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        },
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        },
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        },
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        }
    ]}
/>`
        ),
        jsCode: (
`const consoleLog = (numberToSlide, action, customData) => {
    console.clear();
    console.info(numberToSlide, action, customData);
};`
        )
    },
    {
        class: 'slider-example',
        description: 'Example with user interaction (on mouse move left and right), slider with end and with clickable dots.',
        html: (
            <Slider
                id=''
                class='slider-example-1-interaction'
                end={true}
                slideTime={1000}
                dots={true}
                // Move the slide with the mouse
                moveSlider={true}
                displayButtons={true}
                performance={true}
                // Slider speed movment
                sliderSpeed={10}
                data={[
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    },
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    },
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    },
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    },
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    },
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    }
                ]}
            />
        ),
        cssCode: (
`.react-divcreator-slider{
    max-width:1024px;
    margin:0 auto;
    min-height:250px;
    height: auto;
    overflow: auto;
    clear:both;
    transition-duration:300ms;
}
.slider-example-1-interaction{
    width:100%;

    .react-divcreator-slider-next,
    .react-divcreator-slider-prev{
        width: 50px;
        height: 50px;
        top: calc(50% - 25px);
        line-height: 50px;
        transition-duration: 300ms;
        border-radius:50%;
        background:rgba(69,69,69,0.5);
        color:rgb(255,255,255);
        text-align:center;
    }
    .react-divcreator-slider-next:hover,
    .react-divcreator-slider-prev:hover{
        cursor: pointer;
    }
    .react-divcreator-slider-next{
        right:40px;
    }
    .react-divcreator-slider-prev{
        left:60px;
    }
    .react-divcreator-slider-next-horizontal,
    .react-divcreator-slider-prev-horizontal{
        -webkit-transform: rotateZ(90deg);
        -moz-transform: rotateZ(90deg);
        -o-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
    }

    .react-divcreator-slider-holder{
        height:100%;
        clear:both;
        border-radius:5px;

        .react-divcreator-slider-dots{
            width: auto;
            
            ul {
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
            }

            .react-divcreator-slider-dots-ul-li{
                border:1px solid rgb(63,162,242);
            }
            .react-divcreator-slider-dots-active{
                background: rgb(63,162,242);
            }
            .react-divcreator-slider-dots-ul-li:hover{
                background: rgb(63,162,242);
            }
        }

        .react-divcreator-slider-ul,
        .react-divcreator-slider-ul-horizontal{
            width:100%;
            height:100%;
        }
    }
    .react-divcreator-slider-ul:hover{
        cursor: grab;
    }
    .react-divcreator-slider-ul:active{
        cursor: grabbing;
    }
}
@media screen and (min-width: 45rem){
    .react-divcreator-slider{
        height:200px
    }
}
@media screen and (min-width: 55rem){
    .react-divcreator-slider{
        height:300px
    }
}
@media screen and (min-width: 65rem){
    .react-divcreator-slider{
        height:400px
    }
}`
        ),
        reactCode: (
`import { Slider } from 'react-divcreator';

<Slider
    id=''
    class='slider-example-1-interaction'
    end={true}
    slideTime={1000}
    dots={true}
    animateSlider={true}
    animateSliderTime={5000}
    rebuildSliderAfter={5000}
    animateSliderDirection='left'
    // Move the slide with the mouse
    moveSlider={true}
    displayButtons={true}
    performance={true}
    sliderSpeed={10}
    data={[
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        },
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        },
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        },
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        },
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        },
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        }
    ]}
/>`
        ),
        jsCode: ''
    },
    {
        class: 'slider-example',
        description: 'Example with the "horizontal" slide direction (horizontal={true}), endless slide and with animated slide effect each 3 seconds.',
        html: (
            <Slider
                id=''
                class='slider-example-1 slider-example-horizontal'
                end={false}
                slideTime={1000}
                dots={true}
                horizontal={true}
                animateSlider={true}
                animateSliderTime={3000}
                rebuildSliderAfter={1}
                animateSliderDirection='left'
                data={[
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    },
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    },
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    },
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    },
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    },
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    }
                ]}
            />
        ),
        cssCode: (
`.react-divcreator-slider{
    max-width:1024px;
    margin:0 auto;
    min-height:250px;
    height: auto;
    overflow: auto;
    clear:both;
    transition-duration:300ms;
}
.slider-example-1{
    width:100%;

    .react-divcreator-slider-next,
    .react-divcreator-slider-prev{
        width: 50px;
        height: 50px;
        top: calc(50% - 25px);
        line-height: 50px;
        transition-duration: 300ms;
        border-radius:50%;
        background:rgba(69,69,69,0.5);
        color:rgb(255,255,255);
        text-align:center;
    }
    .react-divcreator-slider-next:hover,
    .react-divcreator-slider-prev:hover{
        cursor: pointer;
    }
    .react-divcreator-slider-next{
        right:40px;
    }
    .react-divcreator-slider-prev{
        left:60px;
    }
    .react-divcreator-slider-next-horizontal,
    .react-divcreator-slider-prev-horizontal{
        -webkit-transform: rotateZ(90deg);
        -moz-transform: rotateZ(90deg);
        -o-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
    }

    .react-divcreator-slider-holder{
        height:100%;
        clear:both;
        border-radius:5px;

        .react-divcreator-slider-dots{
            width: auto;
            
            ul {
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
            }

            .react-divcreator-slider-dots-ul-li{
                border:1px solid rgb(63,162,242);
            }
            .react-divcreator-slider-dots-active{
                background: rgb(63,162,242);
            }
            .react-divcreator-slider-dots-ul-li:hover{
                background: rgb(63,162,242);
            }
        }

        .react-divcreator-slider-ul,
        .react-divcreator-slider-ul-horizontal{
            width:100%;
            height:100%;
        }
    }
}
@media screen and (min-width: 45rem){
    .react-divcreator-slider{
        height:200px
    }
}
@media screen and (min-width: 55rem){
    .react-divcreator-slider{
        height:300px
    }
}
@media screen and (min-width: 65rem){
    .react-divcreator-slider{
        height:400px
    }
}`
        ),
        reactCode: (
`import { Slider } from 'react-divcreator';

<Slider
    id=''
    class='slider-example-1 slider-example-horizontal'
    end={false}
    slideTime={1000}
    dots={true}
    horizontal={true}
    animateSlider={true}
    animateSliderTime={3000}
    rebuildSliderAfter={1}
    animateSliderDirection='left'
    data={[
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        },
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        },
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        },
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        },
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        },
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        }
    ]}
/>`
        ),
        jsCode: ''
    },
    {
        class: 'slider-example',
        description: 'Example with the "horizontal" slide direction and user interaction (mouse move up and down).',
        html: (
            <Slider
                id=''
                class='slider-example-horizontal-interaction'
                end={false}
                slideTime={1000}
                dots={true}
                horizontal={true}
                // Move the slide with the mouse
                moveSlider={true}
                displayButtons={true}
                performance={true}
                data={[
                    {
                        data: (
                            <p>
                                My data inside the first slide
                            </p>
                        ),
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    },
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    },
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    },
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    },
                    {
                        data: (
                            <p>
                                My data inside the last slide
                            </p>
                        ),
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    }
                ]}
            />
        ),
        cssCode: (
`.react-divcreator-slider{
    max-width:1024px;
    margin:0 auto;
    min-height:250px;
    height: auto;
    overflow: auto;
    clear:both;
    transition-duration:300ms;
}
.slider-example-horizontal-interaction{
    width:100%;
    
    .react-divcreator-slider-next,
    .react-divcreator-slider-prev{
        width: 50px;
        height: 50px;
        top: calc(50% - 25px);
        line-height: 50px;
        transition-duration: 300ms;
        border-radius:50%;
        background:rgba(69,69,69,0.5);
        color:rgb(255,255,255);
        text-align:center;
    }
    .react-divcreator-slider-next:hover,
    .react-divcreator-slider-prev:hover{
        cursor: pointer;
    }
    .react-divcreator-slider-next{
        right:40px;
    }
    .react-divcreator-slider-prev{
        left:60px;
    }
    .react-divcreator-slider-next-horizontal,
    .react-divcreator-slider-prev-horizontal{
        -webkit-transform: rotateZ(90deg);
        -moz-transform: rotateZ(90deg);
        -o-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
    }

    .react-divcreator-slider-holder{
        height:100%;
        clear:both;
        border-radius:5px;

        .react-divcreator-slider-dots{
            width: auto;
            
            ul {
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
            }

            .react-divcreator-slider-dots-ul-li{
                border:1px solid rgb(63,162,242);
            }
            .react-divcreator-slider-dots-active{
                background: rgb(63,162,242);
            }
            .react-divcreator-slider-dots-ul-li:hover{
                background: rgb(63,162,242);
            }
        }

        .react-divcreator-slider-ul,
        .react-divcreator-slider-ul-horizontal{
            width:100%;
            height:100%;
        }
    }
}
.slider-example-horizontal-interaction:hover{
    cursor: grab;
}
.slider-example-horizontal-interaction:active{
    cursor: grabbing;
}
@media screen and (min-width: 45rem){
    .react-divcreator-slider{
        height:200px
    }
}
@media screen and (min-width: 55rem){
    .react-divcreator-slider{
        height:300px
    }
}
@media screen and (min-width: 65rem){
    .react-divcreator-slider{
        height:400px
    }
}`
        ),
        reactCode: (
`import { Slider } from 'react-divcreator';

<Slider
    id=''
    class='slider-example-horizontal-interaction'
    end={false}
    slideTime={1000}
    dots={true}
    horizontal={true}
    // Move the slide with the mouse
    moveSlider={true}
    displayButtons={true}
    performance={true}
    data={[
        {
            data: (
                <p>
                    My data inside the first slide
                </p>
            ),
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        },
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        },
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        },
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        },
        {
            data: (
                <p>
                    My data inside the last slide
                </p>
            ),
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        }
    ]}
/>`
        ),
        jsCode: ''
    },
    {
        class: 'slider-example',
        description: 'Example without animation, with "end" (its mean if the user is on the first slide, then the previous button not displayed, if the user on the last slide, then the next button not displayed) and with navigation dots on the left site.',
        html: (
            <Slider
                id=''
                class='slider-example-2'
                end={true}
                slideTime={1000}
                dots={true}
                displayButtons={true}
                data={[
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    },
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    },
                    {
                        src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                        backgroundOptions: {
                            backgroundSize: 'cover'
                        }
                    }
                ]}
            />
        ),
        cssCode: (
`.react-divcreator-slider{
    max-width:1024px;
    margin:0 auto;
    min-height:250px;
    height: auto;
    overflow: auto;
    clear:both;
    transition-duration:300ms;
}
.slider-example-2{
    width:100%;

    .react-divcreator-slider-next,
    .react-divcreator-slider-prev{
        width: 50px;
        height: 50px;
        top: calc(50% - 25px);
        line-height: 50px;
        transition-duration: 300ms;
        border-radius:50%;
        background:rgba(255,126,74,.8);
        color:rgb(255,255,255);
        text-align:center;
    }
    .react-divcreator-slider-next:hover,
    .react-divcreator-slider-prev:hover{
        cursor: pointer;
    }
    .react-divcreator-slider-next{
        right:40px;
    }
    .react-divcreator-slider-prev{
        left:60px;
    }

    .react-divcreator-slider-holder{
        height:100%;
        clear:both;

        .react-divcreator-slider-dots{
            width: 30px;
            left: 30px;
            bottom: auto;
            top: 20px;

            .react-divcreator-slider-dots-ul-li{
                border:1px solid rgba(252,126,74,.5);
            }
            .react-divcreator-slider-dots-active{
                background: rgb(252,126,74);
            }
            .react-divcreator-slider-dots-ul-li:hover{
                background: rgb(252,126,74);
            }
        }

        .react-divcreator-slider-ul{
            width:100%;
            height:100%;
        }
    }
}
@media screen and (min-width: 45rem){
    .react-divcreator-slider{
        height:200px
    }
}
@media screen and (min-width: 55rem){
    .react-divcreator-slider{
        height:300px
    }
}
@media screen and (min-width: 65rem){
    .react-divcreator-slider{
        height:400px
    }
}`
        ),
        reactCode: (
`import { Slider } from 'react-divcreator';

<Slider
    id=''
    class='slider-example-2'
    end={true}
    slideTime={1000}
    dots={true}
    displayButtons={true}
    data={[
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        },
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        },
        {
            src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
            backgroundOptions: {
                backgroundSize: 'cover'
            }
        }
    ]}
/>`
        ),
        jsCode: ''
    },
    {
        class: 'slider-example',
        description: 'Example with 3 cards in each slide, slideValue={25}, slideVector={"%"} - its mean slide the slider with 25% foreach item in the current slide. countInSingleData={3} - its mean after 3 clicks (prev or next), the slider should change to the (ext, prev) slide.',
        html: (
            <Slider
                id=''
                class='slider-example-3'
                end={false}
                slideTime={1000}
                dots={false}
                animateSlider={false}
                prevButton={'<<'}
                nextButton={'>>'}
                slideValue={25} // or false
                slideVector={'%'} // or px
                countInSingleData={3}
                displayButtons={true}
                data={[
                    {
                        data: (
                            <span className='slider-cards-holder-span'>
                                <Cards
                                    id=''
                                    class='slider-cards'
                                    align={4}
                                    link={true}
                                    graph={true}
                                    border={true}
                                    data=
                                    {
                                        [
                                            {
                                                title: "Lorem Ipsum",
                                                path: "/src/static/images/angry-bird-2234295_1920.jpg",
                                                alt: 'img',
                                                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
                                                hrefTitle: 'Navigate to the type: cards',
                                                href: "/components/slider",
                                                data: ''
                                            },
                                            {
                                                title: "Lorem Ipsum",
                                                path: "/src/static/images/angry-bird-2234295_1920.jpg",
                                                alt: 'img',
                                                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
                                                hrefTitle: 'Navigate to the type: cards',
                                                href: "/components/slider",
                                                data: ''
                                            },
                                            {
                                                title: "Lorem Ipsum",
                                                path: "/src/static/images/angry-bird-2234295_1920.jpg",
                                                alt: 'img',
                                                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
                                                hrefTitle: 'Navigate to the type: cards',
                                                href: "/components/slider",
                                                data: ''
                                            }
                                        ]
                                    }
                                />
                            </span>
                        )
                    },
                    {
                        data: (
                            <span className='slider-cards-holder-span'>
                                <Cards
                                    id=''
                                    class='slider-cards'
                                    align={4}
                                    link={true}
                                    graph={true}
                                    border={true}
                                    data=
                                    {
                                        [
                                            {
                                                title: "Lorem Ipsum",
                                                path: "/src/static/images/angry-bird-2234295_1920.jpg",
                                                alt: 'img',
                                                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
                                                hrefTitle: 'Navigate to the type: cards',
                                                href: "/components/slider",
                                                data: ''
                                            },
                                            {
                                                title: "Lorem Ipsum",
                                                path: "/src/static/images/angry-bird-2234295_1920.jpg",
                                                alt: 'img',
                                                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
                                                hrefTitle: 'Navigate to the type: cards',
                                                href: "/components/slider",
                                                data: ''
                                            },
                                            {
                                                title: "Lorem Ipsum",
                                                path: "/src/static/images/angry-bird-2234295_1920.jpg",
                                                alt: 'img',
                                                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
                                                hrefTitle: 'Navigate to the type: cards',
                                                href: "/components/slider",
                                                data: ''
                                            }
                                        ]
                                    }
                                />
                            </span>
                        )
                    }
                ]}
            />
        ),
        cssCode: (
`.react-divcreator-slider{
    max-width:1024px;
    margin:0 auto;
    min-height:250px;
    height: auto;
    overflow: auto;
    clear:both;
    transition-duration:300ms;
}
.slider-example-3{
    max-width: 800px;
    max-height:300px;
    width:100%;
    box-sizing: border-box;
    padding:20px;
    overflow: visible;
    border-radius:5px;

    .react-divcreator-slider-holder{
        height:100%;
    }

    .react-divcreator-slider-next,
    .react-divcreator-slider-prev{
        width: 50px;
        height: 50px;
        top: calc(50% - 25px);
        line-height: 50px;
        transition-duration: 300ms;
        background-color:rgba(222,222,222,.5);
        color:rgba(69,69,69, .6);
        transition-duration: 200ms;
        box-shadow:3px 4px 4px rgba(99,99,99,.4);
        font-size:16px;
        text-align:center;
        border-radius:50%;
    }

    .react-divcreator-slider-next:hover,
    .react-divcreator-slider-prev:hover{
        cursor: pointer;
    }

    .react-divcreator-slider-next{
        @media screen and (min-width: 65rem){
            right:-30px;
        }
        right:-15px;
    }
    .react-divcreator-slider-prev{
        @media screen and (min-width: 65rem){
            left:-30px;
        }
        left:-15px;
    }

    .react-divcreator-slider-holder{
        height:100%;
        clear:both;

        .react-divcreator-slider-ul{
            width:100%;
            height:100%;

            .slider-cards-holder-span{
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                height:100%;

                .slider-cards{
                    @media screen and (min-width: 65rem){
                        width:100%;
                        margin:0%;
                    }
                    width:95%;
                    height:100%;
                    margin:0 2.5%;

                    .react-divcreator-cards__single-card{
                        max-width: 90%;
                    }

                    a{
                        text-decoration:none;
                    }
                    .react-divcreator-cards-title-span{
                        color:rgba(69,69,69,.6);
                    }
                    .react-divcreator-cards-description-span{
                        color:rgba(69,69,69,.5);
                    }
                }
            }
        }
        .react-divcreator-slider-ul:hover{
            cursor: grab;
        }
        .react-divcreator-slider-ul:active{
            cursor: grabbing;
        }
    }
}
@media screen and (min-width: 45rem){
    .react-divcreator-slider{
        height:200px
    }
}
@media screen and (min-width: 55rem){
    .react-divcreator-slider{
        height:300px
    }
}
@media screen and (min-width: 65rem){
    .react-divcreator-slider{
        height:400px
    }
}`
        ),
        reactCode: (
`import { Slider } from 'react-divcreator';

<Slider
    id=''
    class='slider-example-4'
    end={false}
    slideTime={1000}
    dots={false}
    animateSlider={false}
    slideValue={25} // or false
    slideVector={'%'} // or px
    countInSingleData={3}
    prevButton={'<<'}
    nextButton={'>>'}
    displayButtons={true}
    data={[
        {
            data: (
                <span className='slider-cards-holder-span'>
                    <Cards
                        id=''
                        class='slider-cards'
                        align={4}
                        link={true}
                        graph={true}
                        border={true}
                        data=
                        {
                            [
                                {
                                    title: "Lorem Ipsum",
                                    path: "/src/static/images/angry-bird-2234295_1920.jpg",
                                    alt: 'img',
                                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
                                    hrefTitle: 'Navigate to the type: cards',
                                    href: "/components/slider",
                                    data: ''
                                },
                                {
                                    title: "Lorem Ipsum",
                                    path: "/src/static/images/angry-bird-2234295_1920.jpg",
                                    alt: 'img',
                                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
                                    hrefTitle: 'Navigate to the type: cards',
                                    href: "/components/slider",
                                    data: ''
                                },
                                {
                                    title: "Lorem Ipsum",
                                    path: "/src/static/images/angry-bird-2234295_1920.jpg",
                                    alt: 'img',
                                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
                                    hrefTitle: 'Navigate to the type: cards',
                                    href: "/components/slider",
                                    data: ''
                                }
                            ]
                        }
                    />
                </span>
            )
        },
        {
            data: (
                <span className='slider-cards-holder-span'>
                    <Cards
                        id=''
                        class='slider-cards'
                        align={4}
                        link={true}
                        graph={true}
                        border={true}
                        data=
                        {
                            [
                                {
                                    title: "Lorem Ipsum",
                                    path: "/src/static/images/angry-bird-2234295_1920.jpg",
                                    alt: 'img',
                                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
                                    hrefTitle: 'Navigate to the type: cards',
                                    href: "/components/slider",
                                    data: ''
                                },
                                {
                                    title: "Lorem Ipsum",
                                    path: "/src/static/images/angry-bird-2234295_1920.jpg",
                                    alt: 'img',
                                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
                                    hrefTitle: 'Navigate to the type: cards',
                                    href: "/components/slider",
                                    data: ''
                                },
                                {
                                    title: "Lorem Ipsum",
                                    path: "/src/static/images/angry-bird-2234295_1920.jpg",
                                    alt: 'img',
                                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
                                    hrefTitle: 'Navigate to the type: cards',
                                    href: "/components/slider",
                                    data: ''
                                }
                            ]
                        }
                    />
                </span>
            )
        }
    ]}
/>`
        ),
        jsCode: ''
    }
];

const sliderKeys = [
    {
        key: 'id',
        description: 'String - Custom id of root element.'
    },
    {
        key: 'class',
        description: 'String - Custom classname of root element.'
    },
    {
        key: 'performance',
        description: "Boolean - If true then the time between module's initialisation (in modules constructor) and after the render function called (in componentDidMount) are logged to the console."
    },
    {
        key: 'moveSlider',
        description: "Boolean - If true then activate the user mouse move interaction on keyDown + mouseMove.",
    },
    {
        key: 'end',
        description: 'Boolean - Should the slider "end". Its mean if the user is on the first slide, then the previous button not displayed, if the user on the last slide, then the next button not displayed.'
    },
    {
        key: 'slideTime',
        description: 'Numeric - The time (in ms) it takes, to slide to the next/ previous slide.'
    },
    {
        key: 'displayButtons',
        description: 'Boolean - Display the previous and next button or not.'
    },
    {
        key: 'dots',
        description: 'Boolean - Should display dots with slide animation on click.'
    },
    {
        key: 'horizontal',
        description: 'Boolean - activate the horizontally slider direction.'
    },
    {
        key: 'animateSlider',
        description: 'Boolean - Should the slider start automatically to slide itself after the page are loaded.'
    },
    {
        key: 'rebuildSliderAfter',
        description: 'Number - If the user clicks the prev, next, dots button or slide with the mouse the content of the slider and the key animateSlider={true} then rebuild the auto slide effect after this time (ms).'
    },
    {
        key: 'animateSliderDirection',
        description: 'String - If the key animateSlider={true} then slide the childs to the direction left or right. Available directions: "left" and "right".'
    },
    {
        key: 'prevButton',
        description: 'Mixed - Custom developers JSX as previous button.'
    },
    {
        key: 'prevFunction',
        description: 'Function - custom developers data when the button "prev" are clicked.'
    },
    {
        key: 'prevFunctionData',
        description: 'Mixed - custom developers data passed to the function "prevFunctionData" as last argument.'
    },
    {
        key: 'nextButton',
        description: 'Mixed - Custom developers JSX as next button.'
    },
    {
        key: 'nextFunction',
        description: 'Function - custom developers data when the button "next" are clicked.'
    },
    {
        key: 'nextFunctionData',
        description: 'Mixed - custom developers data passed to the function "nextFunctionData" as last argument.'
    },
    {
        key: 'dotsFunction',
        description: 'Function - custom developers data when the "dots" are clicked.'
    },
    {
        key: 'dotsFunctionData',
        description: 'Mixed - custom developers data passed to the function "dotsFunction" as last argument.'
    },
    {
        key: 'Custom slide value',
        description: ''
    },
    {
        key: 'slideValue',
        description: 'Number - If the user click the prev, next or dot button then slide the childs with this value.'
    },
    {
        key: 'slideVector',
        description: 'String - If slideValue are setted (value is not: 0, null, false) then this value are used as vector. Available types: px" and "%"'
    },
    {
        key: 'countInSingleData',
        description: 'Number - Needed for dots calculation/ animation and slide animation if the slider has for example: 3 cards in each single slide.'
    },
    {
        key: 'sliderSpeed',
        description: 'If the sliders key configuration are "moveSlider={true}" and "horizontal={false}" then if the user slides to the left or right, then the movement speed can be slowed down or speed up with this value.',
        type: 'Integer'
    },
    {
        key: 'data',
        description: 'Array - Array of objects. Each object take only one key: data.'
    },
    {
        key: 'data.data',
        description: 'Mixed - Developers custom JSX/ HTML data. If src are provided then the data are pushed in front of the image and the image has an zIndex -1.'
    },
    {
        key: 'data.src',
        description: 'String - Sliders image source used as background-image.'
    },
    {
        key: 'data.backgroundOptions',
        description: 'String - Sliders image backgrounds inline style options.'
    }
]

export {
    sliderData,
    sliderKeys
};