/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import CloseIcon from './Icons/CloseIcon'
import Dropdown from './Utils/Dropdown'
import Divider from './Utils/Divider'
import RadioButtons from './Utils/RadioButtons'
import {
    CLIENT_CENTER_OPTIONS,
    CLIENT_RADIO_BUTTON_OPTIONS,
    clientOptionsEnum,
    IMPORT_NAMES,
    SPLIT_SCHEDULE_OPTIONS,
    TESTING_CENTER_OPTIONS,
    uploaderStyles,
} from './documentUploaderModule'
import ToggleSwitch from './Utils/ToggleSwitch'
import ClockIcon from './Icons/ClockIcon'
import { InputOptionType } from './types'
import UploadBox from './Utils/UploadBox'
import DocumentIcon from './Icons/DocumentIcon'

const getFormattedFileSize = (file: File) => {
    const fileSizeInMB = file.size / 1000
    //rounds to 1 decimal places (if necessary)
    return Math.round(fileSizeInMB * 10) / 10
}
const DocumentUploader: React.FC = () => {
    const [importNameId, setImportNameId] = useState<string>('')
    const [isToleranceWindowOn, setIsToleranceWindowOn] = useState(true)
    const [file, setFile] = useState<File | null>(null)
    const [clientOption, setClientOption] = useState(
        CLIENT_RADIO_BUTTON_OPTIONS[0].id
    )
    const [testingCenters, setTestingCenters] = useState<
        { dropdownId: string; clientId: string }[]
    >([])
    const [willSplitSchedule, setWillSplitSchedule] = useState(
        SPLIT_SCHEDULE_OPTIONS[0].id
    )

    const handleSelectName = (id: string) => {
        setImportNameId(id)
    }
    const handleSelectSplitSchedule = (id: string) => {
        setWillSplitSchedule(id)
    }

    const handleSelectClientOption = (id: string) => {
        //Reset all dropdowns except for testing center 1 since it is used in both single and multiple
        const filteredTestingCenters = testingCenters.filter(
            (center) => center.dropdownId === TESTING_CENTER_OPTIONS[0].id
        )
        setTestingCenters(filteredTestingCenters)
        setClientOption(id)
    }
    const handleSubmit = () => {
        alert('This would submit the form.')
    }

    const renderClientDropdowns = () => {
        const renderDropdownRow = (inputOptions: InputOptionType[]) => {
            return inputOptions.map((inputOption) => {
                const handleSelect = (selectedClientId: string) => {
                    //remove selection from any existing dropdowns and from current dropdown
                    const filteredTestingCenters = testingCenters.filter(
                        (center) =>
                            center.clientId !== selectedClientId &&
                            center.dropdownId !== inputOption.id
                    )

                    //add selection to dropdown
                    const newTestingCenters = [
                        ...filteredTestingCenters,
                        {
                            dropdownId: inputOption.id,
                            clientId: selectedClientId,
                        },
                    ]
                    setTestingCenters(newTestingCenters)
                }
                const dropdownDataInState = testingCenters.find(
                    (center) => center.dropdownId === inputOption.id
                )
                const currentSelectedId = dropdownDataInState
                    ? dropdownDataInState.clientId
                    : ''
                return (
                    <div css={uploaderStyles.dropdownRow} key={inputOption.id}>
                        <span>{inputOption.text}</span>
                        <Dropdown
                            placeholder={'Select Client'}
                            options={CLIENT_CENTER_OPTIONS}
                            handleSelect={(selected) => handleSelect(selected)}
                            currentSelectionId={currentSelectedId}
                        />
                        <ClockIcon css={uploaderStyles.clockIcon} />
                    </div>
                )
            })
        }
        if (clientOption === clientOptionsEnum.single) {
            return renderDropdownRow([TESTING_CENTER_OPTIONS[0]])
        } else {
            return renderDropdownRow(TESTING_CENTER_OPTIONS)
        }
    }

    return (
        <form
            id={'document-uploader'}
            css={uploaderStyles.container}
            onSubmit={handleSubmit}
        >
            <button
                css={uploaderStyles.closeButton}
                type={'button'}
                onClick={() => alert('This would close the modal.')}
            >
                <CloseIcon css={uploaderStyles.closeIcon} />
            </button>
            <h1 css={uploaderStyles.title}>Document Upload</h1>
            <div css={uploaderStyles.content}>
                <div css={uploaderStyles.leftColumn}>
                    <Dropdown
                        placeholder={'Select Import Name:'}
                        options={IMPORT_NAMES}
                        currentSelectionId={importNameId}
                        handleSelect={handleSelectName}
                    />
                    <Divider />
                    <span>Select a manifest that you'd like to import</span>
                    <UploadBox setFile={setFile} />
                    <div>
                        {file && (
                            <div css={uploaderStyles.documentSummaryRow}>
                                <DocumentIcon
                                    css={uploaderStyles.documentIcon}
                                />
                                <div css={uploaderStyles.documentMeterColumn}>
                                    <div css={uploaderStyles.spaceBetweenRow}>
                                        <p>{file.name}</p>
                                        <div css={uploaderStyles.row}>
                                            <p css={uploaderStyles.fileSize}>
                                                {getFormattedFileSize(file)}
                                            </p>
                                            <p css={uploaderStyles.unit}>MB</p>
                                        </div>
                                    </div>
                                    <div css={uploaderStyles.meterContainer}>
                                        <div
                                            css={uploaderStyles.meterFill}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <Divider />
                    <span>Elapse Data Checking:</span>
                    <span css={uploaderStyles.successText}>
                        No Elapsed Dates!
                    </span>
                    <Divider />
                    <div css={uploaderStyles.toggleRow}>
                        <ToggleSwitch
                            labelText={'Tolerance Window:'}
                            checked={isToleranceWindowOn}
                            handleChange={setIsToleranceWindowOn}
                        />
                        <span css={uploaderStyles.grayTextLarge}>|</span>
                        <ClockIcon css={uploaderStyles.clockIcon} />
                        <span css={uploaderStyles.grayTextSmall}>
                            Select Tolerance Level
                        </span>
                    </div>
                </div>
                <div css={uploaderStyles.rightColumn}>
                    <RadioButtons
                        currentSelectionId={willSplitSchedule}
                        labelText={'Split schedule using social distancing?'}
                        options={SPLIT_SCHEDULE_OPTIONS}
                        handleSelect={handleSelectSplitSchedule}
                    />
                    <Divider />
                    <span>Location Checking:</span>
                    <span css={uploaderStyles.successText}>All Available!</span>
                    <Divider />
                    <RadioButtons
                        currentSelectionId={clientOption}
                        labelText={'Client:'}
                        options={CLIENT_RADIO_BUTTON_OPTIONS}
                        handleSelect={handleSelectClientOption}
                    />
                    {renderClientDropdowns()}
                </div>
            </div>
            <div css={uploaderStyles.footer}>
                <span>
                    Data in the import file is correct. Please press Continue to
                    import.
                </span>
                <div css={uploaderStyles.buttonRow}>
                    <input
                        css={uploaderStyles.submitButton}
                        type="submit"
                        value="Continue Import"
                    />
                    <button
                        onClick={() => alert('This would close the modal.')}
                        css={uploaderStyles.cancelButton}
                        type="button"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    )
}

export default DocumentUploader
