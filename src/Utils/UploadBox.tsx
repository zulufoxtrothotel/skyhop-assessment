/** @jsxImportSource @emotion/react */
import React from 'react'
import { FileUploader } from 'react-drag-drop-files'
import DocumentIcon from '../Icons/DocumentIcon'
import { uploadBoxStyles } from './uploadBoxStyles'

interface Props {
    setFile: (file: any) => void
}

const UploadBox: React.FC<Props> = ({ setFile }) => {
    return (
        <>
            <div css={uploadBoxStyles.container}>
                <div css={uploadBoxStyles.uploadBoxContainer}>
                    <FileUploader
                        multiple={false}
                        handleChange={setFile}
                        name="file"
                    >
                        <div css={uploadBoxStyles.uploadBox}>
                            <DocumentIcon css={uploadBoxStyles.documentIcon} />
                            <span>
                                Drag & Drop Here or <strong>Browse</strong>
                            </span>
                        </div>
                    </FileUploader>
                </div>
                <button
                    onClick={() => alert('This will upload the file.')}
                    type={'button'}
                    css={uploadBoxStyles.uploadButton}
                >
                    Upload Manifest
                </button>
            </div>
        </>
    )
}

export default UploadBox
