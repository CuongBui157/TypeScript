import Avatar from "./components/avatar"

// Props: Là một đối tượng, để truyền dữ liệu từ cha xuống con, nhưng không có chiều ngược lại
// Props: Immutable >< mutable
const App = () => {
    const user = {
        name: "Bui Tien Cuong",
        role: "Student"
    }
    return <>
        <h1>Hello</h1>
        <Avatar user={user} showInfo={ ()=>console.log(user.name)} />
    </>
}

export default App
