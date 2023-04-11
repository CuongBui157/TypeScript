import { useEffect, useState } from "react";
import Product from "../components/product";
import { IProduct } from "../models";
import { getAll } from "../api/product";

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    const {
      data: { data },
    } = await getAll();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className=" px-[10px]">
        <h1 className="my-[20px] mx-[20px] font-bold text-[22px] text-[#444444]">
          Điện thoại nổi bật
        </h1>
        <div className="flex flex-wrap gap-y-[30px] gap-x-[20px] my-[20px]">
          {products.map((product) => (
            <Product data={product} key={product._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
