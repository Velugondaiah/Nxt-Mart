import styled from 'styled-components'
import {FaRegUserCircle} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'

export const LoginFormBgContainer = styled.div`
    background-image:url("https://res.cloudinary.com/dbroxheos/image/upload/v1729862883/Background_2_cqhllr.png");
    min-height:100vh;
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media  screen and (min-width:768px){
       background-image:url("https://res.cloudinary.com/dbroxheos/image/upload/v1729862950/Background_rkdxqm.png");
       
    }
`
export const FormForLogin = styled.form`
    background-color:#ffffff;
    margin:16px;
    padding:20px;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    padding-top:50px;
    padding-bottom:50px;
    @media screen and (min-width:768px){
      width:450px;
      padding:30px;
      padding-top:90px;
      padding-bottom:90px;
      
    }
`
export const MartLogo = styled.img`
    width:119px;
    height:85px;
    align-self:center;
    margin-bottom:30px;
`
export const DetailsContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:15px;
   
    position:relative ;
    width: 100%;
    max-width: 400px;
`

export const Label = styled.label`
  font-size: 16px;
  display: block;
  margin-bottom: 8px;
  color:#333333;
  font-family:"Roboto";
  font-weight:400;

`
export const UserIcon = styled(FaRegUserCircle)`
  position: absolute;
  left: 10px;
  top: 66%;
  transform: translateY(-50%);
  color: #888;
  font-size: 1.2em; 
`

export const PasswordIcon = styled(BsFillShieldLockFill)`
  position: absolute;
  left: 10px;
  top: 66%;
  transform: translateY(-50%);
  color: #888;
  font-size: 1.2em; 

`
export const Input = styled.input`
  height:40px;
  width:271px;
  border:1px #64748B solid;
  border-radius:7px;
  outline:none;

  width: 100%;
  padding: 8px 8px 8px 35px;
  font-size: 18px;
  box-sizing: border-box;
`
export const ContainerForCheckbox = styled.div`
  display:flex;
  align-items:center;
  margin-bottom:20px;
`
export const CheckboxInput = styled.input`
  height:16px;
  width:16px;
`
export const CheckboxLabek = styled.label`
  font-size:16px;
  color:#333333;
  margin-left:6px;
  font-family:"Roboto";
  font-weight:400;
`
export const LoginButton = styled.button`
  height:44px;
  width:100%;
  max-width:400px;
  background-color:${props =>
    props.outline === 'true' ? '#088C03' : '#B3B3B3'};
  color:#ffffff;
  font-family:"Roboto";
  font-weight:400;
  font-size:16px;
  border:none;
  border-radius:7px;
`

// media queries
