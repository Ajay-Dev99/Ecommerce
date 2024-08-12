import React from 'react'
import { Navbar, Container, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import {useSelector ,useDispatch} from 'react-redux'
import { setUserDetails } from '../redux/setUser';


function Header() {

  const userData = useSelector((state)=>state.user.value)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const logOut = ()=>{
    localStorage.removeItem("JWT")
    dispatch(setUserDetails(null))
    navigate("/login")
  }
  return (
    <Navbar className="bg-success">
      <Container>
        <Navbar.Brand href="/" className='text-white'>E-commerce</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <IoCartOutline className='text-white me-1 fs-4 cursor-pointer' />
          <Dropdown>
            <Dropdown.Toggle variant='dark'>
              Signed in : {userData&& userData.name}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item className='item'><p className='text-decoration-none text-dark' onClick={logOut}>Logout</p></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
