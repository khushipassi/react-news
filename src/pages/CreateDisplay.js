// import { useNavigate, useParams} from "react-router-dom"

// const CreateDisplay=()=>{

//     const {id}=useParams();
//     console.log(id);
//     const {data:news,isPending,error}=useFetch('http://localhost:8000/news/'+id);
//     const history=useNavigate();

//     console.log(id);

//     const handleClick=()=>{
//         fetch('http://localhost:8000/news/'+news.id,{
//             method:'DELETE'
//         }).then(()=>{
//             console.log('news deleted');
//             history('/extra')
//         })
//     }



//     return(
//         <div className="blog-details">
//             {isPending && <div>Loading...</div>}
//             {error && <div>{error}</div>}

//             {news && (
//                 <article>
//                     <h2>{news.title}</h2>
//                     <p>Written by {news.author}</p>
//                     <div>{news.body}</div>
//                     <button onClick={handleClick}>Delete</button>
//                 </article>
//             )}
//         </div>
//     )

// }

// export default CreateDisplay;