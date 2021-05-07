export default function Favourites() {
    return(
    <div className="bg-700 pt-12">
        <div className="text-300 text-3xl font-semibold text-center pb-16">
            Get your favorites for free
        </div>
        <div className="flex flex-row justify-center pb-6">
            <a className="pr-20 cursor-pointer">
                <span className="text-300 text-3xl font-semibold underline">25</span>
                <span className="text-600 text-base">★</span>
            </a> 
            <a className="pr-20 cursor-pointer">
                <span className="text-300 text-3xl font-semibold">50</span>
                <span className="text-600 text-base">★</span>
            </a> 
            <a className="pr-20 cursor-pointer">
                <span className="text-300 text-3xl font-semibold">150</span>
                <span className="text-600 text-base">★</span>
            </a> 
            <a className="pr-20 cursor-pointer">
                <span className="text-300 text-3xl font-semibold">200</span>
                <span className="text-600 text-base">★</span>
            </a> 
            <a className="cursor-pointer">
                <span className="text-300 text-3xl font-semibold">400</span>
                <span className="text-600 text-base">★</span>
            </a> 
        </div>
    </div>
    )
}