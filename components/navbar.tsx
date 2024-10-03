'use client'
import Link from "next/link"
import { useState } from "react"
import styles from "../app/page.module.css"
import { usePathname } from "next/navigation"

export default function Navbar()
{
    const pathName = usePathname()

    return (
        <nav className={`navbar navbar-expand-lg ${styles.mynav}`} data-bs-theme="dark">
            <div className="container-xl">
                <Link href={'/'} className="navbar-brand" >My App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${pathName === '/'?'active':''} ${styles['nav-button']} `} href={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${pathName === '/blog'?'active':''} ${styles['nav-button']} `} href={'/blog'}>Blog</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}