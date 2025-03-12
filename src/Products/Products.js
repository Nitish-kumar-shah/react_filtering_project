import { AiFillStar } from "react-icons/ai";
import { IoBagHandle } from "react-icons/io5";

import "./Products.css";
function Products() {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="Shoe"
            className="card-img"
          />
          <div className="cart-details">
            <h3 className="card-titel">Shoe</h3>
            <section className="card-reviews">
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                <del>$300</del> 200
              </div>

              <div className="bag">
                <IoBagHandle className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}

export default Products;
