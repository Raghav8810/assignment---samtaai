import { useContext } from 'react'
import {BookContext} from '../context/BookCart'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

// <div className="bookmarkIcon">
//                        <Bookmark onClick={()=> cart.setItem([...cart.items, {video: video.videoUrl, title:video.title, description:video.description}])} />
//                    </div>

const Bookmark = () => {
  const list = useContext(BookContext);
  console.log(list);

  return (
   <>
   <Wrapper>
  
   <div className="videos-container">
     
       {list && 
        list.items.map((item) => {
           return <div className="video" key={item}>
           <Link key={item._id} to={`/videos/${item._id}`}> <video src={item.video}></video> </Link>
           
           <h4>{item.title}</h4>
           <p>{item.description}</p> 
           </div>
       
       })}


     
   </div>
</Wrapper>
   </>
  )
};



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

export default Bookmark


