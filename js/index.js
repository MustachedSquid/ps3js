let mainIconAmount = 8;
let current = 1;

// Names and type of pages per order for each icon (JUST A FALL BACK, CHANGE THE NAMES IN INDEX.HTML!)
let docName=["home", "about", "images", "music", "videos", "games", "www", "friends"]
let docType="html"; // Change to whatever the file extension is (example: php, html, abc...)

function toggleHidden(){
  let i=1;

  while(i<=mainIconAmount){

    if(i!=current){
      document.getElementById("div"+i).style.display="none";
    } else if(i==current){
      document.getElementById("div"+i).style.display="block";
    }
    i=i+1;
  }
}

function goToHref(){
  window.location.href=docName[current-1]+"."+docType;
}

function remClickable(){
  document.getElementById("icon"+current).removeEventListener('click', goToHref);
}
function setClickable(){
  document.getElementById("icon"+current).addEventListener('click', goToHref);
}
function moveMain(amount){


  if(amount<0){
    if(current==mainIconAmount){
      return null;
    }
    current = current+1;
  }else if(amount>0){
    if(current==1){
      return null;
    }
    current = current-1;
  }

  let mainIconTable = document.getElementById("mainIconTable");
  let leftPx = mainIconTable.style.left;
  let leftSplit = leftPx.split("px");
  let left = +leftSplit[0];
  let amountPx = left+amount;
  amountPx = amountPx+"px";
  mainIconTable.style.left = (amountPx);
  console.log(mainIconTable.style.left);


  console.log("Current Icon Selected: "+current);

}


document.addEventListener('keydown', function(event) {

  console.log(current);
  console.log(event.key);

  remClickable();
  if(event.key == "ArrowLeft"){
    moveMain(-150);
  }
  if(event.key == "ArrowRight"){
    moveMain(150);
  }
  if(event.key == "Enter"){
    goToHref();
  }

  setClickable();

  toggleHidden();

});

window.addEventListener('load', function(){

  console.log("Loaded index.js");

  let i=1;

  while(i<=mainIconAmount){

    docName[i-1]=document.getElementById("text"+i).innerHTML;

    console.log(docName[i-1]);
    i=i+1;
  }

  remClickable();
  setClickable();
  toggleHidden();
});
