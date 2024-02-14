/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { css } from '@emotion/react'
import { theme } from '../theme'

const styles = {
    divider: css`
        border-top: solid 1px ${theme.colors.borders};
        width: 250px;
        margin-right: 100%;
        border-left: none;
    `,
}

const Divider: React.FC = () => {
    return <hr css={styles.divider} />
}

export default Divider
