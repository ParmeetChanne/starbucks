import Header from '../components/Header'
import Hero from '../components/Hero'
import GettingStarted from '../components/GettingStarted'
import Favourites from '../components/Favourites'
import Customize from '../components/Customize'
import EndlessExtras from '../components/EndlessExtras'

import Image from 'next/image'

export default function Rewards() {
  return (
    <div className="bg-100 h-full">
        {/*<Image
            src="/starbucks.png"
            alt="Starbucks"
            layout="fill"
            className="starbucks"
            />
        <style jsx global>{`
            .starbucks {
            justify-content: right;
            }
        `}
        </style>*/}
        <div className="bg-100 items-center justify-center bg-blue text-xss">
            <Header />
        </div>
        <div>
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
    </div>
  )
}
