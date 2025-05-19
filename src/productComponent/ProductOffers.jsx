import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductOffers = (hotel) => {
  const [offers, setoffers] = useState([]);

  const { productId } = useParams();

  const retrieveAllReviews = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/product/offer/fetch/product?productId=" +
        productId
    );
    return response.data;
  };

  useEffect(() => {
    const getAllOffers = async () => {
      const alloffers = await retrieveAllReviews();
      if (alloffers) {
        setoffers(alloffers);
      }
    };

    getAllOffers();
  }, []);



  return (
    <div
      class="list-group form-card border-color"
      style={{
        height: "34rem",
      }}
    >
      <div class="list-group-item list-group-item-action bg-color custom-bg-text">
        <b>Current Bids</b>
      </div>
      <div
        style={{
          overflowY: "auto",
        }}
      >
        {offers.map((offer) => {
          return (
            <div class="list-group-item list-group-item-action text-color custom-bg">
              <b className="text-color1">
                User: {offer.user.id  + offer.user.lastName.charAt(2)+offer.user.lastName.charAt(0)}

                {(() => {
                  if (offer.product.status === "Sold") {
                    if (offer.status === "Won") {
                      return <b className="text-success"> [WON]</b>;
                    }
                  }
                })()}
              </b>
              <br />
              <p>{offer.amount} BitsCoins</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductOffers;
