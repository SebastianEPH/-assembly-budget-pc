import { Col} from "react-bootstrap";
import PropTypes from "prop-types";

/**
 * Element Select / option
 * @param {String} name name from
 * @param {String} title name from
 * @param {Number|String} id_select select id
 * @param {Number|String} col stress module => form-select-`col-number`
 * @param {Array<$ObjMap>} data Data list
 * @return {JSX.Element}
 */
export default function ({name, title ,select, col, update, data, idCondition}){
    // console.log("id de la condicion ",idCondition)
    return(
        <Col md={col}  >
          <div className="form-floating">
              <select name={name} value={select} onChange={(e)=>update(e)} className="form-select"
                      id="floatingSelect" aria-label="Floating label select example">
                  <option value={''} key="0"> </option>
                  {data.map((p={name}, index)=>{
                      if(!p.condition){
                          return<option value={p.id} key={index+p.id}>{p.name}</option>
                      }else{
                          if(idCondition === null || idCondition === undefined){ // is condicion es null como valor,
                              return<option value={p.id} key={index+p.id}>{p.name}</option>
                          }else{
                              if (idCondition.toString() === p.condition.toString()){
                                  return<option value={p.id} key={index+p.id}>{p.name}</option>
                              }
                          }
                      }
                  })}
              </select>
              <label htmlFor="floatingSelect">{title !== undefined && title}</label>
          </div>
        </Col>
    )

}

//
// ShowMotherboard.protoTypes = {
//     name: PropTypes.string.isRequired,
//     title: PropTypes.string,
//     id_select: PropTypes.string.isRequired,
//     col: PropTypes.number.isRequired,
//     data: PropTypes.array.isRequired
// }
//
