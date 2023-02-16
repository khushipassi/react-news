import Items from "../dataItems/items"
import Card from "../components/Card"
import Hero from "../components/Hero";

function Common() {

    return (
        <>
        <Hero/>
          <div className="my-5">
            <h1 className="text-center">CATEGORIES</h1>
          </div>

          <div className="container-fluid mb-5">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row gy-4">
                  {Items.map((val, index) => {
                    return (
                      <Card
                        key={index}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        url={val.url}
                        id={val.id}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>


        {/* <section className="portfolio bg-dark" id="portfolio" mb-5>
        <div className="container text-center">
          <h1 className="text-warning">PORTFOLIO</h1>
          <p className="text-white">Here is a preview of our work</p>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={p1} className="card-img img-fluid" alt="p1" />
                <div className="card-body">
                  <h2 className="card-tiltle"> Threads </h2>
                  <p className="card-text"> Illustration </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={p2} className="card-img img-fluid" alt="p2" />
                <div className="card-body">
                  <h2 className="card-tiltle"> Explore </h2>
                  <p className="card-text"> Graphic Design </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={p3} className="card-img img-fluid" alt="p3" />
                <div className="card-body">
                  <h2 className="card-tiltle"> Finish </h2>
                  <p className="card-text"> Identity </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={p4} className="card-img img-fluid" alt="p4" />
                <div className="card-body">
                  <h2 className="card-tiltle"> Lines </h2>
                  <p className="card-text"> Branding </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={p5} className="card-img img-fluid" alt="p5" />
                <div className="card-body">
                  <h2 className="card-tiltle"> Southwest </h2>
                  <p className="card-text"> Website Design </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={p6} className="card-img img-fluid" alt="p6" />
                <div className="card-body">
                  <h2 className="card-tiltle"> Window </h2>
                  <p className="card-text"> Photography </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
        </>
    );
}

export default Common