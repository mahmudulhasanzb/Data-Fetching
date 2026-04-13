import Image from 'next/image';

export default async function Home() {
  const data = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5',
  );
  const posts = await data.json();
  console.log(posts);
  return (
    <div className='space-y-2'>
      <h1 className='text-2xl font-bold text-gray-700'>Data Fetching</h1>
      {posts.map(post => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
    </div>
  );
}
