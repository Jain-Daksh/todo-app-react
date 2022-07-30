import React, { Component } from 'react'
import Plan from './plan'
class Addtext extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '',
      items: []
    }
  }

  handleChange = e => {
    this.setState(
      {
        text: e.target.value
      }
    )
  }

  handleAdd = e => {
    if (this.state.text !== "") {
      const item = [...this.state.items, this.state.text]
      this.setState({
        items: item,
        text: ''
      })
    }
  }

  handleDelete = id => {
    const Olditems = [...this.state.items]
    const items = Olditems.filter((element, i) => {
      return i !== id
    })
    this.setState({ items: items });
  }


  render() {
    return (
      <div >
        <div className='row'>
          <div className='col-9'>
            <input type="text" className="form-control" placeholder='Write plan here' value={this.state.text} onChange={this.handleChange} />
          </div>
          <div className='col-2'>
            <button className='btn btn-warning px-5 fw-bold' onClick={this.handleAdd}>Add</button>
          </div>
        </div>
        <div className=''>
        <ul className='list-unstyled row md-5'>
                {
                  this.state.items.map((value , i) => {
                    return <Plan key={i} id={i} value={value} sendData= {this.handleDelete}></Plan>
                  })
                }
              </ul>
        </div>
      </div>
    )
  }

}
export default Addtext