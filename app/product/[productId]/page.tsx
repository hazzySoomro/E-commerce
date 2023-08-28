import Container from "@/app/components/Container";
import ProductDetails from "./productDetail";
import { product } from "@/utils/product";

interface IPrams {
  productId?: String;
}

const contactus = ({ params }: { params: IPrams }) => {
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};
export default contactus;
