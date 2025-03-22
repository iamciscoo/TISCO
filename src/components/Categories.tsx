
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryProps {
  title: string;
  image: string;
  link: string;
  index: number;
}

const categories = [
  {
    title: "Electronics",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&q=80",
    link: "/products?category=Electronics"
  },
  {
    title: "Clothing",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80",
    link: "/products?category=Clothing"
  },
  {
    title: "Home",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80",
    link: "/products?category=Home"
  }
];

const CategoryCard: React.FC<CategoryProps> = ({ title, image, link, index }) => {
  const delay = 200 + (index * 100);

  return (
    <Link 
      to={link}
      className={`group relative overflow-hidden rounded-md h-80 opacity-0 animate-fade-in`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 z-10"></div>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover object-center transition-transform duration-700 ease-spring group-hover:scale-105 filter grayscale-[0.3] group-hover:grayscale-0"
      />
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="px-6 py-3 frosted-glass rounded-md">
          <h3 className="text-xl font-medium text-white">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

const Categories: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <h2 className="text-3xl font-medium tracking-tight mb-10 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard 
              key={category.title}
              title={category.title}
              image={category.image}
              link={category.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
