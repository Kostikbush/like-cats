import React from "react";
import { useSelector } from 'react-redux';
import { TailSpin } from  'react-loader-spinner'


const Loader = () => {
    let spinner = useSelector(state => state.loaderReducer.loader);
    return(
        <div className={`${spinner ? 'loader-wrapper' : 'display'}`}>
            <TailSpin color="#00BFFF" height={80} width={80}/>
            <span>... Загружаем ещё котиков ...</span>
        </div>
    )
}


export default Loader;