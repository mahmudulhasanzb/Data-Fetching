import Link from 'next/link';

const PostsPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return (
    <div className="max-w-5xl mx-auto md:p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">All Posts</h1>
      <p className="text-sm text-gray-400 mb-8">
        Here are all the posts available.
      </p>

      <div className="grid gap-5">
        {posts.slice(0, 10).map(post => (
          
          <Link key={post.id} href={`/posts/${post.id}`}>
            <div className="bg-white rounded-xl border border-gray-200 p-5 grid ">
              <span className="text-xs font-semibold text-purple-500 uppercase tracking-wide">
                Post #{post.id}
              </span>
              <h2 className="font-semibold text-gray-800 mt-1 capitalize">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {post.body}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
