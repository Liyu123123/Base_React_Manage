import { useState } from 'react'
export default () => {
  const [pagaination, setPagination] = useState({
    page: 1,
    pageSize: 10,
  })
  return {
    pagaination,
    setPage(page) {
      setPagination({
        ...pagaination,
        page
      })
    },
    setPageSize(pageSize) {
      setPagination({
        ...pagaination,
        pageSize
      })
    }
  }
}
