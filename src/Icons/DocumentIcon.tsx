/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

const styles = {
    //makes icon 'fill' instead of 'outline' https://fonts.google.com/icons
    icon: css`
        .material-symbols-outlined {
            font-variation-settings:
                'FILL' 1,
                'wght' 400,
                'GRAD' 0,
                'opsz' 24;
        }
    `,
}
interface Props {
    className?: string
}
const DocumentIcon: React.FC<Props> = ({ className = '' }) => {
    return (
        <div css={styles.icon}>
            <span className={className + ' material-symbols-outlined'}>
                description
            </span>
        </div>
    )
}
export default DocumentIcon
