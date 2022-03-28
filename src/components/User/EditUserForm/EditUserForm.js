import React, { useState, useCallback } from "react";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";
import DatePicker from "react-datepicker";
import es from "date-fns/locale/es";
import { useDropzone } from "react-dropzone";
import { API_HOST } from "../../../utils/constant";
import "./EditUserForm.scss";
import moment from "moment";

export default function EditUserForm(props) {
    const { user, setShowModal } = props;

    const [formData, setFormData] = useState(initialValue(user));
 
    const{bannerUrl, setstate}= useState(
      user?.banner ? `$(API_HOST)/getBanner?id=${user.id}`:null
    )
    const onDropBanner = useCallback(acceptedFile=>{
      console.log(acceptedFile);
    })
    const{getRootProps:getRootBannerProps,getInputProps:getInputBannerProps}=useDropzone({
      accept:"image/jpeg,image/png",
      noKeyboard:true,
      multiple:false,
      ondrop:onDropBanner
    })
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    const onSubmit = e => {
    e.preventDefault();   
    console.log("Editing User....");
    console.log(formData);

  };

  return (
    <div className="edit-user-form">
      <div className="banner" style={{backgroundImage:`url('${bannerUrl}')`}}
      {...getRootBannerProps()}>
        <input type="file"/>
      </div>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Name" name="name" defaultValue={formData.name} onChange={onChange} />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Last Name" name="lastName" defaultValue={formData.lastName} onChange={onChange} />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Form.Control
            as="textarea"
            row="3"
            placeholder="Add your biography"
            type="text"
            name="biography"
            defaultValue={formData.biography}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Website"
            name="website"
            defaultValue={formData.website}
            onChange={onChange}

          />
        </Form.Group>

        <Form.Group>
          <DatePicker
            placeholder="Date of birth"
            locale={"en"}
            // dateFormat="MM-DD-YYYY"
            selected={new Date()}
            onChange={(value) =>
                setFormData({ ...formData, dateOfBirth: value })}
          />
        </Form.Group>

        <Button className="btn-submit" variant="primary" type="submit">
         Update
        </Button>
      </Form>
    </div>
  );
}

function initialValue(user) {
    return {
      name: user.name || "",
      lastName: user.lastName || "",
      biography: user.biography || "",
      location: user.location || "",
      website: user.website || "",
      birthdate: user.birthdate || "",
    };
  }