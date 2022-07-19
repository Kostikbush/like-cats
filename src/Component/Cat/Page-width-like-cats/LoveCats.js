import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { imageRemove, imageAdd } from '../../../redux/action';

const LoveCats = () => {
    const [cssRun, setcssRun] = useState(false)
    const dispatch = useDispatch()
    const imageArr = useSelector(state => {
        const {imageReducer} = state;
        return imageReducer.imageLike;
    })
    const handleLoveCats = (id) => {
        setcssRun(true)
            dispatch(imageRemove(id))
    }
    return (
        <div className='divCats'>
            <TransitionGroup component='ul' className='ul'>
            {imageArr.length ? imageArr.map(image => (
                <CSSTransition
                    in={cssRun}
                    timeout={1000}
                    classNames={'note'}
                    key={image.id}
                >
                    <li onClick={() => handleLoveCats(image.id, image.isLove)} className={`liImg vectors ${image.isLove ? 'vector-active' : 'vector'} `} key={image.id} >
                        <img src={image.url}/>
                    </li> 
                </CSSTransition>
                )) : <div className='no-have-love-cats'> У вас пока нет любимых котиков ): </div>}
                
            </TransitionGroup>
        </div>
    )
}


export default LoveCats;