import { Link } from "react-router-dom"


function PhoneList(props) {

    const { getPhoneDetails } = props
    
  return (
    <li><Link onClick={() => getPhoneDetails(props.id)}>{props.name}</Link></li>
    
  )
}

export default PhoneList