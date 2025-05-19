import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import star from "../images/star.png";

const GetProductReviews = (hotel) => {
  const [reviews, setReviews] = useState([]);

  const { productId } = useParams();

  const retrieveAllReviews = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/product/review/fetch?productId=" + productId
    );
    return response.data;
  };

  useEffect(() => {
    const getAllReviews = async () => {
      const allReviews = await retrieveAllReviews();
      if (allReviews) {
        setReviews(allReviews);
      }
    };

    getAllReviews();
  }, []);

  return (
    <div >
    </div>
  );
};

export default GetProductReviews;
