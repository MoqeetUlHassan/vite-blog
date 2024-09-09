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

import { DataProvider } from './context/DataContext'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (

    <Router>
      <div className="App">
        <Header title='React JS blogs' />
        <DataProvider>
          <Nav /> 
          <Routes>
            <Route path="/" Component={Home} />
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
        </DataProvider>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
