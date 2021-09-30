import React, { useContext } from 'react'
import './Book.css';
import  { ThemeContext } from '../contexts/ThemeContext';

const Book = ({book}) => {


    const {theme, darkTheme} = useContext(ThemeContext)

    const bookTheme = darkTheme ? theme.dark : theme.light;


    return (
                          
        <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                    <div className="portfolio-hover" style={{background:bookTheme.hover}}>
                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={book.imageURL} alt="" />
                </a>
                <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{book.title}</div>
                    <div className="portfolio-caption-subheading text-muted">{book.author}</div>
                </div>
            </div>
        </div>
                   
    );
}

export default Book