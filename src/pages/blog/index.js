import { BLOGS } from '@/blog'
import Link from 'next/link'

export default function Blog() {
    return (
        <main>
            <h1>Ini adalah halaman Blog</h1>
            <br />
            <hr />
            <ul>
                {BLOGS.map((blog, i) => (
                    <li key={i}>
                        <Link href={`/blog/${i}`} >
                            <h2>{blog.title}</h2>
                            <p>{blog.content}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}

