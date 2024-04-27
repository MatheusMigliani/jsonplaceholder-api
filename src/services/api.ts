import axios from 'axios';

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const getPosts = async () => {
  try {
    const response = await http.get('posts');
    return response.data;
  } catch (error) {
    // handle error here
    console.error('Error fetching posts:', error);
  }
};
