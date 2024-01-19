
import Image from 'next/image'
import FasterTransactions from './components/FasterTransactions'
import BannerSection from "./components/BannerSection"
import InvestmentOpportunities from "./components/InvestmentOpportunities"
import RewardsTransaction from "./components/RewardsTransaction"
import Header from "./components/Header"
import Footer from "./components/Footer"
 import LastCard from './components/LastCard'
import Head from 'next/head'
import Card4 from './components/Card4'
import Card5 from './components/Card5'
import Card6 from './components/Card6'
import Card7 from './components/Card7'
import Card8 from './components/Card8'

export default function Home() {
  return (
     <div className='bg-[#080b18]'>
        <div className=" px-5 scroll-smooth max-w-screen-xl mx-auto">
      <Head>
        <title>The BEP20 Token govern by the community.!!</title>
        <meta name="description" content="The BEP20 Token govern by the community.!!" />
        <meta property="og:image" content="/dashh.svg" />
      </Head>
      <div className='max-width'>  
        <Header />
        {/* <BannerSection />
        <InvestmentOpportunities />
        <FasterTransactions />
        <RewardsTransaction /> */}
        {/* <Card4/>
        <Card5/>
        <Card6/>
        <Card7/> */}
        <Card8/>
        <LastCard/>
        <div className='flex justify-center'><img className='w-[70px]' src='/footer_star.svg'/></div>
        <Footer />
      </div>
    </div>
    </div>
  )
}
