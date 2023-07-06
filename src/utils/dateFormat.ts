export const transformDate = (date: string | undefined) => {
  if (!date) return "";
  const dateObj = new Date(date);
  // offset dates
  dateObj.setDate(dateObj.getDate() + 1);
  dateObj.setMonth(dateObj.getMonth() + 1);
  return `${
    dateObj.getDate() > 9 ? dateObj.getDate() : "0" + dateObj.getDate()
  }/${
    dateObj.getMonth() > 9 ? dateObj.getMonth() : "0" + dateObj.getMonth()
  }/${dateObj.getFullYear()}`;
};