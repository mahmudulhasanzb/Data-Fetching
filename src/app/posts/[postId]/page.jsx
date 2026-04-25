const PostDetailPage = async ({params}) => {
  const {postId} = await params
  console.log(postId);  
  
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json()
  const expectedPost =  posts.map(post => post.id == postId)
  return (
    <div>
      Here is details
    </div>
  );
};

export default PostDetailPage;