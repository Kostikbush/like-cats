import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { CSSTransition } from 'react-transition-group';
import { imageRemove, imageAdd} from '../../../redux/action';

const Cat = (props) => {
    const [inProp, setInProp] = useState(false)
    const url = props.user.url
    const id = props.user.id
    let isLove = props.user.isLove
    const dispatch = useDispatch();
    const handleClick = () => {
        setInProp(true)
            if(isLove === true){
                dispatch(imageRemove(id, isLove)) 
            }else if(isLove === false){
                dispatch(imageAdd(id, url, isLove)) 
            }  
            setTimeout(()=> {
                setInProp(false)
            },1000) 
        }
    
    return (
        <CSSTransition in={inProp} timeout={2000} classNames="my-node">
            <li onClick={() => handleClick()} className={`liImg vectors ${isLove ? 'vector-active' : 'vector'} `}>
                <img src={url}/>
            </li>
        </CSSTransition>      
    )
  }
  
  export default Cat;

