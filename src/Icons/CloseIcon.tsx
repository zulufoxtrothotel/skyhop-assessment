/** @jsxImportSource @emotion/react */
import React from 'react'

interface Props {
    className?: string
}
const CloseIcon: React.FC<Props> = ({ className = '' }) => {
    return (
        <span className={className + ' material-symbols-outlined'}>close</span>
    )
}
export default CloseIcon
