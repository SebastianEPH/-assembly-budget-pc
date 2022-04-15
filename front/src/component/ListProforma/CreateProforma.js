import {Button, FloatingLabel, Form, Col, Row} from "react-bootstrap";
import {useFormBasic} from "../hooks/useFormBasic";
import connectionAPI from "../../connection/axios";
import toast from "react-hot-toast";

export const CreateProforma =({data}) =>{
    const {reloadForDB} = data

    const {form, cleanAll, onChange} = useFormBasic()
    const {name} = form
    const create = async(e)=>{
        e.preventDefault()
        if(name){
            await connectionAPI.post(`/proforma/`,form)
                .then((m)=>{
                    toast.success(m.data.message)
                })
                .catch((m)=>{
                    toast.error(m.response.data.message)
                })
            cleanAll()
            reloadForDB()
        }else{
            toast.error("input is empty")
        }
    }

    return(
        <Row>
            <form className={"p-3 mt-3"}>
                <Col xl={12}>
                    <FloatingLabel label="Name">
                        <Form.Control name="name"  type="text" placeholder="insert Name" maxLength={30} value={name||''}
                                      onChange={(e)=>onChange(e)}/>
                    </FloatingLabel>
                </Col>
                <Col xl={12} className={"p-3"}>
                    <Row>
                        <Button type={"submit"} className={"btn-success"} onClick={(e)=>create(e)}>
                            Create proforma
                        </Button>
                    </Row>
                </Col>
            </form>
        </Row>
    )
}