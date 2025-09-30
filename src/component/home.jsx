export function Home(){
    return (
        <>
            {/* <!-- Hero Option 2: Tech Store --> */}
        <div className="hero-demo vh-100" style={{
            border: "2px solid #e5e7eb",
            borderRadius: "8px",
            overflow: "hidden",
            height: "665px"
        }} >
            <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28  gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Technology to power</span>
                            <span className="block text-blue-500 xl:inline">your digital life</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            From cutting-edge smartphones to powerful laptops, discover the latest in technology. We bring you premium devices that enhance productivity and entertainment.
                        </p>
                        {/* <!-- Button Section --> */}
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <a  className="pointer-events-none w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                                    Explore Tech
                                </a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a  className="pointer-events-none w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                                    Compare Products
                                </a>
                            </div>
                        </div>
                        {/* <!-- End of Button Section --> */}
                    </div>

                    {/* <!--   Image Section     --> */}
                    <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 ">
                        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-8 text-center">
                                <div className="bg-white p-6 rounded-xl shadow-lg floating-animation">
                                    <div className="text-4xl mb-2">📱</div>
                                    <div className="text-sm font-semibold text-gray-700">Smartphones</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-lg floating-animation"  style={{ animationDelay: "0.5s" }}>
                                    <div className="text-4xl mb-2">💻</div>
                                    <div className="text-sm font-semibold text-gray-700">Laptops</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-lg floating-animation"  style={{ animationDelay: "1s" }}>
                                    <div className="text-4xl mb-2">🎧</div>
                                    <div className="text-sm font-semibold text-gray-700">Audio</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-lg floating-animation"  style={{ animationDelay: "1.5s" }}>
                                    <div className="text-4xl mb-2">⌚</div>
                                    <div className="text-sm font-semibold text-gray-700">Wearables</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--   End of Image Section     --> */}
                </div>
            </section>
        </div>
        </>
    )
}