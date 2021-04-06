import s13 from '../images/s13-pic.jpg'
import s14 from '../images/car-pic.jpg'
import s15 from '../images/s15.jpg'
import r34 from '../images/r34.gif'
import sx180 from '../images/180sx.jpg'

export const MIN_DATA_FETCH = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
export const MAX_DATA_FETCH = 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'
export const DATA_FETCH = 'https://my.api.mockaroo.com/test.json?key=94d3b3a0'

const cars = [s13, s14, s15, r34, sx180]

export const TABLE_INFO =
  {
    email: {
      visible: true,
      title: 'Email'
    },
    phone: {
      visible: true,
      title: 'Phone'
    },
    gender: {
      visible: true,
      title: 'Gender'
    },
    ipAddress: {
      visible: true,
      title: 'IP Address'
    },
    price: {
      visible: true,
      title: 'Price'
    },
    carImage: {
      visible: true,
      title: 'Car Image',
      src: cars
    },
    carModel: {
      visible: true,
      title: 'Car Model'
    },
    carYear: {
      visible: true,
      title: 'Car Year'
    },
    carVin: {
      visible: true,
      title: 'Car VIN'
    }
  }
