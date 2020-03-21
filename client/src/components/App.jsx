import react, {Component} from 'react'

class App extends Component {
  render() {
  return (
    <div>
      <form>
        <label>
        <input type=  "text"  name="name"/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
  }
}

export default App