import Header from '../components/Header'
import Hero from '../components/Hero'
import GettingStarted from '../components/GettingStarted'
import Favourites from '../components/Favourites'
import Customize from '../components/Customize'
import EndlessExtras from '../components/EndlessExtras'
import EarnStars from '../components/EarnStars'

import Image from 'next/image'

export default function Rewards() {
  return (
    <div className="bg-100 h-full w-screen grid">
        <div className="hidden md:flex">
            <Image
                src="/starbucks-1.png"
                alt="Starbucks"
                layout="fill"
                className="starbucks"
                />
        </div>
        <div className="bg-100 items-center justify-center bg-blue text-xss">
            <Header />
        </div>
        <div className="">
            <Hero/>
        </div>
        <div className="">
            <GettingStarted />
        </div>
        <div>
            <Favourites />
        </div>
        <div>
            <Customize />
        </div>
        <div>
            <EndlessExtras />
        </div>
        <div>
            <EarnStars />
        </div>
    </div>
  )
}

<style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Lobster;
  }

  * {
    box-sizing: border-box;
  }
`}</style>