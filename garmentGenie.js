//TERMINAL COMMAND TO VIEW TERMINAL HISTORY IS: npm install -g yo generator-code
const axios = require("axios");

(async() => {
    chrome.tabs.query({active: true, currentWindow: true}, async tabs => {
        let url = tabs[0].url;
        // use url here inside the callback because it's asynchronous!
        if (url.substring(0, 15) == 'https://us.shein.com/') {
            const page = await axios.get(url);
            const data = page.data;
            console.log(data);
            data.then((response) => {console.log('Received response: ${response.status}')});
            console.log("HALLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOJSDOFJAEIOGHAOEWUIAGHIEOHGOIEWUGAHOEIUGAHOEIGAOIGAOISUDFHAOIUEEHOWIFUAHEWO");
        }
    });
}) ();


//get url IF the website is SHEIN.com/ something
//get source/DOM code
//bam then you can substring the product details

//let descriptionStr = '"productDetails":[{"attr_id":1000411,"attr_value_id":"1002451","attr_name":"Quantity","attr_name_en":"Quantity","value_sort":1,"attr_select":1,"attr_sort":0,"left_show":1,"attr_value":"1 piece","attr_value_en":"1 piece","attr_desc":"","attr_image":""},{"attr_id":27,"attr_value_id":"739","attr_name":"Color","attr_name_en":"Color","value_sort":9,"attr_select":1,"attr_sort":2,"left_show":1,"attr_value":"White","attr_value_en":"White","attr_desc":"","attr_image":""},{"attr_id":101,"attr_value_id":"167","attr_name":"Style","attr_name_en":"Style","value_sort":13,"attr_select":1,"attr_sort":5,"left_show":1,"attr_value":"Casual","attr_value_en":"Casual","attr_desc":"","attr_image":""},{"attr_id":73,"attr_value_id":"515","attr_name":"Pattern Type","attr_name_en":"Pattern Type","value_sort":11,"attr_select":1,"attr_sort":7,"left_show":1,"attr_value":"Plain","attr_value_en":"Plain","attr_desc":"","attr_image":""},{"attr_id":31,"attr_value_id":"250","attr_name":"Details","attr_name_en":"Details","value_sort":9,"attr_select":1,"attr_sort":9,"left_show":1,"attr_value":"Drawstring","attr_value_en":"Drawstring","attr_desc":"","attr_image":""},{"attr_id":31,"attr_value_id":"521","attr_name":"Details","attr_name_en":"Details","value_sort":0,"attr_select":1,"attr_sort":9,"left_show":1,"attr_value":"Pocket","attr_value_en":"Pocket","attr_desc":"","attr_image":""},{"attr_id":31,"attr_value_id":"769","attr_name":"Details","attr_name_en":"Details","value_sort":0,"attr_select":1,"attr_sort":9,"left_show":1,"attr_value":"Zipper","attr_value_en":"Zipper","attr_desc":"","attr_image":""},{"attr_id":109,"attr_value_id":"767","attr_name":"Type","attr_name_en":"Type","value_sort":0,"attr_select":1,"attr_sort":13,"left_show":1,"attr_value":"Zip Up","attr_value_en":"Zip Up","attr_desc":"","attr_image":""},{"attr_id":66,"attr_value_id":"362","attr_name":"Neckline","attr_name_en":"Neckline","value_sort":2,"attr_select":1,"attr_sort":27,"left_show":1,"attr_value":"Hooded","attr_value_en":"Hooded","attr_desc":"","attr_image":""},{"attr_id":90,"attr_value_id":"409","attr_name":"Sleeve Length","attr_name_en":"Sleeve Length","value_sort":0,"attr_select":1,"attr_sort":29,"left_show":1,"attr_value":"Long Sleeve","attr_value_en":"Long Sleeve","attr_desc":"","attr_image":""},{"attr_id":92,"attr_value_id":"1000058","attr_name":"Sleeve Type","attr_name_en":"Sleeve Type","value_sort":0,"attr_select":1,"attr_sort":31,"left_show":1,"attr_value":"Drop Shoulder","attr_value_en":"Drop Shoulder","attr_desc":"","attr_image":""},{"attr_id":54,"attr_value_id":"546","attr_name":"Length","attr_name_en":"Length","value_sort":0,"attr_select":1,"attr_sort":37,"left_show":1,"attr_value":"Regular","attr_value_en":"Regular","attr_desc":"","attr_image":""},{"attr_id":40,"attr_value_id":"481","attr_name":"Fit Type","attr_name_en":"Fit Type","value_sort":0,"attr_select":1,"attr_sort":43,"left_show":1,"attr_value":"Oversized","attr_value_en":"Oversized","attr_desc":"","attr_image":""},{"attr_id":39,"attr_value_id":"280","attr_name":"Fabric","attr_name_en":"Fabric","value_sort":0,"attr_select":1,"attr_sort":53,"left_show":1,"attr_value":"Slight Stretch","attr_value_en":"Slight Stretch","attr_desc":"","attr_image":""},{"attr_id":160,"attr_value_id":"526","attr_name":"Material","attr_name_en":"Material","value_sort":1,"attr_select":1,"attr_sort":63,"left_show":1,"attr_value":"Polyester","attr_value_en":"Polyester","attr_desc":"","attr_image":""},{"attr_id":62,"attr_value_id":"526","attr_name":"Composition","attr_name_en":"Composition","value_sort":1,"attr_select":1,"attr_sort":65,"left_show":1,"attr_value":"100% Polyester","attr_value_en":"100% Polyester","attr_desc":"","attr_image":""},{"attr_id":1000069,"attr_value_id":"1002238","attr_name":"Care Instructions","attr_name_en":"Care Instructions","value_sort":1,"attr_select":1,"attr_sort":67,"left_show":1,"attr_value":"Machine wash or professional dry clean","attr_value_en":"Machine wash or professional dry clean","attr_desc":"","attr_image":""},{"attr_id":207,"attr_value_id":"459","attr_name":"Sheer","attr_name_en":"Sheer","value_sort":0,"attr_select":1,"attr_sort":79,"left_show":1,"attr_value":"No","attr_value_en":"No","attr_desc":"","attr_image":""}]';
//let descriptionStr = '"productDetails":[{"attr_id":25,"attr_value_id":"1001033","attr_name":"Closure Type","attr_name_en":"Closure Type","value_sort":6,"attr_select":1,"attr_sort":0,"left_show":1,"attr_value":"Lace-up","attr_value_en":"Lace-up","attr_desc":"","attr_image":""},{"attr_id":146,"attr_value_id":"1946","attr_name":"Size Fit","attr_name_en":"Size Fit","value_sort":0,"attr_select":1,"attr_sort":0,"left_show":1,"attr_value":"True To Size","attr_value_en":"True To Size","attr_desc":"","attr_image":""},{"attr_id":27,"attr_value_id":"112","attr_name":"Color","attr_name_en":"Color","value_sort":0,"attr_select":1,"attr_sort":2,"left_show":1,"attr_value":"Black","attr_value_en":"Black","attr_desc":"","attr_image":""},{"attr_id":73,"attr_value_id":"515","attr_name":"Pattern Type","attr_name_en":"Pattern Type","value_sort":0,"attr_select":1,"attr_sort":7,"left_show":1,"attr_value":"Plain","attr_value_en":"Plain","attr_desc":"","attr_image":""},{"attr_id":106,"attr_value_id":"561","attr_name":"Toe","attr_name_en":"Toe","value_sort":12,"attr_select":1,"attr_sort":8,"left_show":1,"attr_value":"Round Toe","attr_value_en":"Round Toe","attr_desc":"","attr_image":""},{"attr_id":101,"attr_value_id":"628","attr_name":"Style","attr_name_en":"Style","value_sort":16,"attr_select":1,"attr_sort":14,"left_show":1,"attr_value":"Sporty","attr_value_en":"Sporty","attr_desc":"","attr_image":""},{"attr_id":112,"attr_value_id":"278","attr_name":"Upper Material","attr_name_en":"Upper Material","value_sort":0,"attr_select":1,"attr_sort":200,"left_show":1,"attr_value":"Fabric","attr_value_en":"Fabric","attr_desc":"","attr_image":""},{"attr_id":1000003,"attr_value_id":"429","attr_name":"Lining Material","attr_name_en":"Lining Material","value_sort":2,"attr_select":1,"attr_sort":202,"left_show":1,"attr_value":"Mesh","attr_value_en":"Mesh","attr_desc":"","attr_image":""},{"attr_id":51,"attr_value_id":"526","attr_name":"Insole Material","attr_name_en":"Insole Material","value_sort":0,"attr_select":1,"attr_sort":204,"left_show":1,"attr_value":"Polyester","attr_value_en":"Polyester","attr_desc":"","attr_image":""},{"attr_id":68,"attr_value_id":"563","attr_name":"Outsole Material","attr_name_en":"Outsole Material","value_sort":0,"attr_select":1,"attr_sort":206,"left_show":1,"attr_value":"Rubber","attr_value_en":"Rubber","attr_desc":"","attr_image":""}],"mainSaleAttribute":[{"attr_id":27,"attr_value_id":"112","attr_name":"Color","attr_name_en":"Color","value_sort":0,"attr_select":1,"attr_sort":2,"left_show":1,"attr_value":"Black","attr_value_en":"Black","attr_desc":"","attr_image":""}]';

let beginProductDetails = data.indexOf('"productDetails": [{attr_id');
let endProductDetails = data.indexOf('attr_image":""}');
let descriptionStr = data.substring(beginProductDetails, endProductDetails);

let colorStart = descriptionStr.indexOf('"attr_name":"Color"');
let colorEnd = descriptionStr.indexOf('"attr_name":"Style"');
let colorSubstring = descriptionStr.substring(colorStart, colorEnd);
let colorValue = colorSubstring.substring(116, 119);


let patternTypeStart = descriptionStr.indexOf('"attr_name":"Pattern Type"');
let patternTypeEnd = descriptionStr.indexOf('"attr_name":"Details"');
let patternTypeSubstring = descriptionStr.substring(patternTypeStart, patternTypeEnd);
let patternTypeValue = patternTypeSubstring.substring(131, 134);


let sleeveLengthStart;
let sleeveLengthEnd;
let sleeveLengthSubstring;
let sleeveLengthValue;
if (descriptionStr.indexOf('"attr_name": "Sleeve Length"') != -1) {
    sleeveLengthStart = descriptionStr.indexOf('"attr_name":"Sleeve Length"');
    sleeveLengthEnd = descriptionStr.indexOf('"attr_name":"Sleeve Type"');
    sleeveLengthSubstring = descriptionStr.substring(sleeveLengthStart, sleeveLengthEnd);
    sleeveLengthValue = sleeveLengthSubstring.substring(133, 136);
}


/*let quantityStart = descriptionStr.indexOf('"productDetails":[{"attr_id":1000411,"attr_value_id":"1002451","attr_name":"') + 76;
let quantityEnd = descriptionStr.indexOf('"attr_name":"Color"');
let quantitySubstring = descriptionStr.substring(quantityStart, quantityEnd);
let quantityValue = quantitySubstring.charAt(49);
*/
/*let styleStart = descriptionStr.indexOf('"attr_name":"Style"');
let styleEnd = descriptionStr.indexOf('"attr_name":"Pattern Type"');
let styleSubstring = descriptionStr.substring(styleStart, styleEnd);
let styleValue = styleSubstring.substring(117, 120);
*/
/*let detailsStart = descriptionStr.indexOf('"attr_name":"Details"');
let detailsEnd = descriptionStr.indexOf('"attr_name":"Type"');
let detailsSubstring = descriptionStr.substring(detailsStart, detailsEnd);
let detailsValue = detailsSubstring.substring(120, 123);
*/


//let titleStr = '<title>Solid Zip Up Drawstring Thermal Lined Hoodie | SHEIN USA</title>';
//let titleStr = '<title>Knit Lace-up Front Sock Sneakers | SHEIN USA</title>';


let titleStart = titleStr.indexOf('<title>') + 7;
let titleEnd = titleStr.indexOf(' | SHEIN USA</title>')
let titleSubstring = titleStr.substring(titleStart, titleEnd);


const categories = ['Hoodie', 'Top', 'Dress', 'Coat', 'Jacket', 'Leggings', 'Sports Bra', 'Swimsuit', 'Coverup', 'Cover Up', 'Clutch', 'Tote', 'Purse', 'Handbag', 'Necklace', 'Earring', 'Ring', 'Headband', 'Belt', 'Heels', 'Sneakers', 'Boots', 'Pumps', 'Sandals', 'Tank Top', 'Sweatshirt', 'T-shirt', 'Tee', 'Sweaters', 'Jeans', 'Pants', 'Skirt', 'Shorts', 'Accessory'];

let category;

let categorySearch;
let i = 0;

while (categories[i]) {
    categorySearch = titleStr.search(categories[i]);
    if (categorySearch != -1) {
        category = categories[i];
    }
    i++;
}


let fixedCategory;

if (category == 'Dress') {
    fixedCategory = 'Dresses';
}
else if ((category == 'Hoodie') || (category == 'Top') || (category == 'Tank Top') || (category == 'Sweatshirt') || (category == 'T-shirt') || (category == 'Tee')) {
    fixedCategory = 'Tops';
}
else if ((category == 'Coat') || (category == 'Jacket')) {
    fixedCategory = 'Coats & Jackets';
}
else if ((category == 'Leggings') || (category == 'Sports Bra')) {
    fixedCategory = 'Activewear';
}
else if ((category == 'Bikini') || (category == 'Swimsuit') || (category == 'Coverup') || (category == 'Cover Up')) {
    fixedCategory = 'Swimwear';
}
else if ((category == 'Clutch') || (category == 'Tote') || (category == 'Purse')) {
    fixedCategory = 'Handbags';
}
else if ((category == 'Necklace') || (category == 'Accessory') || (category == 'Bracelet') || (category == 'Earring') || (category == 'Ring') || (category == 'Headband') || (category == 'Belt')) {
    fixedCategory = 'Accessories';
}
else if ((category == 'Heel') || (category == 'Sneakers') || (category == 'Boot') || (category == 'Pump') || (category == 'Sandal')) {
    fixedCategory = 'Shoes';
}
else {
fixedCategory = category;
}


let fixedColor;

if (colorValue == 'Ora') {
    fixedColor = 'Orange';
}
else if (colorValue == 'Yel') {
    fixedColor = 'Yellow';
}
else if (colorValue == 'Gre') {
    fixedColor = 'Green';
}
else if (colorValue == 'Blu') {
    fixedColor = 'Blue';
}
else if (colorValue == 'Pur') {
    fixedColor = 'Purple';
}
else if (colorValue == 'Pin') {
    fixedColor = 'Pink';
}
else if (colorValue == 'Bla') {
    fixedColor = 'Black';
}
else if (colorValue == 'Whi') {
    fixedColor = 'White';
}


let fixedPattern;

if (patternTypeValue == 'Sol') {
    fixedPattern = 'Solid';
}
else if (patternTypeValue == 'Hou') {
    fixedPattern = 'Houndstooth';
}
else if (patternTypeValue == 'Pla') {
    fixedPattern = 'Solid';
}
else if (patternTypeValue == 'Col') {
    fixedPattern = 'Colorblock';
}
else if (patternTypeValue == 'Dit') {
    fixedPattern = 'Floral';
}


let fixedSleeveLength;
if (descriptionStr.indexOf('"attr_name":"Sleeve Length"') != -1) {
    if (sleeveLengthValue == 'Lon') {
        fixedSleeveLength = 'Long%20Sleeve';
    }
    else if (sleeveLengthValue == 'Sho') {
        fixedSleeveLength = 'Short%20Sleeve';
    }
    else if (sleeveLengthValue == 'Thr') {
        fixedSleeveLength = '3-4%20Sleeve';
    }
    else if (sleeveLengthValue == 'Hal') {
        fixedSleeveLength = '3-4%20Sleeve';
    }
    else if (sleeveLengthValue == 'Cap') {
        fixedSleeveLength = 'Short%20Sleeve';
    }
    else if (sleeveLengthValue == 'Sle') {
        fixedSleeveLength = 'Sleeveless';
    }
}


let thredUrl;

if (fixedCategory == 'Tops') {
    thredUrl = 'https://www.thredup.com/women/tops?department_tags=women&category_tags=tops';
}
else if (fixedCategory == 'Dresses') {
    thredUrl = 'https://www.thredup.com/women/dresses?department_tags=women&category_tags=dresses';
}
else if (fixedCategory == 'Coats & Jackets') {
    thredUrl = 'https://www.thredup.com/women/outerwear?department_tags=women&category_tags=outerwear';
}
else if (fixedCategory == 'Activewear') {
    thredUrl = 'https://www.thredup.com/women/activewear?department_tags=women&category_tags=activewear';
}
else if (fixedCategory == 'Swimwear') {
    thredUrl = 'https://www.thredup.com/women/swimwear?department_tags=women&category_tags=swimwear';
}
else if (fixedCategory == 'Handbags') {
    thredUrl = 'https://www.thredup.com/handbags?department_tags=handbags';
}
else if (fixedCategory == 'Accessories') {
    thredUrl = 'https://www.thredup.com/accessories?department_tags=accessories';
}
else if (fixedCategory == 'Shoes') {
    thredUrl = 'https://www.thredup.com/shoes?department_tags=shoes';
}


if (fixedCategory == 'Tops') {
    thredUrl = thredUrl + '&color_names=' + fixedColor + '&chars_pattern=' + fixedPattern + '&chars_sleeve_length=' + fixedSleeveLength;
}
else {
    thredUrl = thredUrl + '&color_names=' + fixedColor + '&chars_pattern=' + fixedPattern;
}

window.open(thredUrl);