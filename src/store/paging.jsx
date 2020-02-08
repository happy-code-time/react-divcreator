import React from 'react';

import { Paging } from '../../module/build/react-divcreator';

const consoleLog = (button, fromPage, event, customData, cachedChanges) => {
    console.clear();
    console.info(button);
    console.info(fromPage);
    console.info(event);
    console.info(customData);
    console.info(cachedChanges);
};

const consoleLog2 = (button, targetPage, event, customData, cachedChanges) => {
    console.clear();
    console.info(button);
    console.info(targetPage);
    console.info(event);
    console.info(customData);
    console.info(cachedChanges);
};

const showNewTableValues = (oldState, newState, allChangesByUser, saveClickedOnPage) => {
    console.clear();
    console.info("OLD STATE");
    console.info(oldState);
    console.info("NEW STATE");
    console.info(newState);
    console.info("ALL USER CHANGES");
    console.info(allChangesByUser);
    console.info("SAVE BUTTON CLICKED ON PAGE");
    console.info(saveClickedOnPage);
};

const getEditedTableContent = (oldState, newState, allChangesByUser) => {
    console.clear();
    console.info("OLD STATE");
    console.info(oldState);
    console.info("NEW STATE");
    console.info(newState);
    console.info("ALL USER CHANGES");
    console.info(allChangesByUser);
};

const tableSaveCallback = (oldState, newState, allChangesByUser, buttonSaveClickedOnPage, newStateIfOptionsAreAvailable) => {
    console.clear();
    console.info("NEW STATE IF OPTION FIELD AVAILABLE");
    console.info(newStateIfOptionsAreAvailable);
};

const pagingData = [
    {
        class: 'paging-example-root',
        description: 'Example with default list. Displayed all elements on single page with editable content. Each input field has an onChanged listener and fires developers defined function passed with the key "tableCallback". To see the result, edit the table and open your console.',
        html: (
            <Paging
                id=""
                class="paging-example-root__paging"
                displayTitle={true}
                tableEditable={true}
                displayAll={true}
                tableCallback={getEditedTableContent}
                tableSaveCallback={getEditedTableContent}
                tableEditableSaveHtml={<button>Save</button>}
                performance={true}
                title={
                    [
                        "Name",
                        "Last name",
                        "City",
                        "Age",
                        "Country"
                    ]
                }
                mapContent={
                    [
                        'firstN',
                        'lastN',
                        'city',
                        'age',
                        'country'
                    ]
                }
                content={
                    [
                        {
                            firstN: 'Max',
                            lastN: 'Mustermann',
                            city: 'München',
                            age: '32',
                            country: 'Germany'
                        },
                        {
                            firstN: 'Anna',
                            lastN: 'Haselbach',
                            city: 'Hamburg',
                            age: '22',
                            country: 'Germany'
                        },
                        {
                            firstN: 'Michael',
                            lastN: 'Hafer',
                            city: 'Erfurt',
                            age: '33',
                            country: 'Germany'
                        },
                        {
                            firstN: 'Max',
                            lastN: 'Mustermann',
                            city: 'München',
                            age: '32',
                            country: 'Germany'
                        },
                        {
                            firstN: 'Anna',
                            lastN: 'Haselbach',
                            city: 'Hamburg',
                            age: '22',
                            country: 'Germany'
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.paging-example-root__paging{
    max-width:1140px;
    height:auto;
    box-sizing: border-box;
    padding:20px;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .react-divcreator-paging-topic-ul{
        li{
            width: calc((100% / 5));
        }
    }
    .react-divcreator-paging-content-ul{
        width:100%;

        li{
            width:20%;
        }
    }
    .react-divcreator-paging-content-ul:hover{

        li{
            background:transparent;
        }
    }
    .react-divcreator-paging-content-div{
        max-height:none;

        input{
            box-sizing: border-box;
            padding-left:10px;
        }
    }
    .react-divcreator-paging-button-save{
        width: 100%;
        height:30px;
        margin-top:15px;
        clear: both;
        display: block;

        button {
            width: 120px;
            height: 30px;
            line-height: 30px;
            font-size: 1rem;
            border: 1px solid transparent;
            border-radius: 5px;
            transition-duration: 300ms;
            background: dodgerblue;
            color: white;
            margin: 0 auto;
            display: block;
        }
        button:hover{
            cursor:pointer;
            background: transparent;
            border:1px solid dodgerblue;
            color:rgb(69,69,69);
        }
    }
}`
        ),
        reactCode: (
`import { Paging } from 'react-divcreator';

<Paging
    id=""
    class="paging-example-root__paging"
    displayTitle={true}
    tableEditable={true}
    displayAll={true}
    tableCallback={getEditedTableContent}
    tableSaveCallback={getEditedTableContent}
    tableEditableSaveHtml={<button>Save</button>}
    performance={true}
    title={
        [
            "Name",
            "Last name",
            "City",
            "Age",
            "Country"
        ]
    }
    mapContent={
        [
            'firstN',
            'lastN',
            'city',
            'age',
            'country'
        ]
    }
    content={
        [
            {
                firstN: 'Max',
                lastN: 'Mustermann',
                city: 'München',
                age: '32',
                country: 'Germany',
                email: 'm.mustermann@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Anna',
                lastN: 'Haselbach',
                city: 'Hamburg',
                age: '22',
                country: 'Germany',
                email: 'a.haselbach@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Michael',
                lastN: 'Hafer',
                city: 'Erfurt',
                age: '33',
                country: 'Germany',
                email: 'm.hafer@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Max',
                lastN: 'Mustermann',
                city: 'München',
                age: '32',
                country: 'Germany',
                email: 'm.mustermann@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Anna',
                lastN: 'Haselbach',
                city: 'Hamburg',
                age: '22',
                country: 'Germany',
                email: 'a.haselbach@gmx.de',
                time: 'not displayed'
            }
        ]
    }
/>`
        ),
        jsCode: (
`const getEditedTableContent = (oldState, newState, allChangesByUser) => {
    console.clear();
    console.info("OLD STATE");
    console.info(oldState);
    console.info("NEW STATE");
    console.info(newState);
    console.info("ALL USER CHANGES");
    console.info(allChangesByUser);
};`
        )
    },
    {
        class: 'paging-example-root',
        description: 'Previous example with select options. Select options only available when "displayAll" is equal true. To generate the select area you have to pass in the content data (the value of your mapped object key) an object with available options values. If the user does not change the select option, then on the (save) callback function, the value of the "default" key are choosen. If you dont pass the "default" key with an not empty value, then the whole object is the returned value of the provided key. Open the console and click the save button. In this example the 3 entry will return an object (country options), because no "default" (key) value are provided.',
        html: (
            <Paging
                id=""
                class="paging-example-root__paging"
                displayTitle={true}
                tableEditable={true}
                displayAll={true}
                tableCallback={getEditedTableContent}
                tableSaveCallback={tableSaveCallback}
                tableEditableSaveHtml={<button>Save</button>}
                performance={true}
                title={
                    [
                        "Name",
                        "Last name",
                        "City",
                        "Age",
                        "Country"
                    ]
                }
                mapContent={
                    [
                        'firstN',
                        'lastN',
                        'city',
                        'age',
                        'country'
                    ]
                }
                content={
                    [
                        {
                            firstN: {
                                default: 'Anna',
                                'max' : 'Max',
                                'david' : 'David',
                                'anna' : 'Anna'
                            },
                            lastN: 'Mustermann',
                            city: {
                                default: 'München',
                                'muenchen' : 'München',
                                'warsaw' : 'Warszawa',
                                'krakau' : 'Kraków'
                            },
                            age: '32',
                            country: {
                                default: 'USA',
                                'usa' : 'USA',
                                'germany' : 'Germany',
                                'poland' : 'Poland'
                            }
                        },
                        {
                            firstN: 'Anna',
                            lastN: 'Haselbach',
                            city: 'Hamburg',
                            age: '22',
                            country: {
                                default: 'Poland',
                                'usa' : 'USA',
                                'germany' : 'Germany',
                                'poland' : 'Poland'
                            }
                        },
                        {
                            firstN: 'Michael',
                            lastN: 'Hafer',
                            city: 'Erfurt',
                            age: {
                                default: '12',
                                '1' : '22',
                                '2' : '33',
                                '3' : '44',
                                '4' : '55',
                                '5' : '66',
                                '6' : '77'
                            },
                            country: {
                                'usa' : 'USA',
                                'germany' : 'Germany',
                                'poland' : 'Poland'
                            }
                        },
                        {
                            firstN: 'Max',
                            lastN: 'Mustermann',
                            city: 'München',
                            age: '32',
                            country: {
                                default: 'Poland',
                                'usa' : 'USA',
                                'germany' : 'Germany',
                                'poland' : 'Poland'
                            }
                        },
                        {
                            firstN: 'Anna',
                            lastN: 'Haselbach',
                            city: 'Hamburg',
                            age: '22',
                            country: {
                                default: 'Poland',
                                'usa' : 'USA',
                                'germany' : 'Germany',
                                'poland' : 'Poland'
                            }
                        }
                    ]
                }
            />
        ),
        cssCode: (
`/* The same CSS code from the previous example, plus this */

.react-divcreator-paging-content-ul-li-select{
    position: relative;
    width: 94%;
    box-sizing: border-box;
    padding: 8px;
    background: rgb(255,255,255);
    border: 1px solid rgba(69,69,69,.3);
    border-radius: 5px;
}`
        ),
        reactCode: (
`import { Paging } from 'react-divcreator';

<Paging
    id=""
    class="paging-example-root__paging"
    displayTitle={true}
    tableEditable={true}
    displayAll={true}
    tableCallback={getEditedTableContent}
    tableSaveCallback={tableSaveCallback}
    tableEditableSaveHtml={<button>Save</button>}
    performance={true}
    title={
        [
            "Name",
            "Last name",
            "City",
            "Age",
            "Country"
        ]
    }
    mapContent={
        [
            'firstN',
            'lastN',
            'city',
            'age',
            'country'
        ]
    }
    content={
        [
            {
                firstN: {
                    default: 'Anna',
                    'max' : 'Max',
                    'david' : 'David',
                    'anna' : 'Anna'
                },
                lastN: 'Mustermann',
                city: {
                    default: 'München',
                    'muenchen' : 'München',
                    'warsaw' : 'Warszawa',
                    'krakau' : 'Kraków'
                },
                age: '32',
                country: {
                    default: 'USA',
                    'usa' : 'USA',
                    'germany' : 'Germany',
                    'poland' : 'Poland'
                }
            },
            {
                firstN: 'Anna',
                lastN: 'Haselbach',
                city: 'Hamburg',
                age: '22',
                country: {
                    default: 'Poland',
                    'usa' : 'USA',
                    'germany' : 'Germany',
                    'poland' : 'Poland'
                }
            },
            {
                firstN: 'Michael',
                lastN: 'Hafer',
                city: 'Erfurt',
                age: {
                    default: '12',
                    '1' : '22',
                    '2' : '33',
                    '3' : '44',
                    '4' : '55',
                    '5' : '66',
                    '6' : '77'
                },
                country: {
                    'usa' : 'USA',
                    'germany' : 'Germany',
                    'poland' : 'Poland'
                }
            },
            {
                firstN: 'Max',
                lastN: 'Mustermann',
                city: 'München',
                age: '32',
                country: {
                    default: 'Poland',
                    'usa' : 'USA',
                    'germany' : 'Germany',
                    'poland' : 'Poland'
                }
            },
            {
                firstN: 'Anna',
                lastN: 'Haselbach',
                city: 'Hamburg',
                age: '22',
                country: {
                    default: 'Poland',
                    'usa' : 'USA',
                    'germany' : 'Germany',
                    'poland' : 'Poland'
                }
            }
        ]
    }
/>`
        ),
        jsCode: (
`const getEditedTableContent = (oldState, newState, allChangesByUser) => {
    console.clear();
    console.info("OLD STATE");
    console.info(oldState);
    console.info("NEW STATE");
    console.info(newState);
    console.info("ALL USER CHANGES");
    console.info(allChangesByUser);
};
const tableSaveCallback = (oldState, newState, allChangesByUser, buttonSaveClickedOnPage, newStateIfOptionsAreAvailable) => {
    console.clear();
    console.info("NEW STATE IF OPTION FIELD AVAILABLE");
    console.info(newStateIfOptionsAreAvailable);
};`
        )
    },
    {
        class: 'paging-example-root',
        description: 'Previous example with the keys "hasErrors" and "errorMessages".',
        html: (
            <Paging
                id=""
                class="paging-example-root__paging"
                displayTitle={true}
                tableEditable={true}
                displayAll={true}
                tableCallback={getEditedTableContent}
                tableSaveCallback={getEditedTableContent}
                tableEditableSaveHtml={<button>Save</button>}
                performance={true}
                title={
                    [
                        "Name",
                        "Last name",
                        "City",
                        "Age",
                        "Country"
                    ]
                }
                mapContent={
                    [
                        'firstN',
                        'lastN',
                        'city',
                        'age',
                        'country'
                    ]
                }
                content={
                    [
                        {
                            firstN: 'Max',
                            lastN: 'Mustermann',
                            city: 'München',
                            age: '32',
                            country: 'Germany',
                            hasErrors: true,
                            errorMessages : {
                                firstN: 'First name has errors',
                                lastN: 'Last name has errors'
                            }
                        },
                        {
                            firstN: 'Anna',
                            lastN: 'Haselbach',
                            city: 'Hamburg',
                            age: '22',
                            country: 'Germany'
                        },
                        {
                            firstN: 'Michael',
                            lastN: 'Hafer',
                            city: 'Erfurt',
                            age: '33',
                            country: 'Germany',
                            hasErrors: true,
                            errorMessages : {
                                city: 'City has errors'
                            }
                        },
                        {
                            firstN: 'Max',
                            lastN: 'Mustermann',
                            city: 'München',
                            age: '32',
                            country: 'Germany',
                            hasErrors: true,
                            errorMessages : {
                                country: 'Country has errors'
                            }
                        },
                        {
                            firstN: 'Anna',
                            lastN: 'Haselbach',
                            city: 'Hamburg',
                            age: '22',
                            country: 'Germany'
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.paging-example-root__paging{
    max-width:1140px;
    min-height:100px;
    height:auto;
    overflow: auto;
    overflow-x:hidden;
    box-sizing: border-box;
    padding:20px;
    margin:0 auto;

    .react-divcreator-paging-topic-ul{
        li{
            width: calc((100% / 5));
        }
    }
    .react-divcreator-paging-content-ul{
        overflow: hidden;
        clear: both;
        padding: 5px;
        box-sizing: border-box;
        width: 100%;
        position: relative;

        li{
            width:20%;
            margin:5px 0;
        }
    }
    .react-divcreator-paging-content-ul:hover{

        li{
            background:transparent;
        }
    }
    .react-divcreator-paging-content-div{
        max-height:none;

        input{
            box-sizing: border-box;
            padding-left:10px;
        }
    }
    .react-divcreator-paging-button-save{
        width: 100%;
        height:30px;
        margin-top:15px;
        clear: both;
        display: block;

        button {
            width: 120px;
            height: 30px;
            line-height: 30px;
            font-size: 1rem;
            border: 1px solid transparent;
            border-radius: 5px;
            transition-duration: 300ms;
            background: dodgerblue;
            color: white;
            margin: 0 auto;
            display: block;
        }
        button:hover{
            cursor:pointer;
            background: transparent;
            border:1px solid dodgerblue;
            color:rgb(69,69,69);
        }
    }
    .has-errors-ul{   
        .has-errors-ul-li{
            position: relative;
        
            .has-errors-ul-li-span{
                position: absolute;
                left:0;
                bottom:-30px;
                font-size: 12px;
                color:#F44559;
            }
        }
    }
    .has-errors-ul:before{
        position: absolute;
        content: '';
        top: calc(50% - 6px);
        right: 0px;
        width: 12px;
        height: 12px;
        background: #F44559;
        padding: 0;
        margin: 0;
        border-radius: 50%;
        z-index:1;
    }
}`
        ),
        reactCode: (
`import { Paging } from 'react-divcreator';

<Paging
    id=""
    class="paging-example-root__paging"
    displayTitle={true}
    tableEditable={true}
    displayAll={true}
    tableCallback={getEditedTableContent}
    tableSaveCallback={getEditedTableContent}
    tableEditableSaveHtml={<button>Save</button>}
    performance={true}
    title={
        [
            "Name",
            "Last name",
            "City",
            "Age",
            "Country"
        ]
    }
    mapContent={
        [
            'firstN',
            'lastN',
            'city',
            'age',
            'country'
        ]
    }
    content={
        [
            {
                firstN: 'Max',
                lastN: 'Mustermann',
                city: 'München',
                age: '32',
                country: 'Germany',
                hasErrors: true,
                errorMessages : {
                    firstN: 'First name has errors',
                    lastN: 'Last name has errors'
                }
            },
            {
                firstN: 'Anna',
                lastN: 'Haselbach',
                city: 'Hamburg',
                age: '22',
                country: 'Germany'
            },
            {
                firstN: 'Michael',
                lastN: 'Hafer',
                city: 'Erfurt',
                age: '33',
                country: 'Germany',
                hasErrors: true,
                errorMessages : {
                    city: 'City has errors'
                }
            },
            {
                firstN: 'Max',
                lastN: 'Mustermann',
                city: 'München',
                age: '32',
                country: 'Germany',
                hasErrors: true,
                errorMessages : {
                    country: 'Country has errors'
                }
            },
            {
                firstN: 'Anna',
                lastN: 'Haselbach',
                city: 'Hamburg',
                age: '22',
                country: 'Germany'
            }
        ]
    }
/>`
        ),
        jsCode: (
`const getEditedTableContent = (oldState, newState, allChangesByUser) => {
    console.clear();
    console.info("OLD STATE");
    console.info(oldState);
    console.info("NEW STATE");
    console.info(newState);
    console.info("ALL USER CHANGES");
    console.info(allChangesByUser);
};`
        )
    },
    {
        class: 'paging-example-root',
        description: 'Example with default list without paging system.',
        html: (
            <Paging
                id=""
                class="root-paging menu-countable"
                displayTitle={true}
                showLineNumber={true}
                displayAll={true}
                performance={true}
                title={
                    [
                        "ID",
                        "Name",
                        "Last name",
                        "City",
                        "Age",
                        "Country"
                    ]
                }
                mapContent={
                    [
                        'firstN',
                        'lastN',
                        'city',
                        'age',
                        'country'
                    ]
                }
                content={
                    [
                        {
                            firstN: 'Max',
                            lastN: 'Mustermann',
                            city: 'München',
                            age: '32',
                            country: 'Germany'
                        },
                        {
                            firstN: 'Anna',
                            lastN: 'Haselbach',
                            city: 'Hamburg',
                            age: '22',
                            country: 'Germany'
                        },
                        {
                            firstN: 'Michael',
                            lastN: 'Hafer',
                            city: 'Erfurt',
                            age: '33',
                            country: 'Germany'
                        },
                        {
                            firstN: 'Max',
                            lastN: 'Mustermann',
                            city: 'München',
                            age: '32',
                            country: 'Germany'
                        },
                        {
                            firstN: 'Anna',
                            lastN: 'Haselbach',
                            city: 'Hamburg',
                            age: '22',
                            country: 'Germany'
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.paging-example-root__paging{
    max-width:1140px;
    min-height:100px;
    height:auto;
    overflow: auto;
    overflow-x:hidden;
    box-sizing: border-box;
    padding:20px;
    margin:0 auto;

    .menu-countable{
        min-width: 700px;
        max-width: 1024px;

        .react-divcreator-paging-topic-ul li:first-child{
            width:50px;
        }
    }

    .react-divcreator-paging-content-div{
        max-height:none;
    }
}`
        ),
        reactCode: (
`import { Paging } from 'react-divcreator';

<Paging
    id=""
    class="paging-example-root__paging menu-countable"
    displayTitle={true}
    showLineNumber={true}
    tableEditable={true}
    displayAll={true}
    performance={true}
    title={
        [
            "ID",
            "Name",
            "Last name",
            "City",
            "Age",
            "Country"
        ]
    }
    mapContent={
        [
            'firstN',
            'lastN',
            'city',
            'age',
            'country'
        ]
    }
    content={
        [
            {
                firstN: 'Max',
                lastN: 'Mustermann',
                city: 'München',
                age: '32',
                country: 'Germany',
                email: 'm.mustermann@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Anna',
                lastN: 'Haselbach',
                city: 'Hamburg',
                age: '22',
                country: 'Germany',
                email: 'a.haselbach@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Michael',
                lastN: 'Hafer',
                city: 'Erfurt',
                age: '33',
                country: 'Germany',
                email: 'm.hafer@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Max',
                lastN: 'Mustermann',
                city: 'München',
                age: '32',
                country: 'Germany',
                email: 'm.mustermann@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Anna',
                lastN: 'Haselbach',
                city: 'Hamburg',
                age: '22',
                country: 'Germany',
                email: 'a.haselbach@gmx.de',
                time: 'not displayed'
            }
        ]
    }
/>`
        ),
        jsCode: ('')
    },
    {
        class: 'paging-example-1',
        description: 'Example with paging system, dots (holds not displayed sites numbers), always display last page, next prev button tracking, editable rows and save button on last page. To se results, edit some row and open your console.',
        html: (
            <Paging
                id=""
                class="paging-example-root__paging-advanced menu-countable"
                recordsPerSite={3}
                displayActualPage={true}
                displayActualPageOf={true}
                actualPageOfHtml={(" of ")}
                showLineNumber={true}
                displayPrevNext={true}
                displayAvailablePages={true}
                displayClickablePages={true}
                displayPagesCount={1}
                displayAlwaysLastPage={true}
                displayDots={true}
                nextHTML={(">>")}
                nextFunction={consoleLog}
                nextFunctionData={"next button"}
                prevHTML={("<<")}
                prevFunction={consoleLog}
                prevFunctionData={"prev button"}
                pageFunction={consoleLog2}
                pageFunctionData={false}
                displayTitle={true}
                tableCallback={getEditedTableContent}
                tableEditable={true}
                tableEditableSaveHtml={<button> Save </button>}
                tableSaveCallback={showNewTableValues}
                tableSaveOnLastPage={true}
                displayPrevNextTogether={true}
                displayAlwaysPrevNext={true}
                performance={true}
                title={
                    [
                        "ID",
                        "Name",
                        "Last name",
                        "City",
                        "Age",
                        "Country"
                    ]
                }
                mapContent={
                    [
                        'firstN',
                        'lastN',
                        'city',
                        'age',
                        'country'
                    ]
                }
                content={
                    [
                        {
                            firstN: 'Max',
                            lastN: 'Mustermann',
                            city: 'München',
                            age: '32',
                            country: 'Germany',
                            email: 'm.mustermann@gmx.de',
                            time: 'not displayed'
                        },
                        {
                            firstN: 'Anna',
                            lastN: 'Haselbach',
                            city: 'Hamburg',
                            age: '22',
                            country: 'Germany',
                            email: 'a.haselbach@gmx.de',
                            time: 'not displayed'
                        },
                        {
                            firstN: 'Michael',
                            lastN: 'Hafer',
                            city: 'Erfurt',
                            age: '33',
                            country: 'Germany',
                            email: 'm.hafer@gmx.de',
                            time: 'not displayed'
                        },
                        {
                            firstN: 'Max',
                            lastN: 'Mustermann',
                            city: 'München',
                            age: '32',
                            country: 'Germany',
                            email: 'm.mustermann@gmx.de',
                            time: 'not displayed'
                        },
                        {
                            firstN: 'Anna',
                            lastN: 'Haselbach',
                            city: 'Hamburg',
                            age: '22',
                            country: 'Germany',
                            email: 'a.haselbach@gmx.de',
                            time: 'not displayed'
                        },
                        {
                            firstN: 'Michael',
                            lastN: 'Hafer',
                            city: 'Erfurt',
                            age: '33',
                            country: 'Germany',
                            email: 'm.hafer@gmx.de',
                            time: 'not displayed'
                        },
                        {
                            firstN: 'Max',
                            lastN: 'Mustermann',
                            city: 'München',
                            age: '32',
                            country: 'Germany',
                            email: 'm.mustermann@gmx.de',
                            time: 'not displayed'
                        },
                        {
                            firstN: 'Anna',
                            lastN: 'Haselbach',
                            city: 'Hamburg',
                            age: '22',
                            country: 'Germany',
                            email: 'a.haselbach@gmx.de',
                            time: 'not displayed'
                        },
                        {
                            firstN: 'Michael',
                            lastN: 'Hafer',
                            city: 'Erfurt',
                            age: '33',
                            country: 'Germany',
                            email: 'm.hafer@gmx.de',
                            time: 'not displayed'
                        },
                        {
                            firstN: 'Max',
                            lastN: 'Mustermann',
                            city: 'München',
                            age: '32',
                            country: 'Germany',
                            email: 'm.mustermann@gmx.de',
                            time: 'not displayed'
                        },
                        {
                            firstN: 'Anna',
                            lastN: 'Haselbach',
                            city: 'Hamburg',
                            age: '22',
                            country: 'Germany',
                            email: 'a.haselbach@gmx.de',
                            time: 'not displayed'
                        },
                        {
                            firstN: 'Michael',
                            lastN: 'Hafer',
                            city: 'Erfurt',
                            age: '33',
                            country: 'Germany',
                            email: 'm.hafer@gmx.de',
                            time: 'not displayed'
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.menu-countable .react-divcreator-paging-topic-ul li:first-child{
    width:50px;
}
.paging-example-root__paging-advanced{
    max-width:1140px;
    min-height:100px;
    height:auto;
    overflow-x: visible; 
    box-sizing: border-box;
    padding:20px;
    margin:0 auto;

    .react-divcreator-paging-topic-div{
        background:dodgerblue;

        .react-divcreator-paging-topic-ul{
            background:transparent;

            li{
                width: calc((100% / 5) - (50px / 5));

                span {
                    color:rgb(255,255,255);
                }
            }
            li:first-child{
                width:50px;
            }
        }
    }
    .react-divcreator-paging-content-ul{
        width:calc(100% - 50px);

        li{
            width:calc(20% - (50px / 5));
        }
        li:first-child{
            width:50px;
        }
    }
    .react-divcreator-paging-content-ul:hover{

        li{
            background:transparent;
        }
    }
    .react-divcreator-paging-content-div{
        max-height:none;

        input{
            box-sizing: border-box;
            padding-left:10px;
        }
    }

    .react-divcreator-paging-footer-ul{
        max-width: 220px;

        li{
            background: dodgerblue;
            border:2px solid transparent;
            transition-duration: 300ms;

            span {
                color:rgb(255,255,255);
            }
        }
        li:hover{
            background: transparent;
            border:2px solid dodgerblue;

            span {
                color:rgb(69,69,69);
            }
        }

        .react-divcreator-paging-footer-dots-child-div{
            min-height: 30px;
            height: auto;
            overflow: auto;
            padding: 20px;
            left: -130px;
            background: transparent;
            width: 240px;
            overflow: auto;
            box-sizing: border-box;
            padding: 20px;
            z-index:1;

            .react-divcreator-paging-footer-dots-child-ul {
                width: 100%;
                margin: 0;
                padding: 0;
                background: rgb(255,255,255);
                height: auto;
                padding: 10px;
                box-sizing: border-box;
                overflow: auto;
                border-radius:5px;

                li{
                    span {
                        color: rgb(255,255,255);
                    }
                }
                li:hover{
                    span {
                        color: rgb(69,69,69);
                    }
                }
            }
        }
    }
    .react-divcreator-paging-button-save{
        width: 100%;
        height:30px;
        margin-top:15px;
        clear: both;
        display: block;

        button {
            width: 120px;
            height: 30px;
            line-height: 30px;
            font-size: 1rem;
            border: 1px solid transparent;
            border-radius: 5px;
            transition-duration: 300ms;
            background: dodgerblue;
            color: white;
            margin: 0 auto;
            display: block;
        }
        button:hover{
            cursor:pointer;
            background: transparent;
            border:1px solid dodgerblue;
            color:rgb(69,69,69);
        }
    }
}`
        ),
        reactCode: (
`import { Paging } from 'react-divcreator';

<Paging
    id=""
    class="paging-example-root__paging-advanced menu-countable"
    recordsPerSite={3}
    displayActualPage={true}
    displayActualPageOf={true}
    actualPageOfHtml={(" of ")}
    showLineNumber={true}
    displayPrevNext={true}
    displayAvailablePages={true}
    displayClickablePages={true}
    displayPagesCount={1}
    displayAlwaysLastPage={true}
    displayDots={true}
    nextHTML={(">>")}
    nextFunction={consoleLog}
    nextFunctionData={"next button"}
    prevHTML={("<<")}
    prevFunction={consoleLog}
    prevFunctionData={"prev button"}
    pageFunction={consoleLog2}
    pageFunctionData={false}
    displayTitle={true}
    tableCallback={getEditedTableContent}
    tableEditable={true}
    tableEditableSaveHtml={<button> Save </button>}
    tableSaveCallback={showNewTableValues}
    tableSaveOnLastPage={true}
    displayPrevNextTogether={true}
    displayAlwaysPrevNext={true}
    performance={true}
    title={
        [
            "ID",
            "Name",
            "Last name",
            "City",
            "Age",
            "Country"
        ]
    }
    mapContent={
        [
            'firstN',
            'lastN',
            'city',
            'age',
            'country'
        ]
    }
    content={
        [
            {
                firstN: 'Max',
                lastN: 'Mustermann',
                city: 'München',
                age: '32',
                country: 'Germany',
                email: 'm.mustermann@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Anna',
                lastN: 'Haselbach',
                city: 'Hamburg',
                age: '22',
                country: 'Germany',
                email: 'a.haselbach@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Michael',
                lastN: 'Hafer',
                city: 'Erfurt',
                age: '33',
                country: 'Germany',
                email: 'm.hafer@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Max',
                lastN: 'Mustermann',
                city: 'München',
                age: '32',
                country: 'Germany',
                email: 'm.mustermann@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Anna',
                lastN: 'Haselbach',
                city: 'Hamburg',
                age: '22',
                country: 'Germany',
                email: 'a.haselbach@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Michael',
                lastN: 'Hafer',
                city: 'Erfurt',
                age: '33',
                country: 'Germany',
                email: 'm.hafer@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Max',
                lastN: 'Mustermann',
                city: 'München',
                age: '32',
                country: 'Germany',
                email: 'm.mustermann@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Anna',
                lastN: 'Haselbach',
                city: 'Hamburg',
                age: '22',
                country: 'Germany',
                email: 'a.haselbach@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Michael',
                lastN: 'Hafer',
                city: 'Erfurt',
                age: '33',
                country: 'Germany',
                email: 'm.hafer@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Max',
                lastN: 'Mustermann',
                city: 'München',
                age: '32',
                country: 'Germany',
                email: 'm.mustermann@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Anna',
                lastN: 'Haselbach',
                city: 'Hamburg',
                age: '22',
                country: 'Germany',
                email: 'a.haselbach@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Michael',
                lastN: 'Hafer',
                city: 'Erfurt',
                age: '33',
                country: 'Germany',
                email: 'm.hafer@gmx.de',
                time: 'not displayed'
            }
        ]
    }
/>`
        ),
        jsCode: (
`const consoleLog = (button, fromPage, event, customData, cachedChanges) => {
    console.clear();
    console.info(button);
    console.info(fromPage);
    console.info(event);
    console.info(customData);
    console.info(cachedChanges);
};

const consoleLog2 = (button, targetPage, event, customData, cachedChanges) => {
    console.clear();
    console.info(button);
    console.info(targetPage);
    console.info(event);
    console.info(customData);
    console.info(cachedChanges);
};

const showNewTableValues = (oldState, newState, allChangesByUser, saveClickedOnPage) => {
    console.clear();
    console.info("OLD STATE");
    console.info(oldState);
    console.info("NEW STATE");
    console.info(newState);
    console.info("ALL USER CHANGES");
    console.info(allChangesByUser);
    console.info("SAVE BUTTON CLICKED ON PAGE");
    console.info(saveClickedOnPage);
};

const getEditedTableContent = (oldState, newState, allChangesByUser) => {
    console.clear();
    console.info("OLD STATE");
    console.info(oldState);
    console.info("NEW STATE");
    console.info(newState);
    console.info("ALL USER CHANGES");
    console.info(allChangesByUser);
};`
        )
    },
    {
        class: 'paging-example-1',
        description: 'Previous example with the keys "hasErrors" and "errorMessages".',
        html: (
            <Paging
                class="paging-example-root__paging-advanced menu-countable"
                recordsPerSite={3}
                displayActualPage={false}
                displayActualPageOf={false}
                actualPageOfHtml={""}
                showLineNumber={true}
                displayPrevNext={true}
                displayAvailablePages={false}
                displayClickablePages={false}
                displayPagesCount={1}
                displayAlwaysLastPage={false}
                displayDots={false}
                nextHTML={(">>")}
                nextFunction={consoleLog}
                nextFunctionData={"next button"}
                prevHTML={("<<")}
                prevFunction={consoleLog}
                prevFunctionData={"prev button"}
                pageFunction={consoleLog2}
                pageFunctionData={false}
                displayTitle={true}
                tableCallback={getEditedTableContent}
                tableEditable={true}
                tableEditableSaveHtml={<button> Save </button>}
                tableSaveCallback={showNewTableValues}
                tableSaveOnLastPage={true}
                displayPrevNextTogether={true}
                displayAlwaysPrevNext={true}
                performance={true}
                title={
                    [
                        "ID",
                        "Name",
                        "Last name",
                        "City",
                        "Age",
                        "Country"
                    ]
                }
                mapContent={
                    [
                        'firstN',
                        'lastN',
                        'city',
                        'age',
                        'country'
                    ]
                }
                content={
                    [
                        {
                            firstN: 'Max',
                            lastN: 'Mustermann',
                            city: 'München',
                            age: '32',
                            country: 'Germany',
                            hasErrors: true,
                            errorMessages: {
                                country: 'Country not supported'
                            }
                        },
                        {
                            firstN: 'Anna',
                            lastN: 'Haselbach',
                            city: 'Hamburg',
                            age: '22',
                            country: 'Germany',
                            hasErrors: true,
                            errorMessages: {
                                age: 'Age not supported'
                            }
                        },
                        {
                            firstN: 'Michael',
                            lastN: 'Hafer',
                            city: 'Erfurt',
                            age: '33',
                            country: 'Germany'
                        },
                        {
                            firstN: 'Max',
                            lastN: 'Mustermann',
                            city: 'München',
                            age: '32',
                            country: 'Germany'
                        },
                        {
                            firstN: 'Anna',
                            lastN: 'Haselbach',
                            city: 'Hamburg',
                            age: '22',
                            country: 'Germany'
                        },
                        {
                            firstN: 'Michael',
                            lastN: 'Hafer',
                            city: 'Erfurt',
                            age: '33',
                            country: 'Germany',
                            hasErrors: true,
                            errorMessages: {
                                firstN: 'First name is wrong...'
                            }
                        },
                        {
                            firstN: 'Max',
                            lastN: 'Mustermann',
                            city: 'München',
                            age: '32',
                            country: 'Germany'
                        },
                        {
                            firstN: 'Anna',
                            lastN: 'Haselbach',
                            city: 'Hamburg',
                            age: '22',
                            country: 'Germany'
                        },
                        {
                            firstN: 'Michael',
                            lastN: 'Hafer',
                            city: 'Erfurt',
                            age: '33',
                            country: 'Germany'
                        },
                        {
                            firstN: 'Max',
                            lastN: 'Mustermann',
                            city: 'München',
                            age: '32',
                            country: 'Germany'
                        },
                        {
                            firstN: 'Anna',
                            lastN: 'Haselbach',
                            city: 'Hamburg',
                            age: '22',
                            country: 'Germany'
                        },
                        {
                            firstN: 'Michael',
                            lastN: 'Hafer',
                            city: 'Erfurt',
                            age: '33',
                            country: 'Germany'
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.menu-countable .react-divcreator-paging-topic-ul li:first-child{
    width:50px;
}
.paging-example-root__paging-advanced{
    max-width:1140px;
    min-height:100px;
    height:auto;
    overflow-x: visible; 
    box-sizing: border-box;
    padding:20px;
    margin:0 auto;

    .react-divcreator-paging-topic-div{
        background:dodgerblue;

        .react-divcreator-paging-topic-ul{
            background:transparent;
            box-sizing: border-box;
            overflow: hidden;
            padding: 0 0 10px 0;

            li{
                width: calc((100% / 5) - (50px / 5));

                span {
                    color:rgb(255,255,255);
                }
            }
            li:first-child{
                width:50px;
            }
        }
    }
    .react-divcreator-paging-content-ul{
        width:calc(100% - 50px);
        overflow: hidden;
        padding: 0 0 10px 0;
        box-sizing: border-box;
        position: relative;

        li{
            width:calc(20% - (50px / 5));
        }
        li:first-child{
            width:50px;
        }
    }
    .react-divcreator-paging-content-ul:hover{

        li{
            background:transparent;
        }
    }
    .react-divcreator-paging-content-div{
        max-height:none;

        input{
            box-sizing: border-box;
            padding-left:10px;
        }
    }

    .react-divcreator-paging-footer-ul{
        max-width: 220px;

        li{
            background: dodgerblue;
            border:2px solid transparent;
            transition-duration: 300ms;

            span {
                color:rgb(255,255,255);
            }
        }
        li:hover{
            background: transparent;
            border:2px solid dodgerblue;

            span {
                color:rgb(69,69,69);
            }
        }

        .react-divcreator-paging-footer-dots-child-div{
            min-height: 30px;
            height: auto;
            overflow: auto;
            padding: 20px;
            left: -130px;
            background: transparent;
            width: 240px;
            overflow: auto;
            box-sizing: border-box;
            padding: 20px;
            z-index:1;

            .react-divcreator-paging-footer-dots-child-ul {
                width: 100%;
                margin: 0;
                padding: 0;
                background: rgb(255,255,255);
                height: auto;
                padding: 10px;
                box-sizing: border-box;
                overflow: auto;
                border-radius:5px;

                li{
                    span {
                        color: rgb(255,255,255);
                    }
                }
                li:hover{
                    span {
                        color: rgb(69,69,69);
                    }
                }
            }
        }
    }
    .react-divcreator-paging-button-save{
        width: 100%;
        height:30px;
        margin-top:15px;
        clear: both;
        display: block;

        button {
            width: 120px;
            height: 30px;
            line-height: 30px;
            font-size: 1rem;
            border: 1px solid transparent;
            border-radius: 5px;
            transition-duration: 300ms;
            background: dodgerblue;
            color: white;
            margin: 0 auto;
            display: block;
        }
        button:hover{
            cursor:pointer;
            background: transparent;
            border:1px solid dodgerblue;
            color:rgb(69,69,69);
        }
    }
    .has-errors-ul{   
        .has-errors-ul-li{
            position: relative;
        
            .has-errors-ul-li-span{
                position: absolute;
                left:0;
                bottom:-30px;
                font-size: 12px;
                color:#F44559;
            }
        }
    }
    .has-errors-ul:before{
        position: absolute;
        content: '';
        top: calc(50% - 6px);
        right: 0px;
        width: 12px;
        height: 12px;
        background: #F44559;
        padding: 0;
        margin: 0;
        border-radius: 50%;
        z-index:1;
    }
}`
        ),
        reactCode: (
`import { Paging } from 'react-divcreator';

<Paging
    class="paging-example-root__paging-advanced menu-countable"
    recordsPerSite={3}
    displayActualPage={false}
    displayActualPageOf={false}
    actualPageOfHtml={""}
    showLineNumber={true}
    displayPrevNext={true}
    displayAvailablePages={false}
    displayClickablePages={false}
    displayPagesCount={1}
    displayAlwaysLastPage={false}
    displayDots={false}
    nextHTML={(">>")}
    nextFunction={consoleLog}
    nextFunctionData={"next button"}
    prevHTML={("<<")}
    prevFunction={consoleLog}
    prevFunctionData={"prev button"}
    pageFunction={consoleLog2}
    pageFunctionData={false}
    displayTitle={true}
    tableCallback={getEditedTableContent}
    tableEditable={true}
    tableEditableSaveHtml={<button> Save </button>}
    tableSaveCallback={showNewTableValues}
    tableSaveOnLastPage={true}
    displayPrevNextTogether={true}
    displayAlwaysPrevNext={true}
    performance={true}
    title={
        [
            "ID",
            "Name",
            "Last name",
            "City",
            "Age",
            "Country"
        ]
    }
    mapContent={
        [
            'firstN',
            'lastN',
            'city',
            'age',
            'country'
        ]
    }
    content={
        [
            {
                firstN: 'Max',
                lastN: 'Mustermann',
                city: 'München',
                age: '32',
                country: 'Germany',
                hasErrors: true,
                errorMessages: {
                    country: 'Country not supported'
                }
            },
            {
                firstN: 'Anna',
                lastN: 'Haselbach',
                city: 'Hamburg',
                age: '22',
                country: 'Germany',
                hasErrors: true,
                errorMessages: {
                    age: 'Age not supported'
                }
            },
            {
                firstN: 'Michael',
                lastN: 'Hafer',
                city: 'Erfurt',
                age: '33',
                country: 'Germany'
            },
            {
                firstN: 'Max',
                lastN: 'Mustermann',
                city: 'München',
                age: '32',
                country: 'Germany'
            },
            {
                firstN: 'Anna',
                lastN: 'Haselbach',
                city: 'Hamburg',
                age: '22',
                country: 'Germany'
            },
            {
                firstN: 'Michael',
                lastN: 'Hafer',
                city: 'Erfurt',
                age: '33',
                country: 'Germany',
                hasErrors: true,
                errorMessages: {
                    firstN: 'First name is wrong...'
                }
            },
            {
                firstN: 'Max',
                lastN: 'Mustermann',
                city: 'München',
                age: '32',
                country: 'Germany'
            },
            {
                firstN: 'Anna',
                lastN: 'Haselbach',
                city: 'Hamburg',
                age: '22',
                country: 'Germany'
            },
            {
                firstN: 'Michael',
                lastN: 'Hafer',
                city: 'Erfurt',
                age: '33',
                country: 'Germany'
            },
            {
                firstN: 'Max',
                lastN: 'Mustermann',
                city: 'München',
                age: '32',
                country: 'Germany'
            },
            {
                firstN: 'Anna',
                lastN: 'Haselbach',
                city: 'Hamburg',
                age: '22',
                country: 'Germany'
            },
            {
                firstN: 'Michael',
                lastN: 'Hafer',
                city: 'Erfurt',
                age: '33',
                country: 'Germany'
            }
        ]
    }
/>`
        ),
        jsCode: (
`const consoleLog = (button, fromPage, event, customData, cachedChanges) => {
    console.clear();
    console.info(button);
    console.info(fromPage);
    console.info(event);
    console.info(customData);
    console.info(cachedChanges);
};

const consoleLog2 = (button, targetPage, event, customData, cachedChanges) => {
    console.clear();
    console.info(button);
    console.info(targetPage);
    console.info(event);
    console.info(customData);
    console.info(cachedChanges);
};

const showNewTableValues = (oldState, newState, allChangesByUser, saveClickedOnPage) => {
    console.clear();
    console.info("OLD STATE");
    console.info(oldState);
    console.info("NEW STATE");
    console.info(newState);
    console.info("ALL USER CHANGES");
    console.info(allChangesByUser);
    console.info("SAVE BUTTON CLICKED ON PAGE");
    console.info(saveClickedOnPage);
};

const getEditedTableContent = (oldState, newState, allChangesByUser) => {
    console.clear();
    console.info("OLD STATE");
    console.info(oldState);
    console.info("NEW STATE");
    console.info(newState);
    console.info("ALL USER CHANGES");
    console.info(allChangesByUser);
};`
        )
    },
    {
        class: 'paging-example-3',
        description: 'Example with tableDirection = "horizontal". The keys on the left are the values from the array "title" and the key "displayTitle" have to be set to "true"',
        html: (
            <Paging
                id=""
                class="root-paging-3"
                recordsPerSite={1}
                displayActualPage={true}
                displayActualPageOf={true}
                prefixForFirstPage={'page'}
                actualPageOfHtml={(" of ")}
                suffixForLastPage={'pages'}
                showLineNumber={true}
                displayPrevNext={true}
                displayAvailablePages={true}
                displayClickablePages={false}
                displayPagesCount={1}
                displayAlwaysLastPage={true}
                displayDots={true}
                nextHTML={(">>")}
                nextFunction={consoleLog}
                nextFunctionData={"next button"}
                prevHTML={("<<")}
                prevFunction={consoleLog}
                prevFunctionData={"prev button"}
                pageFunction={consoleLog2}
                pageFunctionData={true}
                displayTitle={true}
                tableDirection={"horizontal"}
                tableCallback={getEditedTableContent}
                performance={true}
                title={
                    [
                        "Name",
                        "Last name",
                        "City",
                        "Age",
                        "Country"
                    ]
                }
                mapContent={
                    [
                        'firstN',
                        'lastN',
                        'city',
                        'age',
                        'country'
                    ]
                }
                content={
                    [
                        {
                            firstN: 'Max',
                            lastN: 'Mustermann',
                            city: 'München',
                            age: '32',
                            country: 'Germany'
                        },
                        {
                            firstN: 'Anna',
                            lastN: 'Haselbach',
                            city: 'Hamburg',
                            age: '22',
                            country: 'Germany'
                        },
                        {
                            firstN: 'Michael',
                            lastN: 'Hafer',
                            city: 'Erfurt',
                            age: '33',
                            country: 'Germany'
                        },
                        {
                            firstN: 'Max',
                            lastN: 'Mustermann',
                            city: 'München',
                            age: '32',
                            country: 'Germany'
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.react-divcreator-paging-content-div{
    max-height: 250px;
}
.react-divcreator-paging-footer-dots-child-div{
    width: 150px;
    min-height: 30px;
    height: auto;
    overflow: auto;
    padding: 20px 0;
    left: -60px;
}
.root-paging-3{
    margin:0 auto;
    max-height:400px;
    max-width: 350px;

    .react-divcreator-paging-topic-div-horizontal{
        width:150px;
        box-sizing: border-box;
        padding-left:40px;
        overflow:hidden;
        
        .react-divcreator-paging-topic-ul-horizontal {
            width:110px;
            overflow:hidden;
            
            li{
                width:100%;
                background:rgba(242,242,242, .6);
                padding:5px;
                padding-left:10px;
                margin:5px;
                border-radius:5px;
                line-height:45px;
            }
        }
    }
    .react-divcreator-paging-content-div-horizontal{
        float:left;
        box-sizing: border-box;
        min-height:300px;
        max-width: calc(100% - 110px);

        li{
            float:none;
            width:calc(100% - 110px);
            padding:0;
            margin:10px;
            padding-left:10px;
            line-height:45px;
        }
    }
    .react-divcreator-paging-footer-div{
        min-height:50px;
        max-height:none;
        clear:both;
    }
}`
        ),
        reactCode: (
`import { Paging } from 'react-divcreator';

<Paging
    id=""
    class="root-paging-3"
    recordsPerSite={1}
    displayActualPage={true}
    displayActualPageOf={true}
    prefixForFirstPage={'page'}
    actualPageOfHtml={(" of ")}
    suffixForLastPage={'pages'}
    showLineNumber={true}
    displayPrevNext={true}
    displayAvailablePages={true}
    displayClickablePages={false}
    displayPagesCount={1}
    displayAlwaysLastPage={true}
    displayDots={true}
    nextHTML={(">>")}
    nextFunction={consoleLog}
    nextFunctionData={"next button"}
    prevHTML={("<<")}
    prevFunction={consoleLog}
    prevFunctionData={"prev button"}
    pageFunction={consoleLog2}
    pageFunctionData={true}
    displayTitle={true}
    tableDirection={"horizontal"}
    tableCallback={getEditedTableContent}
    performance={true}
    title={
        [
            "Name",
            "Last name",
            "City",
            "Age",
            "Country"
        ]
    }
    mapContent={
        [
            'firstN',
            'lastN',
            'city',
            'age',
            'country'
        ]
    }
    content={
        [
            {
                firstN: 'Max',
                lastN: 'Mustermann',
                city: 'München',
                age: '32',
                country: 'Germany',
                email: 'm.mustermann@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Anna',
                lastN: 'Haselbach',
                city: 'Hamburg',
                age: '22',
                country: 'Germany',
                email: 'a.haselbach@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Michael',
                lastN: 'Hafer',
                city: 'Erfurt',
                age: '33',
                country: 'Germany',
                email: 'm.hafer@gmx.de',
                time: 'not displayed'
            },
            {
                firstN: 'Max',
                lastN: 'Mustermann',
                city: 'München',
                age: '32',
                country: 'Germany',
                email: 'm.mustermann@gmx.de',
                time: 'not displayed'
            }
        ]
    }
/>`
        ),
        jsCode: (
`const consoleLog = (button, fromPage, event, customData) => {
    console.clear();
    console.info(button);
    console.info(fromPage);
    console.info(event);
    console.info(customData);
};

const consoleLog2 = (button, targetPage, event, customData) => {
    console.clear();
    console.info(button);
    console.info(targetPage);
    console.info(event);
    console.info(customData);
};
const getEditedTableContent = (oldState, newState, allChangesByUser) => {
    console.clear();
    console.info("OLD STATE");
    console.info(oldState);
    console.info("NEW STATE");
    console.info(newState);
    console.info("ALL USER CHANGES");
    console.info(allChangesByUser);
};`
        )
    },
    {
        class: 'paging-example-3',
        description: 'Previous example with the keys "hasErrors" and "errorMessages".',
        html: (
            <Paging
                id=""
                class="root-paging-3"
                recordsPerSite={1}
                displayActualPage={true}
                displayActualPageOf={true}
                prefixForFirstPage={'page'}
                actualPageOfHtml={(" of ")}
                suffixForLastPage={'pages'}
                showLineNumber={true}
                displayPrevNext={true}
                displayAvailablePages={true}
                displayClickablePages={false}
                displayPagesCount={1}
                displayAlwaysLastPage={true}
                displayDots={true}
                nextHTML={(">>")}
                nextFunction={consoleLog}
                nextFunctionData={"next button"}
                prevHTML={("<<")}
                prevFunction={consoleLog}
                prevFunctionData={"prev button"}
                pageFunction={consoleLog2}
                pageFunctionData={true}
                displayTitle={true}
                tableDirection={"horizontal"}
                tableCallback={getEditedTableContent}
                performance={true}
                title={
                    [
                        "Name",
                        "Last name",
                        "City",
                        "Age",
                        "Country"
                    ]
                }
                mapContent={
                    [
                        'firstN',
                        'lastN',
                        'city',
                        'age',
                        'country'
                    ]
                }
                content={
                    [
                        {
                            firstN: 'Max',
                            lastN: 'Mustermann',
                            city: 'München',
                            age: '32',
                            country: 'Germany',
                            hasErrors: true,
                            errorMessages: {
                                age: 'You are to young',
                                country: 'Country not supported'
                            }
                        },
                        {
                            firstN: 'Anna',
                            lastN: 'Haselbach',
                            city: 'Hamburg',
                            age: '22',
                            country: 'Germany'
                        },
                        {
                            firstN: 'Michael',
                            lastN: 'Hafer',
                            city: 'Erfurt',
                            age: '33',
                            country: 'USA',
                            hasErrors: true,
                            errorMessages: {
                                age: 'You are to old',
                                country: 'Country not supported'
                            }
                        },
                        {
                            firstN: 'Max',
                            lastN: 'Mustermann',
                            city: 'München',
                            age: '32',
                            country: 'Germany'
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.root-paging-3{
    margin:0 auto;
    max-height:400px;
    max-width: 350px;

    .react-divcreator-paging-topic-div-horizontal{
        width:150px;
        box-sizing: border-box;
        padding-left:40px;
        overflow:hidden;
        
        .react-divcreator-paging-topic-ul-horizontal {
            width:110px;
            overflow:hidden;
            
            li{
                width:100%;
                background:rgba(242,242,242, .6);
                padding:5px;
                padding-left:10px;
                margin:5px;
                border-radius:5px;
                line-height:45px;
            }
        }
    }
    .react-divcreator-paging-content-div-horizontal{
        float:left;
        box-sizing: border-box;
        min-height:300px;
        max-width: calc(100% - 110px);

        li{
            float:none;
            width:100%;
            padding:0;
            margin:10px;
            padding-left:10px;
            line-height:45px;
        }
    }
    .react-divcreator-paging-footer-div{
        min-height:50px;
        max-height:none;
        clear:both;
    }
    .has-errors-ul{   
        .has-errors-ul-li{
            position: relative;
        
            .has-errors-ul-li-span{
                position: absolute;
                right:-45px;
                bottom:-20px;
                font-size: 12px;
                color:#F44559;
                width:150px;
            }
        }
    }
    .has-errors-ul:before{
        position: absolute;
        content: '';
        top: 10px;
        left: 10px;
        width: 12px;
        height: 12px;
        background: #F44559;
        padding: 0;
        margin: 0;
        border-radius: 50%;
        z-index: 1;
    }
}`
        ),
        reactCode: (
`import { Paging } from 'react-divcreator';

<Paging
    id=""
    class="root-paging-3"
    recordsPerSite={1}
    displayActualPage={true}
    displayActualPageOf={true}
    prefixForFirstPage={'page'}
    actualPageOfHtml={(" of ")}
    suffixForLastPage={'pages'}
    showLineNumber={true}
    displayPrevNext={true}
    displayAvailablePages={true}
    displayClickablePages={false}
    displayPagesCount={1}
    displayAlwaysLastPage={true}
    displayDots={true}
    nextHTML={(">>")}
    nextFunction={consoleLog}
    nextFunctionData={"next button"}
    prevHTML={("<<")}
    prevFunction={consoleLog}
    prevFunctionData={"prev button"}
    pageFunction={consoleLog2}
    pageFunctionData={true}
    displayTitle={true}
    tableDirection={"horizontal"}
    tableCallback={getEditedTableContent}
    performance={true}
    title={
        [
            "Name",
            "Last name",
            "City",
            "Age",
            "Country"
        ]
    }
    mapContent={
        [
            'firstN',
            'lastN',
            'city',
            'age',
            'country'
        ]
    }
    content={
        [
            {
                firstN: 'Max',
                lastN: 'Mustermann',
                city: 'München',
                age: '32',
                country: 'Germany',
                hasErrors: true,
                errorMessages: {
                    age: 'You are to young',
                    country: 'Country not supported'
                }
            },
            {
                firstN: 'Anna',
                lastN: 'Haselbach',
                city: 'Hamburg',
                age: '22',
                country: 'Germany'
            },
            {
                firstN: 'Michael',
                lastN: 'Hafer',
                city: 'Erfurt',
                age: '33',
                country: 'USA',
                hasErrors: true,
                errorMessages: {
                    age: 'You are to old',
                    country: 'Country not supported'
                }
            },
            {
                firstN: 'Max',
                lastN: 'Mustermann',
                city: 'München',
                age: '32',
                country: 'Germany'
            }
        ]
    }
/>`
        ),
        jsCode: (
`const consoleLog = (button, fromPage, event, customData) => {
    console.clear();
    console.info(button);
    console.info(fromPage);
    console.info(event);
    console.info(customData);
};

const consoleLog2 = (button, targetPage, event, customData) => {
    console.clear();
    console.info(button);
    console.info(targetPage);
    console.info(event);
    console.info(customData);
};
const getEditedTableContent = (oldState, newState, allChangesByUser) => {
    console.clear();
    console.info("OLD STATE");
    console.info(oldState);
    console.info("NEW STATE");
    console.info(newState);
    console.info("ALL USER CHANGES");
    console.info(allChangesByUser);
};`
        )
    }
];

const pagingKeys = [
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
        key: 'recordsPerSite',
        description: 'Numeric - How many records should be displayed on one each single site.'
    },
    {
        key: 'displayActualPage',
        description: 'Boolean - Display the page, where there user actual is.'
    },
    {
        key: 'displayActualPageOf',
        description: 'Boolean - Display the keys "actualPageOfHtml" value, true or false.'
    },
    {
        key: 'actualPageOfHtml',
        description: 'Mixed - Developers custom html (JSX) betweend the keys [displayActualPage] JSX [displayActualPageOf].'
    },
    {
        key: 'showLineNumber',
        description: 'Boolean - Show number of current entry from list.'
    },
    {
        key: 'displayPrevNext',
        description: 'Boolean - Show prev and next button.'
    },
    {
        key: 'displayPagesCount',
        description: 'Numeric - How many sites should be displayed.'
    },
    {
        key: 'displayAlwaysLastPage',
        description: 'Boolean - Always display the last page after the pages with the count from "displayPagesCount".'
    },
    {
        key: 'displayDots',
        description: 'Boolean - Display all number of sites there are not displayed and there are between "displayPagesCount" and "displayAlwaysLastPage".'
    },
    {
        key: 'nextHTML',
        description: 'Mixed - Next buttons html (JSX).'
    },
    {
        key: 'nextFunction',
        description: 'Function - Track function if the user click the next button. 1 argument is the word "next", 2 argument is where the user was (page number [int]) before clicked the next button, 3 argument is the click event, 4 argument is the nextFunctionData passed by the developer, 5 argument is the cached data (as object) with the keys (allChangesByUser, buttonSaveClickedOnPage, newState, originalState).'
    },
    {
        key: 'nextFunctionData',
        description: 'Mixed - Last parameter passed into the track function.'
    },
    {
        key: 'prevHTML',
        description: 'Mixed - Previous buttons html (JSX).'
    },
    {
        key: 'prevFunction',
        description: 'Function - Track function if the user click the prev button. 1 argument is the word "prev", 2 argument is where the user was (page number [int]) before clicked the prev button, 3 argument is the click event, 4 argument is the prevFunctionData passed by the developer, 5  argument is the cached data (as object) with the keys (allChangesByUser, buttonSaveClickedOnPage, newState, originalState).'
    },
    {
        key: 'prevFunctionData',
        description: 'Mixed - Last parameter passed into the track function.'
    },
    {
        key: 'pageFunction',
        description: 'Function - Track function if the user click a page number (below the entrys). 1 argument is the word "page", 2 argument is the users target page not the source page number, 3 argument is the click event.'
    },
    {
        key: 'pageFunctionData',
        description: 'Mixed - Last parameter passed into the track function.'
    },
    {
        key: 'title',
        description: 'Array - Array of strings to display as title of the pagination.'
    },
    {
        key: 'mapContent',
        description: 'Array - Array of entrys to map each object content. The order of mapContent is important.'
    },
    {
        key : 'content',
        description : 'Array - Array of object thats displayed in the pagination system. Only the keys from the object are displayed, there are in the array "mapContent". Pleas care about the arrays order of the key "mapContent" !'
    },
    {
        key : 'content.hasErrors',
        description : 'Boolean - if true then listen on the provided object "errorMessages" to display some error messages.'
    },
    {
        key : 'content.errorMessages',
        description : 'Object - keyName (left site) is the key used in the mapping function (by the key "mapContent") and displaying a single row value. The value (right site) is an custom defined error message by the developer.'
    },
    {
        key : 'displayTitle',
        description : 'Boolean - display header titles of table rows or not.'
    },
    {
        key : 'displayClickablePages',
        description : 'Boolean - display in footer available (clickable) pages or not.'
    },
    {
        key : 'prefixForFirstPage',
        description : 'String - text before the first page number.'
    },
    {
        key : 'suffixForLastPage',
        description : 'String - text after the last page number.'
    },
    {
        key : 'tableDirection',
        description : 'String - if value is set to "horizontal" then only 1 item per site are displayed. The keys on the left are the values from the array "title" and the key "displayTitle" have to be set to "true"'
    },
    {
        key : 'tableEditable',
        description : 'Boolean - Should be the values from the table editable. It works only if the keys "tableDirection" value are "horizontal".'
    },
    {
        key : 'tableEditableSaveHtml',
        description : 'Mixed - custom developers JSX as save button.'
    },
    {
        key : 'tableSaveCallback',
        description : 'Function - callback function defined by the user to handle submission.'
    },
    {
        key : 'tableSaveOnLastPage',
        description : 'Boolean - if value is set to true, then the save button appears only on the last page.'
    },
    {
        key : 'displayPrevNextTogether',
        description : 'Boolean - display the previous and next button togehter, it`s mean if the user is on the first page then the previous button are displayed and if the user is on the last page then the next button are displayed and the buttons displayed together if the user make an "mouseOver" event on the table content.'
    },
    {
        key : 'displayAlwaysPrevNext',
        description : 'Boolean - the buttons are displayed permanently. If the key "displayPrevNextTogether" are setted to false, then if the user is on the first page, then the previous button not displayed, if the user is on the last page, then the next button not displayed. If the key "displayPrevNextTogether" are setted to true, then the navigation buttons displayed permanently.'
    },
    {
        key : 'tableCallback',
        description : 'Function - Developers defined function fired each time a row has been edited.'
    },
    {
        key : 'displayAll',
        description : 'Boolean - display all elements in the current "content". If the value is setted to true, then the pagination functionality are turned off. If displayAll is true the functionality of select -> option fields are available. See example 2.'
    }
]

export {
    pagingData,
    pagingKeys
};

