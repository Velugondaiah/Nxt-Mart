import {Component} from 'react'

import {
  LoginFormBgContainer,
  FormForLogin,
  MartLogo,
  DetailsContainer,
  Label,
  Input,
  UserIcon,
  PasswordIcon,
  ContainerForCheckbox,
  CheckboxInput,
  CheckboxLabek,
  LoginButton,
} from './StyledComponent.js'

class LoginForm extends Component {
  state = {showPassword: false, username: '', password: ''}

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login' // This is deployed backend api
     const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      console.log("hello")
    } else {
      console.log('failure')
    }
  }
  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }
  onChangePassword = event => {
    this.setState({password: event.target.value})
  }
  onclickCheckbox = () => {
    const {showPassword} = this.state
    this.setState({showPassword: !showPassword})
  }

  render() {
    const {showPassword, username, password} = this.state
    const detailsfill = username.length > 0 && password.length > 0
    console.log(username)
    console.log(password)
    console.log(detailsfill)
    return (
      <>
        <LoginFormBgContainer>
          <FormForLogin onSubmit={this.onSubmitForm}>
            <MartLogo src="https://res.cloudinary.com/dbroxheos/image/upload/v1729863057/Logo_2_fwh1yu.png" />
            <DetailsContainer>
              <Label htmlFor="username">Username</Label>
              <UserIcon />
              <Input
                type="text"
                id="username"
                placeholder="username"
                value={username}
                onChange={this.onChangeUsername}
              />
            </DetailsContainer>
            <DetailsContainer>
              <Label htmlFor="password">Password</Label>
              <PasswordIcon />
              <Input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="password"
                value={password}
                onChange={this.onChangePassword}
              />
            </DetailsContainer>
            <ContainerForCheckbox>
              <CheckboxInput
                onClick={this.onclickCheckbox}
                type="checkbox"
                id="checkbox"
              />
              <CheckboxLabek htmlFor="checkbox">Show Password</CheckboxLabek>
            </ContainerForCheckbox>
            <LoginButton type="submit" outline={detailsfill.toString()}>
              Login
            </LoginButton>
          </FormForLogin>
        </LoginFormBgContainer>
      </>
    )
  }
}
export default LoginForm
