/**
 * onclick make scroll animation
 */
const animateFullscreenLoading = (domElement, div, text, action, animationType, timer) => {
    
    document.querySelector(div + ' span').innerHTML = text;

    let currentHeight = 110;
    let vectorH = 'vH';
    let currentWidth = 110;
    let vectorW = 'vW';

    if(null === action){
        return null;
    }
    if(true === action){

        switch(animationType){
            case 'display' : {
                domElement.style.display = "block";
                break;
            }
            case 'top' : {
                domElement.style.top = `-${currentHeight}${vectorH}`;

                let alpha = setInterval( () => {
                    domElement.style.display = 'block';
                    currentHeight--;
                    domElement.style.top = `-${currentHeight}${vectorH}`;
                    if(currentHeight <= 0){
                        clearInterval(alpha);
                    }
                }, timer);
                break;
            }
            case 'bottom' : {
                domElement.style.top = `${currentHeight}${vectorH}`;

                let alpha = setInterval( () => {
                    domElement.style.display = 'block';
                    currentHeight--;
                    domElement.style.top = `${currentHeight}${vectorH}`;
                    
                    if(currentHeight <= 0){
                        clearInterval(alpha);
                    }
                }, timer);
                break;
            }
            case 'right' : {
                domElement.style.top = `0px`;
                domElement.style.left = `${currentWidth}${vectorW}`;
                domElement.style.display = 'block';

                let alpha = setInterval( () => {
                    domElement.style.display = 'block';
                    currentWidth--;
                    domElement.style.left = `${currentWidth}${vectorW}`;
                    
                    if(currentWidth <= 0){
                        clearInterval(alpha);
                    }
                }, timer);
                break;
            }
            case 'left' : {
                domElement.style.top = `0px`;
                domElement.style.left = `-${currentWidth}${vectorW}`;
                domElement.style.display = 'block';

                let alpha = setInterval( () => {
                    domElement.style.display = 'block';
                    currentWidth--;
                    domElement.style.left = `-${currentWidth}${vectorW}`;
                    
                    if(currentWidth <= 0){
                        clearInterval(alpha);
                    }
                }, timer);
                break;
            }
            default : {
                domElement.style.display = "block";
                break;
            }
        }
    }
    /**
     * hide animated loading div
     */
    if(false === action){

        switch(animationType){
            case 'display' : {
                domElement.style.display = "none";
                break;
            }
            case 'top' : {
                let curTop = 0;
                domElement.style.top = `${curTop}px`;

                let alpha = setInterval( () => {
                    domElement.style.display = 'block';
                    curTop++;
                    domElement.style.top = `-${curTop}${vectorH}`;
                    if(curTop >= currentHeight){
                        clearInterval(alpha);
                    }
                }, timer);
                break;
            }
            case 'bottom' : {
                domElement.style.display = 'block';

                let fromTop = 0;
                let alpha = setInterval( () => {
                    domElement.style.display = 'block';
                    fromTop++;
                    domElement.style.top = `${fromTop}${vectorH}`;
                    
                    if(fromTop >= currentHeight){
                        domElement.style.display = 'none';
                        clearInterval(alpha);
                    }
                }, timer);
                break;
            }
            case 'right' : {
                domElement.style.top = `0px`;
                domElement.style.left = `${currentWidth}${vectorW}`;
                domElement.style.display = 'block';

                let fromLeft = 0;
                let alpha = setInterval( () => {
                    domElement.style.display = 'block';
                    fromLeft++;
                    domElement.style.left = `${fromLeft}${vectorW}`;
                    
                    if(fromLeft >= currentWidth){
                        domElement.style.display = 'none';
                        clearInterval(alpha);
                    }
                }, timer);
                break;
            }
            case 'left' : {
                domElement.style.top = `0px`;
                domElement.style.left = `-${currentWidth}${vectorW}`;
                domElement.style.display = 'block';

                let fromLeft = 0;
                let alpha = setInterval( () => {
                    domElement.style.display = 'block';
                    fromLeft++;
                    domElement.style.left = `-${fromLeft}${vectorW}`;
                    
                    if(fromLeft >= currentWidth){
                        domElement.style.display = 'none';
                        clearInterval(alpha);
                    }
                }, timer);
                break;
            }
            default : {
                domElement.style.display = "none";
                break;
            }
        }
    }
}
export default animateFullscreenLoading;