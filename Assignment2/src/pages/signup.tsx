import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { SignupForm, signupSchema } from '../models'
import { signup } from '../api/auth'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const { register, handleSubmit,formState:{errors}} = useForm<SignupForm>({
        resolver: yupResolver(signupSchema)
    })

    const navigate = useNavigate()

    const onSubmit = async (data: SignupForm) => {
        try {
            const { confirmPassword, ...rest } = data
            const response = await signup(rest)
            console.log(response)
            navigate('/signin')
        } catch (err) {
            console.log(err)
        }
    }

    return <>
        <div className="w-[800px] m-auto mt-[100px] flex">
            <div className="w-[500px] bg-gray-200 rounded-l-[20px] px-[45px] py-[20px]">
               <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-[20px] text-center mb-[10px] font-bold">Đăng ký</h1>
                    <div className="fullname flex gap-[20px]">
                        <div className="groupInput mb-[10px]">
                            <label className="text-[15px]" htmlFor="">FirstName</label><span className=' mx-[5px] text-red-600 text-[10px]'>{errors.firstName && errors.firstName.message}</span><br />
                            <input {...register('firstName')} className="w-[190px] h-[30px] rounded-md leading-[30px] text-[15px] px-[5px]"/>
                        </div>
                        <div className="groupInput mb-[10px]">
                            <label className="text-[15px]" htmlFor="">LastName</label><span className=' mx-[5px] text-red-600 text-[10px]'>{errors.lastName && errors.lastName.message}</span><br />
                            <input {...register('lastName')} className="w-[190px] h-[30px] rounded-md leading-[30px] text-[15px] px-[5px]"/>
                        </div>
                    </div>
                    <div className="groupInput mb-[10px]">
                        <label className="text-[15px]" htmlFor="">Email</label><span className=' mx-[5px] text-red-600 text-[10px]'>{errors.email && errors.email.message}</span><br />
                        <input {...register('email')} className="w-[400px] h-[30px] rounded-md leading-[30px] text-[15px] px-[5px]"/>
                    </div>
                    <div className="groupInput mb-[10px]">
                        <label className="text-[15px]" htmlFor="">Mật khẩu</label><span className=' mx-[5px] text-red-600 text-[10px]'>{errors.password && errors.password.message}</span><br />
                        <input {...register('password')} className="w-[400px] h-[30px] rounded-md leading-[30px] text-[15px] px-[5px]" type="password"/>
                    </div>
                    <div className="groupInput mb-[10px]">
                        <label className="text-[15px]" htmlFor="">Nhập lại mật khẩu</label><span className=' mx-[5px] text-red-600 text-[10px]'>{errors.confirmPassword && errors.confirmPassword.message}</span><br />
                        <input {...register('confirmPassword')} className="w-[400px] h-[30px] rounded-md leading-[30px] text-[15px] px-[5px]" type="password"/>
                    </div>
                    <a className="underline text-blue-400 hover:text-blue-800 py-[10px]" href="/signin">Đăng nhập</a>
                    <button className="w-[400px] bg-red-400 h-[40px] rounded-md mt-[15px] hover:bg-red-500">Tạo tài khoản</button>
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

export default SignUp
