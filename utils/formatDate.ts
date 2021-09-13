import dayjs from "dayjs"

const formatDate = (date: string) => {
  return dayjs(date).format("MMM D, YYYY")
}

export default formatDate
