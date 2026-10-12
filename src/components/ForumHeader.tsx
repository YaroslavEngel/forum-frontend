interface ForumHeaderProps {
  title: string;
  description: string;
}

function ForumHeader({ title, description }: ForumHeaderProps) {
  return (
    <header className="forum-header">
      <div className="forum-header__inner">
        <h1 className="forum-header__title">{title}</h1>
        <p className="forum-header__description">{description}</p>
      </div>
    </header>
  );
}

export default ForumHeader;