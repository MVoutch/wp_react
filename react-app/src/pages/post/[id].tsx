import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getPostById } from '@/utils/wordpressApi';

interface Post {
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
}

export default function PostDetails() {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        if (!id) return;
        const fetchPost = async () => {
            const data = await getPostById(id as number);
            setPost(data);
        };
        fetchPost();
    }, [id]);

    if (!post) return <p>Loading...</p>;

    return (
        <div>
            <h1>{post.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
    );
}
