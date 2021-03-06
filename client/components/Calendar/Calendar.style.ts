import styled from "styled-components";

export const CalendarWrapper = styled.div`
    margin-top: 40px;

    .row {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .row-middle {
        align-items: center;
    }

    .col {
        flex-grow: 1;
        flex-basis: 0;
        max-width: 100%;
    }

    .col-start {
        justify-content: flex-start;
        text-align: left;
    }

    .col-center {
        justify-content: center;
        text-align: center;
    }

    .col-end {
        justify-content: flex-end;
        text-align: right;
    }

    .calendar {
        display: block;
        position: relative;
        width: 100%;
        background: #fff;
        border: 1px solid #eee;
    }

    .calendar .header {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 115%;
        padding: 1.5em 0;
        border-bottom: 1px solid #eee;
    }

    .calendar .header .icon {
        cursor: pointer;
        transition: 0.15s ease-out;
    }

    .calendar .header .icon:hover {
        transform: scale(1.75);
        transition: 0.25s ease-out;
        color: #1a8fff;
    }

    .calendar .header .icon:first-of-type {
        margin-left: 1em;
    }

    .calendar .header .icon:last-of-type {
        margin-right: 1em;
    }

    .calendar .days {
        text-transform: uppercase;
        font-weight: 400;
        color: #ccc;
        font-size: 70%;
        padding: 0.75em 0;
        border-bottom: 1px solid #eee;
    }

    .calendar .body .cell {
        position: relative;
        height: 7em;
        border-right: 1px solid #eee;
        overflow: hidden;
        cursor: pointer;
        background: #fff;
        transition: 0.25s ease-out;
    }

    .calendar .body .cell:hover {
        background: #f9f9f9;
        transition: 0.5s ease-out;
    }

    .calendar .body .selected {
        border-left: 10px solid transparent;
        border-image: linear-gradient(45deg, #1a8fff 0%, #53cbf1 40%);
        border-image-slice: 1;
    }

    .calendar .body .row {
        border-bottom: 1px solid #eee;
    }

    .calendar .body .row:last-child {
        border-bottom: none;
    }

    .calendar .body .cell:last-child {
        border-right: none;
    }

    .calendar .body .cell .number {
        position: absolute;
        font-size: 82.5%;
        line-height: 1;
        top: 0.75em;
        right: 0.75em;
        font-weight: 700;
    }

    .calendar .body .disabled {
        background-color: #eaeaea;
        pointer-events: none;
    }

    .calendar .body .cell .bg {
        font-weight: 700;
        line-height: 1;
        color: #ff4338;
        opacity: 0;
        font-size: 8em;
        position: absolute;
        top: -0.2em;
        right: -0.05em;
        transition: 0.25s ease-out;
        letter-spacing: -0.07em;
    }

    .calendar .body .cell:hover .bg,
    .calendar .body .selected .bg {
        opacity: 0.05;
        transition: 0.5s ease-in;
    }

    .calendar .body .col {
        flex-grow: 0;
        flex-basis: calc(100% / 7);
        width: calc(100% / 7);
    }
`;
