const addStyleToHeaderTag = (myStyleAsString) => {
    let head = document.head || document.getElementsByTagName('head')[0];
    let style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet){
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
    } else {
        //style.appendChild(document.createTextNode(before));
        style.appendChild(document.createTextNode(myStyleAsString));
    }
    head.appendChild(style);
};

export default addStyleToHeaderTag;