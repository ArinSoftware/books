import React, { useContext, useState } from 'react'
import './Book.css';
import  { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';
import { Button, Modal } from 'react-bootstrap';
import EditBook from './EditBook';



const Book = ({book}) => {

    const {removeBook} = useContext(BookContext)
    const {theme, darkTheme} = useContext(ThemeContext)
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const bookTheme = darkTheme ? theme.dark : theme.light;


    return (
                          
        <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                    <div className="portfolio-hover" style={{background:bookTheme.hover}}>
                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img style={{width:"600px" ,height: "600px" }}className="img-fluid" src={book.imageURL} alt="" />
                </a>
                <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{book.title}</div>
                    <div className="portfolio-caption-subheading ">{book.author}</div>
                    <div className="portfolio-caption-subheading text-muted">{book.pageNum} Sayfa</div>
                    <button onClick={() =>  removeBook(book.id)} className="btn btn-danger btn-sm mt-2">Delete</button>
                    <Button variant="success btn-sm mt-2"  onClick={handleShow}>Details </Button>
                    <Button variant="warning btn-sm mt-2"  onClick={handleShowEdit}>Edit </Button>
                        
                   

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header >
                            <Modal.Title>Book Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {book.topic}    
                        </Modal.Body>
                        
                    </Modal>

                    <Modal show={showEdit} onHide={handleCloseEdit}>
                        <Modal.Header >
                            <Modal.Title>Edit Books</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <EditBook book={book} handleCloseEdit={handleCloseEdit} />   
                        </Modal.Body>
                        
                    </Modal>
                </div>
            </div>
        </div>
                   
    );
}

export default Book