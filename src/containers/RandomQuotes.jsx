import React from 'react';
import {connect} from 'react-redux';
import { getRandomQuotes } from '../store/actions/QuoteAction';
import LanguageContext from '../context/LanaguageContext'
import ListItem from '../context/ListContextFolder/ListItem';
class RandomQuotes extends React.Component {
  state = {
    // language: this.context
  }
  // static contextType = LanguageContext;
  componentDidMount() {
    this.props.getRandomQuotes()
  }
  render() {
    // console.log(this.state.context)
    return (
      <LanguageContext.Provider value={this.props.language}>
      <div>
        {this.props.language}
        </div>
      <div>
      <ListItem quote={this.props.quotes.ranQuote}/>
      </div>
      </LanguageContext.Provider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = {
  getRandomQuotes
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomQuotes);