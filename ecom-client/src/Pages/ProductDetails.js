import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaStar ,FaThumbsUp, FaThumbsDown} from "react-icons/fa";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProductDetails.css";
import { useCart } from "./CreateContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  const [rating, setRating] = useState(-1);
  const [error, setError] = useState("");
  const [reviewData, setReviewData] = useState({ ratings: 0, reviews: 0 });
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [showAddToCartToast, setShowAddToCartToast] = useState(false);

  
  // Use the custom hook to get cart context
  

  useEffect(() => {
    fetchProductDetails();
    fetchReviewData();
  }, []);

  const fetchReviewData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5035/reviews?productId=${productId}`);
      const data = await response.json();
      setReviews(data); // Update the state with fetched data
    } catch (error) {
      console.error("Error fetching review data:", error);
    }
  };
  
  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5001/products/${productId}`
      );
      console.log("Response:", response.data); // Log the response data
      setProductDetails(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
      setError("Error fetching product details");
    }
  };

  const calculateOffer = () => {
    const mrp = parseFloat(productDetails.mrp);
    const sp = parseFloat(productDetails.sp);

    if (!isNaN(mrp) && !isNaN(sp) && mrp > sp) {
      const discount = mrp - sp;
      const offerPercentage = (discount / mrp) * 100;
      return offerPercentage.toFixed(2);
    }

    return 0;
  };

  const handleAddToCart = (event, product) => {
    event.preventDefault();
    addToCart(product); // Add the product to the cart using addToCart function
    console.log("Adding to cart:", product);
  
    // Display a toast message indicating that the product was added to the cart
    toast.success("Added to Cart!");
    setShowAddToCartToast(true);
  };
  

  const handleBuyNow = (event, product) => {
    event.preventDefault();
    addToCart(product); // Add the product to the cart using addToCart function
    console.log("Adding to cart:", product);
    navigate("/Cart"); // Navigate to the Cart page
  };

  const handleSubmitReview = async (event) => {
    event.preventDefault();
  
    if (rating === -1) {
      toast.error("Please select a star rating before submitting the review.");
      return;
    }
  
    const reviewText = event.target.reviewText.value;
    const formData = {
      productId: productId, // Add productId to the formData
      starRating: rating,
      comment: reviewText,
      username: 'JohnDoe',
    };
  
    try {
      const response = await axios.post('http://127.0.0.1:5035/reviews', formData);
      console.log('Review successfully submitted');
      // Add the new review to the current reviews state
      setReviews([...reviews, response.data]);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };
  

  const handleLikeDislike = async (reviewId, action) => {
    try {
      const response = await axios.post(`http://127.0.0.1:5035/reviews/${reviewId}/${action}`);
      console.log("Updated review response:", response.data);
      const updatedReviews = reviews.map(review =>
        review._id === reviewId ? response.data : review
      );
      setReviews(updatedReviews);
    } catch (error) {
      console.error("Error updating like/dislike:", error);
    }
  };
  

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h2>{productDetails.productName}</h2>
          <div className="product-images">
            {productDetails.productImages &&
            productDetails.productImages.length > 0 ? (
              <Carousel showArrows={true} showStatus={false} showThumbs={false}>
                {productDetails.productImages.map((image, index) => (
                  <div key={index}>
                    <img
                      src={`http://127.0.0.1:5001/uploads/${image}`}
                      alt={`Product ${index}`}
                      width="500"
                      height="500"
                    />
                  </div>
                ))}
              </Carousel>
            ) : (
              <p>No images available</p>
            )}
          </div>
          <div className="product-pricing-box">
            <p className="product-name">{productDetails.productName}</p>
            <div className="price-container">
              <p className="product-price">
                <span className="product-mrp"> </span>
                <span className="strikethrough">₹ {productDetails.mrp}</span>
              </p>
              &nbsp;&nbsp;
              <p className="product-sp"> ₹ {productDetails.sp}</p>
            </div>
            <p className="product-offer">
              ({calculateOffer(productDetails.mrp, productDetails.sp)}% off)
            </p>
            <p className="availability">
              Availability:{" "}
              <span
                className={`availability-status ${
                  productDetails.availability === 0
                    ? "out-of-stock"
                    : "in-stock"
                }`}
              >
                {productDetails.availability === 0
                  ? "Out Of Stock"
                  : "In Stock"}
              </span>
            </p>
            <div className="ratings-reviews">
              <p className="product-ratings">{reviewData.ratings} Ratings &</p>
              <p className="product-reviews">{reviewData.reviews} Reviews</p>
            </div>

            <div className="product-savings">
              You Saved:{" "}
              <span className="savings-amount">
                ₹ {productDetails.mrp - productDetails.sp}
              </span>{" "}
              (<div className="product-taxes">Inclusive of all taxes</div>)
            </div>

            <div className="buttons">
              <button
                className="add-to-cart-button"
                onClick={(event) => handleAddToCart(event, productDetails)}
              >
                Add to Cart
              </button>

              <Link to="/Cart">
                <button
                  className="buy-now-button"
                  onClick={(event) => handleBuyNow(event, productDetails)}
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>

          <hr className="hr-1" />
          <div className="name-2">
            <h2>{productDetails.productName}</h2>
            <hr />
          </div>
          <div className="prod-info">
            <h3>Product Information</h3>
            <p>{productDetails.productDescription}</p>
          </div>
          <hr />

          <div className="sp-info">
            <h3>SPECIFIC INFORMATION</h3>
            <div className="info-columns">
              <div className="left-column">
                <div className="row">
                  <p className="heading">Occasion</p>
                  <span className="colon">:</span>
                  <p>{productDetails.occasion}</p>
                </div>
                <div className="row">
                  <p className="heading">Primary Color</p>
                  <span className="colon">:</span>
                  <p>{productDetails.primaryColor}</p>
                </div>
                <div className="row">
                  <p className="heading">Material</p>
                  <span className="colon">:</span>
                  <p>{productDetails.material}</p>
                </div>
                <div className="row">
                  <p className="heading">Border Type</p>
                  <span className="colon">:</span>
                  <p>{productDetails.borderType}</p>
                </div>
                <div className="row">
                  <p className="heading">Color Family</p>
                  <span className="colon">:</span>
                  <p>{productDetails.colorFamily}</p>
                </div>
              </div>
              <div className="right-column">
                <div className="row">
                  <p className="heading">Fabric</p>
                  <span className="colon">:</span>
                  <p>{productDetails.fabric}</p>
                </div>
                <div className="row">
                  <p className="heading">Secondary Color</p>
                  <span className="colon">:</span>
                  <p>{productDetails.secondaryColor}</p>
                </div>
                <div className="row">
                  <p className="heading">Pattern</p>
                  <span className="colon">:</span>
                  <p>{productDetails.pattern}</p>
                </div>
                <div className="row">
                  <p className="heading">Border Size</p>
                  <span className="colon">:</span>
                  <p>{productDetails.borderSize}</p>
                </div>
                <div className="row">
                  <p className="heading">Type</p>
                  <span className="colon">:</span>
                  <p>{productDetails.type}</p>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="review-box">
            <h3>Write a Review</h3>
            <form className="review-form" onSubmit={handleSubmitReview}>
  {/* Review form inputs */}
  <textarea name="reviewText" placeholder="Write your review..." />
  <div className="star-rating">
    {Array.from({ length: 5 }).map((_, index) => (
      <label key={index}>
        <input
          type="radio"
          name="rating"
          value={index + 1}
          onChange={() => setRating(index + 1)}
        />
        <FaStar
          className="star"
          color={index < rating ? "#ffc107" : "#e4e5e9"}
        />
      </label>
    ))}
  </div>
  <button type="submit" disabled={rating === -1}>Submit</button>
</form>

          </div>
          <hr />
          <div className="reviews-section">
        <h3>Reviews</h3>
        <ul className="reviews-list">
          {reviews.slice(0, showAllReviews ? reviews.length : 3).map((review, index) => (
            <li key={index} className="review-item">
              <p className="review-username">{review.username}</p>
              <div className="star-rating">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    className="star"
                    color={starIndex < review.starRating ? "#ffc107" : "#e4e5e9"}
                  />
                ))}
              </div>
              <p className="review-comment">{review.comment}</p>
              <div className="like-dislike-section">
              <div className="like-dislike-button">
  <FaThumbsUp
    className="like-icon"
    onClick={() => handleLikeDislike(review._id, "like")}
  />
  <span className="like-dislike-count">{review.likes}</span>
</div>
<div className="like-dislike-button">
  <FaThumbsDown
    className="dislike-icon"
    onClick={() => handleLikeDislike(review._id, "dislike")}
  />
  <span className="like-dislike-count">{review.dislikes}</span>
</div>

              </div>
            </li>
          ))}
        </ul>
        {reviews.length > 3 && (
          <button
            className="see-all-reviews-button"
            onClick={() => setShowAllReviews(!showAllReviews)}
          >
            {showAllReviews ? "Show Less Reviews" : "See All Reviews"}
          </button>
        )}
      </div>

        </div>
      )}
       {showAddToCartToast &&<ToastContainer position="top-center" autoClose={3000} />}
    </div>
  );
};

export default ProductDetails;
