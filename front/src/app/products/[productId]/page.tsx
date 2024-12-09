
import { getProductById } from "@/helpers/products.helpers";
import ProductsDetail from "@/views/ProductsDetail/ProductsDetail";

const ProductDetail = async ({ params }: { params: { productId: string } }) => {
  const product = await getProductById (params.productId)
  return (
    <div>
      <ProductsDetail  {...product}/>
    </div>
  );
};

export default ProductDetail;


