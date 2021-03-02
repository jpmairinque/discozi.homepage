



function lets () {

    
    var formbox = document.getElementById("title");
     formbox.innerHTML = `<form action="">
     <label for="name">
       <span>Name</span>
       <input type="text" name="name" id="name" />
     </label>
     <label for="name">
       <span>E-mail</span>
       <input type="text" name="email" id="email" />
     </label>
     <label for="email">
       <span>Password</span>
       <input type="password" name="password" id="password" />
     </label>
     <input type="button" value="Sign Up" />
   </form>`


}
