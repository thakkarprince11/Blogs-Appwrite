import React from 'react'
import LogoutBtn from './LogoutBtn'
import Logo from '../Logo'
import Container from '../Container/Container'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
    // const authStatus = useSelector((state) => state.auth.status)
    const authStatus = useSelector((state) => state.auth.status)

    const naviagte = useNavigate()

    //Naviagtion bar
    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            active: authStatus
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus
        }
    ]

    return (
        <header className="py-3 shadow bg-gray-500">
            <Container>
                <nav className="flex">
                    <div className="mr-4">
                        <Link to="/">
                            <Logo width="70px" />
                        </Link>
                    </div>
                    <ul className="flex ml-auto">
                        {navItems?.map((items, index) =>
                            items.active ? (
                                <li key={index}>
                                    <button
                                        onClick={() => naviagte(items.slug)}
                                        className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                                    >
                                        {items.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {/* If logged in then display logout button */}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header
