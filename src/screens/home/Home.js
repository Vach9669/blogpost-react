import React, { useEffect, useState } from 'react'
import BloggerCard from '../../components/BloggerCard/BloggerCard'
import BlogCard from '../../components/BlogCard/BlogCard'
import Api from '../../api/Api'
import "./Home.css"

function Home() {
    const [bloggers, setBloggers] = useState([])
    const [posts, setPosts] = useState([])
    useEffect(() => {
        Api.people.get().then(res => res.json()).then(data => setBloggers(data))
        Api.posts.get().then(res => res.json()).then(data => setPosts(data))
    }, [])

    return (
        <div className="container d-flex ">
            <div className='row'>
                <div className="col-4" id="scroll">
                    
                    <BloggerCard bloggers={bloggers}/>
                </div>
                <div className="col-8" id="scroll">
                    <BlogCard posts={posts}/> 
                </div>
           </div>
        </div>
    )
}

export default Home;
