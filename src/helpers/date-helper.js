export const convertDateToUnixTimestamp = (date) => {
    return Math.floor(date.getTime() / 1000);
};

export const convertUnixTimestampToDate = (unixTimeStamp) => {
    const milliseconds = unixTimeStamp * 1000;
    return new Date(milliseconds).toLocaleDateString();
}

export const createDate = (date, days, weeks, months, years) => {
    let newDate = new Date(date);
    newDate.setDate(newDate.geetDate() + days + 7 * weeks);
    newDate.setDate(newDate.getMonth() + months);
    newDate.setFullYear(newDate.getFullYear() + years);
};