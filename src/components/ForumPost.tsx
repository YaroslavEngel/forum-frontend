import type { Post } from '../types/post';

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  const authorName = post.author?.email ?? 'Unknown';

  return (
    <article className="post-card">
      <div className="post-card__meta">
        <span className="post-card__tag">{post.category.name}</span>
        <span className="post-card__id">#{post.id}</span>
      </div>

      <h2 className="post-card__title">{post.title}</h2>
      <p className="post-card__content">{post.content}</p>

      <footer className="post-card__footer">
        <span className="post-card__avatar">
          {authorName.charAt(0).toUpperCase()}
        </span>
        <span className="post-card__author">{authorName}</span>
      </footer>
    </article>
  );
}

export default PostCard;