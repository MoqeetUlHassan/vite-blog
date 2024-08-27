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

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route , useNavigate } from 'react-router-dom';

function App() {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([{ 
    id:1,
    title:"1 post",
    datetime:"july 10",
    body:"smafkdl;mask fcasf dfsad"
  },
{ id:2,
  title:"2 post",
  datetime:"july 11",
  body:"smafkdl;mask  21431 31 fdsagf rah graew ghfcasf dfsad"
}
]);

  const [searchResults, setSearchResults] = useState([]);
  // const navigate = useNavigate();
  const handleDelete =(id) =>{
    const postsList = posts.filter(post => post.id !== id)
    setPosts(postsList);
    // navigate('/');

  }


  return (
    <Router>
      <div className="App">
        <Header title='React JS blogs'/>
        <Nav search={search} setSearch={setSearch} />
      

        <Routes>
          <Route path="/" element={<Home posts={posts}/>} />
          <Route path="/post" element={<NewPost />} />
          <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
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
