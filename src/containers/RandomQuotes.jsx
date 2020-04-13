import React from 'react';
import {connect} from 'react-redux';
import { getRandomQuotes } from '../store/actions/QuoteAction';
import ListItem from '../components/ListItem';
class RandomQuotes extends React.Component {
  state = {
  }
  componentDidMount() {
    this.props.getRandomQuotes()
  }
  render() {
    return (
      <div>
      <ListItem quote={this.props.ranQuotes.ranQuote}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ranQuotes: state.ranQuotes
  }
}

const mapDispatchToProps = {
  getRandomQuotes
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomQuotes);