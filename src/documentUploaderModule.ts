import { InputOptionType } from './types'
import { css } from '@emotion/react'
import { theme } from './theme'

export const IMPORT_NAMES: InputOptionType[] = [
    { text: 'Name 1', id: 'name1', key: 'name1' },
    { text: 'Name 2', id: 'name2', key: 'name2' },
    { text: 'Name 3', id: 'name3', key: 'name3' },
]

export const SPLIT_SCHEDULE_OPTIONS: InputOptionType[] = [
    { text: 'Yes', id: 'yes', key: 'yes' },
    { text: 'No', id: 'no', key: 'no' },
]

export enum clientOptionsEnum {
    single = 'single',
    multiple = 'multiple',
}

export const CLIENT_RADIO_BUTTON_OPTIONS: InputOptionType[] = [
    {
        text: 'Single',
        id: clientOptionsEnum.single,
        key: clientOptionsEnum.single,
    },
    {
        text: 'Multiple',
        id: clientOptionsEnum.multiple,
        key: clientOptionsEnum.multiple,
    },
]

export const CLIENT_CENTER_OPTIONS: InputOptionType[] = [
    { text: 'Client A', id: 'clienta', key: 'clienta' },
    { text: 'Client B', id: 'clientb', key: 'clientb' },
    { text: 'Client C', id: 'clientc', key: 'clientc' },
    { text: 'Client D', id: 'clientd', key: 'clientd' },
    { text: 'Client E', id: 'cliente', key: 'cliente' },
]

export const TESTING_CENTER_OPTIONS: InputOptionType[] = [
    {
        text: 'Testing Center 1',
        id: 'testingcenter1',
        key: 'testingcenter1',
    },
    {
        text: 'Testing Center 2',
        id: 'testingcenter2',
        key: 'testingcenter2',
    },
    {
        text: 'Testing Center 3',
        id: 'testingcenter3',
        key: 'testingcenter3',
    },
    {
        text: 'Testing Center 4',
        id: 'testingcenter4',
        key: 'testingcenter4',
    },
]

export const uploaderStyles = {
    container: css`
        padding: 30px 80px 80px 80px;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 10px;
        position: relative;
        min-height: 540px;
    `,
    title: css`
        font-weight: 700;
        padding: 0 0 15px 0;
        border-bottom: solid 2px ${theme.colors.borders};
        align-self: center;
    `,
    closeButton: css`
        background-color: ${theme.colors.primaryDark};
        border: none;
        outline: none;
        position: absolute;
        top: 20px;
        left: 20px;
        color: #fff;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        cursor: pointer;
    `,
    closeIcon: css`
        color: #fff;
        font-weight: 200;
    `,
    content: css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 40px;
        margin-bottom: 20px;
    `,
    leftColumn: css`
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-bottom: 10px;
        width: 350px;
    `,
    rightColumn: css`
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-bottom: 10px;
    `,
    submitButton: css`
        color: #fff;
        background-color: ${theme.colors.primary};
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        width: 200px;
        outline: none;
        border: none;
        padding: 10px 5px;
        font-weight: 700;
        cursor: pointer;
        :hover {
            background-color: ${theme.colors.primaryDark};
        }
    `,
    cancelButton: css`
        color: ${theme.colors.secondary};
        background-color: #fff;
        border: solid 2px ${theme.colors.secondary};
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        width: 200px;
        outline: none;
        padding: 10px 5px;
        font-weight: 700;
        cursor: pointer;
        :hover {
            background-color: ${theme.colors.secondary};
            color: #fff;
        }
    `,
    footer: css`
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 16px;
        font-weight: 800;
        align-items: center;
        justify-self: flex-end;
        margin-top: auto;
    `,
    buttonRow: css`
        display: flex;
        flex-direction: row;
        gap: 20px;
    `,
    successText: css`
        color: ${theme.colors.success};
        font-weight: 700;
    `,
    toggleRow: css`
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    `,
    grayTextSmall: css`
        color: ${theme.colors.darkGray};
        font-size: 12px;
        font-weight: 500;
        line-height: 20px;
        margin-left: 5px;
    `,
    grayTextLarge: css`
        font-size: 24px;
        color: ${theme.colors.darkGray};
        font-weight: 300;
        margin-left: 10px;
    `,
    clockIcon: css`
        font-size: 20px;
        color: ${theme.colors.darkGray};
        font-weight: 300;
        margin-left: 10px;
    `,
    dropdownRow: css`
        display: grid;
        grid-template-columns: 130px 150px 1fr;
        align-items: center;

        .placeholder-text {
            font-weight: 500;
            font-size: 12px;
        }

        span {
            font-weight: 400;
            text-align: center;
            justify-self: baseline;
        }
    `,
    documentIcon: css`
        color: ${theme.colors.secondary};
    `,
    documentSummaryRow: css`
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        width: 100%;
        border-top: solid 1px ${theme.colors.borders};
        border-bottom: solid 1px ${theme.colors.borders};
        padding: 10px 0;
    `,
    documentMeterColumn: css`
        color: ${theme.colors.borders};
        display: flex;
        flex-direction: column;
        font-weight: 600;
        width: 100%;
        padding-right: 10px;
    `,
    meterContainer: css`
        height: 2px;
        width: 100%;
        display: flex;
        gap: 0;
        position: relative;
        background-color: ${theme.colors.borders};
    `,
    meterFill: css`
        height: 100%;
        width: 5px;
        background-color: ${theme.colors.secondary};
        position: absolute;
        left: 0;
    `,
    spaceBetweenRow: css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        p {
            margin: 2px 0;
        }
    `,
    row: css`
        display: flex;
        flex-direction: row;
        align-items: center;
    `,
    fileSize: css`
        color: ${theme.colors.primary};
        font-size: 12px;
    `,
    unit: css`
        color: ${theme.colors.primary};
        font-size: 11px;
    `,
}
