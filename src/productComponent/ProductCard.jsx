import { Link } from "react-router-dom";
import CategoryNavigator from "./CategoryNavigator";
import ChatButton from "../pages/ChatButton";
import WaterBottle from "../images/WaterBottle.jpg"
import M3Textbook from "../images/M3Textbook.png"
import ImageDisplay from './ImageDisplay';


const ProductCard = (product) => {

  return (
    <div className="col">

      <div class="card border-color rounded-card card-hover product-card custom-bg h-100">

        <img
          src={"http://localhost:3000/api/product/" + product.item.imageName}
          class="card-img-top rounded mx-auto d-block m-2"
          alt="image not found"
          style={{
            maxHeight: "270px",
            maxWidth: "100%",
            width: "auto",
          }}
        />

        <div class="card-body text-color">
          <h5 class="product title">
            <div>
              <b>{product.item.title}</b>
            </div>
            
          </h5>
          <h6>
          <CategoryNavigator
              item={{
                id: product.item.category.id,
                title: product.item.category.title,
              }}
            />
          </h6>
          <p className="card-text">
            <b>{product.item.description}</b>
          </p>
        </div>
        <div class="card-footer">
          <div className="text-center text-color">
            <p>
              <span>
                <h5>Price : {product.item.price} Bitscoin</h5>
              </span>
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <Link
              to={`/product/${product.item.id}/category/${product.item.category.id}`}
              className="blue-bold-button"
            >
              Buy Now
            </Link>

            <p class="text-color">
              <b>
                <i>Stock :</i> {product.item.quantity}
                
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
