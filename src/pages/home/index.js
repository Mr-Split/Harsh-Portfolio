import React from 'react'
import Header from '../../components/Header'
import Intro from './intro'
import About from './about'
import Experiences from './experience'
import Projects from './project'
import Contact from './contact'
import Footer from './footer'
import LeftSider from './leftSider'
//import {useSelector} from "react-redux";

//import { fetchPortfolioData } from '../../';

function home() {
  //const {portfolioData} = useSelector((state) => state.root);

  return (
    <div>
      <Header />
        <div className='bg-primary px-40 sm:px-5'>
        <Intro />
        <About />
        <Experiences />
        <Projects />
        <Contact />
        <Footer />
        <LeftSider />
        </div>
    </div>
  )
}

export default home;