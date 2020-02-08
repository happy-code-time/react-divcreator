/**
 * Attach keys recursively to handle toggling
 * key: togglerChild
 * key: toggled
 * @param {array} data 
 */
export const generateToggleFunctionality = (data) => {
    const generatedData = data;
    
    const attachDataToChildsRecursive = (childs, mrx, keys) => {
        const k = `${keys}`;

        for (let x = 0; x <= childs.length - 1; x++) {
            childs[x]['togglerChild'] = `${k}:${x}`;
            childs[x]['toggled'] = childs[x]['toggled'] ? childs[x]['toggled'] : false;

            if (childs[x].childs && childs[x].childs.length) {
                keys = `${k}:${x}`
                attachDataToChildsRecursive(childs[x].childs, mrx, keys);
            }
        }
    }
    // parent 
    for (let mrx = 0; mrx <= generatedData.length - 1; mrx++) {
        generatedData[mrx]['togglerChild'] = `${mrx}:`;
        generatedData[mrx]['toggled'] = generatedData[mrx]['toggled'] ? generatedData[mrx]['toggled'] : false;

        if (generatedData[mrx].childs && generatedData[mrx].childs.length) {
            attachDataToChildsRecursive(generatedData[mrx].childs, mrx, `${mrx}`);
        }
    }
    return generatedData;
}
