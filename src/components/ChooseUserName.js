import React from 'react'
import {Form, FormGroup, FormControl, Button, ControlLabel} from 'react-bootstrap'

class ChooseUserName extends React.Component {
  constructor(props) {
    super(props)
    this.state = {userName: '', editing: false}
  }
  triggerChooseUserName(e) {
    e.preventDefault()
    this.props.chooseUserName(this.state.userName)
    this.setState({editing: false})
  }

  updateState(e) {
    this.setState({userName: e.target.value})
  }

  toggleEditing(e) {
    e.preventDefault();
    this.setState({editing: true});
    document.getElementById("formInlineUserName").focus();
  }

  editForm() {
    return (
      <Form inline>
          <FormGroup controlId="formInlineUserName">
            <Button type="submit" onClick={this.triggerChooseUserName.bind(this)} style={{width:"170px", paddingRight:"10px", backgroundColor:"rgb(24, 188, 156)"}}>
            <i className="glyphicon glyphicon-ok clickMe"></i>
              Save Username
            </Button>
            {' '}
            <FormControl type="text" defaultValue={this.props.userName} onChange={this.updateState.bind(this)}/>
          </FormGroup>
      </Form>
    )
  }

  editButton() {
    return (
      <Form inline>
          <FormGroup controlId="formInlineUserName">
            <Button type="submit" onClick={this.toggleEditing.bind(this)} style={{width:"170px", paddingRight:"10px"}}>
            <i className="glyphicon glyphicon-pencil clickMe"></i>
              Change Username
            </Button>
            {' '}
            <FormControl type="text" defaultValue={this.props.userName} disabled/>
          </FormGroup>
      </Form>
    )
  }

  render() {  
    return (
      <div>
        {this.state.editing ? this.editForm() : this.editButton()}
      </div>
    )
  }
}

export default ChooseUserName;