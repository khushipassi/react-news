import { NavLink, useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Card = (props) => {
  // console.log(props)

    // const {id}=useParams();
    // console.log("id",id);
    // const {data:news,isPending,error}=useFetch('http://localhost:8000/news/'+id);
    // const history=useNavigate();

    // console.log(id);

    const handleClick=()=>{
        // fetch('http://localhost:8000/news/'+news.id,{
        //     method:'DELETE'
        // }).then(()=>{
        //     console.log('news deleted');
        //     history('/extra')
        // })
    }

  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt={props.title} style={{minHeight:"35vh"}}/>
          <div className="card-body">
            {props.source && <Badge bg="danger">{props.source}</Badge>}
            <h5 className="card-title">{props.title}</h5>
            {props.body && (<p className="card-body">{props.body}</p>)}

            {props.author && (<p style={{color:'grey'}}>{props.author}</p>)}
            {props.publishedAt && (<p style={{color:'grey'}}>{new Date(props.publishedAt).toGMTString() } </p>)}
            {props.type && (<p>{props.type}</p>)}

            <NavLink
              to={`/${props.url}`}
              className="btn text-warning bg-dark font-weight-bold"
            >
              Visit
            </NavLink>

            {props.type && 
            (<NavLink className="btn text-warning bg-dark font-weight-bold" onClick={handleClick}>
              Remove
            </NavLink>)
            }   
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
