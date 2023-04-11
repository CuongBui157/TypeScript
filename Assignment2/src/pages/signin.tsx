import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { SigninForm, signinSchema } from '../models';
import { signin } from '../api/auth';
import { useLocalStorage } from '../hooks';

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SigninForm>({
        resolver: yupResolver(signinSchema)
    })

    const navigate = useNavigate()
    const [user, setUser] = useLocalStorage("user", null)

    const onSubmit = async (dataForm: SigninForm) => {
        try {
            const response = await signin(dataForm)
            const {data:{accessToken,user}} = response.data
            setUser({
                accessToken,...user
            })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    

    return <>
        <div className="w-[800px] m-auto mt-[100px] flex">
            <div className="w-[500px] bg-gray-200 rounded-l-[20px] px-[45px] py-[20px]">
               <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-[20px] text-center mb-[10px] font-bold">Đăng nhập</h1>
                    <div className="groupInput mb-[10px]">
                        <label className="text-[15px]" htmlFor="">Email</label><span className=' mx-[5px] text-red-600 text-[10px]'>{errors.email && errors.email.message}</span><br />
                        <input {...register('email')} className="w-[400px] h-[30px] rounded-md leading-[30px] text-[15px] px-[5px]"/>
                    </div>
                    <div className="groupInput mb-[10px]">
                        <label className="text-[15px]" htmlFor="">Mật khẩu</label><span className=' mx-[5px] text-red-600 text-[10px]'>{errors.password && errors.password.message}</span><br />
                        <input {...register('password')} className="w-[400px] h-[30px] rounded-md leading-[30px] text-[15px] px-[5px]" type="password"/>
                    </div>
                    <a className="underline text-blue-400 hover:text-blue-800 py-[10px]" href="/signup">Tạo tài khoản</a>
                    <button className="w-[400px] bg-red-400 h-[40px] rounded-md mt-[15px] hover:bg-red-500">Đăng nhập</button>
                </form>
                <div className="mt-[20px]">
                    <p className="text-center">Hoặc đăng nhập bằng</p>
                    <div className="flex justify-center gap-[20px] mt-[10px]">
                        <img className=" hover:scale-[1.2] ease-out duration-200" src="/facebook.png" alt="" />
                        <img className=" hover:scale-[1.2] ease-out duration-200" src="/google.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="w-[300px] bg-gray-300 rounded-r-[20px] flex items-center">
                <img className="w-[300px] px-[50px]" src="/logo.png" alt="" />
            </div>
        </div>
    </>
}

export default SignIn
