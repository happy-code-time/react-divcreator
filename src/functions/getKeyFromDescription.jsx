export const getKeyFromDescription = (string, type) => {
        
    if(!string){
        return '';
    }

    const splitted = string.split(' - ');

    if('type' == type){
        if(splitted.length && splitted[0]){
            return splitted[0];
        }
    }

    if('description' == type){
        if(splitted.length && splitted[1]){
            return splitted[1].charAt(0).toUpperCase() + splitted[1].slice(1);
        } else {
            return string.charAt(0).toUpperCase() + string.slice(1);;
        }
    }

    return '';
}