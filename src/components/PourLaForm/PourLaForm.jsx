import React, { Component } from 'react'


export default class PourLaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      globalTitle: 'Default title'
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submitForm(e) {
    e.preventDefault();
    this.setState({globalTitle: `Mon formulaire - ${this.state.title}`})
    console.log("Titre changé.")
  }
  componentDidMount() {
    console.log('Formulaire rendu.')
  }
  componentDidUpdate() {
    console.log('State update.')
  }
  
  render() {
    return (
      <div className="pourLaForm">
        <h1>{this.state.globalTitle}</h1>
        <form onSubmit={this.submitForm}>
          <fieldset>
            <div className="form-data">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
            <div className="form-data">
              <input type="submit" value="Validate" />
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
