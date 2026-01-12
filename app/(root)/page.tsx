import ProductList from "@/components/product/product-list";
// import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = async () => {
  // await delay(1000);
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} title="New Arrival" limit={6} />
    </>
  );
};

export default Homepage;
