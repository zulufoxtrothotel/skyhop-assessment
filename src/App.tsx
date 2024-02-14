/** @jsxImportSource @emotion/react */
import React from 'react'
import { css, ThemeProvider } from '@emotion/react'
import { theme } from './theme'
import DocumentUploader from './DocumentUploader'

const styles = {
    container: css`
        height: 100vh;
        display: flex;
        color: ${theme.colors.primaryDark};
        background-color: ${theme.colors.background};
        justify-content: center;
        align-items: center;
        font-family: Raleway, sans-serif;
        font-weight: 700;
        font-size: 12px;
    `,
}
function App() {
    return (
        <ThemeProvider theme={theme}>
            <div css={styles.container}>
                <DocumentUploader />
            </div>
        </ThemeProvider>
    )
}

export default App
