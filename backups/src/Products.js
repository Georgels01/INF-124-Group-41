import React, { useState, useEffect } from 'react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleDetails, setVisibleDetails] = useState({});
  const [experiences, setExperiences] = useState({});

  // Hardcoded products for testing
  const hardcodedProducts = [

  ];

  // State for products which starts with hardcoded products
  const [products, setProducts] = useState(hardcodedProducts);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(data => setProducts([...hardcodedProducts, ...data])) // Combine fetched products with hardcoded
      .catch(error => console.error('Error loading products:', error));
  }, []);

  const categoryClick = (category) => {
    setSelectedCategory(category);
  };

  const detailsClick = (index) => {
    setVisibleDetails((prevVisibleDetails) => ({
      ...prevVisibleDetails,
      [index]: !prevVisibleDetails[index],
    }));
  };

  const submitExp = (index, experience) => {
    setExperiences((prevExperiences) => {
      const productExperiences = prevExperiences[index] || [];
      return {
        ...prevExperiences,
        [index]: [...productExperiences, experience],
      };
    });
  };

const addToCart = async (product) => {
  try {
    const response = await fetch('http://localhost:3000/api/addToCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ product }),
    });
    const data = await response.json();
    alert(data.message);  // Notify user about success
  } catch (error) {
      console.error('Error adding product to cart:', error);
      alert('Failed to add product to cart.');  // Notify user about failure
  }
};

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="Home.css" />
      <title>Products</title>
      <header>
        <h1>Products</h1>
      </header>
      <main>
        <section className="filter">
          <h2>Filter</h2>
          <ul className="categories">
            <li onClick={() => categoryClick('all')} data-category="all">All</li>
            <li onClick={() => categoryClick('winter')} data-category="winter">Winter</li>
            <li onClick={() => categoryClick('summer')} data-category="summer">Summer</li>
          </ul>
        </section>
        <section className="gallery-section">
          {products
            .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
            .map((product, index) => (
              <div key={index} className="button" data-category={product.category}>
                <img src={product.img} alt={product.name} />
                <p>{product.name}</p>
                <button className="details-button" onClick={() => detailsClick(index)}>
                  Details
                </button>
                {visibleDetails[index] && (
                  <div className="product-details">
                    <strong>${product.price}</strong>
                    <p>{product.description}</p>
                    <strong>User Experience</strong>
                    {experiences[index] && experiences[index].map((exp, expIndex) => (
                      <p key={expIndex}>{exp}</p>
                    ))}
                    <form onSubmit={(exp) => {
                      exp.preventDefault();
                      const experience = exp.target.elements[product.experienceLabel].value;
                      if (experience) {
                        submitExp(index, experience);
                        exp.target.elements[product.experienceLabel].value = '';
                      }
                    }}>
                      <label htmlFor={product.experienceLabel}>Experience:</label>
                      <input type="text" id={product.experienceUserLabel} name={product.experienceLabel} /><br /><br />
                      <input type="submit" value="Add Your Experience" />
                    </form>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                  </div>
                )}
              </div>
            ))}
        </section>
      </main>
    </div>
  );
};

export default Products;