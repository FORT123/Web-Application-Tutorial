/**
 * Created by Tintu on 10/30/2016.
 */
window.onload = function() {
    //alert("Here");
    var date = new Date();
    document.getElementById("yearValue").innerHTML= date.getFullYear();
    //getInfo();
   // document.getElementById("tablearea").innerHTML = "<h1>User Details</h1>";
    userData = localStorage.getItem("userData");
    userData = JSON.parse(userData);
    if(userData != null && userData != undefined ){
        tablearea = document.getElementById("tablearea");
        //alert(this.tablearea);
            table = document.createElement('table');
       table.style.border = "1px solid #000";

      for (var i = 0; i < this.userData.length; i++) {
          var tr = document.createElement('tr');

          td1 = document.createElement('td');
          td2= document.createElement('td');
          td1.style.border = "1px solid #000";
          td2.style.border = "1px solid #000";
          tr.appendChild( td1 );
          tr.appendChild( td2 );

          tr.cells[0].appendChild( document.createTextNode(this.userData[i].username) );
          tr.cells[1].appendChild( document.createTextNode(this.userData[i].email) );

          table.appendChild(tr);
        }
  //      tablearea.appendChild(table);
    }

}

var myJoshuaApp ={}; // container
myJoshuaApp.version = "1.0";
myJoshuaApp.UserModule = {
    data : [{uid:'1',username:'admin',password:'admin',email:'joseph@gmail.com'},{uid:'1',username:'raj',password:'admin',email:'raj@gmail.com'},{uid:'1',username:'neil',password:'admin',email:'neils@gmail.com'}],
    setUsers : function() {
        localStorage.setItem("userData",JSON.stringify(this.data));
        //alert("At Set");
    },
    displayUsers : function() {

        for (var i = 0; i < this.data.length; i++) {
            alert(this.data[i].email);
            document.getElementById("adminContentSpan").innerHTML = this.data[i].email;
        }
        localStorage.userData = JSON.stringify(this.data);
       alert("KKKK")

    }
}

