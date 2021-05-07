import Image from 'next/image'

export default function Hero() {
    return(
    <div className="w-full h-screen flex">
        <div className="py-5 px-10 mt-64 flex flex-col">
            <div className="text-300 text-4xl font-semibold">
                FREE COFFEE 
                <br />
                IS A TAP AWAY
            </div>
            <div className="text-300 mt-4 font-medium text-xl">
                Join now to start earning Rewards.
            </div>
            <div className="mt-7">
                <button className="bg-400 font-semibold text-white px-4 py-1 rounded-r-full rounded-l-full rounded-t-none rounded-b-none">
                        Join now
                </button>
                <div className="mt-3">
                    <span className="text-300 text-lg font-medium">Or <a className="underline hover:no-underline cursor-pointer">join in the app</a> for the best experience</span>
                </div>
            </div>
        </div>
    </div>
    )
}