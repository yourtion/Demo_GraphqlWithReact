import React, { Component } from 'react';

class CreateShortLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      url: '',
    };
  }

  createShortLink = async () => {
    // Create a short link here.
  };

  render() {
    return (
      <div>
        <input
          id="url"
          type="text"
          value={this.state.url}
          placeholder="Link URL"
          onChange={e => this.setState({ url: e.target.value })}
        />
        <input
          id="description"
          type="text"
          value={this.state.description}
          placeholder="Link description"
          onChange={e =>
            this.setState({ description: e.target.value })
          }
        />
        <button onClick={() => this.createShortLink()}>Create</button>
      </div>
    );
  }
}

export default CreateShortLink;
