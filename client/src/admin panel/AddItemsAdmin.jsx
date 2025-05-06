import React, { useRef, useState } from 'react';
import AdminLayout from './AdminLayout';
import './AddItemsAdmin.css';
import { assets } from '../assets/admin_assets/assets';
import axiosClient from '../components/axiosClient';

function AddItemsAdmin() {
  const Upload_area = assets.upload_area;
  const [images, setImages] = useState([null, null, null, null]);
  const fileInputRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Men');
  const [subCategory, setSubCategory] = useState('Topwear');
  const [price, setPrice] = useState('');
  const [selectedSize, setSelectedSize] = useState([]); 

  const [bestSeller, setBestSeller] = useState(false);
  const [imageFiles, setImageFiles] = useState([null, null, null, null]);
  const [errors, setErrors] = useState('')

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file || currentIndex === null) return;

    const newImageURLs = [...images];
    const newImageFiles = [...imageFiles];

    newImageURLs[currentIndex] = URL.createObjectURL(file);
    newImageFiles[currentIndex] = file;

    setImages(newImageURLs);
    setImageFiles(newImageFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', productName);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('subCategory', subCategory);
    formData.append('price', price);
    if (selectedSize && selectedSize.length > 0) {
      formData.append('sizes', JSON.stringify(selectedSize));
    } else {
      alert('Please select at least one size');
      return;
    }
    
    
    formData.append('bestseller', bestSeller ? 1 : 0);
    console.log('Form Data Here:', formData.get('bestseller'));


    imageFiles.forEach((file, index) => {
      if (file) {
        formData.append(`image${index + 1}`, file);
      }
    });

    try {
      await axiosClient.post('/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Product added successfully');
    } catch (err) {
      setErrors(err.response.data.errors)
      alert('error');
    }
    for (let pair of formData.entries()) {
      console.log(pair[0]+ ': ' + pair[1]);
    }
    

    
    
  };

  
  
  

  return (
    <AdminLayout>
      <div className="add-items-content">
        <form onSubmit={handleSubmit}>
          <div className='add-image-content'>
            <label>Upload Image</label>
            <div className="list-add-images">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img || Upload_area}
                  alt={`image-${index}`}
                  className="Add-image"
                  onClick={() => handleImageClick(index)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </div>

          <div className='input-content-admin'>
            <label htmlFor="name-p">Product Name</label>
            <input
              className='input-admin'
              type="text"
              id='name-p'
              placeholder='Type here'
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div className='input-content-admin'>
            <label htmlFor="desc-p">Product Description</label>
            <textarea
              className='input-admin'
              id='desc-p'
              placeholder='Write content here'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="select-group">
            <div className='select-content'>
              <label htmlFor="categ">Product category</label>
              <select id="categ" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>

            <div className='select-content'>
              <label htmlFor="Subcateg">Sub category</label>
              <select id="Subcateg" value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
                <option value="Topwear">Topwear</option>
                <option value="Bottomwear">Bottomwear</option>
                <option value="Winterwear">Winterwear</option>
              </select>
            </div>

            <div className='select-content'>
              <label htmlFor="price">Product Price</label>
              <input
                type="number"
                id='price'
                placeholder='25'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className='sizes-products-admin'>
            <label>Products Sizes</label>
            <div className="sizes-container">
              {sizes.map((size) => (
                <button
                key={size}
                type="button"
                className={`size-button ${selectedSize.includes(size) ? 'selected' : ''}`}
                onClick={() => {
                  if (selectedSize.includes(size)) {
                    setSelectedSize(selectedSize.filter(s => s !== size)); 
                  } else {
                    setSelectedSize([...selectedSize, size]); 
                  }
                }}
              >
                {size}
              </button>
              
              ))}
            </div>
          </div>

          <div>
            <input
              type="checkbox"
              id="bestSellers"
              checked={bestSeller}
              onChange={(e) =>{ setBestSeller(e.target.checked);
                console.log('bestSeller in input check:', e.target.checked)
              }
              }
              
            />
            <label htmlFor="bestSellers">bestSellers</label>
          </div>

          <button  type="submit" className='Add-product'>Add</button>
        </form>
      </div>
    </AdminLayout>
  );
}

export default AddItemsAdmin;