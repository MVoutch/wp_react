import axios from 'axios';

const API_BASE = 'http://localhost:8000/wp-json';

interface Post {
    id: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    date: string;
}

export const getPosts = async (): Promise<Post[]> => {
    const response = await axios.get(`${API_BASE}/wp/v2/posts`);
    return response.data;
};

export const getPostById = async (id: number): Promise<Post> => {
    const response = await axios.get(`${API_BASE}/wp/v2/posts/${id}`);
    return response.data;
};
