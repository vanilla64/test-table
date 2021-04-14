import s13 from '../images/s13-pic.jpg'
import s14 from '../images/car-pic.jpg'
import s15 from '../images/s15.jpg'
import r34 from '../images/r34.gif'
import sx180 from '../images/180sx.jpg'

export const DATA_FETCH = 'https://my.api.mockaroo.com/test.json?key=94d3b3a0'

const cars = [s13, s14, s15, r34, sx180]

export const SLICE_COUNT = 100

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
    dollars: {
      visible: true,
      title: 'Dollars'
    },
    euro: {
      visible: true,
      title: 'Euro'
    },
    jpy: {
      visible: true,
      title: 'JPY'
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
