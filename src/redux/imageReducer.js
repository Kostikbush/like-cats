import { IMAGELOAD, IS_LOVE, IMAGE_ADD, IMAGE_REMOVE,} from "./type";
const initialState = {
    imageLoad: [],
    imageLike: [],
}

export const imageReducer = (state=initialState, action) => {
    switch(state, action.type) {
        case IMAGELOAD:
            const imagsNew = action.data.map(res => {
                return {
                        id: res.id,
                        url: res.url,
                        isLove: false
                    }
                })   
            return {
                ...state,
                imageLoad: [...state.imageLoad, ...imagsNew],
                }  
        case IMAGE_ADD:
            let url = action.data.url;
            let id = action.data.id;
            let newImage = {
                id: id,
                isLove: true,
                url: url
                }
            state.imageLoad.map(image => {
                if(image.id === id){
                    image.isLove = true
                }
            })
                return {
                    ...state,
                    imageLike: [...state.imageLike, newImage], 
                    imageLoad: [...state.imageLoad ]
                    
                }
            
        case IMAGE_REMOVE:
            state.imageLoad.map(image => {
                if(image.id === action.data.id){
                    image.isLove = false
                }
            })
            let newArrLike = state.imageLike.filter(res => res.id !== action.data.id)
            return {
                ...state,
                imageLike: newArrLike,
                imageLoad: [...state.imageLoad],
                }         
        default: 
            return state
    }
}