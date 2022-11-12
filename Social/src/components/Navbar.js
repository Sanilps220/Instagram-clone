import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {UserContext} from '../App'

function Navbar(){
  const {state, dispatch} = useContext(UserContext);
  
  const history = useNavigate() 
  const renderList = () =>{
    if(state){
      return [
        <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/create">Create Post</Link></li>,
        <li>
          <button className='btn #c62828 red darken-3'
          onClick={()=>{
            localStorage.clear()
            dispatch({type:"CLEAR"})
            history('signin')
          }}   
          >
          Logout
          </button>
        </li>
      ]
    }else{
      return[
        <li><Link to="/signin">Sign in</Link></li>,
        <li><Link to='/signup'>Sign up</Link> </li>
      ]
    }
  }

  return (
    <nav>
    <div className="nav-wrapper  a" 
      style={{color:'black'}}
      >
      <Link to="/" 
      className="brand-logo left">
        Instagram
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">       

      {renderList()}

      </ul>
    </div>
  </nav>
  )
}

export default Navbar