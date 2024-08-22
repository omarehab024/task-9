let iphone = [];
function addiphone() {
  let iphonename = prompt("enter new phone name");
  let iphoneprice = +prompt("enter new phone price");
  let x = `name:${iphonename} ==> price:${iphoneprice}$`;
  iphone.push(x);
  console.clear();
  showtasks();
}
function delletiphone() {
  let iphonename = prompt("enter the name of the phone you want to delet");
  let iphoneprice = +prompt("enter the price of the phone you want to delet");
  let x = `name:${iphonename} ==> price:${iphoneprice}$`;
  // let iphoneindex=x-1;
  // iphone.splice(iphoneindex,1);

  // هنا كان لازم نستخدم ال indexOf للبحث عن القيمه او المدخل هل هو موجود داخل القائمه ام لا واذا كانت موجوده يتم القيام بعمليات عليها
  
  let iphoneindex = iphone.indexOf(x);
  if (iphoneindex !== -1) {
    iphone.splice(iphoneindex, 1);
  } else {
    alert("iPhone not found.");
  }

  console.clear();
  showtasks();
}
function updateiphone() {
  let iphonename = prompt("enter old phone name");
  let iphoneprice = +prompt("enter old phone price");
  let x = `name:${iphonename} ==> price:${iphoneprice}$`;
  // let iphoneindex=x-1;
  // let iphonenamevalue =prompt('enter new iphone name');
  // let iphonepricevalue=+prompt('enter new iphone price');
  // let y =`new name:${iphonenamevalue} ==> new price:${iphonepricevalue}$`;
  // iphone.splice(iphoneindex,1,y);

  let iphoneindex = iphone.indexOf(x);
  if (iphoneindex !== -1) {
    let newIphonename = prompt("Enter new Phone name:");
    let newIphoneprice = +prompt("Enter new Phone price:");
    let y = `new Name: ${newIphonename} ==> new Price: ${newIphoneprice}$`;
    iphone.splice(iphoneindex, 1, y);
  } else {
    alert("iPhone not found.");
  }

  console.clear();
  showtasks();
}
function showtasks() {
  iphone.forEach((el, index) => {
    console.log(el);
  });
}
