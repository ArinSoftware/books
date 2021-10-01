import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'
import { Button, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';


const AddBook = ({handleClose}) => {

    const { addBook } = useContext(BookContext)

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [pageNum, setPageNum] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [topic, setTopic] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!title || !author || !pageNum || !imageURL || !topic) return;
        
        addBook(uuidv4(),title, author,pageNum, imageURL,topic)
        
        handleClose()      
    }

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Book Name</Form.Label>
                <Form.Control type="text" value={title}
                        onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" value={author}
                        onChange={(e) => setAuthor(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Page Num</Form.Label>
                <Form.Control name="number" type="text" value={pageNum}
                        onChange={(e) => setPageNum(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>ImageURL</Form.Label>
                <Form.Control name="imageURL" type="text"  value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Topic</Form.Label>
                <Form.Control as="textarea" rows={3}  type="text"  value={topic}
                        onChange={(e) => setTopic(e.target.value)} />
            </Form.Group>
            
            <Button type="submit" variant="primary">Save changes</Button>           
        </Form>
    )
}

export default AddBook