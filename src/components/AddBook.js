import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'
import { Button, Form } from 'react-bootstrap';


const AddBook = ({handleClose}) => {

    const { addBook } = useContext(BookContext)

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [imageURL, setImageURL] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!title) return;
        
        addBook(title, author, imageURL)
        setTitle("")
        setAuthor("")
        setImageURL("")
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
                <Form.Label>ImageURL</Form.Label>
                <Form.Control name="imageURL" type="text"  value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)} />
            </Form.Group>
            <Button type="submit" variant="primary">Save changes</Button>
        </Form>
    )
}

export default AddBook