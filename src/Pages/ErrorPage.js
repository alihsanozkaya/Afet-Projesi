import React from 'react'
import { Button, Result } from 'antd';
const ErrorPage = () => {
  return (
  <Result
    status="404"
    title="404"
    subTitle="Üzgünüz, ziyaret ettiğiniz sayfa mevcut değil."
    extra={<Button type="primary" href='/'>Anasayfa'ya geri dön</Button>}
  />
  )
}

export default ErrorPage