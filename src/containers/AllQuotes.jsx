import React from 'react';
import {connect} from 'react-redux';
import { getQuotes } from '../store/actions/QuoteAction';
import ListItem from '../components/ListItem';
import CreatePages from '../utils'
class AllQuotes extends React.Component {
  state = {
    totalPages: Math.ceil(501 / 20),
    currentPage: 1,
  }
  componentDidMount() {
    this.props.getQuotes(1)
  }

  handlePagination = (i) => {
    this.setState({
      currentPage: i 
    })
    console.log(this.state.currentPage, 'in handler')
    this.props.getQuotes(i)
  }
  render() {
    return (
      <div>
        {this.props.quotes.quote && this.props.quotes.quote.map(item =>  <ListItem quote={item}/>)}
       
          <CreatePages 
                        allPages={this.state.totalPages} 
                        currentPage={this.state.currentPage} 
                        handlePagination={this.handlePagination}
          />
       
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = {
  getQuotes
}

export default connect(mapStateToProps, mapDispatchToProps)(AllQuotes);