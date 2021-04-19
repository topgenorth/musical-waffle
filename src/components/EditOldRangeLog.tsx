import React, {FC} from "react";
import {useParams} from "react-router-dom";

interface EditOldRangeLogProps {
    rangelogid: any;
    date: string;
    firearm: string;
    rounds: number;
    range: string;
    ammo: string;
    notes: string;
}


export default function EditOldRangeLog(props:EditOldRangeLogProps) {
    const x = useParams();
    // @ts-ignore
    let {id } = useParams();
    return <div>
        <div>
            Edit a range log {id}
        </div>
    </div>
};
