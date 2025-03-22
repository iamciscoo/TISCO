
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProductDetail from '@/components/ProductDetail';
import { getProductById } from '@/lib/products';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!product && id) {
      navigate('/products', { replace: true });
    }
  }, [product, id, navigate]);

  if (!product) {
    return null;
  }

  return (
    <Layout>
      <div className="pt-24">
        <ProductDetail product={product} />
      </div>
    </Layout>
  );
};

export default ProductPage;
