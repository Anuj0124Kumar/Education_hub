import React from "react";


export default function Navbar() {
//   <li>
//   <a className="dropdown-item" href="/">
//     one
//   </a>
// </li>


    let classSub = ["one","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];
  return (
    <>
   
      <nav className="navbar navbar-expand-lg " style={{backgroundColor: "#e3f2fd"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Education_hub....
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Student Log_In
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Study material
                </a>
                <ul className="dropdown-menu">
                   {classSub.map((sub,idx)=>{
                    return(
                      <li key={idx}>
                        <a className="dropdown-item" href="/">{sub}</a>
                      </li>
                    )
                   })}
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      
    </nav>
    </>
  );
}
