import React, { useEffect, useState } from 'react'
import service from '../appwrite/config' // Import Appwrite Service
import { Container, PostCard } from '../components/index'

function AllPosts() {
    const [post, setPost] = useState([])

    // useEffect
    useEffect(() => {
        service.getPost([]).then((res) => setPost(res))
    }, [])

    // return
    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {post?.map((items, index) => {
                        return (
                            <div key={index} className="p-2 w-1/4">
                                <PostCard post={items} />
                            </div>
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
