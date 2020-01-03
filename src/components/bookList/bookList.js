import React, { Component} from 'react';
import { connect } from 'react-redux';
import BookItem from './bookItem';
import './bookList.css';

class BookList extends Component
{

    /*
    componentDidMount()
    {
        this.props.addBook(
            {
                author: 'Serdar Karaca',
                country: 'Türkiye',
                imageLink: 'aaaa',
                language: 'Türkçe',
                link:'kitap linki',
                pages: 3500,
                title : 'Harry Potter',
                year: '2019'
            }
        );
    }
    */

    render(){
        const { bookList} = this.props;
        return(
            <div className='book-list-container ui cards'>
                
                {
                    bookList.map(book => (
                        <BookItem key={book.title} book={book} />
                    ))
                }

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    //console.log(state);
    return {
        bookList: state.bookList
    };
}


export default connect(mapStateToProps)(BookList);