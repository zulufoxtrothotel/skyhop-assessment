import { RefObject, useCallback, useEffect } from 'react'

//hook that monitors if you clicked outside a given element. Useful for closing drawers/dropdowns when clicking away.
export const useClickOutsideListener = (
    ref: RefObject<HTMLElement>,
    onClickOutside: () => void
): void => {
    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (!ref.current?.contains(event.target as Node)) {
                onClickOutside()
            }
        },
        [ref, onClickOutside]
    )
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, true)
        return () =>
            document.removeEventListener('mousedown', handleClickOutside, true)
    }, [handleClickOutside])
}
