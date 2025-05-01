import "./News.css"
import ItemNew from "../components/ItemNew.jsx"
function News({gamingNews}){
    return(
        <div className="DivNews">
            {gamingNews.map((i)=>(
                <ItemNew key={i} gamingNew={i}></ItemNew>
            ))}
        </div>
    )
}
export default News