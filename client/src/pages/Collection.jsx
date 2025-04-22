import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductsContext from '../Context/CreateContext';
import Card from '../components/Card';
import './Collection.css';

function Collection() {
  const navigate = useNavigate()
  const allProducts = useContext(ProductsContext);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [type, setType] = useState([]);
  const [sort, setSort] = useState('');

  const handleChangeCategory = (e) => {
    if (e.target.checked) {
      setCategory((prev) => [...prev, e.target.value]);
    } else {
      setCategory((prev) => prev.filter((c) => c !== e.target.value));
    }
  };

  const handleChangeType = (e) => {
    if (e.target.checked) {
      setType((prev) => [...prev, e.target.value]);
    } else {
      setType((prev) => prev.filter((t) => t !== e.target.value));
    }
  };

  const handleChangeSort = (e) => {
    setSort(e.target.value);
  };

  const applyFiltersAndSort = () => {
    let filtered = allProducts;

    // Apply category filter
    if (category.length > 0) {
      filtered = filtered.filter(product => category.includes(product.category));
    }

    // Apply type filter
    if (type.length > 0) {
      filtered = filtered.filter(product => type.includes(product.subCategory));
    }

    // Apply sorting
    if (sort === 'High to Low') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sort === 'Low to High') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    }

    setProducts(filtered);
  };

  useEffect(() => {
    applyFiltersAndSort();
  }, [category, type, sort, allProducts]);

  const handleClickNavigate = (product) => {
    navigate('/product', {state: product})
  }

  return (
    <div className='collection-content'>
      {/* ------------------------aside left */}
      <div className="aside-left">
        <h2 className="head">FILTERS</h2>
        <div className="container-filter">
        <div className="filter">
          <h4>CATEGORIES</h4>
          <div className="input">
            <input type="checkbox" id="Men" value="Men" onChange={handleChangeCategory} />
            <label htmlFor="Men">Men</label>
          </div>
          <div className="input">
            <input type="checkbox" id="Women" value="Women" onChange={handleChangeCategory} />
            <label htmlFor="Women">Women</label>
          </div>
          <div className="input">
            <input type="checkbox" id="Kids" value="Kids" onChange={handleChangeCategory} />
            <label htmlFor="Kids">Kids</label>
          </div>
        </div>

        <div className="filter">
          <h4>TYPE</h4>
          <div className="input">
            <input type="checkbox" id="Topwear" value="Topwear" onChange={handleChangeType} />
            <label htmlFor="Topwear">Topwear</label>
          </div>
          <div className="input">
            <input type="checkbox" id="Bottomwear" value="Bottomwear" onChange={handleChangeType} />
            <label htmlFor="Bottomwear">Bottomwear</label>
          </div>
          <div className="input">
            <input type="checkbox" id="Winterwear" value="Winterwear" onChange={handleChangeType} />
            <label htmlFor="Winterwear">Winterwear</label>
          </div>
        </div>
        </div>

      </div>
      {/* aside left -----------------------------*/}

      {/* ------------------------aside right */}
      <div className="aside-right">
        <div className="topBarCollection">
          <h1>ALL COLLECTION</h1>
          <select name="sort" value={sort} onChange={handleChangeSort}>
            <option value="">Sort by: Relevant</option>
            <option value="High to Low">Sort by: High to Low</option>
            <option value="Low to High">Sort by: Low to High</option>
          </select>
        </div>

        {/* cards */}
        <div className="cards">
          {products.map((product) =>
            <Card
              key={product._id}
              image={product.image[0]}
              price={product.price}
              name={product.name}
              onClick={()=> {handleClickNavigate(product)}}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Collection;
