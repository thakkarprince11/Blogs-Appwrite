import { useEffect, useState } from 'react'
import React from 'react'
import { Container, PostForm } from '../components/index'
import service from '../appwrite/config' // Importing Appwrite Service
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    //
    const [post, setPost] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    // useEffect
    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    // return
    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost
