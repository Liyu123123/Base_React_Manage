import { useState, useEffect } from 'react'

export default (api, pagination,key) => {
  const [data, setData] = useState({
    total: 0,
    tableData: []
  })
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    api({ ...pagination }, {})
      .then(data => {
        const {
          data: { total, rows }
        } = data
        setData({
          total: total,
          tableData: rows
        })
      })
      .catch(error => {
        setLoading(false)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [pagination,api,key])

  return {
    data,
    loading
  }
}
