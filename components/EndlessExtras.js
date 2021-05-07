import Image from 'next/image'

export default function EndlessExtras() {
    return(
    <div className="bg-white py-32">
        <div className="text-300 text-3xl font-semibold text-center">
            Endless Extras
        </div>
        <div className="text-300 text-center pt-5">
            Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to 
            <br />
            easy ordering, tasty Rewards and—yes, free coffee.
        </div>
        <div className="flex flex-row text-300 pt-12 justify-center items-center text-center">
            <div>
                <div>
                    <Image
                    src="/freebies-1.png"
                    alt="freebies"
                    width={100}
                    height={100}
                    className="starbucks"
                />
                    <div className="text-300 font-semibold text-lg pb-3">
                        Fun freebies
                    </div>
                    <div>
                        Not only can you earn free coffee, look forward
                        <br /> 
                        to a birthday treat plus coffee and tea refills.
                    </div>
                    <div className="pt-3">
                        <a className="underline hover:no-underline text-500 cursor-pointer">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
            <div className="px-16">
                <div>
                    <Image
                    src="/freebies-2.png"
                    alt="freebies"
                    width={100}
                    height={100}
                    className="starbucks"
                />
                    <div className="text-300 font-semibold text-lg pb-3">
                        Order & pay ahead
                    </div>
                    <div>
                        Enjoy the convenience of in-store, curbside or
                        <br /> 
                        drive-thru pickup at select stores.
                    </div>
                    <div className="pt-3">
                        <a className="underline hover:no-underline text-500 cursor-pointer">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <Image
                    src="/freebies-3.png"
                    alt="freebies"
                    width={100}
                    height={100}
                    className="starbucks"
                />
                    <div className="text-300 font-semibold text-lg pb-3">
                        Get to free faster
                    </div>
                    <div>
                        Earn Stars even quicker with Bonus Star
                        <br /> 
                        challenges, Double Star Days and exciting games.
                    </div>
                    <div className="pt-3">
                        <a className="underline hover:no-underline text-500 cursor-pointer">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}