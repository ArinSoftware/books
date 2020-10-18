import React from 'react';
import BookList from './BookList';
import BookContextProvider from '../contexts/BookContext';
import ThemeContextProvider from '../contexts/ThemeContext';


class App extends React.Component {

    render () {

        return (
                <ThemeContextProvider>
                    <BookContextProvider>
                        <BookList />
                    </BookContextProvider>
                </ThemeContextProvider>
        );

    }
}

export default App;