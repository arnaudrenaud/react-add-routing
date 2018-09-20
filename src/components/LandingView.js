import React from "react";
import { Button, Dimmer, Header, Icon } from "semantic-ui-react";

const LandingView = () => (
  <Dimmer active page>
    <Header as="h2" icon inverted>
      <Icon name="food" />
      Site en construction
      <Header.Subheader>À tes risques et périls</Header.Subheader>
      <br />
      <Button>Trouver un resto</Button>
    </Header>
  </Dimmer>
);

export default LandingView;
