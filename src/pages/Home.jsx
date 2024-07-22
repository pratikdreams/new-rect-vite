import React from 'react'
import Nav from '../components/Nav'
import Cta from '../components/Cta'
import Card5 from '../components/Card5'
import Thems from '../components/Thems'
import Pricing from '../components/Pricing'
import Whychooseus from '../components/Whychooseus'
import Faq from '../components/Faq'
import Whycard from '../components/Whycard'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
       <Nav/>
     <Cta/>
     <Card5/>
     <Thems/>
     <Pricing/>
     <Whychooseus/>
     <Faq/>
     <Whycard/>
     <Footer/>
    </div>
  )
}
