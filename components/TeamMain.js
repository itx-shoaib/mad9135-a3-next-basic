import React, { useEffect, useContext } from "react";
import { DataContext } from "../context/dataContext";


export default function WorkMain() {

    const { refreshData, data } = useContext(DataContext);

    // Context Object is making the initial fetch call
    useEffect(() => {
        refreshData()
    }, [])

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">"Teamwork begins by building trust. And the only way to do that is to overcome our need for invulnerability." – Patrick Lencioni</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    {data.map((data) => {
                        return <>
                            <div class="p-4 lg:w-1/2">
                                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={`/images/${data.image_filename}`} />
                                    <div class="flex-grow sm:pl-8">
                                        <h2 class="title-font font-medium text-lg text-gray-900">{data.member_name}</h2>
                                        <h3 class="text-gray-500 mb-3">ID: {data.id}</h3>
                                        <p class="mb-4">Phone Number : {data.member_number}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </section>
    );
}
