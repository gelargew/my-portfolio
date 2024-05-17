import { useRouter } from 'next/router'
import { BLOGS } from './index'

export default function Blog() {
    const router = useRouter()
    const idx = router.query.idx
    const blog = BLOGS[idx]
    return (
        <main>
            <h1>{blog?.title}</h1>
            <p>{blog?.content}</p>
        </main>
    )
}
