var info = new Date();
var day=info.getDay();
if (day==0) {
    if (confirm("Today is Sunday....If you want to see what's the Webpage click OK ")) {
        window.opener=self; 
    }
    else{
        window.close();
    }
}

/*if (day==1) {
if (confirm("If you want to directly attend the meeting, click OK. It will be redirected. If you want to visit the Webpage click Cancel. ")) {
    open("mon link"); 
    }
    else{
        window.opener=self;
    }
}*/
/*if (day==2) {
if (confirm("If you want to directly attend the meeting, click OK. It will be redirected. If you want to visit the Webpage click Cancel. ")) {
    open("tue link"); 
    }
    else{
        window.opener=self;
    }
}*/
/*if (day==3) {
if (confirm("If you want to directly attend the meeting, click OK. It will be redirected. If you want to visit the Webpage click Cancel. ")) {
    open("wed link"); 
    }
    else{
        window.opener=self;
    }
}*/
/*if (day==4) {
if (confirm("If you want to directly attend the meeting, click OK. It will be redirected. If you want to visit the Webpage click Cancel. ")) {
    open("thu link"); 
    }
    else{
        window.opener=self;
    }
}*/
/*if (day==5) {
if (confirm("If you want to directly attend the meeting, click OK. It will be redirected. If you want to visit the Webpage click Cancel. ")) {
    open("fri link"); 
    }
    else{
        window.opener=self;
    }
}*/
/*if (day==6) {
    if (confirm("If you want to directly attend the meeting, click OK. It will be redirected. If you want to visit the Webpage click Cancel. ")) {
        open("sat link"); 
    }
    else{
        window.opener=self;
    }
}*/

