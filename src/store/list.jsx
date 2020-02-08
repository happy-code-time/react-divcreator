import React from 'react';

import { List } from '../../module/build/react-divcreator';

const listData = [
    {
        class: '',
        description: 'Default list example.',
        html: (
            <List
                class="keys-for-type-example"
                id=""
                perfomance={true}
                data={
                    [
                        {
                            values: [
                                {
                                    value: 'Value 1',
                                    attributes: {
                                        title: 'Value 1 hovered'
                                    }
                                },
                                {
                                    value: 'Value 2',
                                    attributes: {
                                        title: 'Value 2 hovered'
                                    }
                                },
                                {
                                    value: 'Value 3',
                                    attributes: {
                                        title: 'Value 3 hovered'
                                    }
                                }
                            ]
                        },
                        {
                            values: [
                                {
                                    value: 'Value 4',
                                    attributes: {
                                        title: 'Value 4 hovered'
                                    }
                                },
                                {
                                    value: 'Value 5',
                                    attributes: {
                                        title: 'Value 5 hovered'
                                    }
                                },
                                {
                                    value: 'Value 6',
                                    attributes: {
                                        title: 'Value 6 hovered'
                                    }
                                }
                            ]
                        }
                    ]
                }
                responsive={true}
                responsiveX={1024}
                title={
                    <span>
                        <i className="fas fa-table"></i>
                        List
                    </span>
                }
                header={
                    [
                        'Name',
                        'Type',
                        'Description'
                    ]
                }
            />
        ),
        cssCode: (
`.keys-for-type-example{   
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding:10px 20px;

    .react-divcreator-list--responsive{
        .react-divcreator-list__data--ul-li{
            width: 100% !important;
        }
    }
    .react-divcreator-list__header{
        background-color: rgba(24,115,204,1);
        border-top-left-radius:5px;
        border-top-right-radius: 5px;

        .react-divcreator-list__header--title{
            box-sizing: border-box;
            padding:20px 5px 10px 5px;
            color:rgb(255,255,255);

            i,
            .react-divcreator-list__header--title-span{
                color:white;
                font-size: 1.4rem;
                margin: 0 10px 0 0;
            }
        }
    }

    ul{
        li{
            float: left;
            box-sizing: border-box;
            padding: 10px;
            min-height: 30px;
            line-height: 30px;
            width: 20%;
            min-width: 200px;

            .react-divcreator-list__header--ul-li--p{
                color:rgb(255,255,255);
                font-size:1.2rem;
            }

            .react-divcreator-list__data--ul-li--p{
                color:rgba(69, 69, 69, 0.5);
                font-size:1rem;
            }
        }

        li:last-child{
            width: 80%;
        }
    }

    .react-divcreator-list__data--ul__odd {
        background-color: rgba(69, 69, 69, 0.05);
    }
    .react-divcreator-list__data--ul__even {
        background-color: rgba(69, 69, 69, 0.1);
    }

    .react-divcreator-list__data--ul {
        li{
            overflow: auto;
        }
    }
}`
        ),
        reactCode: (
`import { List } from 'react-divcreator';

<List
    class="keys-for-type-example"
    id=""
    perfomance={true}
    data={
        [
            {
                values: [
                    {
                        value: 'Value 1',
                        attributes: {
                            title: 'Value 1 hovered'
                        }
                    },
                    {
                        value: 'Value 2',
                        attributes: {
                            title: 'Value 2 hovered'
                        }
                    },
                    {
                        value: 'Value 3',
                        attributes: {
                            title: 'Value 3 hovered'
                        }
                    }
                ]
            },
            {
                values: [
                    {
                        value: 'Value 4',
                        attributes: {
                            title: 'Value 4 hovered'
                        }
                    },
                    {
                        value: 'Value 5',
                        attributes: {
                            title: 'Value 5 hovered'
                        }
                    },
                    {
                        value: 'Value 6',
                        attributes: {
                            title: 'Value 6 hovered'
                        }
                    }
                
        ]
    }
    responsive={true}
    responsiveX={1024}
    title={
        <span>
            <i className="fas fa-table"></i>
            List
        </span>
    }
    header={
        [
            'Name',
            'Type',
            'Description'
        ]
    }
/>`
        ),
        jsCode: (
            ``
        )
    }
];

const listKeys = [
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
        key: 'responsive',
        description: 'Boolean - If true then if the documents width is smaller then responsiveX={...} then the modules default classname becomes an suffix: "--responsive".'
    },
    {
        key: 'responsiveX',
        description: 'Number - If documents width is smaller then this value, then add the suffix "--responsive" to the modules root classname.'
    },
    {
        key: 'title',
        description: "JSX - If the module is responsive then this JSX attached as title of the List."
    },
    {
        key: 'header',
        description: "Array - Array of strings as table headers."
    },
    {
        key: 'data',
        description: 'Array - Array of objects.'
    },
    {
        key: 'data.values',
        description: 'Array - Array of objects.'
    },
    {
        key: 'data.values.value',
        description: 'Mixed - Custom value.'
    },
    {
        key: 'data.values.attributes',
        description: 'Custom attributes for the button.',
        type: 'Object'
    }    
]

export {
    listData,
    listKeys
};

