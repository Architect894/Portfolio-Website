import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import styles from '../styles/styles.module.css';

export default function ContactUs() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-base/7 font-semibold text-indigo-400">Stay in the loop</h2>
                <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Communication has never been easier.
                </p>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                    {/* Card 1 */}
                    <div className="flex p-px lg:col-span-4">
                        <div className="overflow-hidden rounded-lg bg-white ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
                            <img
                                className="h-80 object-cover object-left"
                                src="/UTPC2.png"
                                alt="Releases"
                            />
                            <div className="p-10">
                                <h3 className="text-sm/4 font-semibold text-black">Contact</h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-black">Get Reminded</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-black">
                                    With every pest control appointment, we will send you reminders on when your property 
                                    needs service!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex p-px lg:col-span-2">
                        <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-tr-[2rem]">
                            <img
                                className="h-80 object-cover"
                                src="https://tailwindui.com/plus/img/component-images/bento-02-integrations.png"
                                alt="Integrations"
                            />
                            <div className="p-10">
                                <h3 className="text-sm/4 font-semibold text-gray-400">Versatility</h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                                    Your service, Your way
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                                    We will send you reminder messages in whichever contact method you prefer.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex p-px lg:col-span-2">
                        <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-bl-[2rem]">
                            <img
                                className="h-80 object-cover"
                                src="https://tailwindui.com/plus/img/component-images/bento-02-security.png"
                                alt="Security"
                            />
                            <div className="p-10">
                                <h3 className="text-sm/4 font-semibold text-gray-400">Hospitality</h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                                    Peace of Mind
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex p-px lg:col-span-4">
                        <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                            <img
                                className="h-80 object-cover object-left"
                                src="https://tailwindui.com/plus/img/component-images/bento-02-performance.png"
                                alt="Performance"
                            />
                            <div className="p-10">
                                <h3 className="text-sm/4 font-semibold text-gray-400">Performance</h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                                    Lightning-fast builds
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                                    Sed congue eros non finibus molestie. Vestibulum euismod augue vel commodo vulputate. Maecenas at augue sed elit dictum vulputate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
