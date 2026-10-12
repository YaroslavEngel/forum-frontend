import ForumHeader from './components/ForumHeader';
import PostList from './components/ForumList';
import { posts } from './data/posts';
import './App.css';

function App() {
  return (
    <div className="app">
      <ForumHeader
        title="Forum"
        description="Розумні думки Ярослава"
      />

      <main className="app__main">
        <PostList posts={posts} />
      </main>
    </div>
  );
}

export default App;