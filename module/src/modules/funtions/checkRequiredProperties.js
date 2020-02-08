const checkRequiredProps = (props, requiredProps) => {
    let keysAvailable = true;
    let type = false;
    let objectKeys = Object.keys(props);
    let requiredProperties = Object.keys(requiredProps);
    let givenType = '',
        shouldBeType = '';

    for (let y = 0; y <= requiredProperties.length - 1; y++) {
        givenType = typeof props[requiredProperties[y]];
        shouldBeType = requiredProps[requiredProperties[y]];

        /**
         * check is required key available
         */
        if (-1 == objectKeys.indexOf(requiredProperties[y])) {
            keysAvailable = requiredProperties[y];
        }
        /**
         * check is type OK
         */
        if (givenType != shouldBeType) {
            type = [requiredProperties[y], givenType, shouldBeType];
        }
    }
    return {
        keysAvailable: keysAvailable,
        type: type,
    };
};

export default checkRequiredProps;
