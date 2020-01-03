import { combineReducers} from 'redux';
import books from './books.json';


const bookListReducer = (oldBookList = books, action) => {
    if(action.type === 'ADD_BOOK'){
      // kitap listesine ekle
      return [...oldBookList, action.payload]; // kitap listesine ekle ve actin.payload olarak geri döndür
    }
    else if(action.type === 'DELETE_BOOK'){
      // kitap listesinden çıkart
      return oldBookList.filter(oldBook => oldBook.title !== action.payload.title); 
    }
    return oldBookList;
  }
  
  
  const selectedBookReducer = (oldSelectedBook = {}, action) => {
    if(action.type === 'SELECT_BOOK'){
      // Kitap Seçme işlemi
      return action.payload; // seçilen kitabı döndük
    } else if(action.type === 'DESELECT_BOOK'){
      // kitap seçim işlemini kaldır
      return {}; // hiç bir kitap seçili olmadığı için boş döndük.
    }
    return oldSelectedBook;
  }
  
  
  
  export default combineReducers({
    bookList: bookListReducer,
    selectedBook: selectedBookReducer
  });