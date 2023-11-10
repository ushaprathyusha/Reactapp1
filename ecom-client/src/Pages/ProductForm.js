import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productImages: [],
    productDescription: "",
    occasion: "",
    primaryColor: "",
    material: "",
    borderType: "",
    colorFamily: "",
    fabric: "",
    secondaryColor: "",
    pattern: "",
    borderSize: "",
    type: "",
    review: "",
    starRating: 0,
    mrp: "",
    sp: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      productImages: [...prevFormData.productImages, ...e.target.files],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("productName", formData.productName);

      formData.productImages.forEach((image, index) => {
        formDataToSubmit.append(`productImages`, image);
      });

      formDataToSubmit.append(
        "productDescription",
        formData.productDescription
      );
      formDataToSubmit.append("occasion", formData.occasion);
      formDataToSubmit.append("primaryColor", formData.primaryColor);
      formDataToSubmit.append("material", formData.material);
      formDataToSubmit.append("borderType", formData.borderType);
      formDataToSubmit.append("colorFamily", formData.colorFamily);
      formDataToSubmit.append("fabric", formData.fabric);
      formDataToSubmit.append("secondaryColor", formData.secondaryColor);
      formDataToSubmit.append("pattern", formData.pattern);
      formDataToSubmit.append("borderSize", formData.borderSize);
      formDataToSubmit.append("type", formData.type);
      formDataToSubmit.append("review", formData.review);
      formDataToSubmit.append("starRating", formData.starRating);
      formDataToSubmit.append("mrp", formData.mrp);
      formDataToSubmit.append("sp", formData.sp);

      const response = await axios.post(
        "http://localhost:5006/products",
        formDataToSubmit,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);
      setError("");
      alert("Product added successfully.");
    } catch (error) {
      console.error(error);
      setError("Internal Server Error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Product Images:</label>
          <input
            type="file"
            name="productImages"
            onChange={handleImageChange}
            multiple
            required
          />
          <div className="image-preview-container">
            {formData.productImages.map((image, index) => (
              <div key={index} className="image-preview">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Product ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <label>Product Description:</label>
          <textarea
            name="productDescription"
            value={formData.productDescription}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Occasion:</label>
          <input
            type="text"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Primary Color:</label>
          <input
            type="text"
            name="primaryColor"
            value={formData.primaryColor}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Material:</label>
          <input
            type="text"
            name="material"
            value={formData.material}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Border Type:</label>
          <input
            type="text"
            name="borderType"
            value={formData.borderType}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Color Family:</label>
          <input
            type="text"
            name="colorFamily"
            value={formData.colorFamily}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Fabric:</label>
          <input
            type="text"
            name="fabric"
            value={formData.fabric}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Secondary Color:</label>
          <input
            type="text"
            name="secondaryColor"
            value={formData.secondaryColor}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Pattern:</label>
          <input
            type="text"
            name="pattern"
            value={formData.pattern}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Border Size:</label>
          <input
            type="text"
            name="borderSize"
            value={formData.borderSize}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Review:</label>
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Star Rating:</label>
          <input
            type="number"
            name="starRating"
            value={formData.starRating}
            onChange={handleChange}
            min={1}
            max={5}
            required
          />
        </div>
        <div>
          <label>MRP:</label>
          <input
            type="number"
            name="mrp"
            value={formData.mrp}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>SP:</label>
          <input
            type="number"
            name="sp"
            value={formData.sp}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={submitting}>
          {submitting ? "Adding Product..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
