const getHeaders = () => {
  const env = process.env.NODE_ENV
  if (env === 'production') {
    return {
      token: sessionStorage.getItem('token') || ''
    }
  } else {
    return {
      token: sessionStorage.getItem('token') || 'AB3C64DAB1F7E9265A72D2F5B559E351'
    }
  }
}

export default getHeaders
