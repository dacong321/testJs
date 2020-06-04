console.log("test");

foramtImageStrToVector = function (Item, strList) {
    let index = 0;
    console.log("Item.content ==", Item.content);
    let pos = Item.content.indexOf("/e");
    if (pos == -1) {
        strList.push(Item.content);
        return 1;
    }

    //找到起始位置到 "/e" 字符串
    let qian_str = Item.content.substr(0, pos);

    //前边的字符串
    if (qian_str.length != 0) {
        let stu_str;
        stu_str.color = Item.color;
        stu_str.parm1 = Item.parm1;
        stu_str.type = Item.type;
        stu_str.str = qian_str;
        strList.push(stu_str);
        index++;
    }

    //中间的图片
    let tmpstr1 = tmpstr.substr(pos, tmpstr.length);
    let img = tmpstr1.substr(0, 4);  // 得到这个字符串  "/e**"  这个字符串代表
    //原平台gbk转    ******
    //img = GBKToUTF8(img.c_str()); 
    img = "";

    let stu_str1;
    stu_str1.type = 1;
    stu_str1.parm1 = 40;//道具得缩放
    stu_str1.color = str1.color;

    //原平台这里是解析图片字符串的  ******
    //stu_str1.str = TRColorData::getInstance()->getImage(img);
    stu_str1.str = "";


    //图片字符串长度 大于0
    if (stu_str1.str.length > 0) {
        strList.push(stu_str1);
        index++;
    }
    else {
        //解析不是图片，是字符串
        stu_str1.type = 0;
        stu_str1.str = img;
        strList.push(stu_str1);
        index++;
    }


    //后边的字符串
    if (tmpstr1.length < 4)
        return index;
    let hou_str = tmpstr1.substr(4, tmpstr1.length);
    if (hou_str.length == 0)
        return index;
    let stu_str2;
    stu_str2.color = Item.color;
    stu_str2.parm1 = Item.parm1;
    stu_str2.type = Item.type;
    stu_str2.str = hou_str;
    console.log("hou_str == ", hou_str);

    if (hou_str.indexOf("/e") == -1) {
        strList.push_back(stu_str2);
        return index;
    }
    index += foramtImageStrToVector(stu_str2, strList);

    return index;
}

addColorString = function(defaultColor,str,strList){
    if(str.length == 0){
        return;
    }
    //strList.push(str);
    console.log("strList.push == ", strList);

    //let defaultColor = "cc.Color.YELLOW";
    defaultColor = "cc.Color.YELLOW";
    let Item = {type:0, color:defaultColor,content:""};

    let tmpStr = str;
    let pos=-1;
    while ((pos = tmpStr.indexOf("/c")) != -1)
    {
        tmpStr = tmpStr.replace(pos, 2, "");
    }
    if (tmpStr.length != 0)
    {
        Item.content = tmpStr;
        //-- 如果文本中含有图片标识，则需要再次拆解图片
        this.foramtImageStrToVector(Item, strList);
        //strList.push(Item);
    }
    
}

//-- 组织数据,第三个参数有可能是服务端传来的颜色标记
formatColorStrToVector = function(str,strList,defaultColor){
    //-- 循环播放的公告信息;
    //gg.global.localBroadcast = content._LocalBroadcast;
    //上述数据切割成几个单元，每个数据单元是
    // data.item = {
    // 	type	:	0,	//0文字 1 图片 2数字标签
    // 	color	:	cc.Color.YELLOW,
    // 	content	:	""
    // };

    //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。如果要检索的字符串值没有出现，则该方法返回 -1。
    let baseStr = str;

    
    let posStart = baseStr.indexOf("/C"); //5
    console.log("第几次调用？？");
    if (posStart != -1){
        let posEnd = baseStr.indexOf("/c");
        let tmpStart = posStart;
        let totalStart = tmpStart;

        let n = 0;
        console.log("tmpStart == " ,tmpStart);  //5
        console.log("posEnd == " ,posEnd);      //19

        //While:切割 /C06到/c之间的字符串，得到客服微信号
        //字符串的构成可能是这样的：  “/C06测试测/C06垃圾垃圾垃圾垃圾垃圾垃圾试测试/c圾垃圾垃圾垃圾垃/c”
        //“/C06测试测试测试/c”
        while (posEnd != -1 && tmpStart != -1){
            n++;
            console.log("循环 " + n + "次");  //1
            totalStart += 4;                    // 5 + 4 = 9
            console.log("baseStr==",baseStr);
            console.log("totalStart",totalStart);
            console.log("posEnd",posEnd);      //19
            console.log(" posEnd - totalStart", posEnd - totalStart); //19 - 9 = LENGTH 10
           
            //substr(start,length) 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
            //start	必需。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。
            //length	可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。

            //第一次调用，将得到字符串 "Letou0416"
            console.log("baseStr.substr(totalStart,posEnd - totalStart)==", baseStr.substr(totalStart,posEnd - totalStart)); 
            tmpStart = baseStr.substr(totalStart,posEnd - totalStart).indexOf("/C"); //切割原字符串index = 9 后面10位.找到子字符串“Letou0416/c”。  再次在子串中找/C 字符的索引
            console.log("tmpStart---" ,tmpStart); //-1 ： 如果没有找到，则为-1，

            //如果在原/C和c之间的 子字符串“Letou0416/c” 中找到了/C， 则再次找之间包含的c
            if (tmpStart != -1) {
                totalStart += tmpStart; //将9 + "/C"的index，作为新的起始Index
                let tmpEnd = baseStr.substr(posEnd + 2).find("/c"); //切割原字符串index = 19 + 2 到字符串末尾的字符串.找到字符“/c”。
                console.log("baseStr.substr(posEnd + 2)==", baseStr.substr(posEnd + 2));
                console.log("tmpEnd==", tmpEnd);
                if (tmpEnd != -1)
                    posEnd += tmpEnd + 2; //如果没找到最后一个字符，则继续循环找
                else
                    posEnd = -1;  //如果找到最后一个字符都没有找到/c, 则这个 /C06到/c之间的串就找完了，停止while循环，
            }
        }
        if (posEnd == -1){
            posEnd = baseStr.length;
        }

        console.log("this.addColorString(baseStr.substr(0, posStart), strList);", baseStr.substr(0, posStart));
        //第一次调用，将得到字符串 "客服微信："
        this.addColorString(defaultColor,baseStr.substr(0, posStart), strList);

        //第二次调用        第三个参数是/C06
        formatColorStrToVector(baseStr.substr(posStart + 4, posEnd-posStart-4), strList, baseStr.substr(posStart, 4)); //5+4, 19-5-4.  截取5-10为字符串。是/C到/c之间的，字符串。
        //将得到字符串 "Letou0416"
        //this.addColorString(defaultColor,baseStr.substr(posStart + 4, posEnd-posStart-4), strList);
        console.log("baseStr.substr(posStart + 4, posEnd-posStart-4)==", baseStr.substr(posStart + 4, posEnd-posStart-4));

        if (posEnd+2 < baseStr.length){
            //第三次调用， 最后的/c位置到字符串末尾的 最后一个子串。
            formatColorStrToVector(baseStr.substr(posEnd + 2), strList, defaultColor);
            //将得到字符串 "，文明游戏！严禁赌博！"
            //this.addColorString(defaultColor,baseStr.substr(posEnd + 2), strList);
            console.log("baseStr.substr(posEnd + 2)==", baseStr.substr(posEnd + 2));
        }
            

    }
    
    else{
        this.addColorString(defaultColor,str, strList);
        console.log("str==", str);
    }


}

// //let str = "系统消息： /C06qwewre0416/c，灌灌灌灌！反反复复！";
// let str =   "客服微信：/C06Letou0416/c，文明游戏！严禁赌博！"
// let strList = [];
// formatColorStrToVector(str,strList,"cc.Color.YELLOW");

// console.log("strList last == ", strList);

let  colorMap = {
    C01     : "#ffffff",            //-- 白色
    C02     : "#000000",            //-- 黑色
    C03     : "#FF0000",            //-- 红色
    C04     : "#00FF00",            //-- 绿色
    C05     : "#B7D8DA",            //-- 蓝灰
    C06     : "#FFFF00",            //-- 黄色
    C07     : "#FF00FF",            //-- 紫色 
    C08     : "#00FFFF",            //-- 青色
    C17     : "#0000FF",            //-- 蓝色
    C18     : "#979598",            //-- 灰色
    C19     : "#8C480B",            //-- 棕色
    C20     : "#1E7200",            //-- 绿色
}

getColorByColorCode = function (colorCode) {
    colorCode = colorCode.replace("/", "");
    return colorMap[colorCode];
}

console.log("getColorByColorCode(C20) == ",getColorByColorCode("C21"));
