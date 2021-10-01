import React, { useContext, useState } from 'react'
import './BookList.css';
import Book from './Book';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';
import AddBook from './AddBook';
import { Button, Modal } from 'react-bootstrap';

const BookList = () => {

    const { theme, darkTheme, changeTheme } = useContext(ThemeContext)
    const { books } = useContext(BookContext)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    

    const bookListTheme = darkTheme ? theme.dark : theme.light;


    return (
        <section className="page-section" style={{ background: bookListTheme.bg, color: bookListTheme.txt }} id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">BookFolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    <button type="button" className="btn btn-sm btn-info" style={{ marginTop: '-70px' }}
                        onClick={changeTheme}  >Change Theme</button>
                    <Button variant="success btn-sm" style={{ marginTop: '-70px' }} onClick={handleShow}>
                        Add Book
                    </Button>


                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header >
                            <Modal.Title>Add Book</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <AddBook handleClose={handleClose} />
                        </Modal.Body>
                        
                    </Modal>




                </div>
                <div className="row">

                    {books.map((book, i) => {
                        return <Book book={book}
                            key={i}
                        />
                    })}

                </div>
            </div>
        </section>
    )
}

export default BookList