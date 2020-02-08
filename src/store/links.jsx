import React from 'react';

import { Links, Stars } from '../../module/build/react-divcreator';

const consoleLog = (event, itemObject, callbackData) => {
    console.clear();
    console.info("EVENT");
    console.info(event);
    console.info("ITEM AS OBJECT");
    console.info(itemObject);
    console.info("DEVELOPERS CUSTOM DATA");
    console.info(callbackData);
}

const facebookFunction = () => {
    console.info("FACEBOOK icon clicked");
}
const heartFunction = () => {
    console.info("HEART icon clicked");
}
const saveData = (event, starCount, readOnly, customData = "") => {
    console.info(starCount, customData);
}
const linksData = [
    {
        class: '',
        description: 'Example with links={false} and onClick callback function. If you open your console, you will see the onClick event results.',
        html: (
            <Links
                id=""
                class=""
                link={false}
                performance={true}
                data={
                    [
                        {
                            id: 'item-1',
                            image: '/src/static/images/finger-2081169.jpg',
                            title: 'My custom title of this single link',
                            customImageData: (
                                <div>
                                    <p>
                                        Custom developers data
                                    </p>
                                </div>
                            ),
                            customDescData: (
                                <p>
                                    Lorem ipsum dolor sit amet, vis luptatum imperdiet id, his in fugit putant adipiscing. Ex est audire facilisis. Dicunt iisque vim ut, paulo cetero copiosae an his.
                                </p>
                            ),
                            customFooterData: (
                                <div className="icons">
                                    <i className="fab fa-facebook-square" onClick={facebookFunction}></i>
                                    <i className="fas fa-heart" onClick={heartFunction}></i>
                                    <Stars
                                        id=''
                                        class='stars'
                                        function={saveData}
                                        functionData={["a"]}
                                        direction='left'
                                        data={
                                            [
                                                {
                                                    site: 'right',
                                                    count: 1,
                                                    filled: 0,
                                                    dataEachStar: [],
                                                    readOnly: false
                                                }
                                            ]
                                        }
                                    />
                                </div>
                            )
                        },
                        {
                            id: 'item-2',
                            image: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                            title: 'My custom title of this single link',
                            customImageData: (
                                <div>
                                    <p>
                                        Custom developers data
                                    </p>
                                </div>
                            ),
                            customDescData: (
                                <div className="my-custom-link-data">
                                    <p>
                                        Lorem ipsum dolor sit amet, vis luptatum imperdiet id, his in fugit putant adipiscing. Ex est audire facilisis. Dicunt iisque vim ut, paulo cetero copiosae an his.
                                    </p>
                                </div>
                            ),
                            customFooterData: (
                                <div className="icons">
                                    <i className="fab fa-facebook-square" onClick={facebookFunction}></i>
                                    <i className="fas fa-heart" onClick={heartFunction}></i>
                                    <Stars
                                        id=''
                                        class='stars'
                                        function={saveData}
                                        functionData={["a"]}
                                        direction='left'
                                        data={
                                            [
                                                {
                                                    site: 'right',
                                                    count: 1,
                                                    filled: 0,
                                                    dataEachStar: [],
                                                    readOnly: false
                                                }
                                            ]
                                        }
                                    />
                                </div>
                            )
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.divcreator-links-holder{
    max-width: 1140px;
    margin:0 auto;
}
.divcreator-links-single-link{
    .divcreator-links-single-link-data{
        div{
            position: absolute;
            width:100%;
            height:30px;
            bottom:0;
            left:0;
            background:rgb(39,39,39);

            p{
                text-align:center;
                line-height:30px;
                color:rgb(255,255,255);
            }
        }
    }
    .divcreator-links-single-link-title{
        min-height:60px;
        line-height:60px;

        p{
            font-size:18px;
            color:rgba(69,69,69,.7);
        }
    }
    .divcreator-links-single-link-description{
        font-size:18px;
        color:rgba(69,69,69,.5);
        text-align: justify;
    }
    .icons{
        max-width: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: 0 auto;

        i{
            font-size:21px;
            transition-duration:300ms;
        }
        i:hover{
            transform: scale(1.2);
            cursor: pointer;
        }
        .fa-facebook-square{
            color:dodgerblue;
        }
        .fa-heart{
            color:#F44559;
        }
        .divcreator-stars-single-stars-span{
            transform: scale(1);
            box-sizing: border-box;
            color: gold;
            transition-duration: 300ms;
        }
        .divcreator-stars-single-stars-span:hover{
            transform: scale(1.1);
        }
        .read-only-mode-off-not-filled:hover:before,
        .read-only-mode-off-not-filled:hover,
        .read-only-mode-off-filled:hover,
        .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-not-filled:before,
        .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-filled:before,
        .read-only-mode-off-filled:hover ~ .read-only-mode-off-filled:before,
        .read-only-mode-off-filled:hover ~ .read-only-mode-off-not-filled:before{
            color: gold;
        }
    }
}`
        ),
        reactCode: (
`import { Links, Stars } from 'react-divcreator';
            
<Links
    id=""
    class="my-link-example-1"
    link={false}
    performance={true}
    data={
        [
            {
                id: 'item-1',
                image: '/src/static/images/finger-2081169.jpg',
                title: 'My custom title of this single link',
                customImageData: (
                    <div>
                        <p>
                            Custom developers data
                        </p>
                    </div>
                ),
                customDescData: (
                    <p>
                        Lorem ipsum dolor sit amet, vis luptatum imperdiet id, his in fugit putant adipiscing. 
                        Ex est audire facilisis. Dicunt iisque vim ut, paulo cetero copiosae an his.
                    </p>
                ),
                customFooterData: (
                    <div className="icons">
                        <i className="fab fa-facebook-square" onClick={facebookFunction}></i>
                        <i className="fas fa-heart" onClick={heartFunction}></i>
                        <Stars
                            id=''
                            class='stars'
                            function={saveData}
                            functionData={["a"]}
                            direction='left'
                            data={
                                [
                                    {
                                        site: 'right',
                                        count: 1,
                                        filled: 0,
                                        dataEachStar: [],
                                        readOnly: false
                                    }
                                ]
                            }
                        />
                    </div>
                )
            },
            {
                id: 'item-2',
                image: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                title: 'My custom title of this single link',
                customImageData: (
                    <div>
                        <p>
                            Custom developers data
                        </p>
                    </div>
                ),
                customDescData: (
                    <div className="my-custom-link-data">
                        <p>
                            Lorem ipsum dolor sit amet, vis luptatum imperdiet id, his in fugit putant adipiscing. 
                            Ex est audire facilisis. Dicunt iisque vim ut, paulo cetero copiosae an his.
                        </p>
                    </div>
                ),
                customFooterData: (
                    <div className="icons">
                        <i className="fab fa-facebook-square" onClick={facebookFunction}></i>
                        <i className="fas fa-heart" onClick={heartFunction}></i>
                        <Stars
                            id=''
                            class='stars'
                            function={saveData}
                            functionData={["a"]}
                            direction='left'
                            data={
                                [
                                    {
                                        site: 'right',
                                        count: 1,
                                        filled: 0,
                                        dataEachStar: [],
                                        readOnly: false
                                    }
                                ]
                            }
                        />
                    </div>
                )
            }
        ]
    }
/>`
        ),
        jsCode: (
`const facebookFunction = () => {
    console.info("FACEBOOK icon clicked");
}
const heartFunction = () => {
    console.info("HEART icon clicked");
}
const saveData = (event, starCount, readOnly, customData = "") => {
    console.info(starCount, customData);
}`
        )
    },
    {
        class: 'links-example-2',
        description: 'Example with links={true} and onClick callback function. If you open your console, you will see the onClick event results.',
        html: (
            <Links
                id=""
                class="my-link-example-2"
                link={false}
                performance={true}
                data={
                    [
                        {
                            id: 'item-1',
                            image: '/src/static/images/businessman-3213659_1920.jpg',
                            title: 'My custom title of this single link',
                            customImageData: (
                                <div>
                                    <p>
                                        Custom developers data
                                    </p>
                                </div>
                            ),
                            customDescData: (
                                <p>
                                        Lorem ipsum dolor sit amet, vis luptatum imperdiet id, his in fugit putant adipiscing. Ex est audire facilisis. Dicunt iisque vim ut, paulo cetero copiosae an his.
                                        Lorem ipsum dolor sit amet, vis luptatum imperdiet id, his in fugit putant adipiscing. Ex est audire facilisis. Dicunt iisque vim ut, paulo cetero copiosae an his.
                                </p>
                            ),
                            isLink: true,
                            href: '#/components/links',
                            callback: consoleLog,
                            callbackData: [1, 2, 3]
                        },
                        {
                            id: 'item-2',
                            image: '/src/static/images/art-materials-art-supplies-blocks-1148496.jpg',
                            title: 'My custom title of this single link',
                            customImageData: (
                                <div>
                                    <p>
                                        Custom developers data
                                    </p>
                                </div>
                            ),
                            customDescData: (
                                <div className="my-custom-link-data">
                                    <p>
                                        Lorem ipsum dolor sit amet, vis luptatum imperdiet id, his in fugit putant adipiscing. Ex est audire facilisis. Dicunt iisque vim ut, paulo cetero copiosae an his.
                                        Lorem ipsum dolor sit amet, vis luptatum imperdiet id, his in fugit putant adipiscing. Ex est audire facilisis. Dicunt iisque vim ut, paulo cetero copiosae an his.
                                    </p>
                                </div>
                            ),
                            isLink: true,
                            href: '#/components/links',
                            callback: consoleLog,
                            callbackData: [1, 2, 3]
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.divcreator-links-holder{
    max-width: 1140px;
    margin:0 auto;
}
.divcreator-links-single-link{
    .divcreator-links-single-link-data{
        div{
            position: absolute;
            width:100%;
            height:30px;
            bottom:0;
            left:0;
            background:rgb(39,39,39);

            p{
                text-align:center;
                line-height:30px;
                color:rgb(255,255,255);
            }
        }
    }
    .divcreator-links-single-link-title{
        min-height:60px;
        line-height:60px;

        p{
            font-size:18px;
            color:rgba(69,69,69,.7);
        }
    }
    .divcreator-links-single-link-description{
        font-size:18px;
        color:rgba(69,69,69,.5);
        text-align: justify;
    }
    .icons{
        max-width: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: 0 auto;

        i{
            font-size:21px;
            transition-duration:300ms;
        }
        i:hover{
            transform: scale(1.2);
            cursor: pointer;
        }
        .fa-facebook-square{
            color:dodgerblue;
        }
        .fa-heart{
            color:#F44559;
        }
        .divcreator-stars-single-stars-span{
            transform: scale(1);
            box-sizing: border-box;
            color: gold;
            transition-duration: 300ms;
        }
        .divcreator-stars-single-stars-span:hover{
            transform: scale(1.1);
        }
        .read-only-mode-off-not-filled:hover:before,
        .read-only-mode-off-not-filled:hover,
        .read-only-mode-off-filled:hover,
        .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-not-filled:before,
        .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-filled:before,
        .read-only-mode-off-filled:hover ~ .read-only-mode-off-filled:before,
        .read-only-mode-off-filled:hover ~ .read-only-mode-off-not-filled:before{
            color: gold;
        }
    }
}`
        ),
        reactCode: (
`import { Links, Stars } from 'react-divcreator';

<Links
    id=""
    class="my-link-example-2"
    link={false}
    performance={true}
    data={
        [
            {
                id: 'item-1',
                image: '/src/static/images/businessman-3213659_1920.jpg',
                title: 'My custom title of this single link',
                customImageData: (
                    <div>
                        <p>
                            Custom developers data
                        </p>
                    </div>
                ),
                customDescData: (
                    <p>
                            Lorem ipsum dolor sit amet, vis luptatum imperdiet id, his in fugit putant adipiscing. 
                            Ex est audire facilisis. Dicunt iisque vim ut, paulo cetero copiosae an his.
                            Lorem ipsum dolor sit amet, vis luptatum imperdiet id, his in fugit putant adipiscing. 
                            Ex est audire facilisis. Dicunt iisque vim ut, paulo cetero copiosae an his.
                    </p>
                ),
                isLink: true,
                href: '/components/links',
                callback: consoleLog,
                callbackData: [1, 2, 3]
            },
            {
                id: 'item-2',
                image: '/src/static/images/art-materials-art-supplies-blocks-1148496.jpg',
                title: 'My custom title of this single link',
                customImageData: (
                    <div>
                        <p>
                            Custom developers data
                        </p>
                    </div>
                ),
                customDescData: (
                    <div className="my-custom-link-data">
                        <p>
                            Lorem ipsum dolor sit amet, vis luptatum imperdiet id, his in fugit putant adipiscing. 
                            Ex est audire facilisis. Dicunt iisque vim ut, paulo cetero copiosae an his.
                            Lorem ipsum dolor sit amet, vis luptatum imperdiet id, his in fugit putant adipiscing. 
                            Ex est audire facilisis. Dicunt iisque vim ut, paulo cetero copiosae an his.
                        </p>
                    </div>
                ),
                isLink: true,
                href: '/components/links',
                callback: consoleLog,
                callbackData: [1, 2, 3]
            }
        ]
    }
/>`
        ),
        jsCode: (
`
const consoleLog = (event, itemObject, callbackData) => {
    console.info("EVENT");
    console.info(event);
    console.info("ITEM AS OBJECT");
    console.info(itemObject);
    console.info("DEVELOPERS CUSTOM DATA");
    console.info(callbackData);
}`
        )
    }
];

const linksKeys = [
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
        key: 'link',
        description: 'Boolean - Should use the Link method from the package "react-router-dom", if false then use standard tag "a".'
    },
    {
        key: 'data',
        description: 'Array - of objects.'
    },
    {
        key: 'data.id',
        description: 'String - each item can have an unique id.'
    },
    {
        key: 'data.image',
        description: 'String - path to the image.'
    },
    {
        key: 'data.title',
        description: 'String - title.'
    },
    {
        key: 'data.customImageData',
        description: 'Object - custom developers jsx inside the image div.'
    },
    {
        key: 'data.customDescData',
        description: 'Object - custom developers jsx inside the description div.'
    },
    {
        key: 'data.isLink',
        description: 'Boolean - should the Link be an link or just an div.'
    },
    {
        key: 'data.href',
        description: 'String - target href (path) for the Link/a tag.'
    },
    {
        key: 'data.callback',
        description: 'Function - Callback function defined by the developer. 1 argument is the click event, 2 argument is the id of single Link/a tag, 3 argument is the target href, 4 argument is the displayed text, 5 argument is the custom data defined by the developer.'
    },
    {
        key: 'data.callbackCustomData',
        description: 'Mixed - Developers custom data.'
    }
]

export {
    linksData,
    linksKeys
};

