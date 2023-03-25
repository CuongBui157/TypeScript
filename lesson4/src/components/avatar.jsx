const Avatar = (props) => {
    return <div className="flex items-center">
        <h2>Bui Tien Cuong</h2>
        <img className="border-2 border-red-600 rounded-[10%]" src="https://images.pexels.com/photos/14656123/pexels-photo-14656123.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <p>Project Manager</p>
        <button onClick={props.showInfo} className="bg-pink-600">Show Info</button>
    </div>
}

export default Avatar
