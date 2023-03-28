export default  function Login() {



 function submit(e) {
	
	e.preventDefault();
		//checkInputs();
		var username = document.getElementById('name').value;
		if (typeof username === 'string') {
			//alert('Variable is not a string');
		}
		else {
			
		}

		var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


var email = document.getElementById('email').value;
if(email.match(validRegex)){
	//alert(" valid email")
}
else{
	alert("enter valid email adress")
}
var password = document.getElementById('password').value;
if(password.length < 8 ){
	alert("enter minimun 8 characters ")}
   
 
 }
 return (
        
    <div className="container-fluid bg-secondary">
	<div class="row ">
			<h1>Login</h1>
	</div>
	
	<div class="row input-container" >
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text"  id="name" required />
					<label>Name</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input">
					<input type="text"  id="email"      required />
					<label>Email</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input">
					<input type="password"  id="password"    required />
					<label>password</label> 
				</div>

			<div class="col-xs-12">
				<div class="btn-lrg submit-btn" onClick={submit}>Send Message</div>
			</div>  </div>  </div>  </div> 
 ) }