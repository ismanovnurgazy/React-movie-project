import { useState, useEffect } from "react";
import ReviewsItem from "../ReviewsItem";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const apiMovie = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=826ff55be219075fe0c51d998b696b2f&language=en-US&page=1`;

    axios.get(apiMovie).then(async (response) => {
      const data = await response.data;
      console.log(data);
      const { results } = data;
      setReviews(results);
    });
  }, [id]);
  return (
    <div className="wrapper">
      {reviews && (
        <>
          <ul className="reviewsList">
            {reviews.map((item) => (
              <ReviewsItem key={item.id} {...item} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
