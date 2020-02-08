/**
 * Check is item in list
 * @param {array} list 
 * @param {any} value 
 * @param {string} mode 
 */
export const checkIsItemInList = (list = [], value = '', mode = '') => {
    let allToggledItems = list;
 
    switch(mode){
        case 'add' : {
            if(!allToggledItems.includes(value)){
                allToggledItems.push(value);
            }
            break;
        }
        case 'remove' : {
            allToggledItems = allToggledItems.filter( entry => entry !== value);
            break;                
        }
        case 'empty' : {
            allToggledItems = [];
            break;
        }
    }
    return allToggledItems;
 }