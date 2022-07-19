import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import imageLoad from '../../../redux/action';
import Cat from './OneCat';
import Loader from '../../Loader';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ArrowUp } from '../arrow-up';



const Cats = () => {
  const comments = useSelector(state => state.imageReducer)
  const dispatch = useDispatch();
  const [isHaite, setisHaite] = useState(true);
  let image = comments.imageLoad;
  useEffect(() => {
    if(isHaite){
      dispatch(imageLoad());
      setisHaite(false)
    }
  }, [isHaite]);
  useEffect(() => {
    document.addEventListener('scroll', scrollEvent);
    
    return function () {
      document.removeEventListener('scroll', scrollEvent)
    }
    
  }, [])
  const scrollEvent = (e) => {
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setisHaite(true)
    }
  }

  return (
    <div className='divCats'>
    <ArrowUp/>
        <TransitionGroup component='ul' className='ul'>
          
            {image.map(user => (
              <CSSTransition
                  timeout={1000}
                  classNames={'note'}
                  key={user.id}>
                  <Cat user={user}/>
              </CSSTransition>
            ))}
            <Loader/>
        </TransitionGroup>
    </div>
  )
}
export default Cats;