import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useGlobalContext } from '../context/global';
import { Bookmark } from 'lucide-react';
import {BookContext} from '../context/BookCart'
import { useEffect } from 'react';
//import BookmarkComp from './BookmarkComp'


function Videos() {
    const {videos,getAllVideos} = useGlobalContext();
    const [selectedVideos, setSelectedVideos] = useState({});
    
 

    useEffect(() => {
        getAllVideos();
       

    }, [])

    //context
     const cart =  useContext(BookContext);

//   console.log(bookmarkedVideos)
  //()=> cart.setItem([...cart.items, {videoid:video._id, video:video.videoUrl, title:video.title, description:video.description}], )} color="#fff"   
    const handleBookmarkClick = (video)=>{
       
        cart.setItem([...cart.items, {videoid:video._id, video:video.videoUrl, title:video.title, description:video.description}], )
       console.log("clikc")
       setSelectedVideos((prevSelected) => ({
        ...prevSelected,
        [video._id]: !prevSelected[video._id], // Toggle the selected state for the clicked video
      }));
    }  


  return (
        <Wrapper>
        <input type="text" placeholder='search' />
            <div className="videos-container">
                {videos.map((video) => {
                    return <div  className="video" key={video._id}>
                        <Link key={video._id} to={`/videos/${video._id}`}><video src={video.videoUrl}></video></Link>
                            <h4>{video.title}</h4>
                            <p>{video.description}</p>

                            <div className="bookmarkIcon" onClick={() => handleBookmarkClick(video)} >
                            {selectedVideos[video._id] ? (
                                <Bookmark strokeWidth={0} fill="#fff" />
                              ) : (
                                <Bookmark color="#fff" />
                              )}
                           
                                </div>
                        </div>
                   
                })}
              
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .videos-container{
       
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        grid-gap: 1.5rem;
        padding-top: 3rem;
        transition: all .4s ease;
        opacity: 0;
        animation: fade-in .5s ease-in-out forwards;
        @keyframes fade-in {
            0%{
                opacity: 0;
                transform: scale(0);
            }
            100%{
                opacity: 1;
                transform: scale(1);
            }
        }
        .video{
            border: 1px solid rgba(239, 239, 239, 0.67);
            
            transition: all .4s ease;
            width: 100%;
            cursor: pointer;
            border-radius: 15px;
            video{
                width: 100%;
                height: auto;
                object-fit: cover;
                border-radius: 15px;

            }
            .bookmarkIcon{
                margin-left: 400px;
                margin-bottom: 20px; 
                width: 30px;
                height: 30px;
                cursor: pointer;
                
            }
            h4{
                margin-left: 10px;
                color: #F6F4F3;
                padding: .5rem 0;
                font-size: 1.5rem;
                font-weight: 500;
            }
            p{
                margin-left: 10px;
                margin-bottom: 10px;
                color: #F6F4F3;
                font-size: .9rem;
                line-height: 1.4rem;
            }
        }
    }
`;

export default Videos