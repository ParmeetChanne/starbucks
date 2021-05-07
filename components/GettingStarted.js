import Image from 'next/image'

export default function GettingStarted() {
    return(
    <div className="bg-white mt-60 py-32 flex flex-col text-center justify-center">
        <div className="text-300 text-3xl font-semibold">
            Getting started is easy
        </div>
        <div className="text-300 mt-4">
            Earn Stars and get rewarded in a few easy steps.
        </div>
        <div className="flex flex-row mt-10 items-center justify-center">
            <div className="items-center justify-between flex flex-col md:flex-row">
                <div className="">
                    <Image
                    src="/menu-1.jpg"
                    alt="Starbucks"
                    width={50}
                    height={50}
                    className="starbucks"
                />
                <div className="text-300 font-semibold text-lg">Create an account</div>
                <div>
                    <span className="text-300">
                        To get started, <a className="underline hover:no-underline text-500 cursor-pointer">join now</a>. You can also <a className="underline hover:no-underline text-500 cursor-pointer">join in
                        <br />
                        the app</a> to get access to the full range of
                        <br />
                        Starbucks® Rewards benefits.
                    </span>
                </div>
                </div>
                <div className="px-14 py-14 md:py-0">
                    <Image
                    src="/menu-2.jpg"
                    alt="Starbucks"
                    width={50}
                    height={50}
                    className="starbucks"
                />
                <div className="text-300 font-semibold text-lg">Order and pay how you’d like</div>
                <div>
                    <span className="text-300">
                        Use cash, credit/debit card or save some
                        <br />
                        time and pay right through the app. You’ll
                        <br />
                        collect Stars all ways. <a className="underline hover:no-underline text-500 cursor-pointer">Learn how</a>
                    </span>
                </div>
                </div>
                <div>
                    <Image
                    src="/menu-3.jpg"
                    alt="Starbucks"
                    width={50}
                    height={50}
                    className="starbucks"
                />
                <div className="text-300 font-semibold text-lg">Earn Stars, get Rewards</div>
                <div>
                    <span className="text-300">
                        As you earn Stars, you can redeem them for
                        <br />
                        Rewards—like free food, drinks, and more.
                        <br />
                        Start redeeming with as little as 25 Stars!
                    </span>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}