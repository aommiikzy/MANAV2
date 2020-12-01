// let config = require('../env.json');

var testNextPage = 0;
var idUser = "";
var checkPic = "";
var linkPic = "";
var message = "";
var money = 0;
var count = 0;
// if(Object.keys(functions.config()),length){
//   config = fuctions.config();
// }
//replace the real key with out key
// const API_URl = config.mana.key
// var API_URL = "https://billbillbot.herokuapp.com/api/v1/bill";

async function addValueFinal()
{

  document.getElementById("confirm").style.display = "none";
  document.getElementsByClassName('cont')[0].style.filter = "blur(8px)"; 
  (async () => { 
    (async () => { 


    
      Promise( document.getElementById("loading-new").style.display = "inherit")
      Promise(document.getElementsByClassName('cont')[0].style.filter = "blur(8px)")
     
      
    })()



    // await document.getElementById("loading-new").style.display = "inherit";
    // await document.getElementsByClassName('cont')[0].style.filter = "blur(8px)"; 
    
    await timeout(9000);
    
  })()
  var API_URL = "https://billbillbot.herokuapp.com/api/v1/bill";
    var cashInput = document.getElementById("cashInput").value;
    var transferInput = document.getElementById("transferInput").value;
    var posInput = document.getElementById("posInput").value;
    var idUSerNew = idUser;
    var linkImage = linkPic;
    document.getElementsByClassName('cont')[0].style.filter = "blur(8px)"; 
    console.log("userId = "+idUser);
    console.log("transferSum = "+transferInput);
    console.log("cashSum = "+cashInput);
    console.log("posSum = "+posInput);
    console.log("receiptImg = "+linkImage);

    var addData = {
        transferSum:transferInput,
        cashSum:cashInput,
        posSum:posInput,
        receiptImg:linkPic,
        userId : idUSerNew
      };
     
        return  (async () => {
          const rawResponse = await fetch(`${API_URL}/`, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(addData)
          });
          const content = await rawResponse.json();
          if(content.message!="Bill is stored")
          {
            alert("คุณไม่มีสิทธิ์ส่งบิล");
          }
          else{
            console.log("Bill is stored");
            testNextPage = 1;
            buttonClick();
          }
        })();
      
}
async function addValueInput() {

  // console.log("test add");
  // document.getElementById("carForm").style.display = "none";
  // document.getElementById("btn").style.display = "none";
  // document.getElementById("loading-new").style.display = "inherit";
  // window.setTimeout("",5000);
  // document.getElementById("carForm").style.display = "inherit";
  // document.getElementById("btn").style.display = "inherit";
  // document.getElementById("loading-new").style.display = "none";
      var cashInput = document.getElementById("cashInput").value;
    var transferInput = document.getElementById("transferInput").value;
    var posInput = document.getElementById("posInput").value;
    var checkMoney = parseInt(posInput)-(parseInt(cashInput)+parseInt(transferInput));
    var money = checkMoney;
    console.log(posInput);

    if(checkMoney!=0)
    {
      if(checkMoney!=0)
      {
        functionConfirmFail (money, function yes() {
        }, function no() {
      
        });
      }
      else{

      }
    }
    else
    {
      functionConfirmNormal (posInput, function yes() {
      }, function no() {
    
      });

    }


}
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function runApp() {
  await liff.getProfile().then(profile => {
  // document.getElementById("pictureUrl").src = profile.pictureUrl;
  idUser = profile.userId;
//   document.getElementById("carForm").style.display = "none";
//  document.getElementById("btn").style.display = "none";
//  document.getElementById("loading-new").style.display = "inherit";
 (async () => {
  document.getElementsByClassName('cont')[0].style.filter = "blur(8px)";
  document.getElementById("loading-new").style.display = "inherit";
  await timeout(5000);
  document.getElementById("loading-new").style.display = "none";
  document.getElementsByClassName('cont')[0].style.filter = "blur(0px)";
  await addValueInput();
})()


    
  // console.log("idUser in runapp = "+idUser);
  // document.getElementById("userId").innerHTML = '<b>UserId:</b> ' + profile.userId;
  // document.getElementById("displayName").innerHTML = '<b>DisplayName:</b> ' + profile.displayName;
  // document.getElementById("statusMessage").innerHTML = '<b>StatusMessage:</b> ' + profile.statusMessage;
  // document.getElementById("getDecodedIDToken").innerHTML = '<b>Email:</b> ' + liff.getDecodedIDToken().email;


}).catch(err => console.error(err));
}
async function uploadPic()
{  
  

  // document.getElementById("carForm").style.display = "none";
  // document.getElementById("btn").style.display = "none";
  document.getElementsByClassName('cont')[0].style.filter = "blur(8px)";
  // document.getElementById("cont").style.filter  = "blur(8px)";
 document.getElementById("loading-new").style.display = "inherit";
  window.setTimeout(50000);
  // console.log("Test animate new 12");

  var bodyFormData = new FormData();
  const inputFile = document.querySelector('#image_upload')
  // console.log(inputFile.files[0])

  console.log("File = "+inputFile.value);
  bodyFormData.append('image', inputFile.files[0]);

  //Loop througt formData
  // for (var data of bodyFormData.entries()) {
  //     console.log(data[0] + ', ' + data[1]);
  // }

  // TODO: Change to your endpoint na ja
  const endpointUrl = 'https://billbillbot.herokuapp.com/api/v1/bill/upload-receipt'
  // Send request
   axios({
      method: 'post',
      url: endpointUrl,
      data: bodyFormData,
      headers: {
          'Content-Type': 'multipart/form-data'
      }
  })
      .then( await function (response) {

          // success
          // document.getElementById("carForm").style.display = "inherit";
          // document.getElementById("btn").style.display = "inherit";
          document.getElementById("loading-new").style.display = "none";
          document.getElementsByClassName('cont')[0].style.filter = "blur(0px)";

          // console.log(response.data.url);
     
          document.getElementById("picAfter").src = 	response.data.url;
          linkPic = response.data.url;
          count = count+1;
          document.getElementById("input-img1").style.display = "none";
          // console.log("HERE = "+linkPic);
          document.getElementById("input-img2").style.display = "inherit";
             
    document.getElementById("picAfter").style.display = "inherit";
      })
      .catch( await function (response) {
          // error
          console.log(response);
          // alert('อัพโหลดไม่สำเร็จ!')
      });

    
}
// async function goFinish() {

//  location.href = 'finish.html';

// }
function outClick()
{
  liff.init({ liffId: "1655240292-pqEGWAmZ" }, async() => {
    if (liff.isLoggedIn()) {

              // location.href = 'finish.html';

              // await timeout(5000);
               await liff.closeWindow();
  
            }
  
   
  }, err => console.error(err.code, error.message));
}
async function buttonClick() {
 
  // if(testNextPage===1)
  // {
  //   await liff.closeWindow();
  // }
  liff.init({ liffId: "1655240292-pqEGWAmZ" }, async() => {
  if (liff.isLoggedIn()) {


    await runApp();
    // await addValueInput();
    // console.log("testNextPage = "+testNextPage);
    if(testNextPage==1){
      liff.closeWindow();
      // (async () => {

      //    location.href = 'finish.html';
      // })()
           
      //      alert("here");
      //      console.log("in here");
      //      (async () => {

            
      //       liff.closeWindow();
      //     })()
          }
  } 
  else {
  liff.login();
  }
}, err => console.error(err.code, error.message));


    // await addValueInput();

   }
   function functionConfirmNormal(total, myYes, myNo) {



    document.getElementsByClassName('cont')[0].style.filter = "blur(8px)";
    document.getElementById("loading-new").style.display = "inherit";
    window.setTimeout(5000);
    document.getElementById("loading-new").style.display = "none";
    // document.getElementsByClassName('cont')[0].style.filter = "blur(0px)";
    var confirmBox = $("#confirm");
    document.getElementById("change").src = "warning_2.svg";
    document.getElementById("mesaom").innerHTML = "<p> ยืนยันยอดขายวันนี้ <b> " + total+ " บาท</b>"+ "</br>แน่ใจหรือว่านับถูกต้อง</p>";
    
    console.log("click = "+confirmBox.value);
    // confirmBox.find(".yes,.no").unbind().click(function() 
    // {
    //   if(confirmBox.find(".yes"))
    //   {
    //       alert("test");
    //   }
    //   confirmBox.hide();

    //   document.getElementsByClassName('cont')[0].style.filter = "blur(0px)";
    // });

    confirmBox.show();
  }
   function functionConfirmFail(money, myYes, myNo) {
    // document.getElementById("carForm").style.display = "none";
    // document.getElementById("btn").style.display = "none";
    document.getElementsByClassName('cont')[0].style.filter = "blur(8px)";
    document.getElementById("loading-new").style.display = "inherit";
    window.setTimeout(5000);
    document.getElementById("loading-new").style.display = "none";
    // document.getElementsByClassName('cont')[0].style.filter = "blur(0px)";
    var confirmBox = $("#confirm");
   
    document.getElementById("change").src = "warning1.svg";
    // confirmBox.find(".message").text(msg);
    document.getElementById("mesaom").innerHTML = "<p> ยอดเงิน <b>เกินมา " + money+ " บาท </b> "+ "</br>แน่ใจหรือว่านับถูกต้อง</p>";
    // confirmBox.find(".yes,.no").unbind().click(function() 
    // {
    //   confirmBox.hide();
    //   // document.getElementsByClassName('cont')[0].style.filter = "blur(0px)";
    // });
    confirmBox.show();
  }
  function show() {
   
  
    document.getElementById("confirm").style.display = "none";
    document.getElementById("carForm").style.display = "inherit";
    document.getElementById("btn").style.display = "inherit";
    document.getElementById("img-btn-submit").style.display = "inherit";
    document.getElementsByClassName('cont')[0].style.filter = "blur(0px)";
  }
   function check() {
		var allFilled = true;
		var i;
		var cashInput = document.getElementById("cashInput").value;
		var transferInput = document.getElementById("transferInput").value;
		var posInput = document.getElementById("posInput").value;
    var img = document.getElementById("image_upload");
    var submitBTN = document.getElementById("btn");
    
    console.log("linkPic = "+linkPic);
    console.log("img.value = "+img.value);
    if(img.value!=="")
    {
      // console.log("test mg.value = "+img.value);
      // document.getElementById("pictureUrl").src =img.value;
      (async () => {
        await uploadPic();
       
      })()
      img.value="";
      count=1;
 
    }
		console.log("count = "+count);
		if(cashInput != "" && transferInput != "" && posInput != "" && count!=0) {
      submitBTN.style.background = "#e9572f";
      document.getElementById("btn").disabled = false;
		} else {
      submitBTN.style.background = "grey";
    }

    
  }
  function uploadAgain()
  {
    document.getElementById("input-img2").style.display = "none";
    document.getElementById("input-img1").style.display = "inherit";
    
  }
    

