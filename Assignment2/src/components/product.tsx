import { IProduct } from "../models"
import { Link } from "react-router-dom"

type Props = {
    data: IProduct,
}

const Product = ({ data }: Props) => { 

    return <>
        <div className="flex-row p-[15px] w-[230px] hover:bg-gray-200 rounded-md">
            <Link to={`/detail/${data._id}`} state={{id : data._id}}>
                    <img className="w-[160px] mx-[20px] my-[10px]" src={data.images} alt="" />
                    <h3 id="my-image" className="text-[#444444] text-sm mb-[27px] hover:text-red-400">{data.name}</h3>
                    <div className="flex mb-[13px]">
                        <p className="text-[#D70018] text-base hover:text-red-400">{data.price}đ</p>
                        <span className="text-[#707070] text-sm"><del>{data.original_price}đ</del></span>
                    </div>
                    <div className="flex justify-start">
                        <img src="./Frame.svg" alt="" />
                        <img src="./Frame.svg" alt="" />
                        <img src="./Frame.svg" alt="" />
                        <img src="./Frame.svg" alt="" />
                        <img src="./Frame.svg" alt="" />
                        <span className="text-[#444444] text-xs">72 đánh giá</span>
                    </div>
                </Link>
            </div>
    </>
}

export default Product
