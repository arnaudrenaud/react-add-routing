import React, { Component } from "react";
import { Button, Container, Grid, GridRow, Loader } from "semantic-ui-react";
import "./RestaurantList.css";
import RestaurantThumbnail from "./RestaurantThumbnail";

const NUMBER_OF_RESTAURANTS_PER_ROW = 3;

const getRestaurantsGroupedBy = (restaurants, groupSize) => {
  const groups = Array.from(
    {
      length: Math.ceil(restaurants.length / groupSize)
    },
    () => []
  );
  return restaurants.reduce((groups, restaurant, index) => {
    const groupIndex = Math.floor(index / groupSize);
    const groupToPushTo = groups[groupIndex];
    groupToPushTo.push(restaurant);
    return groups;
  }, groups);
};

class Restaurants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      pageNumber: 0
    };

    this.showNextResults = this.showNextResults.bind(this);
  }

  showNextResults() {
    const nextPageNumber = this.state.pageNumber + 1;
    fetch(
      `https://paris-restaurants-api.herokuapp.com/restaurants/?_page=${nextPageNumber}&_limit=15`
    )
      .then(response => response.json())
      .then(nextRestaurants => {
        this.setState({
          restaurants: [...this.state.restaurants, ...nextRestaurants],
          pageNumber: nextPageNumber
        });
      });
  }

  componentDidMount() {
    this.showNextResults();
  }

  render() {
    const restaurants = this.state.restaurants;
    return restaurants.length ? (
      <div>
        <Container className="restaurant-list-container">
          <Grid stackable columns={NUMBER_OF_RESTAURANTS_PER_ROW} centered>
            {getRestaurantsGroupedBy(
              restaurants,
              NUMBER_OF_RESTAURANTS_PER_ROW
            ).map((row, rowIndex) => (
              <GridRow stretched key={rowIndex}>
                {row.map((restaurant, restaurantIndex) => (
                  <RestaurantThumbnail restaurant={restaurant} key={restaurantIndex} />
                ))}
              </GridRow>
            ))}
          </Grid>
        </Container>
        <Container className="button-show-next-results-container">
          <Button onClick={this.showNextResults}>
            Voir plus de restaurants
          </Button>
        </Container>
      </div>
    ) : (
      <Loader active />
    );
  }
}

export default Restaurants;
