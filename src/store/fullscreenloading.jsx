const fullscreenloadingKeys = [
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
        key: 'path',
        description: 'String - Source path to the loading icon.'
    },
    {
        key: 'background',
        description: 'String - You can pass an src and the background will be an image, otherwise the background will be interpreted as string/ color.'
    },
    {
        key: 'customData',
        description: 'Mixed - Your custom data with added track function.'
    }
]

export { 
    fullscreenloadingKeys 
};

