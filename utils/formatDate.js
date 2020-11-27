import dayjs from "dayjs"

const formatDate = date => {
  return dayjs(date).format("MMM D, YYYY")
}

export default formatDate
