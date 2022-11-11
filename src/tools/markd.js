
import { marked } from "marked";

// var x = document.getElementById("t1").value;
// console.log(x);
// function sh(){
//     var x = document.getElementById("t1").value;
//     console.log(x);
//     cs(marked.parse(x));
//     document.getElementById('content').innerHTML =
//     marked.parse(x);
//     // console.log(marked.parse(x));
// }
export default {
 cs(hc){
    hc = marked(hc);
    var htmll = "";
    var css0 = {h1 : {color:"red",font_size:"30px"},ul : {background_color:"yellow",color:"black"}};
    hc = hc.split(/\n/); //將每個轉換的html切開
    for(var i=1;i<=hc.length;i++){ //每筆html處理
        //找到html的標籤
        var sp = hc[i-1].split(/\s+/);
        var fi = sp[0].split("<");
        //console.log(sp);
        console.log(fi);
        // fi = fi.split(">");
        console.log(fi[1]);
        var fii = String(fi[1]).split(">")[0];
        console.log(fii);
        var st="";
        //console.log(sp[0].substring(1,2));
        if(sp[0].substring(1,2) != "/"){ //判斷是否是結尾標籤
        //把每個標籤的style值取出來
        if(fii in css0 ){
            for(var k in css0[fii]){ //把屬性串再一起
            var key = k.replace("_","-") + ":";
            var ka = css0[fii][k] ;
            st = st+key+ka+";"
            }
            sp = "<" + fii + ' style="'+ st + '"' + sp.slice(-1) ;
            
            htmll += " " +sp;
            console.log(htmll);
        }else{ //若是沒有style就直接輸出
            console.log(sp);
            htmll += " " +hc[i-1];
            console.log(htmll);
        }

        }else{ //若是結尾標籤就直接輸出
        htmll += " " +hc[i-1];
        console.log(htmll);
        }

        

        
    } 
    // console.log(htmll);
    // document.getElementById('content1').innerHTML =
    // marked.parse(htmll);
    return htmll;

}
}
// document.getElementById('content').innerHTML =
// marked.parse(x);