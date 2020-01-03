import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{

    renderContent()
    {
        const {selectedBook} = this.props;
        if(selectedBook.title)
        {
            return(
                <div>
                    {selectedBook.title}
                </div>
            )
        }
        return(
            <div>
                Seçili Kitap Yok
            </div>
        )
    }

    render()
    {
        return(
            <div>
                    {this.renderContent()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        selectedBook: state.selectedBook
    }
}

export default connect(mapStateToProps)(BookDetail);