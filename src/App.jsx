import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'

import Home from './Home'
import NewPost from './pages/posts/NewPost'
import PostPage from './pages/posts/PostPage'
import About from './pages/About'
import EditPost from './pages/posts/EditPost'
import Thirdapis from './utils/Thirdapis'
import Missing from './pages/Missing'
import Posts from './pages/posts/Posts'
import Users from './pages/Users'
import Comments from './pages/Comments'
import useAxiosFetch from './hooks/useAxiosFetch'
import { useEffect } from 'react'
import { useStoreActions } from 'easy-peasy'
import { BrowserRouter as Router, Routes, Route, useActionData } from 'react-router-dom';

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (

    <Router>
      <div className="App">
        <Header title='React JS blogs' />
        <Nav />
        <Routes>
        <Route 
          path="/" 
          element={<Home isLoading={isLoading} fetchError={fetchError} />} 
        />
          <Route path="/post" Component={NewPost} />
          <Route path="/edit/:id" Component={EditPost} />
          <Route path="/post/:id" Component={PostPage} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/about" element={<About />} />
          <Route path="/thirdapis" element={<Thirdapis />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
