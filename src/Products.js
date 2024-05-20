import React, { useState } from 'react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleDetails, setVisibleDetails] = useState({});
  const [experiences, setExperiences] = useState({});

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

  const products = [
    {
      category: 'summer',
      img: 'products.jpg',
      name: 'Tire A',
      price: 90,
      description: 'Can handle high temperature and Dry environment',
      experienceLabel: 'experience',
    },
    {
      category: 'summer',
      img: 'products.jpg',
      name: 'Tire B',
      price: 70,
      description: 'Can handle high temperature and muddy environment',
      experienceLabel: 'experience2',
    },
    {
      category: 'winter',
      img: 'Products2.jpg',
      name: 'Tire C',
      price: 60,
      description: 'Can handle Low temperature and snow environment',
      experienceLabel: 'experience3',
    },
  ];

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
                  {product.name}

                </button>

                {visibleDetails[index] && (

                  <div className="product-details">

                    <strong>${product.price}</strong>
                    <p>{product.description}</p>
                    <strong>User Experience</strong>
                    <p>George: good overall.</p>

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

                      <input type="text" id={product.experienceLabel} name={product.experienceLabel} /><br /><br />
                      <input type="submit" value="Add Your Experience" />

                    </form>
                    <button>Add to Cart</button>
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