export default function ({ $axios, redirect }, inject) {
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      redirect('/login')
    }
  })
}
