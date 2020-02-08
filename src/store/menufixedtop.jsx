const menufixedtopKeys = [
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
        key: 'dimmed',
        description: "Boolean - If true then the bottom area are dimmed and onClick the menu are closed."
    },
    {
        key: 'dimmedFixed',
        description: "Boolean - If true then the bottom area are dimmed and onClick the menu are NOT closed."
    },
    {
        key: 'isOpen',
        description: "Boolean - If true then the menu are opened, if false then closed."
    },
    {
        key: 'animation',
        description: "Boolean -Show the menu with an build in animation."
    },
    {
        key: 'function',
        description: 'Function - Custom developers callback function if the open JSX (provided by the key "open") are clicked.'
    },
    {
        key: 'functionData',
        description: 'Mixed - Custom data passed as 3 argument to the key "function".'
    },
    {
        key: 'open',
        description: "Mixed - Custom developers JSX displayed to open the menu",
    },
    {
        key: 'contentData',
        description: "Mixed - Custom developers JSX inside the toggled menu."
    },
    {
        key: 'animationType',
        description: "String - There are 2 possible animation types: 'scale' and 'height' (default: scale)."
    }
]

export {
    menufixedtopKeys
};

