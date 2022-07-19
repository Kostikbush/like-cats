import {ERROR_DISPLAY_ON, IMAGELOAD, IMAGE_REMOVE,IMAGE_ADD, LOADER_OFF, LOADER_ON} from "./type";
const url = 'https://api.thecatapi.com/v1/images/search/?limit=20';
function errorDisplayOn(text) {
    return {
        type: ERROR_DISPLAY_ON,
        text,
    }
}
export function loaderOff(){
    return {
        type: LOADER_OFF
    }
}
export function loaderOn(){
    return {
        type: LOADER_ON
    }
}
function imageLoad() {
    return async dispatch => {
        try {
            dispatch(loaderOn());
            const response = await fetch(url);
            const jsonData =  await response.json();
                    dispatch({
                        type: IMAGELOAD,
                        data: jsonData,
                    }); 
                    dispatch(loaderOff());
                
           
        }catch(err) {
            dispatch(errorDisplayOn('Ошибка запроса'));
        }
    }
}


export function imageAdd(id, url, isLove){
    return {
        type: IMAGE_ADD,
        data: {id, url,isLove}
    }
}
export function imageRemove(id){
    return {
        type: IMAGE_REMOVE,
        data: {id}
    }
}

export default imageLoad;