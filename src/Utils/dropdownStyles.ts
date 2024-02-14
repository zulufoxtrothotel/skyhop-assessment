import { css } from '@emotion/react'
import { theme } from '../theme'
import { InputOptionType } from '../types'

export const dropdownStyles = {
    container: css`
        padding: 7px;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 7px;
        border: solid 2px ${theme.colors.borders};
        position: relative;
    `,
    dropdownText: css`
        background-color: #fff;
        font-weight: 700;
        font-family: Raleway, sans-serif;
        color: ${theme.colors.primaryDark};
        display: flex;
        justify-content: flex-start;
        border: none;
        outline: none;
        cursor: pointer;
        width: 100%;
        font-size: 12px;
    `,
    expandIcon: (isOpen: boolean) => css`
        transform: rotate(${isOpen ? '180deg' : '0'});
        transition: ${theme.transitions.smoothWithBounce};
        position: absolute;
        right: 10px;
    `,
    optionListContainer: css`
        position: absolute;
        right: 0;
        top: 37px;
        width: 100%;
        background-color: #fff;
        margin-left: 10px;
        z-index: ${theme.zIndex.dropdowns};
    `,
    option: css`
        cursor: pointer;
        padding: 5px;
        border-bottom: solid 1px ${theme.colors.borders};
        border-left: solid 1px ${theme.colors.borders};
        border-right: solid 1px ${theme.colors.borders};

        :hover {
            background-color: ${theme.colors.borders};
        }
    `,
}

export const getSelectionText = ({
    options,
    currentSelectionId,
}: {
    options: InputOptionType[]
    currentSelectionId: string
}) => {
    if (!currentSelectionId) return undefined
    const selectedOption = options.find(
        (option) => option.id === currentSelectionId
    )
    return selectedOption ? selectedOption.text : undefined
}
