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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ]);
  const handlePost = (value) => {
    setPosts(value);
  }

  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState([]);
  const [postBody, setPostBody] = useState([]);

  useEffect(() => {
    const filteredResults = posts.filter(post => 
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  },[posts,search])

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
            posts= {posts}
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
