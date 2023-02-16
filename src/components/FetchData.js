import axios from 'axios'
import { useEffect,useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchUsersRequest,fetchUsersSuccess,fetchUsersFailure,addToCart } from "../redux";
import store from "../redux/store";
import {FaSave,FaRegSave} from 'react-icons/fa'
import Badge from 'react-bootstrap/Badge';
// import {
//     Card,
//     CardMedia,
//     CardContent,
//     CardActions,
//     Typography,
//     IconButton
//   } from "@material-ui/core";
//   import useStyles from "./fetch.css"


const FetchData = (props) => {
  console.log("new",props)

  const fetchUsers=()=>{

    return function(dispatch){

        dispatch(fetchUsersRequest())
        axios.get(
          props.source? 
          (props.language?
          `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&language=${props.language}&apiKey=e38e2182b6874a9383c8181af82df96b`:
          `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&apiKey=e38e2182b6874a9383c8181af82df96b`):
          `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=e38e2182b6874a9383c8181af82df96b`)


          props.cat? 
          (props.language?
          `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&language=${props.language}&apiKey=e38e2182b6874a9383c8181af82df96b`:
          `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&apiKey=e38e2182b6874a9383c8181af82df96b`):
          `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=e38e2182b6874a9383c8181af82df96b`)

  
        .then(response=>{
            const data=response.data.articles
            dispatch(fetchUsersSuccess(data))
        })
        .catch(error=>{
            dispatch(fetchUsersFailure(error.message))
        })
  
    }
  }

  useEffect(()=>{
    store.dispatch(fetchUsers());
  },[props.country,props.language,props.cat,props.source])

  return (
    <div className="container my-4" id="fetch_data">
      <h3 style={{textAlign:'center'}}>
        <u>{props.cat}</u>
      </h3>
      <div className="conatiner d-flex justify-content-center align-items-center flex-column my-3" style={{minHeight:"100vh"}}> 
        {props.users? props.users.map((items,index)=>(  
            <div key={index} className="container my-3" style={{width:"600px", boxShadow:"2px 2px 10px silver", borderRadius:"10px",borderStyle:'solid' ,borderColor:'#000000', borderWidth:'2px'}}>
              <Badge bg="danger">{items.source.name}</Badge>
              <h5 className='my-2'>{items.title}</h5>
              <div className='d-flex justify-content-center align-items-center'>
                <img 
                src={items.urlToImage} 
                alt="Image Not Found"
                className='img-fluid' 
                style={{
                  width:"100%",
                  height:"300px",
                  objectFit:"cover"}}
                />
              </div>
              <p>{items.content}</p>
              <p style={{color:'grey'}}>{items.author ?`${items.author}` : `Unknown author`} on {new Date(items.publishedAt).toGMTString()}</p>
              <NavLink className="view_button font-weight-bold" style={{marginRight: "420px"}} to={items.url} target="blank">View More</NavLink>
              <FaSave className='fasave' style={{width:'50px',height:'40px'}} onClick={()=>props.addToCart(items)}/>
            </div>
          
        ))
        
        :"Loading..."}
      </div>
    </div>





    // <main className={classes.content}>
    //     <h2 style={{ fontWeight: "bold", textAlign: "center" }}>{props.cat}</h2>
    //     <div className={classes.toolbar} />

    //     <Grid container justify="center" spacing={4}>

    //       {props.users? props.users.map
    //       ((product,index) => 
    //       (
    //         <Grid item key={index} xs={12} sm={6} md={4} lg={3}>

    //           <Card className={classes.root}>
    //             <CardMedia
    //               className={classes.media}
    //               image={product.urlToImage}
    //               title={product.title}
    //             />
    //             <CardContent>
    //               <div className={classes.cardContent}>
    //                 <Typography gutterBottom variant="h5">
    //                   {product.content}
    //                 </Typography>
    //                 <Typography variant="h5">{product.price}</Typography>
    //               </div>
    //               <Typography variant="body2" color="textsecondary">
    //                 {product.description}
    //               </Typography>
    //             </CardContent>
          
    //             <CardActions disablespacing className={classes.cardActions}>
    //               <IconButton aria-label="Add to Cart">
    //                 <AddShoppingCart />
    //               </IconButton>
    //             </CardActions>
    //           </Card>

    //         </Grid>
    //       )
    //       ):"Loading..."}
    //     </Grid>
    //   </main>
  );
};

const mapStateToProps=state=>{
  return{
    loading:state.fetch.loading,
    users:state.fetch.users,
    error:state.fetch.error,
    country:state.country.country,
    language:state.language.language,
    source:state.source.source
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    fetchUsersRequest:()=>dispatch(fetchUsersRequest()),
    fetchUsersSuccess:users=>dispatch(fetchUsersSuccess(users)),
    fetchUsersFailure:error=>dispatch(fetchUsersFailure(error)),
    addToCart:data=>dispatch(addToCart(data)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FetchData);
