/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from 'react'
import { InputOptionType } from '../types'
import ExpandMoreIcon from '../Icons/ExpandMoreIcon'
import { useClickOutsideListener } from './hooks'
import { dropdownStyles, getSelectionText } from './dropdownStyles'

interface Props {
    placeholder?: string
    currentSelectionId?: string
    options: InputOptionType[]
    handleSelect: (option: string) => void
}

const Dropdown: React.FC<Props> = ({
    placeholder = 'Make a selection.',
    currentSelectionId,
    options,
    handleSelect,
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const closeDropdown = () => {
        isOpen && setIsOpen(false)
    }

    useClickOutsideListener(containerRef, closeDropdown)

    //TODO get design for clearing selection
    const onSelect = (selectionId: string) => {
        handleSelect(selectionId)
        setIsOpen(false)
    }
    return (
        <div css={dropdownStyles.container}>
            <button
                type={'button'}
                css={dropdownStyles.dropdownText}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {currentSelectionId ? (
                    <span className={'placeholder-text'}>
                        {getSelectionText({ currentSelectionId, options })}
                    </span>
                ) : (
                    <span className={'placeholder-text'}>{placeholder}</span>
                )}
                <ExpandMoreIcon css={dropdownStyles.expandIcon(isOpen)} />
            </button>
            {isOpen && (
                <div
                    css={dropdownStyles.optionListContainer}
                    ref={containerRef}
                >
                    {options.map((option) => (
                        <div
                            onClick={() => onSelect(option.id)}
                            key={option.key}
                            css={dropdownStyles.option}
                        >
                            {option.text}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown
