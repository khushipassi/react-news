import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { removeToCart } from "../redux";
import {ImBin} from 'react-icons/im'

function Wishlist(props) {
    console.log('propshi',props)
    return(
        <div className="container my-4">
        <h3>
            <u>WISHLIST</u>
        </h3>
        <div className="conatiner d-flex justify-content-center align-items-center flex-column my-3" id="wishlist" style={{minHeight:"100vh"}}> 
            {props.cartData? props.cartData.length==0 ? "WISHLIST IS EMPTY...." : props.cartData.map((items,index)=>(     
              <div key={index} className="container my-3" style={{width:"600px", boxShadow:"2px 2px 10px silver", borderRadius:"10px",borderStyle:'solid' ,borderColor:'#000000', borderWidth:'2px'}}>
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

                <div>
                  <NavLink className="view_button" style={{marginRight:"425px"}} to={items.url} target="blank">View More</NavLink>
                  <ImBin className="ImBin" onClick={()=>props.removeToCart(items.title)} style={{width:'50px',height:'30px'}}/>
                </div>

            </div>
          
        ))  
        :"Loading..."}
      </div>
    </div>
    )
}


const mapStateToProps=state=>{
  return{
    cartData:state.cart.cartData
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    removeToCart:title=>dispatch(removeToCart(title)),

  }
}
  

export default connect(mapStateToProps,mapDispatchToProps)(Wishlist)
