import React from 'react';
import {Route, Switch,Link} from 'react-router-dom';
import {Form} from 'react-bootstrap'
import AllQuotes from './containers/AllQuotes';
import Nav from './components/Nav'
import './App.css';
import RandomQuotes from './containers/RandomQuotes';
import LanguageContext from './context/LanaguageContext';
import translations from './context/ListContextFolder/translation'

class App extends React.Component {
  state = {
    language: this.context
  }
  languageChange = (e) => {
    console.log(e.target.checked)
    this.setState({
      language: e.target.checked ? 'sr' : 'en'
    })
  }
  static contextType = LanguageContext;
  render(){
  return (
    <LanguageContext.Provider value={this.state.language}>
    <div>
    <Form.Check 
          onChange={this.languageChange}
          type="switch"
          id="custom-switch"
          label={this.state.language}
        />
      <Nav>
      <Link to='/'><LanguageContext.Consumer>{(value) => {
        console.log(value, 'app val')
        return(
        translations.textAll[value])}}</LanguageContext.Consumer></Link>
      <Link to='/random'><LanguageContext.Consumer>{(value) => translations.textRan[value]}</LanguageContext.Consumer>s</Link>
      </Nav>
      
    <Switch>
      <Route path='/' exact component={() => <AllQuotes language={this.state.language} languageChange={this.languageChange}/>}>
      </Route>
      <Route path='/random' component={()=><RandomQuotes language={this.state.language} languageChange={this.languageChange}/>}></Route>
    </Switch>

    </div>
    </LanguageContext.Provider>
  );
}
}
export default App;
