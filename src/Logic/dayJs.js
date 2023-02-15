import dayjs from "dayjs"

export const currentYear = dayjs().format('YYYY')
export const currentMonth = dayjs().format('MM')
export const currentMonthTxt = dayjs().format('MMMM')
export const currentDay = dayjs().format('DD')
