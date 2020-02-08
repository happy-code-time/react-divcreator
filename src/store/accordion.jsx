import React from 'react';

import { Accordion } from '../../module/build/react-divcreator';

const consoleLog = (event, accordionSingleEntry, customData) => {
    console.clear();
    console.info(event);
    console.info(accordionSingleEntry);
    console.info(customData);
};

const mainDescription = 'Notice that the Accordion module has no limits in child nesting. Each element, if toggled, becomes an class "opened".';
const accordionData = [
    {
        class: '',
        description: 'Example x 3 nested childs. This example has the key animation={true}, animationType={"height"} and keepOpen={false} - its mean do close recursively all toggled elements except the current clicked.',
        html: (
            <Accordion
                class='accordion-example-1'
                animation={true}
                animationTime={0}
                animationType={'height'} // 'height', 'scale'
                keepOpen={false}
                data={[
                    {
                        title: 'Accordion 1',
                        childs: [
                            {
                                description: 
                                `   Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                `,
                            }
                        ]
                    },
                    {
                        title: 'Accordion 2',
                        childs: [
                            {
                                description: 
                                `   Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                `
                            }
                        ]
                    },
                    {
                        title: 'Accordion 3',
                        childs: [
                            {
                                description: 
                                `   Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                `
                            }
                        ]
                    }
                ]}
            />
        ),
        cssCode: (
`.accordion-example-1{
    margin:0 auto;
    max-width: 70%;
    position: absolute;
    top:0;
    left:15%;
    padding:0;

    .parent{
        border-radius:0px;
        position: relative;
    }
    .react-divcreator-accordion__single-title{
        padding:0px 10px;
    }
    .parent-div-has-childs:after{
        content: '\\002B';
        color:#777;
        font-weight: bold;
        float: right;
        margin-left: 5px;
        position: absolute;
        top:10px;
        right:20px;
    }

    .parent-div{
        background-color: #eee;
        transition-duration: 300ms;
    }

    .child-has-childs:hover,
    .react-divcreator-accordion__single-content.opened{
        background-color: #ccc;
    }
    .parent-div-no-childs{
        padding:0;
        background-color: transparent;
    }

    .react-divcreator-accordion__single-title,
    .react-divcreator-accordion__single-description{
        box-sizing: border-box;
        padding:10px 0;
    }    
}`
        ),
        reactCode: (
`import { Accordion } from 'react-divcreator';

<Accordion
    class='accordion-example-1'
    animation={true}
    animationTime={0}
    animationType={'height'} // 'height', 'scale'
    data={[
        {
            title: 'Accordion 1',
            childs: [
                {
                    description: 
                    \`   Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    \`,
                }
            ]
        },
        {
            title: 'Accordion 2',
            childs: [
                {
                    description: 
                    \`   Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    \`
                }
            ]
        },
        {
            title: 'Accordion 3',
            childs: [
                {
                    description: 
                    \`   Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    \`
                }
            ]
        }
    ]}
/>`
        ),
        jsCode: (
`const consoleLog = (event, accordionSingleEntry, customData) => {
    console.clear();
    console.info(event);
    console.info(accordionSingleEntry);
    console.info(customData);
};`
        )
    },
    {
        class: '',
        description: 'Example x 3 nested childs. This example has animationType={"scale"} (not defined then the default value is "scale") and keepOpen={false} - its mean do close recursively all toggled elements except the current clicked.',
        html: (
            <Accordion
                performance={true}
                animation={true}
                animationTime={0}
                activateDots={false}
                border={true}
                keepOpen={false}
                animationType={'scale'}
                data={[
                    {
                        title: (<span>Accordion 1 <i className="fas fa-chevron-down" /></span>),
                        description: "Custom description here",
                        customData: "",
                        attributes: {
                            title: 'This is the Accordion 1'
                        },
                        class: '',
                        function: consoleLog,
                        functionData: 'Accordion 1 clicked',
                        childs: [
                            {
                                title: (<span>Accordion nested 1 <i className="fas fa-chevron-down" /></span>),
                                description: "Custom description herea",
                                customData: "",
                                attributes: {
                                    title: 'This is the Accordion nested x 1'
                                },
                                class: '',
                                childs: [
                                    {
                                        title: "Accordion nested x 2",
                                        description: "Custom description here",
                                        customData: "",
                                        attributes: {
                                            title: 'This is the Accordion nested x 2'
                                        }
                                    },
                                    {
                                        title: "Accordion nested x 2",
                                        description: "Custom description here",
                                        customData: "",
                                        attributes: {
                                            title: 'This is the Accordion nested x 2'
                                        }
                                    }
                                ]
                            },
                            {
                                title: (<span>Accordion nested 1 <i className="fas fa-chevron-down" /></span>),
                                description: "Custom description herea",
                                customData: "",
                                attributes: {
                                    title: 'This is the Accordion nested x 1'
                                },
                                class: '',
                                childs: [
                                    {
                                        title: (<span>Accordion nested x 2 <i className="fas fa-chevron-down" /></span>),
                                        description: "Custom description here",
                                        customData: "",
                                        attributes: {
                                            title: 'This is the Accordion nested x 2'
                                        },
                                        childs: [
                                            {
                                                title: "Accordion nested x 3",
                                                description: "Custom description here",
                                                customData: "",
                                                attributes: {
                                                    title: 'This is the Accordion nested x 3'
                                                }
                                            },
                                            {
                                                title: "Accordion nested x 3",
                                                description: "Custom description here",
                                                customData: "",
                                                attributes: {
                                                    title: 'This is the Accordion nested x 3'
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: (<span>Accordion 2 <i className="fas fa-chevron-down" /></span>),
                        description: "Custom description here 2",
                        customData: '',
                        class: '',
                        function: consoleLog,
                        functionData: 'Accordion 2 clicked',
                        childs: [
                            {
                                title: (<span>Accordion nested 2a <i className="fas fa-chevron-down" /></span>),
                                description: "Custom description herea",
                                customData: "",
                                attributes: {
                                    title: 'This is the Accordion nested 2a'
                                },
                                class: '',
                                childs: [
                                    {
                                        title: "Accordion nestedx2a",
                                        description: "Custom description here",
                                        customData: "",
                                        attributes: {
                                            title: 'This is the Accordion nestedx2a'
                                        }
                                    },
                                    {
                                        title: "Accordion nestedx2a",
                                        description: "Custom description here",
                                        customData: "",
                                        attributes: {
                                            title: 'This is the Accordion nestedx2a'
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
                }
            />
        ),
        cssCode: (
`.react-divcreator-accordion{
    max-width:1024px;
    margin:0 auto;
    min-width: 50%;
}

.parent{
    padding:5px 10px;
}

.child-children{
    margin-left: 10px;
    padding-left: 10px;
}

.react-divcreator-accordion__single-title,
.react-divcreator-accordion__single-description{
    box-sizing: border-box;
    padding:10px 0;
}`
        ),
        reactCode: (
`import { Accordion } from 'react-divcreator';

<Accordion
    performance={true}
    animation={true}
    animationTime={0}
    activateDots={false}
    border={true}
    keepOpen={false}
    animationType={'scale'}
    data={[
        {
            title: (<span>Accordion 1 <i className="fas fa-chevron-down" /></span>),
            description: "Custom description here",
            customData: "",
            attributes: {
                title: 'This is the Accordion 1'
            },
            class: '',
            function: consoleLog,
            functionData: 'Accordion 1 clicked',
            childs: [
                {
                    title: (<span>Accordion nested 1 <i className="fas fa-chevron-down" /></span>),
                    description: "Custom description herea",
                    customData: "",
                    attributes: {
                        title: 'This is the Accordion nested x 1'
                    },
                    class: '',
                    childs: [
                        {
                            title: "Accordion nested x 2",
                            description: "Custom description here",
                            customData: "",
                            attributes: {
                                title: 'This is the Accordion nested x 2'
                            }
                        },
                        {
                            title: "Accordion nested x 2",
                            description: "Custom description here",
                            customData: "",
                            attributes: {
                                title: 'This is the Accordion nested x 2'
                            }
                        }
                    ]
                },
                {
                    title: (<span>Accordion nested 1 <i className="fas fa-chevron-down" /></span>),
                    description: "Custom description herea",
                    customData: "",
                    attributes: {
                        title: 'This is the Accordion nested x 1'
                    },
                    class: '',
                    childs: [
                        {
                            title: (<span>Accordion nested x 2 <i className="fas fa-chevron-down" /></span>),
                            description: "Custom description here",
                            customData: "",
                            attributes: {
                                title: 'This is the Accordion nested x 2'
                            },
                            childs: [
                                {
                                    title: "Accordion nested x 3",
                                    description: "Custom description here",
                                    customData: "",
                                    attributes: {
                                        title: 'This is the Accordion nested x 3'
                                    }
                                },
                                {
                                    title: "Accordion nested x 3",
                                    description: "Custom description here",
                                    customData: "",
                                    attributes: {
                                        title: 'This is the Accordion nested x 3'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title: (<span>Accordion 2 <i className="fas fa-chevron-down" /></span>),
            description: "Custom description here 2",
            customData: '',
            class: '',
            function: consoleLog,
            functionData: 'Accordion 2 clicked',
            childs: [
                {
                    title: (<span>Accordion nested 2a <i className="fas fa-chevron-down" /></span>),
                    description: "Custom description herea",
                    customData: "",
                    attributes: {
                        title: 'This is the Accordion nested 2a'
                    },
                    class: '',
                    childs: [
                        {
                            title: "Accordion nestedx2a",
                            description: "Custom description here",
                            customData: "",
                            attributes: {
                                title: 'This is the Accordion nestedx2a'
                            }
                        },
                        {
                            title: "Accordion nestedx2a",
                            description: "Custom description here",
                            customData: "",
                            attributes: {
                                title: 'This is the Accordion nestedx2a'
                            }
                        }
                    ]
                }
            ]
        }
    ]
    }
/>`
        ),
        jsCode: (
`const consoleLog = (event, accordionSingleEntry, customData) => {
    console.clear();
    console.info(event);
    console.info(accordionSingleEntry);
    console.info(customData);
};`
        )
    },
    {
        class: '',
        description: 'Example x 3 nested childs. This example has keepOpen={true} (with the second option animateKeepOpenBack={true}) - its mean do NOT close recursively all toggled elements.',
        html: (
            <Accordion
                id=''
                class=''
                activeCount={false}
                activeCountHtml=" "
                performance={true}
                animation={true}
                animationTime={0}
                activateDots={false}
                border={true}
                keepOpen={true}
                animateKeepOpenBack={true}
                data={[
                    {
                        title: (<span>Accordion 1 <i className="fas fa-chevron-down" /></span>),
                        description: "Custom description here",
                        customData: "",
                        attributes: {
                            title: 'This is the Accordion 1'
                        },
                        class: '',
                        function: consoleLog,
                        functionData: 'Accordion 1 clicked',
                        childs: [
                            {
                                title: (<span>Accordion nested 1 <i className="fas fa-chevron-down" /></span>),
                                description: "Custom description herea",
                                customData: "",
                                attributes: {
                                    title: 'This is the Accordion nested x 1'
                                },
                                class: '',
                                childs: [
                                    {
                                        title: "Accordion nested x 2",
                                        description: "Custom description here",
                                        customData: "",
                                        attributes: {
                                            title: 'This is the Accordion nested x 2'
                                        }
                                    },
                                    {
                                        title: "Accordion nested x 2",
                                        description: "Custom description here",
                                        customData: "",
                                        attributes: {
                                            title: 'This is the Accordion nested x 2'
                                        }
                                    }
                                ]
                            },
                            {
                                title: (<span>Accordion nested 1 <i className="fas fa-chevron-down" /></span>),
                                description: "Custom description herea",
                                customData: "",
                                attributes: {
                                    title: 'This is the Accordion nested x 1'
                                },
                                class: '',
                                childs: [
                                    {
                                        title: (<span>Accordion nested x 2 <i className="fas fa-chevron-down" /></span>),
                                        description: "Custom description here",
                                        customData: "",
                                        attributes: {
                                            title: 'This is the Accordion nested x 2'
                                        },
                                        childs: [
                                            {
                                                title: "Accordion nested x 3",
                                                description: "Custom description here",
                                                customData: "",
                                                attributes: {
                                                    title: 'This is the Accordion nested x 3'
                                                }
                                            },
                                            {
                                                title: "Accordion nested x 3",
                                                description: "Custom description here",
                                                customData: "",
                                                attributes: {
                                                    title: 'This is the Accordion nested x 3'
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: (<span>Accordion 2 <i className="fas fa-chevron-down" /></span>),
                        description: "Custom description here 2",
                        customData: '',
                        class: '',
                        function: consoleLog,
                        functionData: 'Accordion 2 clicked',
                        childs: [
                            {
                                title: (<span>Accordion nested 2a <i className="fas fa-chevron-down" /></span>),
                                description: "Custom description herea",
                                customData: "",
                                attributes: {
                                    title: 'This is the Accordion nested 2a'
                                },
                                class: '',
                                childs: [
                                    {
                                        title: "Accordion nestedx2a",
                                        description: "Custom description here",
                                        customData: "",
                                        attributes: {
                                            title: 'This is the Accordion nestedx2a'
                                        }
                                    },
                                    {
                                        title: "Accordion nestedx2a",
                                        description: "Custom description here",
                                        customData: "",
                                        attributes: {
                                            title: 'This is the Accordion nestedx2a'
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
                }
            />
        ),
        cssCode: (
`.react-divcreator-accordion{
    max-width:1024px;
    margin:0 auto;
    min-width: 50%;
}

.parent{
    padding:5px 10px;
}

.child-children{
    margin-left: 10px;
    padding-left: 10px;
}

.react-divcreator-accordion__single-title,
.react-divcreator-accordion__single-description{
    box-sizing: border-box;
    padding:10px 0;
}`
        ),
        reactCode: (
`import { Accordion } from 'react-divcreator';

<Accordion
    id=''
    class=''
    activeCount={false}
    activeCountHtml=" "
    performance={true}
    animation={true}
    animationTime={0}
    activateDots={false}
    border={true}
    keepOpen={true}
    animateKeepOpenBack={true}
    data={[
        {
            title: (<span>Accordion 1 <i className="fas fa-chevron-down" /></span>),
            description: "Custom description here",
            customData: "",
            attributes: {
                title: 'This is the Accordion 1'
            },
            class: '',
            function: consoleLog,
            functionData: 'Accordion 1 clicked',
            childs: [
                {
                    title: (<span>Accordion nested 1 <i className="fas fa-chevron-down" /></span>),
                    description: "Custom description herea",
                    customData: "",
                    attributes: {
                        title: 'This is the Accordion nested x 1'
                    },
                    class: '',
                    childs: [
                        {
                            title: "Accordion nested x 2",
                            description: "Custom description here",
                            customData: "",
                            attributes: {
                                title: 'This is the Accordion nested x 2'
                            }
                        },
                        {
                            title: "Accordion nested x 2",
                            description: "Custom description here",
                            customData: "",
                            attributes: {
                                title: 'This is the Accordion nested x 2'
                            }
                        }
                    ]
                },
                {
                    title: (<span>Accordion nested 1 <i className="fas fa-chevron-down" /></span>),
                    description: "Custom description herea",
                    customData: "",
                    attributes: {
                        title: 'This is the Accordion nested x 1'
                    },
                    class: '',
                    childs: [
                        {
                            title: (<span>Accordion nested x 2 <i className="fas fa-chevron-down" /></span>),
                            description: "Custom description here",
                            customData: "",
                            attributes: {
                                title: 'This is the Accordion nested x 2'
                            },
                            childs: [
                                {
                                    title: "Accordion nested x 3",
                                    description: "Custom description here",
                                    customData: "",
                                    attributes: {
                                        title: 'This is the Accordion nested x 3'
                                    }
                                },
                                {
                                    title: "Accordion nested x 3",
                                    description: "Custom description here",
                                    customData: "",
                                    attributes: {
                                        title: 'This is the Accordion nested x 3'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title: (<span>Accordion 2 <i className="fas fa-chevron-down" /></span>),
            description: "Custom description here 2",
            customData: '',
            class: '',
            function: consoleLog,
            functionData: 'Accordion 2 clicked',
            childs: [
                {
                    title: (<span>Accordion nested 2a <i className="fas fa-chevron-down" /></span>),
                    description: "Custom description herea",
                    customData: "",
                    attributes: {
                        title: 'This is the Accordion nested 2a'
                    },
                    class: '',
                    childs: [
                        {
                            title: "Accordion nestedx2a",
                            description: "Custom description here",
                            customData: "",
                            attributes: {
                                title: 'This is the Accordion nestedx2a'
                            }
                        },
                        {
                            title: "Accordion nestedx2a",
                            description: "Custom description here",
                            customData: "",
                            attributes: {
                                title: 'This is the Accordion nestedx2a'
                            }
                        }
                    ]
                }
            ]
        }
    ]
    }
/>`
        ),
        jsCode: (
`const consoleLog = (event, accordionSingleEntry, customData) => {
    console.clear();
    console.info(event);
    console.info(accordionSingleEntry);
    console.info(customData);
};`
        )
    },
    {
        class: 'accordion-example-2',
        description: 'Example with activateDots={true}.',
        html: (
            <Accordion
                id=''
                class=''
                activeCount={false}
                activeCountHtml=" "
                performance={true}
                animation={true}
                animationTime={0}
                activateDots={true}
                border={false}
                data={[
                    {
                        title: (<span>Accordion 1 <i className="fas fa-chevron-down" /></span>),
                        description: "Custom description here",
                        customData: "",
                        attributes: {
                            title: 'This is the Accordion 1'
                        },
                        class: '',
                        function: consoleLog,
                        functionData: 'Accordion 1 clicked',
                        childs: [
                            {
                                title: (<span>Accordion nested 1a <i className="fas fa-chevron-down" /></span>),
                                description: "Custom description herea",
                                customData: "",
                                attributes: {
                                    title: 'This is the Accordion nested x 1'
                                },
                                class: '',
                                childs: [
                                    {
                                        title: "Accordion nested x 2",
                                        description: "Custom description here",
                                        customData: "",
                                        attributes: {
                                            title: 'This is the Accordion nested x 2'
                                        }
                                    },
                                    {
                                        title: "Accordion nested x 2",
                                        description: "Custom description here",
                                        customData: "",
                                        attributes: {
                                            title: 'This is the Accordion nested x 2'
                                        }
                                    }
                                ]
                            },
                            {
                                title: (<span>Accordion nested 1 <i className="fas fa-chevron-down" /></span>),
                                description: "Custom description herea",
                                customData: "",
                                attributes: {
                                    title: 'This is the Accordion nested x 1'
                                },
                                class: '',
                                childs: [
                                    {
                                        title: (<span>Accordion nested x 2 <i className="fas fa-chevron-down" /></span>),
                                        description: "Custom description here",
                                        customData: "",
                                        attributes: {
                                            title: 'This is the Accordion nested x 2'
                                        },
                                        childs: [
                                            {
                                                title: "Accordion nested x 3",
                                                description: "Custom description here",
                                                customData: "",
                                                attributes: {
                                                    title: 'This is the Accordion nested x 3'
                                                }
                                            },
                                            {
                                                title: "Accordion nested x 3",
                                                description: "Custom description here",
                                                customData: "",
                                                attributes: {
                                                    title: 'This is the Accordion nested x 3'
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: (<span>Accordion 2 <i className="fas fa-chevron-down" /></span>),
                        description: "Custom description here 2",
                        customData: '',
                        class: '',
                        function: consoleLog,
                        functionData: 'Accordion 2 clicked',
                        childs: [
                            {
                                title: (<span>Accordion nested 2a <i className="fas fa-chevron-down" /></span>),
                                description: "Custom description herea",
                                customData: "",
                                attributes: {
                                    title: 'This is the Accordion nested 2a'
                                },
                                class: '',
                                childs: [
                                    {
                                        title: "Accordion nested x 2a",
                                        description: "Custom description here",
                                        customData: "",
                                        attributes: {
                                            title: 'This is the Accordion nested x 2a'
                                        }
                                    },
                                    {
                                        title: "Accordion nested x 2a",
                                        description: "Custom description here",
                                        customData: "",
                                        attributes: {
                                            title: 'This is the Accordion nested x 2a'
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
                }
            />
        ),
        cssCode: (
`.react-divcreator-accordion{
    max-width:1024px;
    margin:0 auto;
    min-width: 50%;

    .parent{
        padding:5px 10px;
    }

    .child-children{
        margin-left: 10px;
        padding-left: 10px;
    }
}
.react-divcreator-accordion__single-title,
.react-divcreator-accordion__single-description{
    box-sizing: border-box;
    padding:10px 0;
}`
        ),
        reactCode: (
`import { Accordion } from 'react-divcreator';

<Accordion
    id=''
    class=''
    activeCount={false}
    activeCountHtml=" "
    performance={true}
    animation={true}
    animationTime={0}
    activateDots={true}
    border={false}
    data={[
        {
            title: (<span>Accordion 1 <i className="fas fa-chevron-down" /></span>),
            description: "Custom description here",
            customData: "",
            attributes: {
                title: 'This is the Accordion 1'
            },
            class: '',
            function: consoleLog,
            functionData: 'Accordion 1 clicked',
            childs: [
                {
                    title: (<span>Accordion nested 1a <i className="fas fa-chevron-down" /></span>),
                    description: "Custom description herea",
                    customData: "",
                    attributes: {
                        title: 'This is the Accordion nested x 1'
                    },
                    class: '',
                    childs: [
                        {
                            title: "Accordion nested x 2",
                            description: "Custom description here",
                            customData: "",
                            attributes: {
                                title: 'This is the Accordion nested x 2'
                            }
                        },
                        {
                            title: "Accordion nested x 2",
                            description: "Custom description here",
                            customData: "",
                            attributes: {
                                title: 'This is the Accordion nested x 2'
                            }
                        }
                    ]
                },
                {
                    title: (<span>Accordion nested 1 <i className="fas fa-chevron-down" /></span>),
                    description: "Custom description herea",
                    customData: "",
                    attributes: {
                        title: 'This is the Accordion nested x 1'
                    },
                    class: '',
                    childs: [
                        {
                            title: (<span>Accordion nested x 2 <i className="fas fa-chevron-down" /></span>),
                            description: "Custom description here",
                            customData: "",
                            attributes: {
                                title: 'This is the Accordion nested x 2'
                            },
                            childs: [
                                {
                                    title: "Accordion nested x 3",
                                    description: "Custom description here",
                                    customData: "",
                                    attributes: {
                                        title: 'This is the Accordion nested x 3'
                                    }
                                },
                                {
                                    title: "Accordion nested x 3",
                                    description: "Custom description here",
                                    customData: "",
                                    attributes: {
                                        title: 'This is the Accordion nested x 3'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title: (<span>Accordion 2 <i className="fas fa-chevron-down" /></span>),
            description: "Custom description here 2",
            customData: '',
            class: '',
            function: consoleLog,
            functionData: 'Accordion 2 clicked',
            childs: [
                {
                    title: (<span>Accordion nested 2a <i className="fas fa-chevron-down" /></span>),
                    description: "Custom description herea",
                    customData: "",
                    attributes: {
                        title: 'This is the Accordion nested 2a'
                    },
                    class: '',
                    childs: [
                        {
                            title: "Accordion nested x 2a",
                            description: "Custom description here",
                            customData: "",
                            attributes: {
                                title: 'This is the Accordion nested x 2a'
                            }
                        },
                        {
                            title: "Accordion nested x 2a",
                            description: "Custom description here",
                            customData: "",
                            attributes: {
                                title: 'This is the Accordion nested x 2a'
                            }
                        }
                    ]
                }
            ]
        }
    ]
    }
/>`
        ),
        jsCode: (
`const consoleLog = (event, accordionSingleEntry, customData) => {
    console.clear();
    console.info(event);
    console.info(accordionSingleEntry);
    console.info(customData);
}; `
        )
    }
];

const accordionKeys = [
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
        key: 'activeCount',
        description: 'Boolean - If true then the current count of each looped array entry are displayed.'
    },
    {
        key: 'activeCountHtml',
        description: 'JSX - Custom HTML are attached after the current count of each looped entry (only if the key "activeCount" are true).'
    },
    {
        key: 'animation',
        description: 'Boolean - If true then the all entries are toggled with an animation.'
    },
    {
        key: 'animationType',
        description: 'Available animation types: "scale" and "height". Default: "scale".',
        type: 'String'
    },
    {
        key: 'animationTime',
        description: 'Numeric - Toggle animation time defined by the developer in ms.'
    },
    {
        key: 'activateDots',
        description: 'Boolean - If true then display dashed border on the left site of each toggled menu entry.'
    },
    {
        key: 'border',
        description: 'Boolean - If true then draw an border around each toggled menu entry.'
    },
    {
        key: 'keepOpen',
        description: 'Boolean - If true then keep opened all toggled elements.'
    },
    {
        key: 'animateKeepOpenBack',
        description: 'Boolean - If true and keepOpen={true} then animate toggling back the current clicked element, otherwise toggle back without an animation.'
    },
    {
        key: 'data',
        description: 'Array - of objects.'
    },
    {
        key: 'data.toggled',
        description: 'If true and data.childs (array) has valid childs (as object) then the childs are toggled (opened).',
        type: 'Boolean'
    },
    {
        key: 'data.title',
        description: 'Title of single Accordions entry, here is the click function attached, to toggle single childs.',
        type: 'String'
    },
    {
        key: 'data.description',
        description: 'Description after the title.',
        type: 'String'
    },
    {
        key: 'data.customData',
        description: 'Custom developers JSX attached after the description.',
        type: 'JSX'
    },
    {
        key: 'data.attributes',
        description: 'Attributes (defined by the devloper) attached to the single accordions div.',
        type: 'Object'
    },
    {
        key: 'data.class',
        description: 'Classnames attached to the single accordions div.',
        type: 'String'
    },
    {
        key: 'data.function',
        description: 'Developers callback function after the single accordion has been clicked. The 1 parameter passed to the callback function is the click event, the 2 argument is the whole object entry, the 3 argument are the custom data provided with the key "functionData".',
        type: 'Function'
    },
    {
        key: 'data.functionData',
        description: 'Passed as 3 argument to the callback function.',
        type: 'Any'
    },
    {
        key: 'data.childs',
        description: 'Array of objects with limitless child nesting.',
        type: 'Array'
    },
    {
        key: 'data.childs.toggled',
        description: 'If true and data.childs (array) has valid childs (as object) then the childs are toggled (opened).',
        type: 'Boolean'
    },
    {
        key: 'data.childs.title',
        description: 'Title of single Accordions entry, here is the click function attached, to toggle single childs.',
        type: 'String'
    },
    {
        key: 'data.childs.description',
        description: 'Description after the title.',
        type: 'String'
    },
    {
        key: 'data.childs.customData',
        description: 'Custom developers JSX attached after the description.',
        type: 'JSX'
    },
    {
        key: 'data.childs.attributes',
        description: 'Attributes (defined by the devloper) attached to the single accordions div.',
        type: 'Object'
    },
    {
        key: 'data.childs.class',
        description: 'Classnames attached to the single accordions div.',
        type: 'String'
    },
    {
        key: 'data.childs.function',
        description: 'Developers callback function after the single accordion has been clicked. The 1 parameter passed to the callback function is the click event, the 2 argument is the whole object entry, the 3 argument are the custom data provided with the key "functionData".',
        type: 'Function'
    },
    {
        key: 'data.childs.functionData',
        description: 'Passed as 3 argument to the callback function.',
        type: 'Any'
    },
    {
        key: 'data.childs.childs......',
        description: 'Array of objects with limitless child nesting.',
        type: 'Array'
    }
]

export {
    accordionData,
    accordionKeys,
    mainDescription
};

