import React from 'react'
import {Provider, useDispatch, useSelector} from 'react-redux'
import store, {AppStoreType} from './bll/store'
import {loadingAC, LoadingType} from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import {Loader} from './Loader'

/*
* 1 - в файле loadingReducer.ts дописать типы и логику
* 2 - получить isLoading из редакса
* 3 - дописать функцию setLoading
* 4 - сделать стили в соответствии с дизайном
* */

const HW10 = () => {

    const isLoading = useSelector<AppStoreType, boolean>(state=>state.loading.isLoading)
    const dispatch=useDispatch()
    // useSelector, useDispatch // пишет студент
    //const isLoading = false

    const setLoading = () => { // пишет студент // показать крутилку на 1,5 секунд
        dispatch(loadingAC(true))

        //console.log(loading)
       setTimeout(()=>{dispatch(loadingAC(false))}, 1500);

       // console.log(loading)
    }

    return (
        <div id={'hw10'}>
            <div className={s2.hwTitle}>Homework #10</div>

            <div className={s2.hw}>
                {isLoading ? (
                    <div id={'hw10-loading'}>
                            <Loader/>
                    </div>
                ) : (
                    <SuperButton
                        id={'hw10-button-start-loading'}
                        onClick={setLoading}
                    >
                        Set loading...
                    </SuperButton>
                )}
            </div>
        </div>
    )
}

export default HW10
