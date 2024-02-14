/** @jsxImportSource @emotion/react */
import React from 'react'

import { css } from '@emotion/react'

const styles = {
    customIcon: css`
        transform: rotate(90deg) rotateX(180deg);
    `,
}
interface Props {
    className?: string
}
const ExpandMoreIcon: React.FC<Props> = ({ className = '' }) => {
    return (
        <span
            css={styles.customIcon}
            className={className + ' material-symbols-outlined'}
        >
            schedule
        </span>
    )
}
export default ExpandMoreIcon
