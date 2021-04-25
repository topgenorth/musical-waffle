import React from "react";

interface EditOldRangeLogProps {
    rangelogid: any;
    date: string;
    firearm: string;
    rounds: number;
    range: string;
    ammo: string;
    notes: string;
}


export default function EditOldRangeLogForm(props:EditOldRangeLogProps) {
    return <div>
        <div>
            Edit a range log.
        </div>
    </div>
};
