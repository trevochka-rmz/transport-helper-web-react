import "./ItemNew.css"
function ItemNew({gamingNew}){
    return(
        <div className="NewsDiv">
            <img src={gamingNew.img} alt="" />
            <h1>{gamingNew.title}</h1>
            <p>{gamingNew.text}</p>
        </div>
    )
}
export default ItemNew