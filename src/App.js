import { Route, Routes } from 'react-router-dom';

import UsersPage from './pages/usersPage';
import Header from './components/header/header';
import PostsPage from './pages/postsPage';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/posts/:id" element={<PostsPage />} />
      </Routes>
    </>
  );
}

export default App;
