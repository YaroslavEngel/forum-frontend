import type { Post } from '../types/post';
import PostCard from './ForumPost';

interface PostListProps {
  posts: Post[];
}

function PostList({ posts }: PostListProps) {
  return (
    <section className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}

export default PostList;