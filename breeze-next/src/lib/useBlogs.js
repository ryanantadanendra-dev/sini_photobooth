import axios from './axios'

export async function getBlogs() {
    const res = await axios.get('/api/dashboard/blogs')

    return {
        blogs: res.data,
    }
}
