
// // Câu 1

// let inputSearch = document.querySelector('.nav-search-input')
// let iconSearch = document.querySelector('.header-input-icon1')
// let value

// function searchInput() {
//     value = inputSearch.value
//     if (event.keyCode == 13) {
//         submitForm()
//     } else {
//         console.log('inputSearch.value', value)
//     }
// }
// function submitForm(event) {
//     if(value.length > 0){
//         document.querySelector('.form-input').submit()
//     }
//     else{
//         alert('Ô tìm kiếm hiện tại đang rỗng');
//     }
// }
// iconSearch.onclick = function () {
//     submitForm()
// }


// // Câu 2 (cách 1)

// var frm = document.forms['myForm'];

// function formValidate5(frm) {
      
//     if( frm.email.value == "" ) {
//        alert( "Vui lòng nhập Email!" );
//        frm.email.focus() ;
//        return false;
//     }
//     if( frm.psw.value == "" ) {
//        alert( "Vui lòng nhập mật khẩu!" );
//        frm.psw.focus() ;
//        return false;
//     }
//     if( frm.pswagain.value == "" || frm.pswagain.value != frm.psw.value ) {
//         alert( "Mật khẩu không khớp, vui lòng nhập lại!" );
//         frm.pswagain.focus() ;
//         return false;
//      }
//     return frm;
// }    

// // Câu 2 (cách 2)

// function formValidate() {

//     var frm = document.forms['myForm'];
//     var emailReg =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 

//     if ( emailReg.test(frm.email.value) == false ){
//         alert("Email không hợp lệ, vui lòng nhập lại" );
//         return false;
//         }
//     if( frm.psw.value.length < 8 ) {
//        alert( "Mật khẩu phải có ít nhất 8 chữ số, vui lòng nhập lại!" );
//        return false;
//     }
//     if( frm.pswagain.value == "" || frm.pswagain.value != frm.psw.value ) {
//         alert( "Mật khẩu không khớp, vui lòng nhập lại!" );
//         frm.pswagain.focus() ;
//         return false;
//      }
//      if( frm.name.value.length < 4) {
//         alert( "Họ tên không hợp lệ, vui lòng nhập lại!" );
//         return false;
//      }
//      if( frm.text.value.length < 10) {
//         alert ("Nội dung phải có ít nhất 10 kí tự, vui lòng nhập lại!");
//         return false;
//      }
//     return true;
// }  

// function dangnhap(event) {
//     if (formValidate()) {
//       alert("Đã gửi dữ liệu");
//       return true;
//     } else {
//       alert("Chưa gửi dữ liệu");
//       return false;
//     }
//   }
    

// // Câu 3

// var itemList={
//     "sp001":{   "name":"Sữa Chua Vị Kiwi",
//                 "price":21000,
//                 "photo":"images/sanpham/kiwi.jpg"},
//     "sp002":{   "name":"Sữa Chua Vị Xoài",
//                 "price":22000,
//                 "photo":"images/sanpham/mango.jpg"},
//     "sp003":{   "name":"Sữa Chua Vị Dưa lưới",
//                 "price":23000,
//                 "photo":"images/sanpham/cantaloupe.jpg"},
//     "sp004":{   "name":"Sữa Chua Vị Mâm Xôi",
//                 "price":24000,
//                 "photo":"images/sanpham/blackberry.jpg"},
//     "sp005":{   "name":"Sữa Chua Vị Dâu Tây",
//                 "price":25000,
//                 "photo":"images/sanpham/strawberry.jpg"},
//     "sp006":{   "name":"Sữa Chua Vị Việt Quất",
//                 "price":26000,
//                 "photo":"images/sanpham/blueberry.jpg"},
//     "sp007":{   "name":"Sữa Chua Vị Bưởi",
//                 "price":27000,
//                 "photo":"images/sanpham/grapes.jpg"},
//     "sp008":{   "name":"Sữa Chua Vị Táo Xanh",
//                 "price":28000,
//                 "photo":"images/sanpham/green-apple.jpg"},
//     "sp009":{   "name":"Sữa Chua Vị Dứa",
//                 "price":29000,
//                 "photo":"images/sanpham/pineapple.jpg"}
//     };

// function addCart(sp) {

//     var number=parseInt(document.getElementById(sp).value)
   
//     if (typeof localStorage[sp] === "undefined") {
//         window.localStorage.setItem(sp,number);
//         alert('Đã thêm sản phẩm'+' '+itemList[sp].name+' '+'với số lượng'+' '+number+' '+'vào giỏ hàng. Số lượng sản phẩm '+itemList[sp].name+' đã đặt là '+number)
//     }
//     else{
//         var current=parseInt(window.localStorage.getItem(sp));
//         var sum=current+number;
//         if (sum>100) {
//             window.localStorage.setItem(sp,100);
//             alert('Số lượng tối đa cho mỗi sản phẩm là 100. Vui lòng nhập lại!')
//         }
//         if (sum<=100) {
//             window.localStorage.setItem(sp,sum);
//             alert('Đã thêm sản phẩm'+' '+itemList[sp].name+' '+'với số lượng'+' '+number+' '+'vào giỏ hàng. Số lượng sản phẩm '+itemList[sp].name+' đã đặt là '+sum)     
//         }
//     } 
// }

// // Câu 4

// window.onstorage = () => {
//     showCart();
//     };

//         var table = `<table id="cart-table">
//             <thead>
//                 <tr> 
//                     <th>Hình SP</th>
//                     <th>Tên SP</th>
//                     <th>Số lượng</th>
//                     <th>Giá</th>
//                     <th>Thành tiền</th>
//                     <th></th>
//                 </tr>
//             </thead>
//             <tbody id="cartDetail"> 
                
//             </tbody> 
//             <tfoot> 
//                 <tr> 
//                     <td colspan="6" class="table-footer">Tổng thành tiền (A) = <span id="AA"></span></td>
//                 </tr> 
//                 <tr> 
//                     <td colspan="6" class="table-footer">Chiết khấu (B) = 0.1 x A <span id="BB"></span></td>
//                 </tr>
//                 <tr>
//                     <td colspan="6" class="table-footer">Thuế (C) = 10% x (A-B) <span id="CC"></span></td>
//                 </tr>
//                 <tr>
//                     <td colspan="6" class="table-footer">Tổng đơn hàng = A-B+C = <span id="DD"></span></td>
//                 </tr>
//                 <tr>
//                     <td colspan="6" class="footer-btn"> 
//                         <button id="thanhtien" onclick="tong()" type="button">Xác Nhận Đơn Hàng</button>
//                     </td>
//                 </tr>
//             </tfoot>
//         </table>`;
//            document.getElementById('database').innerHTML = table;
//         //    console.log(table)

//  function showCart() { 

//     var TotalPreTax = 0; //Tổng trước thuế
//     var A=0, B=0, C=0, D=0;

//     if(localStorage.length != 0){

//         for (var key in localStorage) {

//         var item = itemList[key];
//         var photo = item.photo;
//         var name = item.name;
//         var price = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price);  
//         var number = localStorage.getItem(key);
//         var temp = item.price*number; // sử dụng số để tính toán
//         var thanhtien=Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price*number); //định dạng để in ra
//         // var orderNumber = localStorage.getItem(key) //Số lượng đặt hàng
//         // var TotalPreTax = TotalPreTax + thanhtien

//         //Tính tiền
//         var A=A+temp;
//         document.getElementById('AA').innerHTML= Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(A);  
//         var B=getDiscoutRate()*A;
//         document.getElementById('BB').innerHTML= Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(B);  
//         var C=0.1*(A-B);
//         document.getElementById('CC').innerHTML= Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(C);  
//         var D=A-B+C;
//         document.getElementById('DD').innerHTML= Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(D);  

//         //Tạo các ô dữ liệu chứa thông tin sản phẩm
//         var tbody = 
//         '<tr >'+
//             '<td width ="100px">'+'<img src='+photo+'></td>'+
//             '<td >'+name+'</td>'+
//             '<td style="text-align:right">'+number+'</td>'+
//             '<td style="text-align:right">'+price+'</td>'+
//             '<td style="text-align:right">'+thanhtien+'</td>'+
//             '<td style="text-align:center" ></i><a data-code="'+key+'" href="#"><button onclick="removeCart(\''+key+'\')" style=" background-color:#cddc39; padding:8px;"><i class="fa fa-trash icon-pink" style="font-size:25px; color:#f90d6d" ></button></a></td>'+
//         '</tr>';
    
//         document.getElementById('cartDetail').insertRow(1).innerHTML = tbody
//         console.log(tbody)
       
//         };
//     }
// }

// function removeCart(code) {
    
//     if(typeof window.localStorage[code] !== "undefined") {

//     //xóa sản phẩm khỏi localStorage
//     window.localStorage.removeItem(code);
//     //Xóa nội dung của phần thân của bảng (<tbody>)
//     document.getElementById("cartDetail")
//     .getElementsByTagName('tbody')[0].innerHTML="";
//     //Hiển thị lại nội dung chi tiết của đơn hàng
//     showCart();
//     }
// }


// function getDiscountRate() {

//     var d = new Date();         //lấy ngày hiện tại của máy tính
//     var weekday = d.getDay();   //lấy ngày trong tuần   
//     var totalMins = d.getHours()*60 + d.getMinutes();  //đổi thời gian hiện tại ra số phút tương đối trong ngày

//     if (weekday>=1 && weekday<=3 && ((totalMins>=420 && totalMins<=660) || (totalMins>=780 && totalMins<=1020)))
//     return 0.1;

// return 0;
// }

//* Câu 2.1

$(document).ready(function(){
    showads();
    });

    var d = new Date();
    var ads = "Khách hàng có ngày sinh trong tháng " + d.getMonth() + "sẽ được tặng 2 phần sữa chua dâu cho đơn hàng đầu tiên trong tháng.";
    var W = $(window).width();
    var wsmall = (W - $("main").width());
    console.log(wsmall);

    // bắt width of window, nếu kích thước nhỏ, sẽ gán ads vào footer, và ngược lại, ads sẽ dc thêm vào class 
    //  left-ads trong main-content ( display flex width header and content home page)
    // anh có css lại thêm một số thuộc tính vào các element ads, em xem lại bên stylelabp3,.css
    if(wsmall<200){
    $("footer").append("<div id='adscontainer'></div>");
    $("#adscontainer").append("<span id='adstext'></span>");
    $("#adstext").append("<h2></h2>");
    $("h2").text(ads);
    }
    else{
        $(".left-ads").append("<div id='adscontainer'></div>");
        $("#adscontainer").append("<span id='adstext'></span>");
        $("#adstext").append("<h2></h2>");
        $("h2").text(ads);
    }
    

function showads() {
    var W = ($(window).width() - $("main").width());
    if (W >= 200) {
         adsVerEffect()
    }
    else {
         adsHorEffect()
    }
} 

function adsVerEffect() {

    var W = 1/2*($(window).width() - $("main").width());
    var topadstext = $("#adscontainer").height() - $("#adstext").height();
    // trước khi hiển thị theo chiều dọc, thì xóa đi thuộc tính cũ bên horizon, bằng cách remove class name
    $("#adscontainer").className = $("#adscontainer").removeClass("adshorcontainer");
    $("#adscontainer").addClass("adsvercontainer");
    $("#adscontainer").css({ "width": "W"});
    $("#adscontainer").addClass("adsvertext adstext");
    $("#adscontainer").css({ "top": "$('#adscontainer').height()"});
    $("#adscontainer").animate ({"top": "topadstext"}, 30000, function(){ adsVerEffect()});
}

function adsHorEffect() {
    //console.log('123');
    var leftmain = $("main").position().left;
    var widthmain = $("main").width();
    var leftadscontainer = $("#leftcontainer").width;
    var leftatnimate = $("#adscontainer").width() - $("#adstext").width();
    // remove class name của vertical adsvertise
    $("#adscontainer").className = $("#adscontainer").removeClass("adsvercontainer");

    $("#adscontainer").addClass("adshorcontainer container");
    $("#adscontainer").css({ "left": "leftmain"});
    $("#adscontainer").css({ "width": "widthmain"});
    $("#adstext").addClass("adshortext adstext");
    $("#adstext").css({ "left": "leftcontainer"});
    $("#adstext").animate({ "left": "leftatnimate"}, 30000,  function(){ adsHorEffect()});
}