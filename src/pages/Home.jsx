import React, { useEffect, useState } from 'react'
import service from '../appwrite/config' // Importing Appwrite Services
import { Container, PostCard } from '../components/index'

function Home() {
    //
    const [post, setPost] = useState([])

    // useEffect
    useEffect(() => {
        service.getPost().then((postss) => {
            if (postss) {
                setPost(postss.documents)
            }
        })
    }, [])

    // return
    if (post.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className="w-full py-8">
            <Container>
            <div className='flex flex-wrap'>
                    {post?.map((items) => (
                        <div key={items.$id} className='p-2 w-1/4'>
                            <PostCard {...items} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
