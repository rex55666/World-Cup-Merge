var mapArray, ctx, currentImgMainX, currentImgMainY;
var imgMoutain, imgMain, imgEnemy;

$(document).ready(function(){

mapArray=[0,1,1,0,0,0,3,1,2];
ctx= $("#myCanvas")[0].getContext("2d");
//擺上主角-預設位置
imgMain = new Image();
imgMain.src = "RPG/images/soccer.png";
currentImgMainX=0;
currentImgMainY=0;
imgMain.onload=function()
{
    ctx.drawImage(imgMain,250,130,200,198,currentImgMainX,currentImgMainY,200,200);
};
//擺上障礙物與敵人
imgMoutain = new Image();
imgMoutain.src = "RPG/images/material.png";
imgEnemy = new Image();
imgEnemy.src = "RPG/images/Enemy.png";
imgMoutain.onload=function(){
    imgEnemy.onload=function(){
        for(var x in mapArray)
            {
                if(mapArray[x]==1){
                    ctx.drawImage(imgMoutain,32,65,32,32,x%3*200,Math.floor(x/3)*200,200,200);
                }else if(mapArray[x]==3){
                    ctx.drawImage(imgEnemy,7,40,104,135,x%3*200,Math.floor(x/3)*200,200,200);
                }
            }
    };};
});
$(document).keydown(function(event){
    var targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX;
    event.preventDefault();
    switch(event.which){
        case 37://往左走
            targetImgMainX = currentImgMainX-200;
            targetImgMainY = currentImgMainY;
          // cutImagePositionX = 175;
            break;
        case 38://往上走
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY-200;
         //  cutImagePositionX = 355;
            break;
        case 39://往右走
            targetImgMainX = currentImgMainX+200;
            targetImgMainY = currentImgMainY;
         //  cutImagePositionX = 540;
            break;
        case 40://往下走
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY+200;
         //   cutImagePositionX = 0;
            break;
        case 32://攻擊，將敵人打倒移除圖像
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY;
         //  cutImagePositionX = 0;
            mapArray.splice(4,1,0);
            ctx.clearRect(0,400,200,200);
            break;
        default:
            return;
        
    }
    if(targetImgMainX<=400 && targetImgMainX>=0 && targetImgMainY<=400 && targetImgMainY >=0){
        targetBlock=targetImgMainX/200+targetImgMainY/200*3;
    }else{
        targetBlock=-1;
    }
    
    ctx.clearRect(currentImgMainX, currentImgMainY,200,200);
    if(targetBlock==-1 || mapArray[targetBlock]==1 || mapArray[targetBlock]==3 ){
         
    }
    else{
        $("#talkBox").text("");
        currentImgMainX=targetImgMainX;
        currentImgMainY=targetImgMainY;
    }
    
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMainX,currentImgMainY,200,200);
    
    switch(mapArray[targetBlock])
        {
            case undefined:
                $("#talkBox").text("邊界");
            break;
            case 1:
                $("#talkBox").text("有山");
            break;
            case 2:
                $("#talkBox").text("抵達終點!");
            break;
            case 3:
                $("#talkBox").text("按'空白鍵'攻擊");
            break;    
                
        }
});

