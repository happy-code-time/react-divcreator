const modalKeys = [
    {
        key: 'class',
        description: 'String - Custom classname of root element.'
    },
    {
        key: 'performance',
        description: "Boolean - If true then the time between module's initialisation (in modules constructor) and after the render function called (in componentDidMount) are logged to the console."
    },
    {
        key: 'callbackShow',
        description: 'Function - custom module callback defined by the developer to change the state of the modal window.'
    },
    {
        key: 'callbackClose',
        description: 'Function - Callback function defined by the developer to change the modals state. This function are fired: when the user click`s the close button (provided by the "closeButtonData"), when the user pressed "ESC" or when the user click`s the dimmer are arround the modal window.'
    },
    {
        key: 'showData',
        description: 'Mixed - Custom developers data, displayed to open the modal window with an "onClick" event.'
    },
    {
        key: 'closeButton',
        description: 'Boolean - display close button or not.'
    },
    {
        key: 'closeButtonData',
        description: 'Mixed - custom developers HTML (JSX) attached it the key "closeButton" are setted to true. To this button are attached the "close event".'
    },
    {
        key: 'data',
        description: 'Mixed - custom data inside the modal window.'
    },
    {
        key: 'display',
        description: 'Boolean - if true then the modal window are displayed, if false then the modal window not displayed.'
    },
    {
        key: 'customData',
        description: 'Any - developers custom defined data, passed to the callback function ("callbackShow") as last argument.'
    }
];

export {
    modalKeys
};

