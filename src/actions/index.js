export const addBook = ({author, country, imageLink, language, link, pages, title, year}) => {
    return{
      // Geriye aksiyon objesi dönecek
      type: 'ADD_BOOK',
      payload: {
        author, country, imageLink, language, link, pages, title, year
      }
    }
  }
  
  export const deleteBook = (book) => {
    return{
      type: 'DELETE_BOOK',
      payload: book
    }
  }
  
  export const selectBook = (book) => {
    return{
      type: 'SELECT_BOOK',
      payload: book
    }
  }
  
  export const deSeleectBook = () => {
    return{
      type : 'DESELECT_BOOK'
    }
  }
  