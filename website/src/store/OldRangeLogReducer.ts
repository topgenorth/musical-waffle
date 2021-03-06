export const OLD_RANGE_LOG_ADD = "OLD_RANGE_LOG_TYPE/add";

export interface OldRangeLog {
    id: number;
    date: string;
    rangeName: string;
    firearmName: string;
    roundCount: number;
    ammoDescription: string;
    notes: string;
}

export interface OldRangeLogAction {
    type: string;
    payload: OldRangeLog | null;
}

export const OldRangeLogReducer = (state: OldRangeLog | null = null, action: OldRangeLogAction): OldRangeLog | null => {
    switch (action.type) {
        case OLD_RANGE_LOG_ADD:
            return action.payload;
        default:
            return state;
    }
};
