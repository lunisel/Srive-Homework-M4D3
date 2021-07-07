import { Badge } from 'react-bootstrap'

const MyBadgeFunction = (prop) => (
    <Badge className="position-absolute" style={{top: "2rem", right: "0", fontSize: "18px"}} variant="secondary">{prop.price}$</Badge>
) 
export default MyBadgeFunction