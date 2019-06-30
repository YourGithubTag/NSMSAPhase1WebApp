import * as React from 'react';
import DropArea from './Components/DropArea/DropArea'
import Header from './Components/Header/Header'
import Result from './Components/Result/Result'

interface IState {
  result:string
  filelength:number
}

class App extends React.Component<{},IState>{
    public constructor(props:any){
      super(props)
      this.state = {
        filelength:0,
        result:"",
      }
    }

    public resultstate = (resultString:string,filelen:any) => {
      this.setState({result:resultString,filelength:filelen})
    }

  public render() {
    return (
      <div>
        <Header />
        <Result result={this.state.result} filelength={this.state.filelength} />
        <DropArea setResults={this.resultstate} />
        

      </div>
    );
  }
}

export default App;
