const customKey = () => {
    return Math.floor((Math.random() * 123456789) + 1) + '9' +
        Math.floor((Math.random() * 123456789) + 1) + '1' +
        Math.floor((Math.random() * 123456789) + 1) + '8' +
        Math.floor((Math.random() * 123456789) + 1);
};

export default customKey;