import type { Post } from '../types/post';

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <div className="post-card__meta">
        <span className="post-card__tag">{post.category}</span>
        <span className="post-card__id">#{post.id}</span>
      </div>

      <h2 className="post-card__title">{post.title}</h2>
      <p className="post-card__content">{post.content}</p>

      <footer className="post-card__footer">
        <span className="post-card__avatar">{post.author.charAt(0)}</span>
        <span className="post-card__author">{post.author}</span>
      </footer>
    </article>
  );
}

export default PostCard;