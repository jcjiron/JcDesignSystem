import React from 'react'
declare type useFocusOutReturnType = {
    onBlurHandler: () => void
    onFocusHandler: () => void
    listeningRef: React.MutableRefObject<undefined>
}
declare type useFocusOutParams = {
    onFocusOut?: () => void
    onFocusIn?: () => void
}
declare function useOnFocus({
    onFocusOut,
    onFocusIn,
}: useFocusOutParams): useFocusOutReturnType
export default useOnFocus
