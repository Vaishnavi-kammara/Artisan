import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { FaPlus } from 'react-icons/fa';
import axios from 'axios';
import './AddNewProduct.css';

const AddNewProduct = () => {
  const [hovered, setHovered] = useState(null);
  const [editing, setEditing] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [imageSize, setImageSize] = useState(200);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8089/api/products/getAll').then(response=>setProducts(response.data));
    console.log(products);
    // localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const handleAddClick = () => {
    setEditing(true);
  };

  const handleClose = () => {
    setEditing(false);
  };

  const handleImageSizeChange = (event) => {
    const size = parseInt(event.target.value) || 0;
    setImageSize(size);
  };

  // const postData=(e)=>{
  //   e.preventDefault();

  // }
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      imageUrl,
      title,
      price,
      imageSize
    };
    const addProduct=
    {
      "product_title":title,
      "status":1,
      "product_price":price,
      "product_description":"description",
      "product_url":imageUrl
    }

    setProducts([...products, newProduct]);
    setImageUrl('');
    setTitle('');
    setPrice('');
    setImageSize(200);
    setEditing(false);

  axios.post('http://localhost:8089/api/products/postProduct',addProduct).then(response=>{
    console.log(response.data);
  }).catch(error=>{
    console.log(error);
  })
  };

  const handleDeleteClick = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <div>
      {editing ? (
        <Card style={{ width: '18rem' }}>
          <CardBody className="form-card">
            <form onSubmit={handleSubmit}>
              <label htmlFor="imageUrl">Image URL:</label>
              <input type="text" id="imageUrl" name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <label htmlFor="price">Price:</label>
              <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
              <label htmlFor="imageSize">Image Size:</label>
              <input type="number" id="imageSize" name="imageSize" value={imageSize} onChange={handleImageSizeChange} />
              <div className="form-buttons">
                <Button color="primary" type="submit" >
                  Save
                </Button>
                <Button color="secondary" onClick={handleClose}>
                  Close
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      ) : (
        <div className="products-container">
          <div className="products-wrapper">
            {products.map((product, index) => (
              <Card key={index} style={{ width: '18rem' }}>
                <div
                  className={`image-container ${hovered === index ? 'hovered' : ''}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img alt="Sample" src={product.product_url} style={{ width: "200px" }} />
                  {hovered === index && (
                    <div className="image-overlay">
                      <Button color="primary" className="overlay-button">
                        View
                      </Button>
                      <Button color="danger" className="overlay-button" onClick={() => handleDeleteClick(index)}>
                        Delete
                      </Button>
                    </div>
                  )}
                </div>
                <CardBody>
                  <CardTitle tag="h5">{product.product_title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {product.product_price}
                  </CardSubtitle>
                </CardBody>
              </Card>
            ))}
          </div>
          <div className="add-button-container">
            <button className="add-button" onClick={handleAddClick}>
              <FaPlus />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewProduct;
