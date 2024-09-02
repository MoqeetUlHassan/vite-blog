import React from 'react'
import Form from './Form'
import Table from './Table'
import { useState, useEffect } from 'react';

const Thirdapis = () => {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchItems();
  }, [reqType]);
  return (
    <main>
      <Form reqType={reqType} setReqType={setReqType} />
      {/* <List items={items} /> */}
      <Table items={items} />
    </main>
  )
}

export default Thirdapis