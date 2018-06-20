var topic= [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷",
    "國定假日",
    "條件判斷",
    "控制",
    "重點複習",
    "期中考",
    "多媒體",
    "整合",
    "整合",
    "整合",
    "Dialogflow",
    "Dialogflow",
    "期末實作",
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1);
    startDate.setDate(startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2,21)

