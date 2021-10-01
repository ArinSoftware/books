import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { BookContext } from '../contexts/BookContext'


const EditBook = ({book,handleCloseEdit}) => {

    const { editBook } = useContext(BookContext)


    const [title, setTitle] = useState(book.title)
    const [author, setAuthor] = useState(book.author)
    const [pageNum, setPageNum] = useState(book.pageNum)
    const [imageURL, setImageURL] = useState(book.imageURL)
    const [topic, setTopic] = useState(book.topic)

    const id= book.id
    const updatedBook = {id ,title, author, pageNum, imageURL, topic}

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!title || !author || !pageNum || !imageURL || !topic) return;
        
        editBook(id,updatedBook)
        
        handleCloseEdit()      
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

export default EditBook
