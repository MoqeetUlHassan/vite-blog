
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'

import Form from './Form'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import Posts from './Posts'
import Users from './Users'
import List from './List'
import Table from './Table'
import Comments from './Comments'

// import { Route, Routes, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);
  const API_URL ='https://jsonplaceholder.typicode.com/';

  useEffect(()=>{

    const fetchItems = async () =>{
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
      }
      catch(err){
        console.log(err);
      }
    }

    fetchItems();

  },[reqType])

  return (
    <div className="App">
      <Header />
      <Nav />
      <Form reqType={reqType} setReqType={setReqType}/>
      {/* <List
       items={items}
      /> */}
      <Table items={items}/>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/post" element={<NewPost />} />
          <Route path="/posts" element={<Posts />} />

          <Route path="/users" element={<Users />} />
          
          <Route path="/comments" element={<Comments />} />

          <Route path="/post/:id" element={<PostPage />} />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<Missing />} />

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App
