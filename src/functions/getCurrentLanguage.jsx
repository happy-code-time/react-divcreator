export const getCurrentLanguage = () => {
    let selectedLanguage = 'en';

    if(localStorage.getItem('LANGUAGE')){
        selectedLanguage = localStorage.getItem('LANGUAGE');
    }

    return selectedLanguage;
};