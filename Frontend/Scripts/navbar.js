
document.querySelector("#navbar").innerHTML = `
<div id="nav-cont">
    <div data-aos="zoom-out" data-aos-duration="1000" id="nav-logo">
        <div id="nav-img">
            <img alt="Logo" src="/Frontend/Files/MEDSTAR-no-bg.png"/>
        </div>
    </div>
    <div data-aos="zoom-out" data-aos-duration="1000" id="nav-menu">
        <li id="book-app">Book an appointment</li>
        <li id="find-doc">Find Doctors</li>
        <li>Departments</li>
        <li>Security & Help</li>
    </div>
    <div data-aos="zoom-out" data-aos-duration="1000" id="nav-user-details">
        <button id="nav-login">Login</button>
        <button id="nav-reg">Signup</button>
    </div>
</div>
`

{/* <h5 style="color:#0b76c6">Welcome Faraz<span></span></h5> */}

const logoBtn=document.getElementById("nav-logo");
const book_app=document.getElementById("book-app");
const find_doc=document.getElementById("find-doc");

let loginbtn=document.getElementById("nav-login");
let signupbtn=document.getElementById("nav-reg");

if(localStorage.getItem("token")){
    loginbtn.innerText=localStorage.getItem("userName");
    signupbtn.innerText="Log Out";
}else{
    loginbtn.innerText="Login";
    signupbtn.innerText="Signup";
}

loginbtn.addEventListener("click",(e)=>{
    if(e.target.innerText=="Login"){
        window.location.href="/Frontend/Pages/login.html";
    }
})

signupbtn.addEventListener("click",(e)=>{
    if(e.target.innerText=="Signup"){
        window.location.href="/Frontend/Pages/signup.html";
    }else{
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        window.location.href="/Frontend/index.html";
    }
})


logoBtn.addEventListener("click",(e)=>{
    window.location.href="/Frontend/index.html";
})


book_app.addEventListener("click",()=>{
    window.location.href="/Frontend/Pages/book.appointment.html";
    // book_app.classList.add("nav-active");
    // find_doc.classList.remove("nav-active");
})


find_doc.addEventListener("click",()=>{
    window.location.href="/Frontend/Pages/doctors.page.html";
    // book_app.classList.remove("nav-active");
    // find_doc.classList.add("nav-active");
})



