import React, {useState, useEffect} from 'react';
import Api from '../../api/Api';
import Storage from "../../services/Storage";
import "./Workspace.css";
import {Modal, Button, Form} from 'react-bootstrap';
import BlogCard from '../../components/BlogCard/BlogCard';
function Workspace() {

    //const token = Storage.get("token");
    const userId = Storage.get("userId") || null;
   
    
    const [loggeduser, setLoggedUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({title:"", description:""});
    const {firstname, lastname} = loggeduser;
    

    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const createNewPost = () => {
    // ...
    Api.posts.createPost(newPost)
    .then(res=>{
        if(res.ok){
        res.json().then((data)=>{
            const List = posts.map(elem => elem.id !== data.id?elem:data)
            setPosts(List)
            setNewPost({
                ...newPost,

                title:"",
                description:"",
            })})
        Api.people.getUserPosts(userId)
            .then(res => res.json())
            .then(data => setPosts(data))
  }})}

  const onhandleInputChange = (event) => {

    const {target:{name, value}} = event;
    setNewPost({
        ...newPost,
        [name]:value,
        personId:Storage.get("userId"),
        author:`${firstname} ${lastname}`
    })
}
const removePost = (id) => {
    Api.posts.remove(id);
    setPosts(posts.filter(post => post.id !== id));
  }
  const updatePost = (data) => {
    setNewPost(data);
  }

    useEffect(() => {
        if(userId){
            Api.people.getById(userId)
                .then(response => response.json())
                .then((data) => {
                    setLoggedUser(data)
                 });
            Api.people.getUserPosts(userId)
                .then(res => res.json())
                .then(data => setPosts(data))
        }
    }, [])


            
                 return (
                   <div className="container">
                            
                            <div>
                                <h1>
                                    <div className="card-header" class="text-white">
                                        {`${loggeduser.firstname || '--'} ${loggeduser.lastname || '--'}`}                                        
                                    </div>
                                </h1>
                            </div> 
                            
                            <div className="flex  text-primary">                              
                                   
                                    <div>
                                        <Button variant="success" onClick={handleShow}>
                                            Create New Post
                                        </Button>
                                    </div>
                                    <div>
                                        <BlogCard buttonClik={true} posts={posts} removePost={removePost} updatePost={updatePost}/>
                                    </div>
                        <Modal show={show} onHide={handleClose} animation={false}>
                            <Modal.Header closeButton>
                            <Modal.Title>Create New Post</Modal.Title>
                            </Modal.Header>
                            <Modal.Header>
                                <Form.Control name="title" value={newPost.title} onChange={onhandleInputChange}  placeholder="title" />
                            </Modal.Header>
                                <Form.Control name="description" as="textarea" rows="6" value={newPost.description} onChange={onhandleInputChange} placeholder="description" />
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={createNewPost} onClickCapture={handleClose}>
                                    Create
                                </Button>
                            </Modal.Footer>
                         </Modal>
              </div>
    </div>
     )

    
}

export default Workspace
