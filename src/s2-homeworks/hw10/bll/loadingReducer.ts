const initState = {
    isLoading: false,
}

export type LoadingType={
    isLoading: boolean
}

export const loadingReducer = (state: LoadingType = initState, action: LoadingActionType): LoadingType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING':{
            return {...state, isLoading: action.isLoading}
        }
        // пишет студент  // need to fix

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
