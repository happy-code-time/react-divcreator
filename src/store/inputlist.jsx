const inputlistKeys = [
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
        key: 'header',
        description: 'Array - Array of values.'
    },
    {
        key: 'actions',
        description: 'Array - Array of object.'
    },
    {
        key: 'Data.actions:',
    },
    {
        key: 'actions.actionTitle',
        description: 'String - On hover title value.'
    },
    {
        key: 'actions.actionData',
        description: 'Function - Custom developers JSX data. To this JSX the function "actionFunction" are attached (if provided if not then attached the actionFunction to the key "actionName").'
    },
    {
        key: 'actions.actionName',
        description: 'String - Default value if "actionData" are not provided.'
    },
    {
        key: 'actions.actionFunction',
        description: 'Function - Custom developers function attached to the key "actionData" or to the "actionName" if "actionData" are not provided.'
    },
    {
        key: 'Default configuration',
    },
    {
        key: 'showLineNumber',
        description: 'Boolean - Generate li element with an line number.'
    },
    {
        key: 'MODE: Add',
    },
    {
        key: 'addInput',
        description: 'Boolean - Generate li element with an line number.'
    },
    {
        key: 'placeholder',
        description: 'String - Input placeholder.'
    },
    {
        key: 'icon',
        description: 'JSX - Custom developers icon data.'
    },
    {
        key: 'handleClick',
        description: 'Function - Custom developer function to handle click event on the icon.'
    },
    {
        key: 'handleEnter',
        description: 'Function - Custom developer function to handle the "ENTER" event on the input field.'
    },
    {
        key: 'handleEsc',
        description: 'Function - Custom developer function to handle the "ESC" event on the input field. If the key "useCustomValue" provided ans setted to true, then the input fields value are cleared.'
    },
    {
        key: 'handleKeyPress',
        description: 'Function - Custom developer function to handle the "keyUp" event on the input field.'
    },   
    {
        key: 'valueOfInputField',
        description: 'String - Value of the current input field.'
    },
    {
        key: 'emptyOnEsc',
        description: 'Boolean - Empty the input fields value if: event.keyCode == 27 || event.which == 13 || event.key == "Escape" || event.key == "Esc".'
    },
    {
        key: 'emptyOnEnter',
        description: 'Boolean - Empty the input fields value if: event.keyCode == 13 || event.which == 13 || event.key == "Enter".'
    },
    {
        key: 'emptyOnClick',
        description: 'Boolean - Empty the input fields value if the user click the search icon.'
    },
    {
        key: 'customData',
        description: 'Any - Developers defined data as last parameter of all callback functions.'
    },
    {
        key: 'handleInternal',
        description: 'Boolean - Handle search function, add function, switch buttons by the module internal.'
    },
    {
        key: 'handleInternalMessages',
        description: 'Boolean - Handle add message by the module internal.'
    }
];

export {
    inputlistKeys
};

