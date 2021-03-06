import React from 'react';
import { Row, Col, Icon, Button, Input } from 'react-materialize';
import { Link } from 'react-router-dom';

class ContactEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      jobTitle: '',
      email: '',
      linkedInProfile: '',
      workPhone: '',
      personalPhone: '',
      howWeMet: '',
      notes: '',
    };
    this.submit = this.submit.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeJobTitle = this.onChangeJobTitle.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeLinkedInProfile = this.onChangeLinkedInProfile.bind(this);
    this.onChangeWorkPhone = this.onChangeWorkPhone.bind(this);
    this.onChangePersonalPhone = this.onChangePersonalPhone.bind(this);
    this.onChangeHowWeMet = this.onChangeHowWeMet.bind(this);
    this.onChangeNotes = this.onChangeNotes.bind(this);
    this.loadContact = this.loadContact.bind(this);
  }
  componentDidMount() {
    this.loadContact();
  }
  onChangeFirstName(e) {
    this.setState({ firstName: e.target.value });
  }
  onChangeLastName(e) {
    this.setState({ lastName: e.target.value });
  }
  onChangeJobTitle(e) {
    this.setState({ jobTitle: e.target.value });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangeLinkedInProfile(e) {
    this.setState({ linkedInProfile: e.target.value });
  }
  onChangeWorkPhone(e) {
    this.setState({ workPhone: e.target.value });
  }
  onChangePersonalPhone(e) {
    this.setState({ personalPhone: e.target.value });
  }
  onChangeHowWeMet(e) {
    this.setState({ howWeMet: e.target.value });
  }
  onChangeNotes(e) {
    this.setState({ notes: e.target.value });
  }
  loadContact() {
    fetch(`/api/contacts/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          firstName: data.firstName,
          lastName: data.lastName,
          jobTitle: data.jobTitle,
          email: data.email,
          linkedInProfile: data.linkedInProfile,
          workPhone: data.workPhone,
          personalPhone: data.personalPhone,
          howWeMet: data.howWeMet,
          notes: data.notes,
        });
      });
  }
  submit(e) {
    e.preventDefault();
    const contact = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      jobTitle: this.state.jobTitle,
      email: this.state.email,
      linkedInProfile: this.state.linkedInProfile,
      workPhone: this.state.workPhone,
      personalPhone: this.state.personalPhone,
      howWeMet: this.state.howWeMet,
      notes: this.state.notes,
      jobId: this.props.jobId,
    };

    fetch(`/api/contacts/${this.props.match.params.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    }).then(res => res.json())
      .then(data =>
        console.log('contact edited', data));
  }
  render() {
    return (
      <div>
        <form className="contact-form" onSubmit={this.submit}>
          <Row>
            <Col s={6}>
              <label className="active" htmlFor="firstname">
                First Name
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.onChangeFirstName} />
              </label>
            </Col>
            <Col s={6}>
              <label className="active" htmlFor="lastname">
                Last Name
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.onChangeLastName} />
              </label>
            </Col>
            <Col s={6}>
              <label className="active" htmlFor="jobtitle">
                Job Title
                <input type="text" name="jobtitle" value={this.state.jobTitle} onChange={this.onChangeJobTitle} />
              </label>
            </Col>
            <Col s={6}>
              <label className="active" htmlFor="email">
                Email
                <input type="text" name="email" value={this.state.email} onChange={this.onChangeEmail} />
              </label>
            </Col>
            <Col s={12}>
              <label className="active" htmlFor="linkedInProfile">
                LinkedIn Profile
                <input type="text" name="linkedInProfile" value={this.state.linkedInProfile} onChange={this.onChangeLinkedInProfile} />
              </label>
            </Col>
            <Col s={6}>
              <label className="active" htmlFor="workPhone">
                Work Phone
                <input type="text" name="workPhone" value={this.state.workPhone} onChange={this.onChangeWorkPhone} />
              </label>
            </Col>
            <Col s={6}>
              <label className="active" htmlFor="personalPhone">
                Personal Phone
                <input type="text" name="personalPhone" value={this.state.personalPhone} onChange={this.onChangePersonalPhone} />
              </label>
            </Col>
            <Col s={6}>
              <label className="active" htmlFor="howWeMet">
                How We Met
                <textarea className="materialize-textarea" name="howWeMet" value={this.state.howWeMet} onChange={this.onChangeHowWeMet} />
              </label>
            </Col>
            <Col s={6}>
              <label className="active" htmlFor="notes">
                Notes
                <textarea className="materialize-textarea" name="notes" value={this.state.notes} onChange={this.onChangeNotes} />
              </label>
            </Col>
          </Row>
          <Button type="submit">Save</Button>
          <span className="btn-space">
            <Link className="waves-effect waves-light btn" to="/home/dashboard/job/contacts">Cancel</Link>
          </span>
        </form>
      </div>
    );
  }
}
export default ContactEdit;
