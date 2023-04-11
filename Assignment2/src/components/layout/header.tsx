import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()

    if (localStorage.user) {
        const data = localStorage.user
        const user = JSON.parse(data)

        function logout() {
            delete user.accessToken
            localStorage.removeItem('user');
            navigate('/')
        }

        if (user._IsAdmin && user._IsAdmin == true) {
            return <>
                <header className="bg-red-500 h-[64px] px-[3%]">
                    <div className="container h-[64px] flex gap-4 justify-between items-center">
                        <img className="w-[150px]" src="/logo.png" alt="" />
                        <input className="grow-1 w-[55%] h-[34px] rounded-lg p-[10px] text-[12px]" type="text" placeholder="search" />
                        <button className=" bg-white leading-[34px] px-[15px] rounded-md h-[34px] hover:bg-gray-300 flex justify-evenly" onClick={logout} type="submit">Đăng xuất <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 leading-[34px] pt-[8px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                        </button>
                        <Link className=" bg-white leading-[34px] px-[15px] rounded-md h-[34px] hover:bg-gray-300 flex justify-evenly" to={"/admin"}>Trang quản trị</Link>
                    </div>
                </header>
            </>
        } else {
            return <>
                <header className="bg-red-500 h-[64px] px-[3%]">
                    <div className="container h-[64px] flex gap-4 justify-between items-center">
                        <img className="w-[150px]" src="/logo.png" alt="" />
                        <input className="grow-1 w-[55%] h-[34px] rounded-lg p-[10px] text-[12px]" type="text" placeholder="search" />
                        <button className=" bg-white leading-[34px] px-[15px] rounded-md h-[34px] hover:bg-gray-300 flex justify-evenly" onClick={logout} type="submit">Đăng xuất <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 leading-[34px] pt-[8px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                        </button>
                    </div>
                </header>
            </>
        }

        
    } else {
        return <>
                <header className="bg-red-500 h-[64px] px-[3%]">
                    <div className="container h-[64px] flex gap-4 justify-between items-center">
                        <img className="w-[150px]" src="/logo.png" alt="" />
                        <input className="grow-1 w-[55%] h-[34px] rounded-lg p-[10px] text-[12px]" type="text" placeholder="search" />
                        <a className=" bg-white leading-[34px] px-[15px] rounded-md h-[34px] hover:bg-gray-300" href="/signin">Đăng nhập</a>
                    </div>
                </header>
            </>
    }
}

export default Header
