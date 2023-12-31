import React, { useRef, useState } from "react";
import {
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import ProfilePic from "../public/Images/profile-circle-2 1profil.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { BsThreeDotsVertical } from "react-icons/bs";
import Cardsec from "../public/Images/card.png";
import Removesec from "../public/Images/remove.png";
import Editsec from "../public/Images/edit.png";
import Datesec from "../public/Images/date.png";
import Image from "next/image";
import InfluencerTableModal from "./InfluencerTableModal";
import InfluencerDetailsPopUp from "./InfluencerDetailsPopUp";

export default function InfluencerTable(props) {

  const ref = useRef();

  const [action, setAction] = useState();

  const [actionShow, setActionShow] = useState(false);
  const handleActionClose = () => setActionShow(false);
  const handleActionShow = () => setActionShow(true);

  const [infuDetailShow, setInfuDetailShow] = useState(false);
  const handleInfuDetailClose = () => setInfuDetailShow(false);
  const handleInfuDetailShow = () => setInfuDetailShow(true);

  const [actionContChoose, setActionContChoose] = useState("Default");
  const [multiSelections, setMultiSelections] = useState([]);

  const optionLabel = ["Product Designer", "UI", "App Design", "UX"]
  
 
  const [checked, setChecked] = useState(false); 
   
  const [checked1, setChecked1] = useState(false); 
  const handleChange = () => { 
    setChecked(!checked); 
    
  }

  function handleAction(actionType){
    handleActionShow()
    setAction(actionType)
  }
  return (
    <Col lg={12}>
      <Table>
        <thead className="custTableHead">
          <tr>
            <th>
              {" "}
              <Form>
                <Form.Check 
                type="checkbox" 
                label="Username" 
                name="selectAll"
                id="selectAll"
                onClick={props.handleCheckAll}
                checked={props.selectAll}
                 />
              </Form>
            </th>
            <th className="center">Campaigns</th>
            <th className="center">CPC</th>
            <th className="center">CPT</th>
            <th className="center">Price</th>
            <th className="center">Overlap</th>
            <th className="center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2].map((num, index) => {
            return (
              <tr key={index}>
                <td>
                  <div className="userinfo">
                    <Form>
                      <Form.Check type="checkbox" checked={props.selectAll} checked={checked}  onChange={handleChange}/>
                    </Form>
                    <div onClick={handleInfuDetailShow} style={{margin: "0px 10px"}}><Image src={ProfilePic} width="50px" height="50px" /></div>
                    <div onClick={handleInfuDetailShow}>
                      <span>Minhas Asif</span>
                      <span>Multiple Sclerosis</span>
                    </div>
                  </div>
                </td>
                <td className="center">50</td>
                <td className="center">$7</td>
                <td className="center">$10</td>
                <td className="center">$20  </td>
                <td className="center">20</td>
                <td className="center">
                <DropdownButton variant="link" id="dropdown-basic-button" title={<BsThreeDotsVertical />}>
                  <Dropdown.Item onClick={() => handleAction('Contact')}><Image src={Cardsec}/> Contact</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleAction('Note')}><Image src={Editsec}/>  Note</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleAction('Schedule')}><Image src={Datesec}/> Schedule</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleAction('Remove')}> <Image src={Removesec}/> Remove</Dropdown.Item>
                </DropdownButton>
                <InfluencerTableModal 
                  actionShow={actionShow}
                  handleActionClose={handleActionClose}
                  action={action}
                  actionContChoose={actionContChoose}
                  setActionContChoose={setActionContChoose}
                  optionLabel={optionLabel}
                  ref={ref}
                  setMultiSelections={setMultiSelections}
                  multiSelections={multiSelections}
                />
                
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <hr className="trSty" />
      <div style={{ float: "right", marginTop: "0px" }}>
        <Pagination>
          <Pagination.First />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item active>{3}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{32}</Pagination.Item>
          <Pagination.Last />
        </Pagination>
      </div>

      <InfluencerDetailsPopUp 
        handleInfuDetailClose={handleInfuDetailClose}
        infuDetailShow={infuDetailShow}
        setInfuDetailShow={setInfuDetailShow}
        />
    </Col>
  );
}
