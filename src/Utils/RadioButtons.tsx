/** @jsxImportSource @emotion/react */
import React from 'react'
import { InputOptionType } from '../types'
import { radioButtonStyles } from './radioButtonStyles'

interface Props {
    labelText?: string
    currentSelectionId?: string
    options: InputOptionType[]
    handleSelect: (option: string) => void
}

const RadioButtons: React.FC<Props> = ({
    labelText,
    currentSelectionId,
    options,
    handleSelect,
}) => {
    return (
        <form css={radioButtonStyles.container}>
            {labelText && <span>{labelText}</span>}
            <div css={radioButtonStyles.row}>
                {options.map((option) => (
                    <label css={radioButtonStyles.option} key={option.key}>
                        <input
                            type={'radio'}
                            id={option.id}
                            value={option.text}
                            checked={option.id === currentSelectionId}
                            onChange={() => handleSelect(option.id)}
                        />
                        {option.text}
                    </label>
                ))}
            </div>
        </form>
    )
}

export default RadioButtons
