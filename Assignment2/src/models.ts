import * as Yup from "yup";

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  original_price: number;
  description: string;
  images: string;
}

export const productSchema = Yup.object({
  name: Yup.string().required("( Không được bỏ trống )"),
  images: Yup.string().required("( Không được bỏ trống )"),
  price: Yup.number().required("( Không được bỏ trống )"),
  original_price: Yup.number().required("( Không được bỏ trống )"),
  description: Yup.string().required("( Không được bỏ trống )"),
  _id: Yup.string(),
  __v: Yup.string(),
});

export type ProductForm = Yup.InferType<typeof productSchema>;

export const signupSchema = Yup.object({
  firstName: Yup.string().required("( Không được bỏ trống )"),
  lastName: Yup.string().required("( Không được bỏ trống )"),
  email: Yup.string()
    .email("( Email không đúng định dạng )")
    .required("( Không được bỏ trống )"),
  password: Yup.string()
    .min(6, "( Yêu cầu trên 6 ký tự )")
    .required("( Không được bỏ trống )"),
  confirmPassword: Yup.string()
    .min(6, "( Yêu cầu trên 6 ký tự )")
    .oneOf([Yup.ref("password")], "( Mật khẩu không trùng khớp )"),
});

export type SignupForm = Yup.InferType<typeof signupSchema>;

export const signinSchema = Yup.object({
  email: Yup.string()
    .email("( Email không đúng định dạng )")
    .required("( Không được bỏ trống )"),
  password: Yup.string()
    .min(6, "( Yêu cầu trên 6 ký tự )")
    .required("( Không được bỏ trống )"),
});

export type SigninForm = Yup.InferType<typeof signinSchema>;
