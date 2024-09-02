import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'

import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Thirdapis from './Thirdapis'
import Missing from './Missing'
import Posts from './Posts'
import Users from './Users'
import Comments from './Comments'
import api from './api/posts'

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const handlePost = (value) => {
    setPosts(value);
  }

  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState([]);
  const [postBody, setPostBody] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        if (response && response.data) {
          setPosts(response.data);
        }
      }
      catch (err) {
        if (err.response) { console.log(err); }  
      else {  console.log(`Error: ${err.message}`);}
    }
  }
  fetchPosts();
  }, [])

useEffect(() => {
  const filteredResults = posts.filter(post =>
    ((post.body).toLowerCase()).includes(search.toLowerCase())
    || ((post.title).toLowerCase()).includes(search.toLowerCase())
  );
  setSearchResults(filteredResults.reverse());
}, [posts, search])

return (

  <Router>
    <div className="App">
      <Header title='React JS blogs' />
      <Nav search={search} setSearch={setSearch} />


      <Routes>
        <Route path="/" element={<Home posts={searchResults} />} />
        <Route path="/post" element={<NewPost
          postTitle={postTitle}
          postBody={postBody}
          posts={posts}
          setPostTitle={setPostTitle}
          setPostBody={setPostBody}
          setPosts={setPosts}
        />} />
        <Route path="/post/:id" element={<PostPage posts={posts} handlePost={handlePost} />} />
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
