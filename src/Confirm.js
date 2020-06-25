import * as React from "react"
import { Dialog } from "@reach/dialog"
import { Button } from 'reactstrap';


export default class ConfirmStatusChange extends React.Component {
  state = {
    open: false,
    callback: null
  }

  show = callback => event => {
    event.preventDefault()

    event = {
      ...event,
      target: { ...event.target, value: event.target.value }
    }

    this.setState({
      open: true,
      callback: () => callback(event)
    })
  }

  hide = () => this.setState({ open: false, callback: null })

  confirm = () => {
    this.state.callback()
    this.hide()
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children(this.show)}

        {this.state.open && (
          <Dialog>
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
            <Button style={{margin:'0 20px 0 20px'}}onClick={this.hide}>Cancel</Button>
            <Button onClick={this.confirm}>OK</Button>
          </Dialog>
        )}
      </React.Fragment>
    )
  }
}
