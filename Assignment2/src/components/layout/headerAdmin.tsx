import { Link } from "react-router-dom";

const HeaderAdmin = () => {
  if (localStorage.user) {
    const data = localStorage.user;
    const user = JSON.parse(data);

    return (
      <>
        <div className="flex flex-auto justify-between items-center gap-[10px] bg-red-600 px-[30px]">
          <Link to={"/"}>
            <img className="w-[150px]" src="/logo.png" alt="" />
          </Link>
          <input
            type="text"
            className="w-[700px] h-[35px] rounded-lg px-[10px] text-[15px]"
            placeholder="Tìm kiếm"
          />
          <p className=" text-[20px] text-white font-bold font-sans">
            Xin chào {user.firstname +" "+ user.lastname}
          </p>
        </div>
      </>
    );
  } else {
      return <></>
  }
};

export default HeaderAdmin;
