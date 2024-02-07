import React, { forwardRef } from 'react'

const Menu3 = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="flex flex-col justify-center self-stretch pt-9 bg-white rounded-lg shadow-2xl max-w-[604px]">
            <div className="flex gap-5 justify-between ml-8 max-w-full font-medium w-[390px] max-md:ml-2.5">
                <div className="flex flex-col">
                    <div className="text-xs tracking-wide leading-5 uppercase whitespace-nowrap text-slate-500">
                        By stage
                    </div>
                    <div className="flex gap-2.5 justify-between mt-3 text-sm tracking-wide leading-5 text-sky-950">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c2802713bc1c055d615467f80668ffeabd7ca2ce02f1308b3509e0b3bbc78e4?apiKey=1bd4df23f3124635aa0dcd5c84d9279b&"
                            className="self-start w-4 aspect-square"
                        />
                        <div>Startups </div>
                    </div>
                </div>
                <div className="flex gap-2.5 self-end mt-8 text-sm tracking-wide leading-5 text-sky-950">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/856e90a70f57031137755e0c3f84643b205e5094b0838de97c946a6bbe78c9b1?apiKey=1bd4df23f3124635aa0dcd5c84d9279b&"
                        className="self-start w-4 aspect-square"
                    />
                    <div className="grow">Enterprises </div>
                </div>
            </div>
            <div className="mt-6 w-full min-h-[1px] max-md:max-w-full" />
            <div className="flex flex-col self-center mt-5 w-full max-w-[444px] max-md:max-w-full">
                <div className="text-xs font-medium tracking-wide leading-5 uppercase text-slate-500 max-md:max-w-full">
                    By Use Case
                </div>
                <div className="max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-sm font-medium tracking-wide leading-5 text-sky-950 max-md:mt-10">
                                <div className="flex gap-2.5 justify-between text-sm leading-5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/153af6b0ca00f527c8dbfdbac29c85ea485f9bf2f8098ea2578778b2ae7abfb2?apiKey=1bd4df23f3124635aa0dcd5c84d9279b&"
                                        className="my-auto w-4 aspect-square"
                                    />
                                    <div>SaaS </div>
                                </div>
                                <div className="flex gap-2.5 justify-between mt-1.5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e04f6d97a8a0096ecee996110cc4fd5ebd51da55a54a7687955df3b6e50a69c?apiKey=1bd4df23f3124635aa0dcd5c84d9279b&"
                                        className="self-start w-4 aspect-square"
                                    />
                                    <div className="grow">Platforms </div>
                                </div>
                                <div className="flex gap-2.5 justify-between mt-4">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f343e7c3390ac5c3ba6e538d96c5cbeb4d640c7cec74e03f8ce348bbd2e1c2af?apiKey=1bd4df23f3124635aa0dcd5c84d9279b&"
                                        className="self-start w-4 aspect-square"
                                    />
                                    <div className="grow">Ecommerce </div>
                                </div>
                                <div className="flex gap-2.5 justify-between mt-3.5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0a22bae82c92bf3869c83b949c66696946a3c2bd88b408f40f429988680e576?apiKey=1bd4df23f3124635aa0dcd5c84d9279b&"
                                        className="self-start w-4 aspect-square"
                                    />
                                    <div className="grow">Marketplaces </div>
                                </div>
                                <div className="flex gap-2.5 justify-between mt-4">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/45ee58ba688e6866eaa6deafb3523aafadffad687348e603b338ab8a4ae8ed1c?apiKey=1bd4df23f3124635aa0dcd5c84d9279b&"
                                        className="self-start w-4 aspect-square"
                                    />
                                    <div>Crypto </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col mt-2.5 text-sm font-medium tracking-wide leading-5 whitespace-nowrap text-sky-950 max-md:mt-10">
                                <div className="flex gap-2.5 justify-between">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/66de67892f66d3a1396beb0341bc1af93673399691ca85f912b88257e97c0c68?apiKey=1bd4df23f3124635aa0dcd5c84d9279b&"
                                        className="self-start w-4 aspect-square"
                                    />
                                    <div className="grow">Creator Economy </div>
                                </div>
                                <div className="flex gap-2.5 justify-between mt-4">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c145ffabd1aed7c57fc4d4470e5b7e161cd99c146e933ef952ba915317a5f1c9?apiKey=1bd4df23f3124635aa0dcd5c84d9279b&"
                                        className="self-start w-4 aspect-square"
                                    />
                                    <div className="grow">Embedded Finance </div>
                                </div>
                                <div className="flex gap-2.5 justify-between mt-4 leading-[151%]">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41f8abe9330cbc64d76b38d2bd99b3b4dcdfee12cb2f7ee35b918b69fff98531?apiKey=1bd4df23f3124635aa0dcd5c84d9279b&"
                                        className="self-start w-4 aspect-square"
                                    />
                                    <div className="grow">Global Businesses </div>
                                </div>
                                <div className="flex gap-2.5 justify-between mt-4 leading-[149%]">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9bae6bc48da5922d492d45cd0afd9382cd957bef097c1c1945ba94e64f673b1?apiKey=1bd4df23f3124635aa0dcd5c84d9279b&"
                                        className="self-start w-4 aspect-square"
                                    />
                                    <div className="grow">Finance Automation </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-7 pr-20 pl-7 mt-7 w-full rounded bg-slate-100 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow py-0.5 text-sm font-medium tracking-wide text-sky-950 max-md:mt-10">
                            <div className="text-xs tracking-wide leading-5 uppercase whitespace-nowrap text-slate-600">
                                Integrations & Custom Solutions
                            </div>
                            <div className="flex gap-3 py-0.5 pr-20 mt-3 leading-[149%] max-md:pr-5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/761bfb79125242cfb55b9b5078475b8f61c4fde2ab96a669072e7110d6b67aac?apiKey=1bd4df23f3124635aa0dcd5c84d9279b&"
                                    className="w-4 aspect-square"
                                />
                                <div className="flex-auto">App Marketplace </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/07e9e027ad9db8cab47f0db603999031154d4fad358aaff489ac1ddd8626157a?apiKey=1bd4df23f3124635aa0dcd5c84d9279b&"
                                    className="my-auto w-2.5 aspect-square"
                                />
                            </div>
                            <div className="flex gap-2.5 justify-between mt-4 leading-[150%]">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/688cf58cba78c2a248b4463b8b2b7a2c761b8bb9ace836b78db8706071cb302a?apiKey=1bd4df23f3124635aa0dcd5c84d9279b&"
                                    className="self-start w-4 aspect-square"
                                />
                                <div className="flex-auto">Professional Services </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                        <div className="flex gap-2.5 self-stretch my-auto text-sm font-medium tracking-wide leading-5 whitespace-nowrap text-sky-950 max-md:mt-10">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/19fe3b5c0caaf064025378006a743c182f2b35599b1143fee10a5704f62ad323?apiKey=1bd4df23f3124635aa0dcd5c84d9279b&"
                                className="self-start w-4 aspect-square"
                            />
                            <div className="grow">Partner Ecosystem </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Menu3