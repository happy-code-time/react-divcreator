const inputlistswitchKeys = [
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
        key: 'data',
        description: 'any Array - the main array with values.'
    },
    {
        key: 'showLineNumber',
        description: 'Boolean - generate li element with an line number.'
    },
    {
        key: 'MODE: Add',
        description: ''
    },
    {
        key: 'addInput',
        description: 'Boolean - generate li element with an line number.'
    },
    {
        key: 'placeholder',
        description: 'String - input placeholder.'
    },
    {
        key: 'icon',
        description: 'JSX - custom developers icon data.'
    },
    {
        key: 'handleClick',
        description: 'Function - custom developer function to handle click event on the icon.'
    },
    {
        key: 'handleEnter',
        description: 'Function - custom developer function to handle the "ENTER" event on the input field.'
    },
    {
        key: 'handleEsc',
        description: 'Function - custom developer function to handle the "ESC" event on the input field. If the key "useCustomValue" provided ans setted to true, then the input fields value are cleared.'
    },
    {
        key: 'handleKeyPress',
        description: 'Function - custom developer function to handle the "keyUp" event on the input field.'
    },   
    {
        key: 'valueOfInputField',
        description: 'String - value of the current input field.'
    },
    {
        key: 'emptyOnEsc',
        description: 'Boolean - empty the input fields value if: event.keyCode == 27 || event.which == 13 || event.key == "Escape" || event.key == "Esc".'
    },
    {
        key: 'emptyOnEnter',
        description: 'Boolean - empty the input fields value if: event.keyCode == 13 || event.which == 13 || event.key == "Enter".'
    },
    {
        key: 'emptyOnClick',
        description: 'Boolean - empty the input fields value if the user click the search icon.'
    },
    {
        key: 'MODE: Search',
        description: ''
    },
    {
        key: 'switchers',
        description: 'Boolean - activate the swicher (true) or deactivate the switcher (false).'
    },
    {
        key: 'switchCallback',
        description: 'Function - if the user click the swicher button, then this function are executed (if provided).'
    },
    {
        key: 'switcherSearchFunction',
        description: 'Function - custom developers function for the search functionality.'
    },
    {
        key: 'currentMode',
        description: 'String - two possible modes: "add" and "search". Mode add: add`s eleemnts to the current array/ list. Mode "search" executes the provided function (by the key "switcherSearchFunction").'
    },
    {
        key: 'isChecked',
        description: 'Boolean - handle the swichers direction. False = left, True = right.'
    },
    {
        key: 'modeTitleAdd',
        description: 'String - title on the right site of the switcher on mode: add.'
    },
    {
        key: 'modeTitleSearch',
        description: 'String - title on the right site of the switcher on mode: search.'
    },
    {
        key: 'placeholderSearch',
        description: 'String - input fields placeholder in search mode.'
    },
    {
        key: 'noEntrysMsg',
        description: 'JSX - custom developers message if the user filters the current array/ list and no entry was passed from the callback function to the state (empty array passed to the key "data").'
    },
    {
        key: 'errorMessages',
        description: 'Array - array of developers defined messages of type: error.'    
    },
    {
        key: 'successMessages',
        description: 'Array - array of developers defined messages of type: success.'
    },
    {
        key: 'warningMessages',
        description: 'Array - array of developers defined messages of type: warning.'
    },
    {
        key: 'customData',
        description: 'Any - developers defined data as last parameter of all callback functions.'
    },
    {
        key: 'handleInternal',
        description: 'Boolean - handle search function, add function, switch buttons by the module internal.'
    },
    {
        key: 'handleInternalMessages',
        description: 'Boolean - handle add message by the module internal.'
    }
];

export {
    inputlistswitchKeys
};

