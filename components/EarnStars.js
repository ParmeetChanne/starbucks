import Image from 'next/image'

export default function EarnStars() {
    return(
    <div className="bg-800 py-12">
        <div className="text-300 text-3xl font-semibold text-center">
            Cash or card, you earn Stars
        </div>
         <div className="text-300 mt-4 text-center">
            No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to 
            <br />
            (really delicious) Rewards.
        </div>
        
        {/* 1 dollar 2 dollar 3 dollar */}
        <div className="flex flex-col pl-14 pt-24">

            {/* 1 dollar */}
            <div className="flex flex-col md:flex-row pb-6">
                <div className=""> 
                    <div className="text-300 text-2xl font-semibold">1★ per dollar</div>
                    <div className="text-300">Pay as you go</div>
                </div>

                <div className="flex flex-row pl-28">
                        <Image
                        src="/1A.png"
                        alt="1A"
                        width={115}
                        height={100}
                        className="starbucks"
                        />
                </div>
                <div className="pl-4 flex flex-col">
                    <div className="text-300 text-xl font-semibold">
                        Scan and pay separately
                    </div>
                    <div className="text-300 pt-3">
                        Use cash or credit/debit card at the 
                        <br />
                        register.
                    </div>
                </div>

                <div className="flex flex-row pl-16">
                        <Image
                        src="/1B.png"
                        alt="1B"
                        width={115}
                        height={100}
                        className="starbucks"
                        />
                </div>
                <div className="pl-4">
                    <div className="text-300 text-xl font-semibold">
                        Save payment in the app
                    </div>
                    <div className="text-300 pt-3">
                        Check-out faster by saving a
                        <br />
                        credit/debit card or PayPal to your
                        <br />
                        account. You’ll be able to order
                        <br />
                        ahead or scan and pay at the register
                        <br />
                        in one step.
                    </div>
                </div>
            </div>

            <hr className="pb-12"></hr>

            {/* 2 dollars */}
            <div className="flex flex-col md:flex-row pb-6">
                <div className=""> 
                    <div className="text-300 text-2xl font-semibold">2★ per dollar</div>
                    <div className="text-300">Add funds in the app</div>
                </div>

                <div className="flex flex-row pl-28">
                        <Image
                        src="/2A.png"
                        alt="2A"
                        width={115}
                        height={100}
                        className="starbucks"
                        />
                </div>
                <div className="pl-4 flex flex-col">
                    <div className="text-300 text-xl font-semibold">
                        Preload
                    </div>
                    <div className="text-300 pt-3">
                        To save time and earn Stars twice as
                        <br />
                        fast, add money to your digital
                        <br />
                        Starbucks Card using any payment
                        <br />
                        option. Scan and pay in one step or
                        <br />
                        order ahead in the app.
                    </div>
                </div>

                <div className="flex flex-row pl-16">
                        <Image
                        src="/2B.png"
                        alt="2B"
                        width={115}
                        height={100}
                        className="starbucks"
                        />
                </div>
                <div className="pl-4">
                    <div className="text-300 text-xl font-semibold">
                        Register your gift card
                    </div>
                    <div className="text-300 pt-3">
                        Then use it to pay through the app.
                        <br />
                        You can even consolidate balances
                        <br />
                        from multiple cards in one place.
                    </div>
                </div>
            </div>

            <hr className="pb-12"></hr>

            {/* 3 dollars */ }
            <div className="flex flex-col md:flex-row">
                <div className=""> 
                    <div className="text-300 text-2xl font-semibold">Up to 3★ per dollar</div>
                    <div className="text-300">With Starbucks® Rewards <br /> Visa® Card</div>
                </div>

                <div className="flex flex-row pl-12">
                        <Image
                        src="/3A.png"
                        alt="3A"
                        width={115}
                        height={100}
                        className="starbucks"
                        />
                </div>
                <div className="pl-4 flex flex-col">
                    <div className="text-300 text-xl font-semibold">
                        Earn Stars even faster
                    </div>
                    <div className="text-300 pt-3">
                        Earn Stars on all purchases you make
                        <br />
                        with our <a className="underline hover:no-underline text-500 cursor-pointer">credit card</a> in and
                        <br />
                        outside of Starbucks. Earn 1 Star per
                        <br />
                        $1 when you digitally preload your
                        <br />
                        Starbucks Card with your Starbucks®
                        <br />
                        Rewards Visa® Card, and earn 2 Stars
                        <br />
                        per $1 when you pay with that
                        <br />
                        preloaded Starbucks Card.
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}