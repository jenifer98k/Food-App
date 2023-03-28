import { Link } from "react-router-dom";
export default  function Navbar() {

  return (
  <div className="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="http://localhost:3000/">LOgO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
<div class="collapse navbar-collapse " id="navbarNav">
  {/*------------------------ul for navbar -----------------------------*/}
  <div className="navbar1">
 <ul class="navbar-nav">


  <li class="nav-item">
  <a class="nav-link " aria-current="page" href="#">
<Link to="/service" >OurServices</Link>
</a>
 </li>  
        <li class="nav-item">
        <a class="nav-link" href="#"> 

          <Link to="/variety">Variety Of Foods</Link>
           </a>
        </li>
        <li class="nav-item"> <a class="nav-link" href="#">
        <Link to="/contact"> Contact</Link> </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> 

         <Link to="/about"> About Us</Link></a>
        </li>
        <li class="nav-item login">
          <a class="nav-link" href="#"> 
          <i class="bi bi-person"></i>
         <Link to="/login">Login</Link></a>
        </li>
</ul>


  </div>
    

  
    
  </div>
 </div>
</nav>
  </div>

  );
}