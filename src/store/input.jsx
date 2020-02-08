const inputKeys = [
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
        description: 'String - Input placeholder.'
    },
    {
        key: 'icon',
        description: 'Mixed - Custom developers data.'
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
        description: 'String - Value of current input field.'
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
        key: 'errorMessages',
        description: 'Array - Array of developers defined messages of type: error.'    
    },
    {
        key: 'successMessages',
        description: 'Array - Array of developers defined messages of type: success.'
    },
    {
        key: 'warningMessages',
        description: 'Array - Array of developers defined messages of type: warning.'
    },
    {
        key: 'customData',
        description: 'Mixed - Developers defined data as last parameter of all callback functions.'
    }
];

export {
    inputKeys
};

