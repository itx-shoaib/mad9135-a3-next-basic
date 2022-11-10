import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from 'next/link'

export default function WorkMain() {
    const [project, setproject] = useState([])

    // Data is fetching from external API (jasonnplaceholder)
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await (await axios.get('https://jsonplaceholder.typicode.com/posts')).data
                setproject(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    {project && project.map((work) => {
                        return <>
                            <div class="p-4 lg:w-1/3">
                                <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{work.id}</h2>
                                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{work.title}</h1>
                                    <a class="text-indigo-500 inline-flex items-center"> <Link href={`/detail/${work.id}`}>More Details</Link>
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </section>
    );
}
