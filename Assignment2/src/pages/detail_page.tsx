import { useEffect, useState } from "react"
import DetailProduct from "../components/detail_product"
import { useParams } from "react-router-dom"
import { IProduct } from "../models"
import { getById } from "../api/product"

const DetailPage = () => {
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    
    const { id } = useParams()

    const fetchProduct = async () => {
        if (id) {
            const { data:{data} } = await getById(id)
            setProduct(data)
        }
        }

    useEffect(() => {
        fetchProduct()
    }, [])
    
    return <>
        <DetailProduct data={product} key={product._id} />
    </>
}
export default DetailPage
