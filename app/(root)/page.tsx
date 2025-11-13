import { Button } from "@/components/ui/button";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const Homepage = async () => {
  await delay(1000);

  return (
    <>
      <h1>AndyOud Store</h1>
      <Button>Hello world</Button>
    </>
  );
};

export default Homepage;
