import React, { Component } from "react";
import { Button, Header, Image, Loader, Modal } from "semantic-ui-react";

class RestaurantDetail extends Component {
  constructor(props) {
    super(props);

    this.state = { restaurant: this.props.restaurant || null };
  }

  componentDidMount() {
    if (!this.state.restaurant) {
      fetch(`https://paris-restaurants-api.herokuapp.com/restaurants/${this.props.id}`)
      .then(response => response.json())
      .then(restaurant => {
        this.setState({ restaurant })
      });
    }
  }

  render() {
    return this.state.restaurant ? (
      <Modal open>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
          />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            {this.state.restaurant.id}
            {this.state.restaurant.name}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    ) : <Modal open><Loader active /></Modal>;
  }
}

export default RestaurantDetail;
