import React, { forwardRef } from 'react'

const Menu1 = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="flex flex-col pt-8 bg-white max-w-[604px]">
            <div className="flex flex-col px-10 w-full max-md:px-5 max-md:max-w-full">
                <div className="flex gap-2.5 self-start text-sm tracking-wide text-sky-950">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d73faf3f03c1491d255b8f67c2f4bcdb8319a0b0d81ee6ffd0bf6d5e32ea7c3?apiKey=1bd4df23f3124635aa0dcd5c84d9279b&"
                        className="self-start w-4 aspect-square"
                    />
                    <div className="flex flex-col flex-1 pr-2.5">
                        <div className="font-medium leading-[147%]">Documentation </div>
                        <div className="font-light whitespace-nowrap leading-[143%]">
                            Start integrating Stripe’s products and tools
                        </div>
                    </div>
                </div>
                <div className="mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-sm font-light tracking-wide leading-5 text-sky-950 max-md:mt-1">
                                <div className="text-sm font-medium tracking-wide leading-5 uppercase text-slate-500">
                                    Get started
                                </div>
                                <div className="mt-3.5">Prebuilt checkout </div>
                                <div className="mt-2">Libraries and SDKs </div>
                                <div className="mt-2">Plugins </div>
                                <div className="mt-2">Code samples </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-sm font-light tracking-wide leading-5 text-sky-950 max-md:mt-1">
                                <div className="text-xs font-medium tracking-wide leading-5 uppercase text-slate-500">
                                    Guides
                                </div>
                                <div className="mt-3.5">Accept online payments </div>
                                <div className="mt-2">Manage subscriptions </div>
                                <div className="mt-2">Send payments </div>
                                <div className="mt-2">Set up in-person payments </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center p-7 mt-7 w-full text-sm font-medium tracking-wide rounded bg-slate-100 text-sky-950 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col flex-1 py-0.5">
                        <div className="flex gap-2.5 justify-between leading-[151%]">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/43ec4df6990773df494daa40446a40fadd242ae76d4502d356e2c51e33bf96b8?apiKey=1bd4df23f3124635aa0dcd5c84d9279b&"
                                className="self-start w-4 aspect-square"
                            />
                            <div className="flex-auto">Full API Reference </div>
                        </div>
                        <div className="flex gap-2.5 justify-between mt-4 leading-[150%]">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/670659ca3b321b95cc21905ad9caa5da32452570df65dade851f9a285704b6a2?apiKey=1bd4df23f3124635aa0dcd5c84d9279b&"
                                className="self-start w-4 aspect-square"
                            />
                            <div className="flex-auto">API Status </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 py-0.5">
                        <div className="flex gap-2.5 justify-between leading-[149%]">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bca8ec0702ab09664f0abdf435522ea7ef5a36a35bb9351f7cd5bb46f6142c6c?apiKey=1bd4df23f3124635aa0dcd5c84d9279b&"
                                className="self-start w-4 aspect-square"
                            />
                            <div className="flex-auto">API Changelog </div>
                        </div>
                        <div className="flex gap-2.5 justify-between mt-4 leading-[151%]">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a36435ebc8291de1f0ae1ca67892dbc255cbb12eb55539cabea1a178244599b?apiKey=1bd4df23f3124635aa0dcd5c84d9279b&"
                                className="self-start w-4 aspect-square"
                            />
                            <div className="flex-auto">Build a Stripe App </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Menu1