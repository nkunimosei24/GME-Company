import React from 'react'
import Rootlayout from '../../layouts/Rootlayout'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Items from '../../components/Items'
import Testimonials from '../../components/Testimonials'
import Newsletter from '../../components/Newsletter'

const Home = () => {
  return (
    <div>

<Hero/>
<About/>
<Items/>
<Testimonials/>
<Newsletter/>
    </div>
  )
}

export default Home