import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const Page = (props: {element: React.ReactNode}) => {
  return (
    <div>
        <Header/>
        <Breadcrumbs/>
        <main>
          {props.element}
        </main>
        <Footer/>
    </div>
  )
}

export default Page