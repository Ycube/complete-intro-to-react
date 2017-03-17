import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
      	<MyTitle title="props are cool" color='rebeccapurple' />
      	<MyTitle title="whatever" color='aquamarine' />
      	<MyTitle title="yeh right" color='papayawhip' />
      	<MyTitle title="no way" color='mediumaquamarine' />
      	<MyTitle title="no way" color='peru' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
