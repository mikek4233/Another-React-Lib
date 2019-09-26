import React, {Component} from 'react'
import {render} from 'react-dom'

import SimpleRedButton from '../../src/SimpleRedButton/SimpleRedButton'

class Demo extends Component {


  render() {
    return <div>
     <SimpleRedButton text={'Hello World'}/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
