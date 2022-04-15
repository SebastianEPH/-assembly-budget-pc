import {Col, FloatingLabel, Form} from "react-bootstrap";

export const InputsCustom = ({data}) =>{
    const {name, placeHolder, type,  value, updateHook, onChange, col} = data
    return(
        <Col sm={col}>
            <FloatingLabel label={placeHolder}>
                <Form.Control name={name}
                              type={type|| "text"}
                              placeholder={placeHolder}
                              className="form-control"
                              value={value|| ""}
                              onChange={(e)=>onChange(e,(updateHook||''))}
                />
            </FloatingLabel>
        </Col>
    )
}