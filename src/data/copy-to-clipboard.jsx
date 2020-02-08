import { getCurrentLanguage } from '../functions/getCurrentLanguage';

export const copyToClipboardText = () => {
    
    switch(getCurrentLanguage()){
        case 'en' : {
            return 'Copy code';
        }

        default : {
            return 'Copy code';
        }
    }
}