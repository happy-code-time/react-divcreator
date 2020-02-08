import React from 'react';

import { InputSuggestion } from '../../module/build/react-divcreator';

const log = (currentChoosedItems) => {
    console.clear();
    console.info(currentChoosedItems);
};

const inputsuggestionData = [
    {
        class: '',
        description: 'Example with SINGLE suggestions (multiChoice={false}) with email adress choices and custom callback function (onChangeCallback={log}) after an element has been selected/ de-selected. This search is based on the key (in each object) textSearch - details are in the Available keys section below. Notice that only this example has an autoFocus setted to true.',
        html: (
            <div className="inputsuggestion-example-1--div">
                <InputSuggestion
                    class="inputsuggestion-example-1"
                    placeholder='Type to search for an email...'
                    onChangeCallback={log}
                    maxHeight={200}
                    keySensitive={false}
                    sortAsc={true}
                    mouseOverSelection={true}
                    data={[
                        {
                            textSearch: 'robert.gott@domain.com'
                        },
                        {
                            textSearch: 'david.gott@domain.com'
                        },
                        {
                            textSearch: 'john.müller@domain.com'
                        },
                        {
                            textSearch: 'max.knoll@domain.com'
                        },
                        {
                            textSearch: 'robert.gott@domain.com'
                        },
                        {
                            textSearch: 'frida.müller@domain.com'
                        },
                        {
                            textSearch: 'john.gott@domain.com'
                        },
                        {
                            textSearch: 'john.müller@domain.com'
                        },
                        {
                            textSearch: 'tanja.knoll@domain.com'
                        },
                        {
                            textSearch: 'anja.hanz@domain.com'
                        },
                        {
                            textSearch: 'john.gott@domain.com'
                        },
                        {
                            textSearch: 'max.gott@domain.com'
                        }
                    ]}
                />
            </div>
        ),
        cssCode: (
`.inputsuggestion-example-1--div{
    width: 100%;

    .inputsuggestion-example-1{
        position: absolute;
        top:0;
        left:0;
        width: 100%;
    }
}`
        ),
        reactCode: (
`import { InputSuggestion } from 'react-divcreator';

<div className="inputsuggestion-example-1--div">
    <InputSuggestion
        class="inputsuggestion-example-1"
        placeholder='Type to search for an email...'
        onChangeCallback={log}
        maxHeight={200}
        keySensitive={false}
        sortAsc={true}
        mouseOverSelection={true}
        data={[
            {
                textSearch: 'robert.gott@domain.com'
            },
            {
                textSearch: 'david.gott@domain.com'
            },
            {
                textSearch: 'john.müller@domain.com'
            },
            {
                textSearch: 'max.knoll@domain.com'
            },
            {
                textSearch: 'robert.gott@domain.com'
            },
            {
                textSearch: 'frida.müller@domain.com'
            },
            {
                textSearch: 'john.gott@domain.com'
            },
            {
                textSearch: 'john.müller@domain.com'
            },
            {
                textSearch: 'tanja.knoll@domain.com'
            },
            {
                textSearch: 'anja.hanz@domain.com'
            },
            {
                textSearch: 'john.gott@domain.com'
            },
            {
                textSearch: 'max.gott@domain.com'
            }
        ]}
    />
</div>
`
        ),
        jsCode: (
`const log = (currentChoosedItems) => {
    console.clear();
    console.info(currentChoosedItems);
};
`
        )
    },
    {
        class: '',
        description: "Example with MULTI suggestion, doubleChoosedRemove={false} - it's mean if the user click second time on the same element then nothing happens. Example with the keys: textDropDown and choosedText in single datas objects.",
        html: (
            <div className="inputsuggestion-example-all--div">
                <InputSuggestion
                    class="inputsuggestion-example-all"
                    placeholder='Type to search for an email...'
                    onChangeCallback={log}
                    multiChoice={true}
                    maxHeight={200}
                    clearInputOnChange={true}
                    sortAsc={true}
                    mouseOverSelection={true}
                    data={[
                        {
                            textSearch: 'robert.gott@domain.com',
                            textDropDown: 'Email from Robert',
                            choosedText: 'Robert'
                        },
                        {
                            textSearch: 'david.gott@domain.com',
                            textDropDown: 'Email from David',
                            choosedText: 'David'
                        },
                        {
                            textSearch: 'john.müller@domain.com',
                            textDropDown: 'Email from John',
                            choosedText: 'John'
                        },
                        {
                            textSearch: 'max.knoll@domain.com',
                            textDropDown: 'Email from Max',
                            choosedText: 'Max'
                        },
                        {
                            textSearch: 'anja.example@domain.com',
                            textDropDown: 'Email from Anja',
                            choosedText: 'Anja'
                        },
                        {
                            textSearch: 'ber.example@domain.com',
                            textDropDown: 'Email from Ber',
                            choosedText: 'Ber'
                        },
                        {
                            textSearch: 'julia.far@domain.com',
                            textDropDown: 'Email from Julia',
                            choosedText: 'Julia'
                        },
                        {
                            textSearch: 'hanz.vogel@domain.com',
                            textDropDown: 'Email from Hanz',
                            choosedText: 'Hanz'
                        }
                    ]}
                />
            </div>
        ),
        cssCode: (
`.inputsuggestion-example-all--div{
    width: 100%;

    .inputsuggestion-example-all{
        position: absolute;
        top:0;
        left:0;
        width: 100%;

        .react-divcreator-inputsuggestion__choosed--span{
            background-color: rgba(99,99,99,.3);
        }
    }
}`
        ),
        reactCode: (
`import { InputSuggestion } from 'react-divcreator';

<div className="inputsuggestion-example-all--div">
    <InputSuggestion
        class="inputsuggestion-example-all"
        placeholder='Type to search for an email...'
        onChangeCallback={log}
        multiChoice={true}
        maxHeight={200}
        clearInputOnChange={true}
        sortAsc={true}
        mouseOverSelection={true}
        data={[
            {
                textSearch: 'robert.gott@domain.com',
                textDropDown: 'Email from Robert',
                choosedText: 'Robert',
                choosed: true
            },
            {
                textSearch: 'david.gott@domain.com',
                textDropDown: 'Email from David',
                choosedText: 'David'
            },
            {
                textSearch: 'john.müller@domain.com',
                textDropDown: 'Email from John',
                choosedText: 'John'
            },
            {
                textSearch: 'max.knoll@domain.com',
                textDropDown: 'Email from Max',
                choosedText: 'Max'
            },
            {
                textSearch: 'anja.example@domain.com',
                textDropDown: 'Email from Anja',
                choosedText: 'Anja'
            },
            {
                textSearch: 'ber.example@domain.com',
                textDropDown: 'Email from Ber',
                choosedText: 'Ber'
            },
            {
                textSearch: 'julia.far@domain.com',
                textDropDown: 'Email from Julia',
                choosedText: 'Julia'
            },
            {
                textSearch: 'hanz.vogel@domain.com',
                textDropDown: 'Email from Hanz',
                choosedText: 'Hanz'
            }
        ]}
    />
</div>
`
        ),
        jsCode: (
`const log = (currentChoosedItems) => {
    console.clear();
    console.info(currentChoosedItems);
};`
        )
    },
    {
        class: '',
        description: "Example with MULTI suggestion with 2 predefined elements.",
        html: (
            <div className="inputsuggestion-example-all--div">
                <InputSuggestion
                    class="inputsuggestion-example-all"
                    placeholder='Type to search for an email...'
                    onChangeCallback={log}
                    multiChoice={true}
                    maxHeight={200}
                    clearInputOnChange={true}
                    sortAsc={true}
                    mouseOverSelection={true}
                    data={[
                        {
                            textSearch: 'robert.gott@domain.com',
                            textDropDown: 'Email from Robert',
                            choosedText: 'Robert',
                            isChoosed: true
                        },
                        {
                            textSearch: 'david.gott@domain.com',
                            textDropDown: 'Email from David',
                            choosedText: 'David'
                        },
                        {
                            textSearch: 'john.müller@domain.com',
                            textDropDown: 'Email from John',
                            choosedText: 'John',
                            isChoosed: true
                        },
                        {
                            textSearch: 'max.knoll@domain.com',
                            textDropDown: 'Email from Max',
                            choosedText: 'Max'
                        },
                        {
                            textSearch: 'anja.example@domain.com',
                            textDropDown: 'Email from Anja',
                            choosedText: 'Anja'
                        },
                        {
                            textSearch: 'ber.example@domain.com',
                            textDropDown: 'Email from Ber',
                            choosedText: 'Ber'
                        },
                        {
                            textSearch: 'julia.far@domain.com',
                            textDropDown: 'Email from Julia',
                            choosedText: 'Julia'
                        },
                        {
                            textSearch: 'hanz.vogel@domain.com',
                            textDropDown: 'Email from Hanz',
                            choosedText: 'Hanz'
                        }
                    ]}
                />
            </div>
        ),
        cssCode: (
`.inputsuggestion-example-all--div{
    width: 100%;

    .inputsuggestion-example-all{
        position: absolute;
        top:0;
        left:0;
        width: 100%;

        .react-divcreator-inputsuggestion__choosed--span{
            background-color: rgba(99,99,99,.3);
        }
    }
}`
        ),
        reactCode: (
`import { InputSuggestion } from 'react-divcreator';

<div className="inputsuggestion-example-all--div">
    <InputSuggestion
        class="inputsuggestion-example-all"
        placeholder='Type to search for an email...'
        onChangeCallback={log}
        multiChoice={true}
        maxHeight={200}
        clearInputOnChange={true}
        sortAsc={true}
        mouseOverSelection={true}
        data={[
            {
                textSearch: 'robert.gott@domain.com',
                textDropDown: 'Email from Robert',
                choosedText: 'Robert',
                isChoosed: true
            },
            {
                textSearch: 'david.gott@domain.com',
                textDropDown: 'Email from David',
                choosedText: 'David'
            },
            {
                textSearch: 'john.müller@domain.com',
                textDropDown: 'Email from John',
                choosedText: 'John',
                isChoosed: true
            },
            {
                textSearch: 'max.knoll@domain.com',
                textDropDown: 'Email from Max',
                choosedText: 'Max'
            },
            {
                textSearch: 'anja.example@domain.com',
                textDropDown: 'Email from Anja',
                choosedText: 'Anja'
            },
            {
                textSearch: 'ber.example@domain.com',
                textDropDown: 'Email from Ber',
                choosedText: 'Ber'
            },
            {
                textSearch: 'julia.far@domain.com',
                textDropDown: 'Email from Julia',
                choosedText: 'Julia'
            },
            {
                textSearch: 'hanz.vogel@domain.com',
                textDropDown: 'Email from Hanz',
                choosedText: 'Hanz'
            }
        ]}
    />
</div>
`
        ),
        jsCode: (
`const log = (currentChoosedItems) => {
    console.clear();
    console.info(currentChoosedItems);
};`
        )
    },
    {
        class: '',
        description: "Example with MULTI suggestion, doubleChoosedRemove={true} - it's mean if the user click second time on the same element then the current choosed element are removed from the choosed options list. Example with clearInputOnChange={false} to persist the drop down list with the current state.",
        html: (
            <div className="inputsuggestion-example-all--div">
                <InputSuggestion
                    class="inputsuggestion-example-all"
                    placeholder='Type to search for an email...'
                    clearInputOnChange={false}
                    onChangeCallback={log}
                    doubleChoosedRemove={true}
                    multiChoice={true}
                    maxHeight={200}
                    sortAsc={true}
                    mouseOverSelection={true}
                    data={[
                        {
                            textSearch: 'robert.gott@domain.com',
                            textDropDown: 'robert.gott@domain.com',
                            choosedText: 'Robert'
                        },
                        {
                            textSearch: 'david.gott@domain.com',
                            textDropDown: 'david.gott@domain.com',
                            choosedText: 'David'
                        },
                        {
                            textSearch: 'john.müller@domain.com',
                            textDropDown: 'john.müller@domain.com',
                            choosedText: 'John'
                        },
                        {
                            textSearch: 'max.knoll@domain.com',
                            textDropDown: 'max.knoll@domain.com',
                            choosedText: 'Max'
                        },
                        {
                            textSearch: 'max.woll@domain.com',
                            textDropDown: 'max.woll@domain.com',
                            choosedText: 'Max'
                        },
                        {
                            textSearch: 'john.doe@domain.com',
                            textDropDown: 'Jon.doe@domain.com',
                            choosedText: 'John'
                        },
                        {
                            textSearch: 'anja.example@domain.com',
                            textDropDown: 'anja.example@domain.com',
                            choosedText: 'Anja'
                        },
                        {
                            textSearch: 'ber.example@domain.com',
                            textDropDown: 'ber.example@domain.com',
                            choosedText: 'Ber'
                        },
                        {
                            textSearch: 'julia.far@domain.com',
                            textDropDown: 'julia.far@domain.com',
                            choosedText: 'Julia'
                        },
                        {
                            textSearch: 'hanz.vogel@domain.com',
                            textDropDown: 'hanz.vogel@domain.com',
                            choosedText: 'Hanz'
                        }
                    ]}
                />
            </div>
        ),
        cssCode: (
`.inputsuggestion-example-all--div{
    width: 100%;

    .inputsuggestion-example-all{
        position: absolute;
        top:0;
        left:0;
        width: 100%;

        .react-divcreator-inputsuggestion__choosed--span{
            background-color: rgba(99,99,99,.3);
        }
    }
}`
        ),
        reactCode: (
`import { InputSuggestion } from 'react-divcreator';

<div className="inputsuggestion-example-1--div">
    <InputSuggestion
        class="inputsuggestion-example-1"
        placeholder='Type to search for an email...'
        class="inputsuggestion-example-1"
        placeholder='Type to search for an email...'
        clearInputOnChange={false}
        onChangeCallback={log}
        doubleChoosedRemove={true}
        multiChoice={true}
        maxHeight={200}
        mouseOverSelection={true}
        data={[
            {
                textSearch: 'robert.gott@domain.com',
                textDropDown: 'robert.gott@domain.com',
                choosedText: 'Robert'
            },
            {
                textSearch: 'david.gott@domain.com',
                textDropDown: 'david.gott@domain.com',
                choosedText: 'David'
            },
            {
                textSearch: 'john.müller@domain.com',
                textDropDown: 'john.müller@domain.com',
                choosedText: 'John'
            },
            {
                textSearch: 'max.knoll@domain.com',
                textDropDown: 'max.knoll@domain.com',
                choosedText: 'Max'
            },
            {
                textSearch: 'max.woll@domain.com',
                textDropDown: 'max.woll@domain.com',
                choosedText: 'Max'
            },
            {
                textSearch: 'john.doe@domain.com',
                textDropDown: 'Jon.doe@domain.com',
                choosedText: 'John'
            },
            {
                textSearch: 'anja.example@domain.com',
                textDropDown: 'anja.example@domain.com',
                choosedText: 'Anja'
            },
            {
                textSearch: 'ber.example@domain.com',
                textDropDown: 'ber.example@domain.comr',
                choosedText: 'Ber'
            },
            {
                textSearch: 'julia.far@domain.com',
                textDropDown: 'julia.far@domain.co',
                choosedText: 'Julia'
            },
            {
                textSearch: 'hanz.vogel@domain.com',
                textDropDown: 'hanz.vogel@domain.com',
                choosedText: 'Hanz'
            }
        ]}
    />
</div>
`
        ),
        jsCode: (
`const log = (currentChoosedItems) => {
    console.clear();
    console.info(currentChoosedItems);
};`
        )
    },
    {
        class: '',
        description: "Previous example with showAllSuggestionsOnFocus={true} and mouseOverSelection={true}. The key showAllSuggestionsOnFocus - it's mean if the user click into the input field, then show all available suggestions. The key mouseOverSelection - it's mean if the user is mouse over on an current suggestion and the user leave the suggestion and use the arrow down or up key, then start the selection from the last mouse hovered suggestion.",
        html: (
            <div className="inputsuggestion-example-5--div">
                <InputSuggestion
                    class="inputsuggestion-example-5"
                    placeholder='Type to search for an email...'
                    clearInputOnChange={false}
                    onChangeCallback={log}
                    doubleChoosedRemove={true}
                    multiChoice={true}
                    maxHeight={200}
                    sortAsc={true}
                    showAllSuggestionsOnFocus={true}
                    mouseOverSelection={true}
                    data={[
                        {
                            textSearch: 'robert.gott@domain.com',
                            textDropDown: 'robert.gott@domain.com',
                            choosedText: 'Robert'
                        },
                        {
                            textSearch: 'david.gott@domain.com',
                            textDropDown: 'david.gott@domain.com',
                            choosedText: 'David'
                        },
                        {
                            textSearch: 'john.müller@domain.com',
                            textDropDown: 'john.müller@domain.com',
                            choosedText: 'John'
                        },
                        {
                            textSearch: 'max.knoll@domain.com',
                            textDropDown: 'max.knoll@domain.com',
                            choosedText: 'Max'
                        },
                        {
                            textSearch: 'max.woll@domain.com',
                            textDropDown: 'max.woll@domain.com',
                            choosedText: 'Max'
                        },
                        {
                            textSearch: 'john.doe@domain.com',
                            textDropDown: 'Jon.doe@domain.com',
                            choosedText: 'John'
                        },
                        {
                            textSearch: 'anja.example@domain.com',
                            textDropDown: 'anja.example@domain.com',
                            choosedText: 'Anja'
                        },
                        {
                            textSearch: 'ber.example@domain.com',
                            textDropDown: 'ber.example@domain.com',
                            choosedText: 'Ber'
                        },
                        {
                            textSearch: 'julia.far@domain.com',
                            textDropDown: 'julia.far@domain.com',
                            choosedText: 'Julia'
                        },
                        {
                            textSearch: 'hanz.vogel@domain.com',
                            textDropDown: 'hanz.vogel@domain.com',
                            choosedText: 'Hanz'
                        }
                    ]}
                />
            </div>
        ),
        cssCode: (
`.inputsuggestion-example-5--div{
    width: 100%;

    .inputsuggestion-example-5{
        position: absolute;
        top:0;
        left:0;
        width: 100%;
    }

    .react-divcreator-inputsuggestion__choosed--span{
        background-color: dodgerblue;
    }

    .react-divcreator-inputsuggestion__remove:after{
        background-color: rgb(255,255,255);
    }
    .react-divcreator-inputsuggestion__choosed--text{
        color:rgb(255,255,255)
    }
}`
        ),
        reactCode: (
`import { InputSuggestion } from 'react-divcreator';

<div className="inputsuggestion-example-1--div">
    <InputSuggestion
        class="inputsuggestion-example-1"
        placeholder='Type to search for an email...'
        class="inputsuggestion-example-1"
        placeholder='Type to search for an email...'
        clearInputOnChange={false}
        onChangeCallback={log}
        doubleChoosedRemove={true}
        multiChoice={true}
        maxHeight={200}
        showAllSuggestionsOnFocus={true}
        mouseOverSelection={true}
        data={[
            {
                textSearch: 'robert.gott@domain.com',
                textDropDown: 'robert.gott@domain.com',
                choosedText: 'Robert'
            },
            {
                textSearch: 'david.gott@domain.com',
                textDropDown: 'david.gott@domain.com',
                choosedText: 'David'
            },
            {
                textSearch: 'john.müller@domain.com',
                textDropDown: 'john.müller@domain.com',
                choosedText: 'John'
            },
            {
                textSearch: 'max.knoll@domain.com',
                textDropDown: 'max.knoll@domain.com',
                choosedText: 'Max'
            },
            {
                textSearch: 'max.woll@domain.com',
                textDropDown: 'max.woll@domain.com',
                choosedText: 'Max'
            },
            {
                textSearch: 'john.doe@domain.com',
                textDropDown: 'Jon.doe@domain.com',
                choosedText: 'John'
            },
            {
                textSearch: 'anja.example@domain.com',
                textDropDown: 'anja.example@domain.com',
                choosedText: 'Anja'
            },
            {
                textSearch: 'ber.example@domain.com',
                textDropDown: 'ber.example@domain.com',
                choosedText: 'Ber'
            },
            {
                textSearch: 'julia.far@domain.com',
                textDropDown: 'julia.far@domain.com',
                choosedText: 'Julia'
            },
            {
                textSearch: 'hanz.vogel@domain.com',
                textDropDown: 'hanz.vogel@domain.com',
                choosedText: 'Hanz'
            }
        ]}
    />
</div>
`
        ),
        jsCode: (
`const log = (currentChoosedItems) => {
    console.clear();
    console.info(currentChoosedItems);
};`
        )
    }
];

const inputsuggestionKeys = [
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
        key: 'placeholder',
        description: 'String - Input placeholder.',
        type: 'String'
    },
    {
        key: 'clearInputOnChange',
        description: 'Clear inputs fields value if the user choose and value from the drop down element.',
        type: 'Boolean'
    },
    {
        key: 'onChangeCallback',
        description: 'Custom developers callback to handle the change, if the user has selected/deselected and option from the drop down element.',
        type: 'Function'
    },
    {
        key: 'doubleChoosedRemove',
        description: 'If the user has selected an option, then allow to remove this option if the user clicked second time on it.',
        type: 'Boolean'
    },
    {
        key: 'multiChoice',
        description: 'Is the input field mutli select or single value holder.',
        type: 'Boolean'
    },
    {
        key: 'keySensitive',
        description: 'Search in the data.textSearch key sensitive or not sensitivew (value from input field and string from data.textSearch are made to lowercase while filtering).',
        type: 'Boolean'
    },
    {
        key: 'maxHeight',
        description: 'Max height of the dropw donw element to allow the user to choose element with the keyboard arrow keys (down and up).',
        type: 'Number'
    },
    {
        key: 'autoFocus',
        description: 'Autofocus attribute of regular input field, it is an feature to make an autoscroll to the input field. Default value is: false.',
        type: 'Boolean'
    },
    {
        key: 'sortAsc',
        description: 'Sort items: ascending = A-Z.',
        type: 'Boolean'
    },
    {
        key: 'sortDesc',
        description: 'Sort items: descending = Z-A.',
        type: 'Boolean'
    },
    {
        key: 'showAllSuggestionsOnFocus',
        description: 'On input click how all available suggestions.',
        type: 'Boolean'
    },
    {
        key: 'mouseOverSelection',
        description: 'If the user is hovering an current suggestion and then he leaves the suggestion and use the arrow down or up key, then start the selection from the last mouse hovered suggestion.',
        type: 'Boolean'
    },
    {
        key: 'data',
        description: 'Array - of objects.'
    },
    {
        key: 'data.textSearch',
        description: 'Match this string with the string comes from the input field.',
        type: 'String'
    },
    {
        key: 'data.textDropDown',
        description: 'If match found then the drop down list are generated, which text should be displayed in the drop down option ? If this key are not provided then the value from the key data.textSearch are displayed.',
        type: 'String'
    },
    {
        key: 'data.choosedText',
        description: 'If the user made an choice, then the choosed elements are generated, which text should be displayed for the selected element ? If this key are not provided then the value from the key data.textSearch are displayed.',
        type: 'String'
    },
    {
        key: 'data.isChoosed',
        description: 'Predefined choosed option.',
        type: 'Boolean'
    }
]

export {
    inputsuggestionData,
    inputsuggestionKeys
};

