import { css } from '@emotion/react'
import { theme } from '../theme'

export const radioButtonStyles = {
    container: css`
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        background-color: #fff;
        gap: 10px;
    `,
    row: css`
        display: flex;
        flex-direction: row;
        gap: 20px;
        font-weight: 500;
        align-items: center;
        justify-content: flex-start;
        line-height: 15px;
        margin-left: 4px;
    `,
    option: css`
        vertical-align: sub;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        cursor: pointer;

        input[type='radio'] {
            appearance: none;
            /* Not removed via appearance */
            margin: 0;
            background-color: #fff;
            font: inherit;
            color: currentColor;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            transform: translateY(-1px);
            display: grid;
            place-content: center;
            outline: max(2px, 1px) solid ${theme.colors.borders};
            outline-offset: max(2px, 3px);
            cursor: pointer;
        }

        input[type='radio']::before {
            content: '';
            width: 10px;
            height: 10px;
            border-radius: 50%;
            transform: scale(0);
            transition: ${theme.transitions.smoothWithBounceFast};
            box-shadow: inset 1em 1em ${theme.colors.primary};
            /* Windows High Contrast Mode */
            background-color: #fff;
        }

        input[type='radio']:checked::before {
            transform: scale(1);
            box-shadow: inset 1em 1em ${theme.colors.primary};
            outline: max(2px, 1px) solid ${theme.colors.primary};
            outline-offset: max(2px, 3px);
        }
    `,
}
