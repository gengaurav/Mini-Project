function validate()
{
 var username=document.getElementById("username").Value;
 var password=document.getElementById("password").Value;

 console.log(username);
 console.log(password);

 if(username=="admin" && password=="user"){
   alert("login successful!!");
   window.open('C:\\Users\\Dev.computers\\Documents\\web Dev\\mini-project\\index.html');
   return true;
}

else
{
   alert("login  successful :-(");
   window.open('C:\\Users\\Dev.computers\\Documents\\web Dev\\mini-project\\index.html','_parent');
   return false;
}
}