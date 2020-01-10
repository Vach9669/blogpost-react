import React from 'react';
import {Card} from 'react-bootstrap';

function BlogCard({ posts, buttonClik, removePost, updatePost }) {
    
    return (
        <div >
            {   
                posts.map((post) => {                        
                     return  ( 
                     <div className='Card-post' key={post.id}>                                         
                                <Card style={{margin:'1rem' }}>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                        <p>
                                            {post.title}
                                        </p>
                                        <footer className="blockquote-footer">
                                             <cite title="Source Title">{post.description}</cite>
                                        </footer>
                                         
                                         <div className="row" >
                                            <div className="col-11" style={{marginTop:"1rem"}}> 
                                                {buttonClik && <button  className="btn btn-outline-primary btn-sm" onClick={updatePost.bind(null, post)} >Edit</button>}  
                                            </div>
                                            <div className="col" style={{marginTop:"1rem"}}>
                                               {buttonClik && <button className="btn btn-outline-danger btn-sm" onClick={removePost.bind(null, post.id)} >Delete</button>}
                                            </div>                      
                                         </div>
                                         </blockquote>
                                         </Card.Body>
                                </Card>   
                             </div>
                             )   })}
        </div>
    )
}

export default BlogCard
