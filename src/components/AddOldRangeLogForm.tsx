import React from 'react';
import {getCurrentDate} from "../app/utils";
import {useDispatch, useSelector} from "react-redux";
import {OLD_RANGE_LOG_ADD, OldRangeLog} from "../store/OldRangeLogReducer";
import {AppState} from "../store/AppState";

export default function AddOldRangeLogForm(props: OldRangeLog) {
    const rangeLog = useSelector((state: AppState) => state.oldRangeLog) || {
        id: -1,
        date: getCurrentDate(),
        rangeName: "SPFGA",
        firearmName: "",
        roundCount: 0,
        ammoDescription: "",
        notes: ""
    };
    const dispatch = useDispatch();
    const onRangeLogFieldChanged = async (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.id) {
            case 'dateOfRecord':
                dispatch({
                    type: OLD_RANGE_LOG_ADD,
                    payload: {...rangeLog, date: e.target.value}
                });
                break;
            case 'rangeName' :
                dispatch({
                    type: OLD_RANGE_LOG_ADD,
                    payload: {...rangeLog, rangeName: e.target.value}
                });
                break;
            case 'firearmName':
                dispatch({
                    type: OLD_RANGE_LOG_ADD,
                    payload: {...rangeLog, firearmName: e.target.value}
                });
                break;
            case 'roundCount':
                dispatch({
                    type: OLD_RANGE_LOG_ADD,
                    payload: {...rangeLog, roundCount: e.target.value}
                });
                break;
            case 'ammoDescription' :
                dispatch({
                    type: OLD_RANGE_LOG_ADD,
                    payload: {...rangeLog, ammoDescription: e.target.value}
                });
                break;
            case 'notesForTrip':
                dispatch({
                    type: OLD_RANGE_LOG_ADD,
                    payload: {...rangeLog, notes: e.target.value}
                });
                break;
            default:
                console.log("Unknown field ID " + e.target.id);
                break;
        }
    };
    const onSaveRangeLogClicked = async () => {
        console.log('TODO: this should save ');
        console.log(rangeLog);
    };
    return (
        <section>
            <h2>Record trip to range</h2>
            <form>
                <label htmlFor="dateOfRecord">Date:</label>
                <input
                    type="text"
                    id="dateOfRecord"
                    name="dateOfRecordContent"
                    placeholder="date"
                    value={rangeLog.date}
                    onChange={onRangeLogFieldChanged}
                />
                <br/>
                <label htmlFor="rangeName">Range:</label>
                <input
                    type="text"
                    id="rangeName"
                    name="rangeNameContent"
                    placeholder="Name of the range"
                    value={rangeLog.rangeName}
                    onChange={onRangeLogFieldChanged}
                />
                <br/>
                <label htmlFor="firearmName">Firearm:</label>
                <input
                    type="text"
                    id="firearmName"
                    name="firearmNameContent"
                    placeholder="firearm name"
                    value={rangeLog.firearmName}
                    onChange={onRangeLogFieldChanged}
                />
                <br/>
                <label htmlFor="roundCount">Rounds:</label>
                <input
                    type="text"
                    id="roundCount"
                    name="roundCountContent"
                    placeholder="Rounds fired."
                    value={rangeLog.roundCount}
                    onChange={onRangeLogFieldChanged}
                />
                <br/>
                <label htmlFor="ammoDescription">Ammo:</label>
                <input
                    type="text"
                    id="ammoDescription"
                    name="ammoDescriptionContent"
                    placeholder="Ammo used"
                    value={rangeLog.ammoDescription}
                    onChange={onRangeLogFieldChanged}
                />
                <br/>
                <label htmlFor="notesForTrip">Notes:</label>
                <input
                    type="text"
                    id="notesForTrip"
                    name="notesForTripContent"
                    placeholder="Notes"
                    value={rangeLog.notes}
                    onChange={onRangeLogFieldChanged}
                />
            </form>
            <br/>
            <button type="button" onClick={onSaveRangeLogClicked}>Save</button>
        </section>
    );
}

