import ProductList from "@/components/shared/product/product-list";
import {
  getLatestProducts,
  getFeaturedProducts,
} from "@/lib/actions/product.actions";
// import sampleData from "@/db/sample-data";
import ProductCarousel from "@/components/shared/product/product-carousel";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = async () => {
  // await delay(1000);
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();

  return (
    <>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList data={latestProducts} title="New Arrival" limit={4} />
    </>
  );
};

export default Homepage;
