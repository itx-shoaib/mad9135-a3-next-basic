import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router'

const id = () => {
    const router = useRouter()
    const { id } = router.query

    const [project, setproject] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await (await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)).data
                setproject(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])
    return (
        <div>
            {/* {project.title} */}
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/images/400x400.jpg" />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">{project.id}</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{project.title}</h1>
                            <p class="leading-relaxed">{project.body}</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default id