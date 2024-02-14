/** @jsxImportSource @emotion/react */
import React from 'react'

interface Props {
    className?: string
}
const ExpandMoreIcon: React.FC<Props> = ({ className = '' }) => {
    return (
        <span className={className + ' material-symbols-outlined'}>
            expand_more
        </span>
    )
}
export default ExpandMoreIcon
