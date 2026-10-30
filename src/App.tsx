import ForumHeader from './components/ForumHeader';
import PostList from './components/ForumList';
import { useGetPostsQuery } from './api/baseApi';
import './App.css';

function App() {
  const { data: posts, isLoading, isError } = useGetPostsQuery();

  let content;

  if (isLoading) {
    content = <p className="status">Завантаження постів...</p>;
  } else if (isError) {
    content = (
      <p className="status status--error">
        Не вдалося завантажити пости. Перевірте, чи запущено backend.
      </p>
    );
  } else if (!posts || posts.length === 0) {
    content = <p className="status">Постів поки немає.</p>;
  } else {
    content = <PostList posts={posts} />;
  }

  return (
    <div className="app">
      <ForumHeader
        title="Forum"
        description="Розумні думки Ярослава"
      />

      <main className="app__main">{content}</main>
    </div>
  );
}

export default App;