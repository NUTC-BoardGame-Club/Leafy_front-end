
// import { marked } from "marked";


// // var x = document.getElementById("t1").value;
// // console.log(x);
// // function sh(){
// //     var x = document.getElementById("t1").value;
// //     console.log(x);
// //     cs(marked.parse(x));
// //     document.getElementById('content').innerHTML =
// //     marked.parse(x);
// //     // console.log(marked.parse(x));
// // }
// export default {
//  cs(hc){
//     hc = marked(hc);
//     var htmll = "";
//     var css0 = {h1 : {color:"red",font_size:"30px"},ul : {background_color:"yellow",color:"black"}};
//     hc = hc.split(/\n/); //將每個轉換的html切開
//     for(var i=1;i<=hc.length;i++){ //每筆html處理
//         //找到html的標籤
//         var sp = hc[i-1].split(/\s+/);
//         var fi = sp[0].split("<");
//         //console.log(sp);
//         console.log(fi);
//         // fi = fi.split(">");
//         console.log(fi[1]);
//         var fii = String(fi[1]).split(">")[0];
//         console.log(fii);
//         var st="";
//         //console.log(sp[0].substring(1,2));
//         if(sp[0].substring(1,2) != "/"){ //判斷是否是結尾標籤
//         //把每個標籤的style值取出來
//         if(fii in css0 ){
//             for(var k in css0[fii]){ //把屬性串再一起
//             var key = k.replace("_","-") + ":";
//             var ka = css0[fii][k] ;
//             st = st+key+ka+";"
//             }
//             sp = "<" + fii + ' style="'+ st + '"' + sp.slice(-1) ;
            
//             htmll += " " +sp;
//             console.log(htmll);
//         }else{ //若是沒有style就直接輸出
//             console.log(sp);
//             htmll += " " +hc[i-1];
//             console.log(htmll);
//         }

//         }else{ //若是結尾標籤就直接輸出
//         htmll += " " +hc[i-1];
//         console.log(htmll);
//         }

        

        
//     } 
//     // console.log(htmll);
//     // document.getElementById('content1').innerHTML =
//     // marked.parse(htmll);
//     return htmll;

// }
// }
// // document.getElementById('content').innerHTML =
// // marked.parse(x);

// import { marked } from "marked";

// // var x = document.getElementById("t1").value;
// // console.log(x);
// // function sh(){
// //     var x = document.getElementById("t1").value;
// //     console.log(x);
// //     cs(marked.parse(x));
// //     document.getElementById('content').innerHTML =
// //     marked.parse(x);
// //     // console.log(marked.parse(x));
// // }
// export default {
//     cs(hc){
//         hc = marked(hc);
//         var htmll = "";
//         var content = "";
//         hc = hc.split(/\n/); //將每個轉換的html切開
//         var start_arr = "";   // 起始標示 e.p. <h1>
//         var skip = false;     // 不需節取內容 e.p. <ul>, </ul>
//         var ispre = false;    //判斷是不是pre標籤
//         // console.log(hc.length);
//         for(var i=0;i<=hc.length-2;i++){ //每筆html處理
//             // 推測 前開頭不為 '<' 那就是遇到多行 <p></p> 的狀況
//             if(String(hc[i]).substring(0,1) == '<'){
//               // code here 
//               // 找到html的標籤
  
//               var sp = hc[i].split(/\s+/);
//               var fi = sp[0].split("<");
//               fi = fi[1].split(">");
//               start_arr = fi[0];
//               // 判斷是否為程式碼標籤
//               //判斷是否為不需要取值的標籤
//               if(fi[0] == 'ul' ||  fi[0] == '/ul' || fi[0] == "hr" || fi[0] == "pre"){
//                 skip = true;
//               }else{
//                 skip = false;
//               }
//               if(fi[0]=="pre"){
//                 ispre = true;
//               }
//               if(fi[0]=="/code"){
//                 ispre = false;
//               }
              
  
  
//             }
//             else{
//               if (ispre){
//                 start_arr = "";
//               }
//               start_arr = "p";
//             }
            
//             //找到標籤內的內容
//             if(skip){
//               if(fi[0] == "ul"){
//                 htmll += "<" + start_arr + "> ";
                
//               }
//               if(fi[0] == "/ul"){
//                 htmll += "<" + start_arr + "> ";
                
//               }
//               if(fi[0] == "hr"){
//                 htmll += "<" + start_arr + "> ";
                
//               }
//               if(fi[0] == "pre"){
//                 var last = hc[i].split(start_arr + ">").length;
//                 // console.log(hc[i].split(start_arr + ">")[last-1]);
//                 htmll += "<" + start_arr + ">" + hc[i].split(start_arr + ">")[last-1];
                
//                 // console.log("html: " + htmll);
//               }
//               if(fi[0] == "/code"){
//                 htmll += "<" + start_arr + "></pre> ";
//                 // console.log("html: " + htmll);
//               }
//               continue;
//             }else{
//               //把內容取出來
//               var c = hc[i].split(start_arr + ">");
//               // console.log("c: " + c);
//               if(c[1]){
//                 if(c[1] != "" ){
//                   content = c[1].split("</")[0];
//                 }else{
//                   content = c[0].split("</")[0]; 
//                 }
//               }else {
//                 content = c
//               }
              
//             }
//             //將標籤與內容還有CSS組合
//             //if(fii in css0 ){
//             //     for(var k in css0[fii]){ //把屬性串再一起
//             //       key = k.replace("_","-") + ":";
//             //       ka = css0[fii][k] ;
//             //       st = st+key+ka+";"
//             //     }
//             //     sp = "<" + fii + ' style="'+ st + '"' + sp.slice(-1) ;
                
//             //     htmll += " " +sp;
//             // for(var k in css0[start_arr]){
//             //   var key = k.replace("_","-") + ":";
              
//             // }
//             htmll += "<" + start_arr + ">" + content + "</" + start_arr + "> ";
//             // console.log("html: " + htmll);
            
//         }
//         return htmll;
  
//       }
      
// }
// document.getElementById('content').innerHTML =
// marked.parse(x);


import { marked } from "marked";
let css0 = {'h1' : {color:"red"},
            'h2' : {color:"orange",font_size:"20px"},
            'h3' : {color:"yellow",border:'solid',font_size:'28px'},
            'h4' : {color:"green"},
            'h5' : {color:"blue"},
            'h6' : {color:"purple"},
            'ul' : {background_color:"black",color:"white"}};
export default {
  
 

   cs(hc,tf){
    hc = marked(hc);
    let htmll = "";
    let content = "";
    hc = hc.split(/\n/); //將每個轉換的html切開
    let start_arr = "";   // 起始標示 e.p. <h1>
    let skip = false;     // 不需節取內容 e.p. <ul>, </ul>
    let ispre = false;    //判斷是不是pre標籤
    let st = "";
    // console.log(hc.length);
    for(var i=0;i<=hc.length-2;i++){ //每筆html處理
        content = "";
        // 推測 前開頭不為 '<' 那就是遇到多行 <p></p> 的狀況
        if(String(hc[i]).substring(0,1) == '<'){
          // code here 
          // 找到html的標籤
          st = "";
          let sp = hc[i].split(/\s+/);
          var fi = sp[0].split("<");
          fi = fi[1].split(">");
          start_arr = fi[0];
          // 判斷是否為程式碼標籤
          //判斷是否為不需要取值的標籤
          if(fi[0] == 'ul' ||  fi[0] == '/ul' || fi[0] == "hr" || fi[0] == "pre" || fi[0] == "/code"){
            skip = true;
          }else{
            skip = false;
          }
          // if(fi[0]=="pre"){
          //   ispre = true;
          // }
          if(fi[0]=="/code"){
            ispre = false;
          }
          


        }
        else{
          if (ispre){
            start_arr = "";
            
            htmll += hc[i]+"\n";
            // console.log("換行");
            continue;
          }
          start_arr = "p";
        }
        
        //找到標籤內的內容
        if(skip){
          if(fi[0] == "ul"){
            if(start_arr in css0 ){
              for( k in css0[start_arr]){ //把屬性串再一起
               var key = k.replace("_","-") + ":";
               var ka = css0[start_arr][k] ;
                st = st+key+ka+";"
              }
              if(tf){
                htmll += "<" + start_arr + ' style=' + st + ">" + content + "\n";
                console.log("html: " + htmll);
              }else{                  
                htmll += "<" + start_arr + ">" + content + "\n";
                // console.log("html: " + htmll);
              }
              continue;
            }else{
              htmll += "<" + start_arr + ">" + content + "\n";
              // console.log("html: " + htmll);
            }
            
            htmll += "<" + start_arr + "> ";
            
          }
          if(fi[0] == "/ul"){
            htmll += "<" + start_arr + "> ";
            
          }
          if(fi[0] == "hr"){
            htmll += "<" + start_arr + "> ";
            
          }
          if(fi[0] == "pre"){
            var last = hc[i].split(start_arr + ">").length;
            htmll += "<" + start_arr + ' style=width:70%;background-color:#DCDCDC;>' + hc[i].split(start_arr + ">")[last-1] + "\n";
            ispre = true;
            // console.log("html: " + htmll);
          }
          if(fi[0] == "/code"){
            htmll += "</code></pre>\n";
            // console.log("html: " + htmll);
          }
          continue;
        }else{
          //把內容取出來
          var c = hc[i].split(">");
          // console.log("c: " + c);
          if(c[1]){
            if(c[1] != "" ){
              content = c[1].split("</")[0];
            }else{
              content = c[0].split("</")[0]; 
            }
          }else {
            content = c;
          }
          
        }

        if(tf){
          if(start_arr in css0 ){
            for(var k in css0[start_arr]){ //把屬性串再一起
              key = k.replace("_","-") + ":";
              ka = css0[start_arr][k] ;
              st = st+key+ka+";"
            }
            htmll += "<" + start_arr + ' style=' + st + ">" + content + "</" + start_arr + "> \n";
            // console.log("html: " + htmll);
          }else{
            htmll += "<" + start_arr + ">" + content + "</" + start_arr + "> \n";
            // console.log("html: " + htmll);
          }

        }else{
          htmll += "<" + start_arr + ">" + content + "</" + start_arr + "> \n";
          // console.log('html: '+ htmll);
        }
    }
    return htmll;

  }
}