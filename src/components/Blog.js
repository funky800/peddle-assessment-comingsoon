import React from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import './styles/Blog.css';

function Blog(){

 const style1 ={
 	backgroundColor: "#9d789b",
 }
 const style2 ={
 	backgroundColor: "#7a81a8",
 }
 const style3={
 	backgroundColor: "#6d5b98",
 }
   
	return( 
		<div className="blogblock">
		<Navbar />
		<div className="blog">
		<section>
		  <div className="row d-flex justify-content-center">
		    <div className="col-md-10 col-xl-8 text-center">
		      <h3 className="mb-4">Lorem ipsum</h3>
		      <p className="mb-4 pb-2 mb-md-5 pb-md-0">
		        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
		        numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
		        quisquam eum porro a pariatur veniam.
		      </p>
		    </div>
		  </div>
		
		  <div className="row text-center">
		    <div className="col-md-4 mb-5 mb-md-0">
		      <div className="card testimonial-card">
		        <div className="card-up" style={style1}></div>
		        <div className="avatar mx-auto bg-white">
		          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt=""
		            className="rounded-circle img-fluid" />
		        </div>
		        <div className="card-body">
		          <h4 className="mb-4">Maria Smantha</h4>
		          <hr />
		          <p className="dark-grey-text mt-4">
		            <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet eos adipisci,
		            consectetur adipisicing elit.
		          </p>
		        </div>
		      </div>
		    </div>
		    <div className="col-md-4 mb-5 mb-md-0">
		      <div className="card testimonial-card">
		        <div className="card-up" style={style2}></div>
		        <div className="avatar mx-auto bg-white">
		          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" alt=""
		            className="rounded-circle img-fluid" />
		        </div>
		        <div className="card-body">
		          <h4 className="mb-4">Lisa Cudrow</h4>
		          <hr />
		          <p className="dark-grey-text mt-4">
		            <i className="fas fa-quote-left pe-2"></i>Neque cupiditate assumenda in maiores
		            repudi mollitia architecto.
		          </p>
		        </div>
		      </div>
		    </div>
		    <div className="col-md-4 mb-0">
		      <div className="card testimonial-card">
		        <div className="card-up" style={style3}></div>
		        <div className="avatar mx-auto bg-white">
		          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" alt=""
		            className="rounded-circle img-fluid" />
		        </div>
		        <div className="card-body">
		          <h4 className="mb-4">John Smith</h4>
		          <hr />
		          <p className="dark-grey-text mt-4">
		            <i className="fas fa-quote-left pe-2"></i>Delectus impedit saepe officiis ab
		            aliquam repellat rem unde ducimus.
		          </p>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>



       <section>
         <div class="row d-flex justify-content-center">
           <div class="col-md-10 col-xl-8 text-center">
             <h3 class="mb-4">Lorem ipsum</h3>
             <p class="mb-4 pb-2 mb-md-5 pb-md-0">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
               numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
               quisquam eum porro a pariatur veniam.
             </p>
           </div>
         </div>
       
         <div className="row text-center">
           <div className="col-md-4 mb-5 mb-md-0">
             <div className="card testimonial-card">
               <div className="card-up" style={style1}></div>
               <div className="avatar mx-auto bg-white">
                 <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt=""
                   className="rounded-circle img-fluid" />
               </div>
               <div className="card-body">
                 <h4 className="mb-4">Maria Smantha</h4>
                 <hr />
                 <p className="dark-grey-text mt-4">
                   <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet eos adipisci,
                   consectetur adipisicing elit.
                 </p>
               </div>
             </div>
           </div>
           <div className="col-md-4 mb-5 mb-md-0">
             <div className="card testimonial-card">
               <div className="card-up" style={style2}></div>
               <div className="avatar mx-auto bg-white">
                 <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                   className="rounded-circle img-fluid" alt="" />
               </div>
               <div className="card-body">
                 <h4 className="mb-4">Lisa Cudrow</h4>
                 <hr />
                 <p className="dark-grey-text mt-4">
                   <i className="fas fa-quote-left pe-2"></i>Neque cupiditate assumenda in maiores
                   repudi mollitia architecto.
                 </p>
               </div>
             </div>
           </div>
           <div className="col-md-4 mb-0">
             <div className="card testimonial-card">
               <div className="card-up" style={style3}></div>
               <div className="avatar mx-auto bg-white">
                 <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                   className="rounded-circle img-fluid" alt=""/>
               </div>
               <div className="card-body">
                 <h4 className="mb-4">John Smith</h4>
                 <hr />
                 <p className="dark-grey-text mt-4">
                   <i className="fas fa-quote-left pe-2"></i>Delectus impedit saepe officiis ab
                   aliquam repellat rem unde ducimus.
                 </p>
               </div>
             </div>
           </div>
         </div>
       </section>

        <div id="rdlink" className="btn btn-block"><Link to='/blog/read' className="link">Read More</Link></div>
		</div>
		</div>
	)
}

export default Blog;
