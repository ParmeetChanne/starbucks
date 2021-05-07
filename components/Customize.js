import Image from 'next/image'

export default function Customize() {
    return(
    <div className="bg-100">
        <div className="flex flex-row justify-center pb-8">
            <Image
                        src="/coffee.png"
                        alt="Coffee"
                        width={400}
                        height={50}
                        className="coffee"
                    />
            <div className="items-end pl-12 py-20">
            <div className="text-300 text-2xl font-semibold">
                Customize your drink
            </div>
            <div className="text-300 pt-4">
                Make your drink just right with an extra 
                <br />
                espresso shot, dairy substitute or a dash of 
                <br />
                your favorite syrup.
            </div>
            </div>
        </div>
    </div>
    )
}