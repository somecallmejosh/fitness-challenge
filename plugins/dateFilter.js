import Vue from 'vue'

const months = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12'
]

const dateFilter = (value) => formatDate(value)

function formatDate(inputDate) {
  const date = new Date(`${inputDate} EDT`)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const formattedDate = `${months[month]}/${day}/${year}`
  if (!inputDate.length) {
    return ''
  } else {
    return formattedDate
  }
}

Vue.filter('date', dateFilter)
