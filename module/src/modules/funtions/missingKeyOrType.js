const missingKeyOrInvalidType = (checkProps, type) => {
    /**
     * if required key is missing
     */
    if (true != checkProps.keysAvailable) {
        console.info(`%c React-divcreator (component: ${type.toUpperCase()}) %c Failed to build component. Required property '${checkProps.keysAvailable}' not passed into this component.`, 
            'font-family: Arial, Times, serif; font-size: 16px; color:#00BCD4; background-color: #11112D',
            'font-family: Arial, Times, serif; font-size: 14px; color:#F44559; background-color: rgb(255,255,255)'
        );
        return null;
    } else if (true != checkProps.type) {
        /**
         * if type is false
         */
        console.info(`%c React-divcreator (component: ${type.toUpperCase()}) %c Failed to build component. Required property '${checkProps.type[0]}' has incorrect type. Given type [${checkProps.type[1]}] but should be [${checkProps.type[2]}]`, 
            'font-family: Arial, Times, serif; font-size: 16px; color:#00BCD4; background-color: #11112D',
            'font-family: Arial, Times, serif; font-size: 14px; color:#F44559; background-color: rgb(255,255,255)'
        );
        return null;
    } else {
        return null;
    }
};

export default missingKeyOrInvalidType;
