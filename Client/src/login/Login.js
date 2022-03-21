import React, {Component} from 'react';
import './Login.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export default class Login extends Component
{
    constructor(props) {
        super(props);
        this.state =
          {
            username: ''
          };
      }

    handleUserNameChange = (event) => {
        this.setState({
          username: event.target.value,
        });
      };

    handleConnectPublicly = () => {
        this.props.connect(this.state.username, false)
      }
    
    render(){
        return(
            <div className="component-Login">
             <TextField
                id="user"
                label="Type your username"
                placeholder="Username"
                onChange={this.handleUserNameChange}
                margin="normal"
              />
              <br />
              <Button variant="contained" color="primary" onClick={this.handleConnectPublicly} >
                Start Chatting
             </Button>

            </div>
        )
    }
}
