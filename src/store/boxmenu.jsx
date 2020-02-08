import React from 'react';

import { BoxMenu } from '../../module/build/react-divcreator';

const logClose = () => {
    console.info('close');
};

const logOpen = () => {
    console.info('open');
};

const mainDescription = 'There are a lot of possible direction configuration to toggle the child boxes. Below are 4 examples to show you the main configurations of each direction. Main keys to change the direction are: directionX, directionY and alignBoxes.';

const boxmenuData = [
    {
        class: '',
        description: 'Main keys to toggle the childs to the right site: directionX={"right"}, directionY={false} and alignBoxes={"x"}.',
        html: (
            <BoxMenu
                id=""
                class="boxes-menu-example-1"
                performance={true}
                width={40}
                height={40}
                borderWidth={1}
                openOn={'click'} // 'click', 'hover'
                backgroundColorRoot={'dodgerblue'}
                borderColorRoot={false}
                backgroundColorChilds={false}
                borderColorChilds={'dodgerblue'}
                openData={<i className="fas fa-ellipsis-h"></i>}
                openCallback={logOpen}
                closeData={<i className="fas fa-times"></i>}
                closeCallback={logClose}
                directionX={'right'} // 'right', 'left' or false
                directionY={false} // 'bottom', 'top' or false
                alignBoxes={'x'} // 'y' or 'x'
                closeOnClickChild={false}
                data={[
                    {
                        boxData: <span>1</span>,
                        attributes: {
                            title: 'Box entry 1'
                        }
                    },
                    {
                        boxData: <span>2</span>,
                        attributes: {
                            title: 'Box entry 2'
                        }
                    },
                    {
                        boxData: <span>3</span>,
                        attributes: {
                            title: 'Box entry 3'
                        }
                    }
                ]}
            />
        ),
        cssCode: (
`.boxes-menu-example-1{
    margin:0 auto;

    .fas{
        color:rgb(255,255,255);
        font-size:0.87rem;
    }

    .react-divcreator-box-menu__open__close--box-li{
        margin:0 5px;
        line-height:25px;
        background-color:rgb(255,255,255);
    }

    .react-divcreator-box-menu__open__close--box-li,
    .react-divcreator-box-menu__open__close--box-preview{
        transition-duration: 300ms;
    }

    .react-divcreator-box-menu__open__close--box-li:hover{
        background-color: dodgerblue;
        border:1px solid transparent;

        .react-divcreator-box-menu__open__close--box-preview{
            color:rgb(255,255,255);
        }
    }

    li:first-child{
        margin-left:10px
    }
}`
        ),
        reactCode: (
`import { BoxMenu } from 'react-divcreator';

<BoxMenu
    id=""
    class="boxes-menu-example-1"
    performance={true}
    width={40}
    height={40}
    borderWidth={1}
    openOn={'click'} // 'click', 'hover'
    backgroundColorRoot={'dodgerblue'}
    borderColorRoot={false}
    backgroundColorChilds={false}
    borderColorChilds={'dodgerblue'}
    openData={<i className="fas fa-ellipsis-h"></i>}
    openCallback={logOpen}
    closeData={<i className="fas fa-times"></i>}
    closeCallback={logClose}
    directionX={'right'} // 'right', 'left' or false
    directionY={false} // 'bottom', 'top' or false
    alignBoxes={'x'}  // 'y' or 'x'
    closeOnClickChild={false}
    data={[
        {
            boxData: <span>1</span>,
            attributes: {
                title: 'Box entry 1'
            }
        },
        {
            boxData: <span>2</span>,
            attributes: {
                title: 'Box entry 2'
            }
        },
        {
            boxData: <span>3</span>,
            attributes: {
                title: 'Box entry 3'
            }
        }
    ]}
/>`
        ),
        jsCode: (
`const logClose = () => {
    console.info('close');
};

const logOpen = () => {
    console.info('open');
};`
        )
    },
    {
        class: '',
        description: 'To toggle the menu entrys (boxes), click the button below. This example animate the toggling menu entrys to the right site on the X axis (provided by the key: alignBoxes={"x"}).',
        html: (
            <BoxMenu
                id=""
                class="boxes-menu-example-2"
                performance={true}
                width={40}
                height={40}
                borderWidth={1}
                openOn={'click'} // 'click', 'hover'
                backgroundColorRoot={'dodgerblue'}
                borderColorRoot={false}
                backgroundColorChilds={false}
                borderColorChilds={'dodgerblue'}
                openData={<i className="fas fa-ellipsis-h"></i>}
                openCallback={logOpen}
                closeData={<i className="fas fa-times"></i>}
                closeCallback={logClose}
                directionX={false} // 'right', 'left' or false
                directionY={"bottom"} // 'bottom', 'top' or false
                alignBoxes={"y"} // 'y' or 'x'
                closeOnClickChild={false}
                data={[
                    {
                        boxData: <span>1</span>,
                        attributes: {
                            title: 'Box entry 1'
                        }
                    },
                    {
                        boxData: <span>2</span>,
                        attributes: {
                            title: 'Box entry 2'
                        }
                    },
                    {
                        boxData: <span>3</span>,
                        attributes: {
                            title: 'Box entry 3'
                        }
                    }
                ]}
            />
        ),
        cssCode: (
`.boxes-menu-example-2{
    margin:0 auto;

    .fas{
        color:rgb(255,255,255);
        font-size:0.87rem;
    }

    .react-divcreator-box-menu__open__close--box-li{
        margin:5px 0;
        line-height:25px;
        background-color:rgb(255,255,255);
    }

    .react-divcreator-box-menu__open__close--box-li,
    .react-divcreator-box-menu__open__close--box-preview{
        transition-duration: 300ms;
    }

    .react-divcreator-box-menu__open__close--box-li:hover{
        background-color: dodgerblue;
        border:1px solid transparent;

        .react-divcreator-box-menu__open__close--box-preview{
            color:rgb(255,255,255);
        }
    }
}`
        ),
        reactCode: (
`import { BoxMenu } from 'react-divcreator';

<BoxMenu
    id=""
    class="boxes-menu-example-2"
    performance={true}
    width={40}
    height={40}
    borderWidth={1}
    openOn={'click'} // 'click', 'hover'
    backgroundColorRoot={'dodgerblue'}
    borderColorRoot={false}
    backgroundColorChilds={false}
    borderColorChilds={'dodgerblue'}
    openData={<i className="fas fa-ellipsis-h"></i>}
    openCallback={logOpen}
    closeData={<i className="fas fa-times"></i>}
    closeCallback={logClose}
    directionX={false} // 'right', 'left' or false
    directionY={"bottom"} // 'bottom', 'top' or false
    alignBoxes={"y"} // 'y' or 'x'#
    closeOnClickChild={false}
    data={[
        {
            boxData: <span>1</span>,
            attributes: {
                title: 'Box entry 1'
            }
        },
        {
            boxData: <span>2</span>,
            attributes: {
                title: 'Box entry 2'
            }
        },
        {
            boxData: <span>3</span>,
            attributes: {
                title: 'Box entry 3'
            }
        }
    ]}
/>`
        ),
        jsCode: (
`const logClose = () => {
    console.info('close');
};

const logOpen = () => {
    console.info('open');
};`
        )
    },
    {
        class: '',
        description: 'To toggle the menu entrys (boxes), click the button below. This example animate the toggling menu entrys to the right site on the X axis (provided by the key: alignBoxes={"x"}).',
        html: (
            <BoxMenu
                id=""
                class="boxes-menu-example-3"
                performance={true}
                width={40}
                height={40}
                borderWidth={1}
                openOn={'click'} // 'click', 'hover'
                backgroundColorRoot={'dodgerblue'}
                borderColorRoot={false}
                backgroundColorChilds={false}
                borderColorChilds={'dodgerblue'}
                openData={<i className="fas fa-ellipsis-h"></i>}
                openCallback={logOpen}
                closeData={<i className="fas fa-times"></i>}
                closeCallback={logClose}
                directionX={'left'} // 'right', 'left' or false
                directionY={"top"} // 'bottom', 'top' or false
                alignBoxes={"x"} // 'y' or 'x'
                closeOnClickChild={false}
                data={[
                    {
                        boxData: <span>1</span>,
                        attributes: {
                            title: 'Box entry 1'
                        }
                    },
                    {
                        boxData: <span>2</span>,
                        attributes: {
                            title: 'Box entry 2'
                        }
                    },
                    {
                        boxData: <span>3</span>,
                        attributes: {
                            title: 'Box entry 3'
                        }
                    }
                ]}
            />
        ),
        cssCode: (
`.boxes-menu-example-3{
    margin:0 auto;

    .fas{
        color:rgb(255,255,255);
        font-size:0.87rem;
    }

    .react-divcreator-box-menu__open__close--box-li{
        margin: -5px 0px 5px 10px;
        line-height:25px;
        background-color:rgb(255,255,255);
    }

    .react-divcreator-box-menu__open__close--box-li,
    .react-divcreator-box-menu__open__close--box-preview{
        transition-duration: 300ms;
    }

    .react-divcreator-box-menu__open__close--box-li:hover{
        background-color: dodgerblue;
        border:1px solid transparent;

        .react-divcreator-box-menu__open__close--box-preview{
            color:rgb(255,255,255);
        }
    }
}`
        ),
        reactCode: (
`import { BoxMenu } from 'react-divcreator';

<BoxMenu
    id=""
    class="boxes-menu-example-3"
    performance={true}
    width={40}
    height={40}
    borderWidth={1}
    openOn={'click'} // 'click', 'hover'
    backgroundColorRoot={'dodgerblue'}
    borderColorRoot={false}
    backgroundColorChilds={false}
    borderColorChilds={'dodgerblue'}
    openData={<i className="fas fa-ellipsis-h"></i>}
    openCallback={logOpen}
    closeData={<i className="fas fa-times"></i>}
    closeCallback={logClose}
    directionX={'left'} // 'right', 'left' or false
    directionY={"top"} // 'bottom', 'top' or false
    alignBoxes={"x"} // 'y' or 'x'
    closeOnClickChild={false}
    data={[
        {
            boxData: <span>1</span>,
            attributes: {
                title: 'Box entry 1'
            }
        },
        {
            boxData: <span>2</span>,
            attributes: {
                title: 'Box entry 2'
            }
        },
        {
            boxData: <span>3</span>,
            attributes: {
                title: 'Box entry 3'
            }
        }
    ]}
/>`
        ),
        jsCode: (
`const logClose = () => {
    console.info('close');
};

const logOpen = () => {
    console.info('open');
};`
        )
    },
    {
        class: '',
        description: 'To toggle the menu entrys (boxes), click the button below. This example animate the toggling menu entrys to the right site on the X axis (provided by the key: alignBoxes={"x"}).',
        html: (
            <BoxMenu
                id=""
                class="boxes-menu-example-4"
                performance={true}
                width={50}
                height={50}
                borderWidth={1}
                openOn={'click'} // 'click', 'hover'
                backgroundColorRoot={'dodgerblue'}
                borderColorRoot={false}
                backgroundColorChilds={false}
                borderColorChilds={'dodgerblue'}
                openData={<i className="fas fa-ellipsis-h"></i>}
                openCallback={logOpen}
                closeData={<i className="fas fa-times"></i>}
                closeCallback={logClose}
                directionX={'left'} // 'right', 'left' or false
                directionY={"top"} // 'bottom', 'top' or false
                alignBoxes={"y"} // 'y' or 'x'
                closeOnClickChild={false}
                data={[
                    {
                        boxData: <span>1</span>,
                        attributes: {
                            title: 'Box entry 1'
                        }
                    },
                    {
                        boxData: <span>2</span>,
                        attributes: {
                            title: 'Box entry 2'
                        }
                    },
                    {
                        boxData: <span>3</span>,
                        attributes: {
                            title: 'Box entry 3'
                        }
                    }
                ]}
            />
        ),
        cssCode: (
`.boxes-menu-example-4{
    margin:0 auto;

    .fas{
        color:rgb(255,255,255);
        font-size:0.87rem;
    }

    .react-divcreator-box-menu__open__close--box-li{
        margin: 0 5px 5px -5px;
        line-height:25px;
        background-color:rgb(255,255,255);
    }

    .react-divcreator-box-menu__open__close--box-li,
    .react-divcreator-box-menu__open__close--box-preview{
        transition-duration: 300ms;
    }

    .react-divcreator-box-menu__open__close--box-li:hover{
        background-color: dodgerblue;
        border:1px solid transparent;

        .react-divcreator-box-menu__open__close--box-preview{
            color:rgb(255,255,255);
        }
    }
}`
        ),
        reactCode: (
`import { BoxMenu } from 'react-divcreator';

<BoxMenu
    id=""
    class="boxes-menu-example-4"
    performance={true}
    width={40}
    height={40}
    borderWidth={1}
    openOn={'click'} // 'click', 'hover'
    backgroundColorRoot={'dodgerblue'}
    borderColorRoot={false}
    backgroundColorChilds={false}
    borderColorChilds={'dodgerblue'}
    openData={<i className="fas fa-ellipsis-h"></i>}
    openCallback={logOpen}
    closeData={<i className="fas fa-times"></i>}
    closeCallback={logClose}
    directionX={'left'} // 'right', 'left' or false
    directionY={"top"} // 'bottom', 'top' or false
    alignBoxes={"y"} // 'y' or 'x'
    closeOnClickChild={false}
    data={[
        {
            boxData: <span>1</span>,
            attributes: {
                title: 'Box entry 1'
            }
        },
        {
            boxData: <span>2</span>,
            attributes: {
                title: 'Box entry 2'
            }
        },
        {
            boxData: <span>3</span>,
            attributes: {
                title: 'Box entry 3'
            }
        }
    ]}
/>`
        ),
        jsCode: (
`const logClose = () => {
    console.info('close');
};

const logOpen = () => {
    console.info('open');
};`
        )
    }
];

const boxmenuKeys = [
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
        key: 'width',
        description: "The width (in px) of the box holder. If not provided then the default value is: 40.",
        type: 'Number'
    },
    {
        key: 'height',
        description: "The height (in px) of the box holder. If not provided then the default value is: 40.",
        type: 'Number'
    },
    {
        key: 'borderWidth',
        description: "Border width for the root element and child entrys. If not provided then the default value is: 1.",
        type: 'Number'
    },
    {
        key: 'openOn',
        description: "Toggle Menu entrys on: 'hover' or 'click'. If not provided then the default value is: 'click'.",
        type: 'String'
    },
    {
        key: 'backgroundColorRoot',
        description: "Background color of the box holder.",
        type: 'String'
    },
    {
        key: 'borderColorRoot',
        description: "Border color of the box holder.",
        type: 'String'
    },
    {
        key: 'backgroundColorChilds',
        description: "Background color of toggled childs boxes.",
        type: 'String'
    },
    {
        key: 'borderColorChilds',
        description: "Border color of the toggled childs boxes.",
        type: 'String'
    },
    {
        key: 'openData',
        description: "Custom developers JSX for the open box. If not provided then the default value is: '...'.",
        type: 'String'
    },
    {
        key: 'openCallback',
        description: "If the user click the open action (openData's JSX), then the custom callback are executed.",
        type: 'String'
    },
    {
        key: 'closeData',
        description: "Custom developers JSX for the close box. If not provided then the default value is: 'x'.",
        type: 'String'
    },
    {
        key: 'closeOnClickChild',
        description: "Toogle back all box entries when a chilkd box has been clicked.",
        type: 'Boolean'
    },
    {
        key: 'closeCallback',
        description: "If the user click the close action (closeData's JSX), then the custom callback are executed.",
        type: 'String'
    },
    {
        key: 'directionX',
        description: "Align and animate toggling boxes to the 'right' or 'left' site. If not provided then the default value is: false.",
        type: 'String'
    },
    {
        key: 'directionY',
        description: "Align boxes to toggle 'bottom' (below of the box holder), 'top' (up of the box holder) or false (align on the same height).  If not provided then the default value is: false.",
        type: 'String'
    },
    {
        key: 'alignBoxes',
        description: "Align boxed on the 'x' (flex-direction: row) or 'y' ((flex-direction: column)) axis. If not provided then the default value is: 'x'.",
        type: 'String'
    },
    {
        key: 'data',
        description: 'Array of objects.',
        type: 'Array'
    },
    {
        key: 'data.boxData',
        description: 'Custom JSX for the single box',
        type: 'JSX'
    },
    {
        key: 'data.attributes',
        description: 'Custom attributes for the single box',
        type: 'Object'
    },
    {
        key: 'data.boxContent',
        description: 'Custom JSX for the single box after the boxData JSX.',
        type: 'JSX'
    }
]

export {
    mainDescription,
    boxmenuData,
    boxmenuKeys
};

