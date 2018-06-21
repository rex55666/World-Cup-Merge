$(document).ready(function(){
    
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>重要賽事</th><th>狀態</th></tr>")
    
    var topicCount = topic.length;
    
    var secondUnit = 1000;
    var minuteUnit = secondUnit*60;
    var hourUnit = minuteUnit*60;
    var dayUnit= hourUnit*24
    var Today = new Date()
    
    for(var x=0;x<topicCount;x++)
        {
           $("#courseTable").append("<tr>");
           $("#courseTable").append("<td>"+(x+1)+"</td>");
           $("#courseTable").append("<td>"+(new Date ((startDate.getTime()+x*1*dayUnit))).toLocaleDateString().slice(5)+"</td>");
           $("#courseTable").append("<td>"+topic[x]+"</td>");
          if(Today.getTime()-new Date(startDate.getTime()+x*1*dayUnit)>86400000){
               $("#courseTable").append("<td>"+"已結束"+"</td>");
           }
           else if(0<Today.getTime()-new Date(startDate.getTime()+x*1*dayUnit)&Today.getTime()-new Date(startDate.getTime()+x*1*dayUnit)<=86400000){
               $("#courseTable").append("<td>"+"今天"+"</td>");
           }
           else {
               $("#courseTable").append("<td>"+"未開始"+"</td>");
           }    
           $("#courseTable").append("</tr>");  
}
});