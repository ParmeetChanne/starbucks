export default function Favourites() {
    return(
    <div className="bg-700 pt-12">
        <div className="text-300 text-3xl font-semibold text-center pb-16">
            Get your favorites for free
        </div>
        <div className="flex flex-row justify-center">
            <a className="cursor-pointer">
                <div className="border-b-4 border-200 px-8 pb-4">
                    <span className="text-300 text-3xl font-semibold">25</span>
                    <span className="text-600 text-base">★</span>
                </div>
            </a> 
            <a className="cursor-pointer">
                <div className="active:border-b-4 border-200 px-8 pb-4">
                    <span className="text-300 text-3xl font-semibold">50</span>
                    <span className="text-600 text-base">★</span>
                </div>
            </a>
            <a className="cursor-pointer">
                <div className="active:border-b-4 border-200 px-8 pb-4">
                    <span className="text-300 text-3xl font-semibold">150</span>
                    <span className="text-600 text-base">★</span>
                </div>
            </a>
            <a className="cursor-pointer">
                <div className="active:border-b-4 border-200 px-8 pb-4">
                    <span className="text-300 text-3xl font-semibold">200</span>
                    <span className="text-600 text-base">★</span>
                </div>
            </a>
            <a className="cursor-pointer">
                <div className="active:border-b-4 border-200 px-8 pb-4">
                    <span className="text-300 text-3xl font-semibold">400</span>
                    <span className="text-600 text-base">★</span>
                </div>
            </a>
        </div>
    </div>
    )
}