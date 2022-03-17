import {Alert, Button, Row, Container} from "react-bootstrap";
import {useContext, useState} from "react";
import MessageContext from "../hooks/MessageContext";

export const AlertMessage = ({state= false}) =>{

    // const [show, setShow] = useState(state);
    const {showMessage, setShowMessage, message} = useContext(MessageContext)
    const {title, text, close, type } = message
    return (
        <>
            <Container>
               <Row>
                   <Alert show={showMessage} variant={type}>
                       <Alert.Heading>{title}</Alert.Heading>
                       <p>
                           {text}
                       </p>
                       <div className="d-flex justify-content-end">
                           <Button onClick={() => setShowMessage(false)} variant={"outline-"+ type}>
                               {close}
                           </Button>
                       </div>
                   </Alert>
               </Row>
            </Container>

            {!showMessage&& <Button onClick={() => setShowMessage(true)}>Show Alert</Button>}
        </>
    );

}

