export const dateFormatter = (date) =>
{
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const dateFormatted = `${day.toString().padStart(2,'0')}/${month.toString().padStart(2,'0')}/${year.toString().slice(-2)}`;

    return dateFormatted;
}