export function formatDate(date: Date = new Date(), format: string = 'yyyy-mm-dd'): string {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const monthStr = month < 10 ? '0' + month.toString() : month.toString;

  let formattedDate: string;
  switch (format) {
    case 'yyyy-mm-dd':
      formattedDate = `${year}-${monthStr}-${day}`;
      break;
    case 'dd-mm-yyyy':
      formattedDate = `${day}-${monthStr}-${year}`;
      break;

    default:
      formattedDate = `${year}-${monthStr}-${day}`;
      break;
  }
  return formattedDate;
}

export function addDay(date: Date = new Date(), days = 1): Date {
  let dateCopy = new Date(date.valueOf());
  dateCopy.setDate(dateCopy.getDate() + days);
  return dateCopy;
}
