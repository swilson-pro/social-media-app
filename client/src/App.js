import './App.css';
import { useState, useEffect, useRef } from 'react'
import store from './store'
import {connect} from 'react-redux'


function App() {
  const [posts, setPosts] = useState([])


  useEffect(() => {
    const getPosts = async () => {
      try { // attempt this code block
        let req = await fetch('http://localhost:3100/posts')
        let res = await req.json()
        if (req.ok) {
          console.log('User', res)
          setPosts(res)
        } else {
          alert('Posts could not be loaded')
        }
      } catch(error) { // run this code block if the above block fails
        alert(error.message)
      }
    }
    getPosts()
  }, [])



  
  const addValue = () => store.dispatch({type: 'counter/incremented'})
  const reduceValue = () => store.dispatch({type: 'counter/decremented'})


  return (
    <div className="App">

      <h2>News Feed</h2>
      {
        posts.map((post) => {
          return(
            <div key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
            </div>
          )
        })
      }
      <hr />
      

      <hr />
      <h4>Global count is: {store.getState().value}</h4>
      <button onClick={addValue}>ADD VALUE</button>
      <button onClick={reduceValue}>REMOVE VALUE</button>
    </div>
  );
}
const mapStateToProps = state => {
  return {value: state.value}
}
export default connect(mapStateToProps)(App)
