import styled from 'styled-components';
import Videos from './Components/Videos'

import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import VideoPlayer from './Components/VideoPlayer';
import { useState } from 'react';
import Upload from './Components/Upload';
import Button from './Components/Button';
import Bookmark from './Components/BookmarkComp';


function App() {
  const [modal, setModal] = useState(false)

  return (
    <BrowserRouter>
      <MainStyle className="App">
        <div className="upload">
        <Link to={'/bookmark'} ><button className='bookmarkBtn'>See your bookmark</button></Link>
          <Button 
            name="Upload"
            icon={<i className="fas fa-plus"></i>}
            onClick={() => {setModal(true);}}
            bg={"#FBFBFB"}
          />
        </div>
        {modal && <Upload />}
        <h1>Video Library</h1>
        <Routes>
          <Route exact path='/' element={<Videos/>} />
          <Route exact path='/bookmark' element={<Bookmark/>} />

          <Route path='/videos/:id' element={<VideoPlayer />} />
        </Routes>
        {modal && <div className="overlay" onClick={() => setModal(false)}></div>}
      </MainStyle>
    </BrowserRouter>
  );
}

const MainStyle = styled.div`
  padding: 3rem 18rem;
  h1{
    color: #fff;
    font-size: 3rem;
    background: rgb(19,200,198);
     background: linear-gradient(45deg, rgba(19,200,198,1) 0%, rgba(32,168,142,1) 0%, rgba(121,9,56,1) 63%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  .bookmarkBtn{
    margin-top: 10px;
    margin-right: 20px;
    padding: 3px 20px;
    outline: none;
    border: none;
    color: white;
    border-radius: 30px;
    background-color:rgba(0,0,0,0.5);
    cursor: pointer;
  }
  .upload{
    display: flex;
    justify-content: flex-end;
  }
`;

export default App;
