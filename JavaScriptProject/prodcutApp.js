/**
 * Created by Tintu on 11/1/2016.
 */
var productApp = {};
productApp.productRepository= function() {
    this.data =[];
    var self = this;

    function init() {
        //localStorage.clear();
        if(localStorage.datas != null && localStorage.datas != undefined) {
           //self.data = JSON.parse(localStorage.getItem("datas"));
            self.data = JSON.parse(localStorage.datas);
        } else {
           /* self.data.push({Id: 1, name: 'iPhone', price: 800, info: 'Best  Performance Features in '});
            self.data.push({Id: 2, name: 'Mac', price: 1000, info: 'Best Performance Features in '});
            self.data.push({Id: 3, name: 'Windows', price: 400, info: 'Best Performance Features in '});
            localStorage.datas = JSON.stringify(self.data);*/
            localStorage.setItem("index",1);
        }
    }
    init();

    this.getProductInfo=function() {
        var table = "<table border='1' bgcolor='#b8e944'><tr><th>Id</th><th>Name</th><th>Price</th><th>Action</th></tr>";
        self.data.forEach(function (entry) {
            var tr = "<tr><td>" + entry.Id + "</td><td>" + entry.name + "</td><td>" + entry.price + "</td><td>" +
                "<a href='javascript:void(0)' onclick=editPage('"+entry.Id+"')>Edit</a>|<a href='javascript:void(0)' onclick=viewPage('"+entry.name+"')>View</a>|<a href='javascript:void(0)' onclick=deleteProduct('"+entry.Id+"')>Delete</a></td></tr>";
            table += tr;
        });
        table += "</table>";
        document.getElementById("grid").innerHTML = table;
    }
    this.deleteProduct = function(Id){
        for(var i=0;i<self.data.length;i++) {
            if(self.data[i].Id==Id){
             self.data.splice(i,1);
                console.log(self.data);
            }
        }
        if(self.data.length != 0) {
            localStorage.datas = JSON.stringify(self.data);
        } else {
            localStorage.removeItem("datas");
            localStorage.removeItem("index");
        }
       this.getProductInfo();
    }

    this.viewProductByID = function(pName) {
        var table = "<table border='1' bgcolor='#00FF00'><tr><th>Id</th><th>Name</th><th>Price</th><th>Details</th></tr>";
        self.data.forEach(function(entry) {
            if(entry.name==pName) {
                var tr = "<tr><td>" + entry.Id + "</td><td>" + entry.name + "</td><td>" + entry.price + "</td><td>" + entry.info + pName+ "</td></tr>";
                table += tr;
            }
        });
        //table.style.backgroundColor("red");
        document.getElementById("viewTable").innerHTML = table;
    }

    this.editProductByID = function(pName) {
        var table = "<table border='1' bgcolor='#00FF00'><tr><th>Id</th><th>Name</th><th>Price</th><th>Details</th></tr>";
        self.data.forEach(function(entry) {
            if(entry.Id==pName) {
                var tr = "<tr><td>" + entry.Id + "<input type='hidden' id='editId' value='" + entry.Id + "'/></td><td><input type='text' id='editName' value='" + entry.name + "'/></td><td><input type='text' id='editPrice' value='" + entry.price + "'/></td><td><input type='text' id='editInfo' value='" + entry.info + "'/></td></tr>";
                table += tr;
            }
        });
        //table.style.backgroundColor("red");
        document.getElementById("viewTable").innerHTML = table;
    }

    this.addProduct = function(name,price,info) {
        var id = localStorage.getItem("index");
        var prod = {Id: id, name: name, price: price, info: 'Best Features in '+info};
        self.data.push(prod);
        localStorage.datas = JSON.stringify(self.data);
        getProductInfo();
        //id = parseInt(id);
        id++;

        localStorage.setItem("index",id);
    }

    this.editProduct = function(id,name,price,info) {
        alert(id+name+price+info);
        var id = localStorage.getItem("index");
         self.data.forEach(function(entry) {
         if(entry.Id==id) {
             entry.name = name;
             entry.price = price;
             entry.info = info;
         }
         });
        localStorage.datas = JSON.stringify(self.data);
        window.close();
    }

}


