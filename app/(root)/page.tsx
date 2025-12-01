import sampleData from "@/db/sample-data";
import ProductList from "@/components/product/product-list";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = async () => {
  // await delay(1000);
  return (
    <>
      <ProductList data={sampleData.products} title="New Arrival" limit={4} />
    </>
  );
};

export default Homepage;
