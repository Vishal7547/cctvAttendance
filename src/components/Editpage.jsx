import React, { useState } from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button, Col } from 'react-bootstrap';

const ProfileForm = () => {
  const [firstName, setFirstName] = useState('Admin');
  const [lastName, setLastName] = useState('.');
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [bio, setBio] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
   <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid black',
    margin: '0 10vw',
   }}>
     <div className="row">
      <Col md={10} mdOffset={1}>
        <Form onSubmit={handleSubmit}>
          {/* Avatar */}
          <FormGroup>
            <FormControl type="hidden" name="current_avatar" value="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/avatars/sameer_._PtZegxS.jpg" id="id_current_avatar" />
            {/* Your avatar UI code */}
          </FormGroup>

          {/* First name */}
          <FormGroup>
            <FormLabel htmlFor="id_first_name">First name:</FormLabel>
            <FormControl type="text" name="first_name" value={firstName} placeholder="First name" maxLength={30} required id="id_first_name" onChange={(e) => setFirstName(e.target.value)} />
          </FormGroup>

          {/* Last name */}
          <FormGroup>
            <FormLabel htmlFor="id_last_name">Last name:</FormLabel>
            <FormControl type="text" name="last_name" value={lastName} placeholder="Last name" maxLength={30} required id="id_last_name" onChange={(e) => setLastName(e.target.value)} />
          </FormGroup>

          {/* Company */}
          <FormGroup>
            <FormLabel htmlFor="id_company">Company:</FormLabel>
            <FormControl type="text" name="company" value={company} placeholder="Company" maxLength={100} id="id_company" onChange={(e) => setCompany(e.target.value)} />
          </FormGroup>

          {/* Title */}
          <FormGroup>
            <FormLabel htmlFor="id_title">Title:</FormLabel>
            <FormControl type="text" name="title" value={title} placeholder="Title" maxLength={100} id="id_title" onChange={(e) => setTitle(e.target.value)} />
          </FormGroup>

          {/* Bio */}
          <FormGroup>
            <FormLabel htmlFor="id_bio">Bio:</FormLabel>
            <FormControl as="textarea" name="bio" value={bio} placeholder="About me" maxLength={2500} id="id_bio" onChange={(e) => setBio(e.target.value)} />
          </FormGroup>

          {/* Email */}
          <FormGroup>
            <FormLabel htmlFor="id_email">Email:</FormLabel>
            <FormControl type="text" name="email" value="mails.admin@gmail.com" placeholder="Email" maxLength={254} required disabled id="id_email" />
          </FormGroup>

          {/* Website */}
          <FormGroup>
            <FormLabel htmlFor="id_website">Website:</FormLabel>
            <FormControl type="text" name="website" value={website} placeholder="Website" id="id_website" onChange={(e) => setWebsite(e.target.value)} />
          </FormGroup>

          {/* Submit button */}
          <div className="form-actions pull-right text-right " style={{
            display: 'flex',
            justifyContent: 'flex-end',
            paddingTop: '20px'
          }}>
            <Button type="submit" variant="primary">Save</Button>
          </div>
        </Form>
      </Col>
    </div>
   </div>
  );
};

export default ProfileForm;
