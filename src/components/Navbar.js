import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { countryChange,languageChange ,sourceChange} from "../redux";
import {IoMdCreate} from 'react-icons/io'
import store from "../redux/store";
import { useState } from "react";

const Navbar = (props) => {

//   const [country,setCountry]=useState("in")

console.log("okay",props)

  const handleChange=(e)=>{
    return function(dispatch){
        dispatch(countryChange(e.target.value))
    }
  }

  const langChange=(e)=>{
    return function(dispatch){
        dispatch(languageChange(e.target.value))
    }
  }

  const sourceChange=(e)=>{
    return function(dispatch){
        dispatch(sourceChange(e.target.value))
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                style={{ marginRight: "0px" }}
                src="https://t3.ftcdn.net/jpg/02/51/76/76/360_F_251767657_U6qXLSQj5aK252ZrFgw4V31CikggLT1g.jpg"
                alt="news_logo"
                height="60px"
                className="image"
              />
            </Link>
          <Link className="navbar-brand" to="/">
            NEWS Hub
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                <img
                  style={{ marginRight: "10px",  marginTop:'4px' }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAeHj-Vg0zO_78nEf5H1pqeVJlQrshOWAbAA&usqp=CAU"
                  alt="home"
                  height="48px"
                  className="image"
                />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Weather"
                >
                <img
                  style={{ marginRight: "2px" }}
                  src="data:image/png;base64,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"
                  alt="weather"
                  height="48px"
                  className="image"
                />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Wishlist"
                >
                <img
                  style={{ marginRight: "10px" }}
                  src="https://cdn.imgbin.com/16/3/18/imgbin-online-shopping-shopping-cart-logo-e-commerce-market-ZB0j7BGkzwjLHhMxSKi37nGKD.jpg"
                  alt="wishlist"
                  height="60px"
                  className="image"
                />
                </Link>
              </li>
              <li>
                <Link
                className="nav-link active"
                aria-current="page"
                to="/create">
                  <IoMdCreate style={{ marginRight: "8px", fontSize:'45px' , marginTop:'4px'}}/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">

          <div style={{height:"110%", width:"40%"}}>
            <select defaultValue='' onChange={(e)=>store.dispatch(langChange(e))} style={{height:"100%", width:"20%"}}>
              <option value="ar">ar</option>
              <option value="de">de</option>
              <option value="en">en</option>
              <option value="es">es</option>
              <option value="fr">fr</option>
              <option value="he">he</option>
              <option value="it">it</option>
              <option value="nl">nl</option>
              <option value="no">no</option>
              <option value="pt">pt</option>
              <option value="ru">ru</option>
              <option value="sv">sv</option>
              <option value="ud">ud</option>
              <option value="zh">zh</option>
            </select>
          </div>

          <div style={{height:"110%", width:"40%"}}>
            <select defaultValue='' onChange={(e)=>store.dispatch(sourceChange(e))} style={{height:"100%", width:"20%"}}>
              <option value="abc-news">ar</option>
              <option value="abc-news-au">de</option>
              <option value="aftenposten">en</option>
              <option value="al-jazeera-english">es</option>
              <option value="ansa">fr</option>
              <option value="argaam">he</option>
              <option value="axios">it</option>
              <option value="bbc-news">nl</option>
              <option value="bbc-sport">no</option>
              <option value="bild">pt</option>
              <option value="blasting-news-br">ru</option>
              <option value="buzzfeed">buzzfeed</option>
              <option value="cbc-news">sv</option>
              <option value="cbs-news">ud</option>
              <option value="cnn">zh</option>
              <option value="entertainment-weekly">ud</option>
              <option value="espn">zh</option>
            </select>
          </div>

          <div style={{height:"110%", width:"60%"}}>
            <select defaultValue="IN" onChange={(e)=>store.dispatch(handleChange(e))} style={{height:"100%", width:"20%"}}>
              <option value="AE">United Arab Emirates</option>
              <option value="AR">Argentina</option>
              <option value="AT">Austria</option>
              <option value="AU">Australia</option>
              <option value="BE">Belgium</option>
              <option value="BG">Bulgaria</option>
              <option value="BR">Brazil</option>
              <option value="CA">Canada</option>
              <option value="CH">Switzerland</option>
              <option value="CN">China</option>
              <option value="CO">Colombia</option>
              <option value="CU">Cuba</option>
              <option value="CZ">Czech Republic</option>
              <option value="DE">Germany</option>
              <option value="EG">Egypt</option>
              <option value="FR">France</option>
              <option value="GB">United Kingdom</option>
              <option value="IN">India</option>
            </select>
          </div>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/General"
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/Business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/Entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/Health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/Science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/Sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/Technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
 
    </div>
  );
};


const mapStateToProps=state=>{
    return{
      country:state.country.country,
      language:state.language.language,
      source:state.source.source
    }
  }
  
  const mapDispatchToProps=dispatch=>{
    return{
        countryChange:country=>dispatch(countryChange(country)),
        languageChange:language=>dispatch(languageChange(language)),
        sourceChange:source=>dispatch(sourceChange(language)),
        

      }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
