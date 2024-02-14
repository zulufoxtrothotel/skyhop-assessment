import { css } from '@emotion/react'
import { theme } from '../theme'

export const uploadBoxStyles = {
    container: css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #fff;
        gap: 10px;
        padding: 10px;
        border: solid 2px ${theme.colors.borders};
        border-radius: 5px;
    `,
    uploadBoxContainer: css`
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        width: 100%;

        label {
            width: 100%;
            display: flex;
            cursor: pointer;
        }
    `,
    uploadBox: css`
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 25px;
        width: 100%;
        border: dashed 1px ${theme.colors.borders};
        font-weight: 500;
        strong {
            font-weight: 800;
        }
    `,
    uploadButton: css`
        color: #fff;
        background-color: ${theme.colors.primary};
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        width: 175px;
        outline: none;
        border: none;
        padding: 7px 5px;
        font-weight: 600;
        cursor: pointer;
        :hover {
            background-color: ${theme.colors.primaryDark};
        }
    `,
    documentIcon: css`
        color: ${theme.colors.secondary};
    `,
}
