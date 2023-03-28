import { Link } from "react-router-dom";
export default  function Body() {
  return (
    <div className="container-fluid">
      {/* --------------------------banner start------------------------------*/}
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://theparkrestauranttashkent.com/wp-content/uploads/2021/08/1.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://lh3.googleusercontent.com/p/AF1QipN6Hr2x5-P6_vBD7r7Xn25R4Yg7dZa7SMlwogl5=w1080-h608-p-no-v0" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://fmtmagazine.in/wp-content/uploads/2022/09/F1_The-Potential-of-Processed-Indian-Traditional-Foods-PITF-Still-Exists-in-India.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
    {/*banner  end--------------------------------------------------------------*/}
    {/*---------------------Explore foods---------------------------------------*/}
    <br></br><br></br>
    <h1 className="text-dark">Explore Foods Our Foods </h1>
    <br></br>
 
    <div class="container-fluid no-border">
  <div class="row no-border ">
    <div class="col-sm no-border">
    <div class="card-group no-border">
  <div class="card space-card no-border">
    <img class="card-img-top" src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content6553.jpg" alt="Card image cap"/>
    <div class="card-body ">
      <h5 class="card-title ">
      <Link to="/dosa" >Exlpore Dosa variety</Link>     
      </h5>
         </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card space-card no-border" >
    <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZOwZv2LoXp-GFSAzSdnmUC81vQY7ivDVLA&usqp=CAU" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">
      <Link to="/rice" >Explore Rice variety</Link>   
      </h5>
 </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card space-card no-border">
    <img class="card-img-top" src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content6553.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">
      <Link to="/south" >South Indians Dishes </Link>   
      </h5>
       </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card space-card no-border">
    <img class="card-img-top" src="https://www.tusktravel.com/blog/wp-content/uploads/2020/10/North-Indian-Food-Top-10-Must-Eat-Local-Dishes.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">North Indian Dishes</h5>
       </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
    </div>
  </div>
</div>


 

</div>
  );
}

