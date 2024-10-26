// Get the active tab URL and check if it's a SHEIN page
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  let url = tabs[0].url;

  if (url.includes("shein.com")) {
      // Call a function to handle the SHEIN recommendation logic


      document.addEventListener("DOMContentLoaded", () => {
        // Request the stored page source from the background script
        chrome.runtime.sendMessage({ action: "getPageSource" }, (response) => {
          if (response && response.source) {
            data = response.source;
            thredUpUrl = recommendationLogic(data);
            document.getElementById("recommendation").innerHTML = 
          `<a href="${thredUpUrl}" target="_blank">Check out similar items on ThredUp!</a>`;
          } else {
            document.getElementById("source").textContent = "Page source not found.";
          }
        });
      });          
  } 
  else {
      document.getElementById("recommendation").innerHTML = 
          "You are not on a SHEIN page.";
  }
});

function recommendationLogic(data) {
  
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


let titleStart = data.indexOf('<title>') + 7;
let titleEnd = data.indexOf('</title>')
let titleSubstring = data.substring(titleStart, titleEnd);


const categories = ['Hoodie', 'Top', 'Dress', 'Coat', 'Jacket', 'Leggings', 'Sports Bra', 'Swimsuit', 'Coverup', 'Cover Up', 'Clutch', 'Tote', 'Purse', 'Handbag', 'Necklace', 'Earring', 'Ring', 'Headband', 'Belt', 'Heels', 'Sneakers', 'Boots', 'Pumps', 'Sandals', 'Tank Top', 'Sweatshirt', 'T-shirt', 'Tee', 'Sweaters', 'Jeans', 'Pants', 'Skirt', 'Shorts', 'Accessory'];

let category;

let categorySearch;
let i = 0;

while (categories[i]) {
    categorySearch = titleSubstring.search(categories[i]);
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
//window.open(thredUrl);
return thredUrl;
}