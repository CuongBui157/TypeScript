import { useEffect, useState } from "react";
import { getAll } from "../../api/product";
import HeaderAdmin from "../../components/layout/headerAdmin";
import { Link, useNavigate } from "react-router-dom";
import { IProduct } from "../../models";

const ListProducts = () => {
  const user = localStorage.user;
  const navigate = useNavigate();

  if (!user) {
    useEffect(() => {
      navigate("/signin");
    });
    return <></>;
  } else if (!user.IsAdmin) {
    useEffect(() => {
      navigate("/");
    });
  } else {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
      const {
        data: { data },
      } = await getAll();
      console.log(data);
      setProducts(data);
    };

    useEffect(() => {
      fetchProducts();
    }, []);
    return (
      <>
        <HeaderAdmin />
        <div>
          <div className="flex justify-around p-[15px]">
            <p className=" text-[25px] font-bold">Danh sách sản phẩm</p>
            <Link to={"/admin/add"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 hover:text-green-500">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          </div>
          <table className="table table-auto m-auto border border-gray-400">
            <thead className=" bg-gray-400">
              <tr>
                <th className="border border-gray-400 px-[20px] py-[10px]">
                  #
                </th>
                <th className="border border-gray-400 px-[20px] py-[10px]">
                  Tên sản phẩm
                </th>
                <th className="border border-gray-400 px-[20px] py-[10px]">
                  Ảnh
                </th>
                <th className="border border-gray-400 px-[20px] py-[10px]">
                  Thành tiền
                </th>
                <th className="border border-gray-400 px-[20px] py-[10px]">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: IProduct) => {
                return (
                  <>
                    <tr>
                      <td className="border border-gray-400 px-[20px] py-[10px]">
                        {product._id}
                      </td>
                      <td className="border border-gray-400 px-[20px] py-[10px]">
                        {product.name}
                      </td>
                      <td className="border border-gray-400 px-[20px] py-[10px]">
                        <img
                          className=" w-[100px]"
                          src={product.images}
                          alt=""
                        />
                      </td>
                      <td className="border border-gray-400 px-[20px] py-[10px]">
                        {product.price}
                      </td>
                      <td className="border border-gray-400 px-[20px] py-[10px]">
                        <Link
                          to={`/admin/edit/${product._id}`}
                          state={{ _id: product._id }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-7 h-7">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                        </Link>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
};

export default ListProducts;
