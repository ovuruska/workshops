import React,{Component} from "react"


class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      elements : [],
      value : null
    }
  }

  refresh = () =>{
    this.setState({
      elements:[1,2,2,3,4]
    })
  }

  uploadNumber = (event) => {
    const {value} = this.state
  }

  updateValue = (event) => {
    this.setState({
      value:event.target.value
    })
  }

  render() {
    const {elements,value} = this.state
    return <>
      <input onChange={this.updateValue} value={value} type="number" />
      <button  onClick={this.uploadNumber}>Add number</button><br/>
      <button onClick={this.refresh}>Yenile</button><br/>
      <table>
        <tr>
          <th>
            Numbers
          </th>
        </tr>
        {
          elements.map(element => (
            <tr>
              <td>
                {element}
                </td>
              </tr>
          ))
        }
      </table>
    </>
  }

}

export default App;
