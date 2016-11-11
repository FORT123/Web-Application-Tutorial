$(document).ready(function(){
    productApp = {};
    //userApp = {};
    userApp = function() {
        this.data = [];
        var self = this;
        var admin = {name: 'admin', password: 'admin', email: 'admin@email.com', mobile: '1112223333'};
        self.data.push(admin);

        this.init = function() {
            //localStorage.clear();
            if(localStorage.userData != null && localStorage.userData != undefined) {
                //self.data = null;
                self.data = JSON.parse(localStorage.userData);
                console.log(self.data);
            }
            else {
                localStorage.userData = JSON.stringify(self.data);
            }
        }
        //init();
        this.validateUser = function(userId,password) {
            //alert(userId);
            var data = self.data;
            var flagtrue = false
            data.forEach(function(entry) {
                //alert(entry.name+entry.email);
                if(entry.name == userId && entry.password == password) {
                    flagtrue = true;
                }
            });
            return flagtrue;
        }

        this.viewProfile = function(name) {
            var data = self.data;
            //alert(data.length);
            for(var i=0;i<data.length;i++) {
                //alert(data[i].name);
                if(data[i].name == name) {
                    //alert(name);
                    $("#proUserName").html(data[i].name);
                    $("#proUserEmail").html(data[i].email);
                    $("#proUserMobile").html(data[i].mobile);
                    //alert(newpassword);
                    //flagtrue = true;
                }
                }
        }

        this.registerUser = function(name, password, email, mobile) {
            //var uData = localStorage.getItem("userData");
            //var data = JSON.parse(uData);
            var prod = {name: name, password: password, email: email, mobile: mobile};
            self.data.push(prod);
            localStorage.userData =  JSON.stringify(self.data);
            alert("User registerd")
            return true;
        }

        this.resetPassword = function(oldpassword,newpassword) {
            //alert(userId);

            var data = self.data;
            var flagtrue = false
            /*data.forEach(function(entry) {
                //alert(entry.name+entry.email);
                if(entry.name == sessionStorage.loggedUsername && entry.password == oldpassword) {
                    alert(newpassword);
                    flagtrue = true;
                }
            });*/
            for(i=0;i<data.length;i++){
                if(data[i].name == sessionStorage.loggedUsername && data[i].password == oldpassword) {
                    data[i].password = newpassword;
                    //alert(newpassword);
                    flagtrue = true;
                }
                if(flagtrue) {
                    localStorage.userData =  JSON.stringify(data);
                }

            }
            return flagtrue;
        }

        this.editUserInfo = function(username, password,email,mobile) {
            var data = self.data;
            var flagtrue = false
            for(i=0;i<data.length;i++){
                if(data[i].name == sessionStorage.loggedUsername) {
                    //data[i].username = username;
                    data[i].mobile = mobile;
                    data[i].email = email;
                    //alert(mobile);
                    flagtrue = true;
                }
                if(flagtrue) {
                    localStorage.userData =  JSON.stringify(data);
                }

            }
            return flagtrue;
        }
    }


});