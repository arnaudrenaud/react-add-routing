import React from "react";
import { Link } from "react-router-dom";
import { Card, Grid, Image, Rating } from "semantic-ui-react";
import "./RestaurantThumbnail.css";

const truncate = expression => `${expression.slice(0, 150)}…`;

const RestaurantThumbnail = ({ restaurant }) => (
  <Grid.Column stretched>
    <Card fluid link as={Link} to={`/restaurants/${restaurant.id}`}>
      <div className="restaurant-thumbnail-image-container">
        <Image className="restaurant-thumbnail-image" src={restaurant.image_url} />
      </div>
      <Card.Content>
        <Card.Header>{restaurant.name}</Card.Header>
        <Card.Meta>
          {restaurant.mainCategory}{" "}
          {restaurant.secondaryCategory
            ? `(${restaurant.secondaryCategory})`
            : null}
          <Rating
            className="restaurant-thumbnail-rating"
            defaultRating={restaurant.editorial_rating}
            disabled
            maxRating={5}
          />
        </Card.Meta>
        <Card.Description>
          {restaurant.description
            ? truncate(restaurant.description)
            : truncate(restaurant.annotation)}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <address>
          <strong className="restaurant-thumbnail-area">{restaurant.area}</strong>
          {restaurant.address}, {restaurant.city}
        </address>
      </Card.Content>
    </Card>
  </Grid.Column>
);

export default RestaurantThumbnail;
