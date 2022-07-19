
import { useState, useEffect } from 'react';

export const ArrowUp = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        document.addEventListener('scroll', funcShow);
        
        return function () {
          document.removeEventListener('scroll', funcShow)
        }
        
      }, [])
      const funcShow = (e) => {
        //console.log(window.pageYOffset-e.target.documentElement.clientHeight)
        if(window.pageYOffset > e.target.documentElement.clientHeight){
            setShow(true)

        }else if(window.pageYOffset < e.target.documentElement.clientHeight) {
            setShow(false)
        }
      }
      function backToTop() {
        if (window.pageYOffset > 0) {
          window.scrollBy(0, -80);
          setTimeout(backToTop, 0);
        }
      }
    return (
        <a onClick={backToTop} className={show ? 'back_to_top-show' : 'back_to_top'} title="Наверх">↑</a>
    )
}