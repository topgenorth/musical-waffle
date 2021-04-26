export function getCurrentDate() {
    const nowDate = new Date();
    const dateOfRecord = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();
    return dateOfRecord;
}
