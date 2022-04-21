import axios from 'axios'

axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res)
})

axios
  .get('http://httpbin.org/get', {
    params: {
      name: 'kim',
      age: 18
    }
  })
  .then((res) => {
    console.log(res)
  })
