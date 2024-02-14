/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { theme } from '../theme'

const styles = {
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
        font-weight: 600;
        align-items: center;
        gap: 5px;
        width: 114px;
    `,
    toggleContainer: (checked: boolean) => css`
        height: 22px;
        width: 40px;
        border-radius: 200px;
        cursor: pointer;
        position: relative;
        background-color: ${checked
            ? theme.colors.primary
            : theme.colors.borders};
    `,
    slider: (checked: boolean) => css`
        position: absolute;
        height: 18px;
        width: 18px;
        border-radius: 200px;
        background-color: #fff;
        top: 50%;
        transform: translateY(-50%);
        right: ${checked ? '2px' : '20px'};
        transition: ${theme.transitions.noBounceFast};
    `,
}

interface Props {
    labelText?: string
    checked: boolean
    handleChange: (option: boolean) => void
}

const ToggleSwitch: React.FC<Props> = ({
    labelText,
    checked,
    handleChange,
}) => {
    return (
        <div css={styles.container}>
            {labelText && <span>{labelText}</span>}
            <div css={styles.row} onClick={() => handleChange(!checked)}>
                <div css={styles.toggleContainer(checked)}>
                    <div css={styles.slider(checked)} />
                </div>
                <span>{checked ? 'Toggle ON' : 'Toggle OFF'}</span>
            </div>
        </div>
    )
}

export default ToggleSwitch
