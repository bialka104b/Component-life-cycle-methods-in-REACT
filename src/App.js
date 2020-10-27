  
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    defaultWelcome: '',
    number: 0,
  }
  componentDidMount(){
    alert("wywołanie componentDidMount");
    this.setState({
      defaultWelcome: "Witamy"
    })
  }
  componentDidUpdate(){
    // alert("wywołanie componentDidUpdate");
    let numberWiększy = this.state.number > 10 ? "number wiekszy od 10" : null;
    if(numberWiększy){
      alert(numberWiększy);
    }
  }
  //   componentWillUnmount(){//moment przed odmontowaniem komponentu, odmontowywanie będzie następować jak będziemy zmieniać stronę na inną
  //     alert("nie ucikaj");
  //   }
  handleClick =()=> {
    this.setState(
      prevState => ({
        number: prevState.number + 1
      }))
  }
  render() {
    // 1. Korzystajac z metod cyklu zycia komponentu podmien defaultWelcome na tekst 'Witamy' przy montowaniu komponentu
    // 2. wyswietl defaultWelcome i number pobierajac go ze state w divie o klasie App
    // 3. dodaj button ktory na zdarzeniu onClick bedzie powiekszal number o 1
    // 4. Korzystajac z metod cyklu zycia komponentu wyswietl alert ktory bedzie wyswietlal komunikat ze number jest juz wiekszy od 10, jesli number przekroczy ta wartosc
    return (
      <div className="App">
        {this.state.defaultWelcome}
        <p>Number : {this.state.number}</p>
        <button onClick={this.handleClick}>Powiększ</button>
      </div>
    );
  }
}

export default App;
