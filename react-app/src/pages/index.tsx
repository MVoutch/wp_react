import { useEffect, useState } from 'react';
import {getPosts} from "@/utils/wordpressApi";

interface Post {
    id: number;
    title: {
        rendered: string;
    };
}

export default function Home() {
    const [posts, setPosts] = useState<Post[]>([]); // Use the Post type for state

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getPosts();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>WordPress Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <a href={`/post/${post.id}`}>{post.title.rendered}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}