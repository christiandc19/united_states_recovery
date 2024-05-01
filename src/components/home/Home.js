import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import WeDo from '../../components/Whatwedo/Whatwedo';
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';
import ServicesMH from '../servicesMH/ServicesMH';
import ServicesSA from '../servicesSA/ServicesSA';



const home = () => {
  return (
    <>
    <Whoweare />
    <ServicesMH />
    <WeDo />
    <ServicesSA />
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
