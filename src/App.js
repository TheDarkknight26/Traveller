import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData, getWeatherData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import SocialMediaLinks from './components/SocialMediaLinks/SocialMediaLinks';
import CustomerReviews from "./components/CustomerReviews/CustomerReviews";
import { LoadScript } from "@react-google-maps/api";
import UserReviewForm from "./components/CustomerReviews/UserReviewForm";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(0);
  const [weatherData, setWeatherData] = useState([]);
  const [autocomplete, setAutocomplete] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    setFilteredPlaces(places.filter((place) => place.rating > rating));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);
  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      getWeatherData(coordinates.lat, coordinates.lng).then((data) =>
        setWeatherData(data)
      );
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data);
        setFilteredPlaces([]);
        setIsLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, bounds]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  return (
    <React.Fragment>
      <LoadScript
        googleMapsApiKey={"AIzaSyCpXOZgIIhv3y40tWMv1yYckc3YgYPYpn8"}
        libraries={["places", "geometry", "drawing"]}
      >
        <CssBaseline />
        <Header onLoad={onLoad} onPlaceChanged={onPlaceChanged} />
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12} md={6}>
            <List
              places={filteredPlaces.length ? filteredPlaces : places}
              childClicked={childClicked}
              isLoading={isLoading}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={filteredPlaces.length ? filteredPlaces : places}
              setChildClicked={setChildClicked}
              weatherData={weatherData}
            />
          </Grid>
          <Grid item>
            <div>
              <h1>Customer Reviews</h1>
              <UserReviewForm onReviewSubmit={handleReviewSubmit} />

              <div>
                {reviews.map((review, index) => (
                  <div key={index}>
                    <p>Review by: {review.name}</p>
                    <p>{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
          <Grid item>
            <CustomerReviews></CustomerReviews>
          </Grid>
          <Grid item>
             <h1>Connect with us on Social Media:</h1>
              <SocialMediaLinks/>
         </Grid>
        </Grid>
      </LoadScript>
    </React.Fragment>
  );
};

export default App;
