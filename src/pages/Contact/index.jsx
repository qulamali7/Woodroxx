import React from 'react'
import ContactContent from '../../components/ContactContent'
import PageHeader from '../../components/PageHeader'

const Contact = () => {
  return (
    <>
    <PageHeader h2={"Contact"} span1={"Home"} span2={"Contact"}/>
    <ContactContent/>
    </>
  )
}

export default Contact