import React , {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Blogdata from '../assets/blog.json';
import blogimage from '../assets/feature-image-unique-project-ideas.jpg';
import aniimage from '../assets/aniimage.jpg';
import funimage from '../assets/funny image.jpg';
import "bootstrap/dist/js/bootstrap.bundle.js"


const Blog = () => {
  const [posts] = useState(Blogdata);
  const location = useLocation();
  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  const postsLimit = 4; 
  return (
    <div className="blog">
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <Link className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`} to="/blog">All</Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link className={`nav-link ${location.pathname === '/full-stack' ? 'active' : ''}`} to="/full-stack">FULL STACK DEVELOPMENT</Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link className={`nav-link ${location.pathname === '/cyber-security' ? 'active' : ''}`} to="/cyber-security">CYBER SECURITY</Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link className={`nav-link ${location.pathname === '/data-science' ? 'active' : ''}`} to="/data-science">DATA SCIENCE</Link>
        </li>
      </ul>

      <div className="tab-content" id="pills-tabContent">
        <div className={`tab-pane fade ${location.pathname === '/blog' ? 'show active' : ''}`} id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex="0">
          {/* Static content for "All" tab */}
    
          {posts.slice(0, postsLimit).map(post => (
               <Card key={post.id} style={{ width: '16rem' }}>
                
               <Card.Body>
               <Card.Img variant="top" src={blogimage} />
                 <Card.Title> {truncateDescription(post.title, 25)}</Card.Title>
         
                 <Card.Text>
                 {truncateDescription(post.body, 200)}
                 </Card.Text>
                    
               </Card.Body>
             </Card>
          ))}
        </div>
        <div className={`tab-pane fade ${location.pathname === '/full-stack' ? 'show active' : ''}`} id="pills-full" role="tabpanel" aria-labelledby="pills-full-tab" tabIndex="0">
          {/* Static content for "Full Stack Development" tab */}
          
          {posts.slice(0, postsLimit).map(post => (
               <Card key={post.id} style={{ width: '16rem' }}>
                
               <Card.Body>
               <Card.Img variant="top" src={aniimage} />
                 <Card.Title> {truncateDescription(post.title, 25)}</Card.Title>
         
                 <Card.Text>
                 {truncateDescription(post.body, 200)}
                 </Card.Text>
                    
               </Card.Body>
             </Card>
          ))}
        </div>
        <div className={`tab-pane fade ${location.pathname === '/cyber-security' ? 'show active' : ''}`} id="pills-cyber" role="tabpanel" aria-labelledby="pills-cyber-tab" tabIndex="0">
          {/* Static content for "Cyber Security" tab */}
          
          {posts.slice(0, postsLimit).map(post => (
               <Card key={post.id} style={{ width: '16rem' }}>
                
               <Card.Body>
               <Card.Img variant="top" src={funimage} />
                 <Card.Title> {truncateDescription(post.title, 25)}</Card.Title>
         
                 <Card.Text>
                 {truncateDescription(post.body, 200)}
                 </Card.Text>
                    
               </Card.Body>
             </Card>
          ))}
        </div>
        <div className={`tab-pane fade ${location.pathname === '/data-science' ? 'show active' : ''}`} id="pills-data" role="tabpanel" aria-labelledby="pills-data-tab" tabIndex="0">
          {/* Static content for "Data Science" tab */}
         
          {posts.slice(0, postsLimit).map(post => (
               <Card key={post.id} style={{ width: '16rem' }}>
                
               <Card.Body>
               <Card.Img variant="top" src={blogimage} />
                 <Card.Title> {truncateDescription(post.title, 25)}</Card.Title>
         
                 <Card.Text>
                 {truncateDescription(post.body, 200)}
                 </Card.Text>
                    
               </Card.Body>
             </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
