import { useForm } from "react-hook-form";
import { ProductForm, productSchema } from "../../models";
import { yupResolver } from "@hookform/resolvers/yup";
import { addProduct } from "../../api/product";
import { useNavigate } from "react-router";
import HeaderAdmin from "../../components/layout/headerAdmin";
import { useEffect } from "react";

const AddProduct = () => {
  const user = localStorage.user;
  const navigate = useNavigate();
  console.log(user);

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
    const { register, handleSubmit } = useForm<ProductForm>({
      resolver: yupResolver(productSchema),
    });

    const navigate = useNavigate();

    const onSubmit = async (data: ProductForm) => {
      try {
        const response = await addProduct(data);
        navigate("/admin");
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <>
        <HeaderAdmin />
        <h1 className=" text-[25px] font-bold py-[10px] px-[160px]">
          Thêm mới sản phẩm
        </h1>
        <div className=" m-auto w-[730px] p-[40px] bg-gray-300 rounded-lg">
          <h1 className="text-[20px] text-center my-[5px]">
            Thông tin sản phẩm
          </h1>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="groupInput my-[5px]">
              <label className="text-[18px]" htmlFor="">
                Tên sản phẩm
              </label>
              <br />
              <input
                {...register("name")}
                className="border border-black rounded-md px-[10px] w-full text-[14px] leading-[30px]"
                type="text"
              />
            </div>
            <div className="groupInput my-[5px]">
              <label className="text-[18px]" htmlFor="">
                Ảnh
              </label>
              <br />
              <input
                {...register("images")}
                className="border border-black rounded-md px-[10px] w-full text-[14px] leading-[30px]"
                type="text"
              />
            </div>
            <div className="w-[520px] flex flex-row justify-between">
              <div className="groupInput my-[5px]">
                <label className="text-[18px]" htmlFor="">
                  Giá gốc
                </label>
                <br />
                <input
                  {...register("original_price")}
                  className="border border-black rounded-md px-[10px] w-[170%] text-[14px] leading-[30px]"
                  type="text"
                />
              </div>
              <div className="groupInput my-[5px]">
                <label className="text-[18px]" htmlFor="">
                  Giá khuyến mãi
                </label>
                <br />
                <input
                  {...register("price")}
                  className="border border-black rounded-md px-[10px] w-[170%] text-[14px] leading-[30px]"
                  type="text"
                />
              </div>
            </div>
            <div className="groupInput my-[5px]">
              <label className="text-[18px]" htmlFor="">
                Mô tả
              </label>
              <br />
              <textarea
                {...register("description")}
                className="border border-black rounded-md p-[10px] w-full h-[150px] text-[14px] leading-[16px]"></textarea>
            </div>
            <button className="text-[18px] my-[5px] bg-red-400 p-[10px] rounded-lg border border-black hover:bg-red-500">
              Thêm mới
            </button>
          </form>
        </div>
      </>
    );
  }
};

export default AddProduct;
