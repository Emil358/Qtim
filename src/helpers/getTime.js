const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const getTime = (time) => {
  const date = new Date(time);
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  return `${MONTHS[month]} ${day}, ${year}`
}

export default getTime;
