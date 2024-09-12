import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'

import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import EditPost from './EditPost'
import Thirdapis from './Thirdapis'
import Missing from './Missing'
import Posts from './Posts'
import Users from './Users'
import Comments from './Comments'
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
  console.log("S");
  return (

    <Router>
      <div className="App">
        <Header title='React JS blogs' />
         <Nav /> 
        <Routes>
          <Route path="/" element={<Home
              isLoading={isLoading}
              fetchError={fetchError}
            />} />
            
          
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
