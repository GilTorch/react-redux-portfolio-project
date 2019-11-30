import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mainColor } from "../utils/theme";

const Rating = props => {
  const setStars = () => {
    let stars = [];
    for (let i = 0; i < props.rating; i++) {
      stars.push(<FontAwesomeIcon icon="star" />);
    }

    return stars;
  };

  return <RatingStyle>{setStars()}</RatingStyle>;
};

const Course = props => (
  <CourseCard onClick={()=>props.history.push("/courses/1")}>
    <Cover>
      <img src={props.course.cover} />
    </Cover>
    <div className="course-infos">
      <Title>{props.course.title}</Title>
      <div className="price-and-rating-container">
        <PriceAndRating>
          <Price>{props.course.price} $</Price>
          <Rating rating={props.course.rating} />
        </PriceAndRating>
      </div>
      <div className="teacher-students">
        <div>
          <FontAwesomeIcon icon="people-carry" />
          {props.course.teacher}
        </div>
        <div>
          <FontAwesomeIcon icon="graduation-cap" />
          {props.course.students}
        </div>
      </div>
    </div>
  </CourseCard>
);

const CourseCard = styled.div`
  position: relative;
  width: 300px;
  margin: 10px;
  /* height:330px; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 10px;
  overflow: hidden;
  border-bottom: 6px solid ${mainColor};
  .course-infos {
    padding: 2px 16px;
  }
  .teacher-students {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor:pointer;
  }

  .price-and-rating-container {
    display: block;
    width: 100%;
    height: 0;
  }
`;
const Title = styled.h1`
  font-size: 1.5em;
  font-family: "Roboto Slab";
  font-weight: bold;
`;

const Cover = styled.div`
  height: 200px;
  overflow: hidden;
`;

const PriceAndRating = styled.div`
  position: relative;
  bottom: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.div`
  font-size: 2em;
  color: white;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
`;
const RatingStyle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.5em;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  color: yellow;
`;

export default Course;
