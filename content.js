// Checks if the current page's URL is a specific product page; from what I know, only specific product pages will contain "img"
// somewhere in the URL.
if (window.location.href.includes("shein") && window.location.href.includes("img")) {
    console.log("product page");
    setTimeout(() => {
        let data = document.documentElement.outerHTML;
        thredUpUrl = recommendationLogic(data); // Generate the ThredUp URL here

        chrome.runtime.sendMessage({ action: "setUrl", data: { url: thredUpUrl } });

        console.log("Generated ThredUp URL:", thredUpUrl); // Log the URL

        if (thredUpUrl.length != 0) {
            chrome.runtime.sendMessage({ action: "createNotification" });
        }
        else {
            console.warn("ThredUp URL is empty, notification will not be triggered.");
        }
    }, 200);
}


// The logic for crafting a corresponding thredUp URL based on SheIn DOM code information.
function recommendationLogic(data) {

    // let beginProductDetails = data.indexOf('"productDetails": [{attr_id');
    // let endProductDetails = data.indexOf('attr_image":""}');
    // let descriptionStr = data.substring(beginProductDetails, endProductDetails);

    let colorStart = data.indexOf('span class="sub-title" data-v');
    //let colorStart = data.indexOf("Color");
    //let colorStart = data.indexOf('Color</span><span class="sub-title" data-v-6939c68d>:');
    //console.log("COLOR START: " + colorStart);
    let colorEnd = data.indexOf('</span></div><div class="goods-color__title-link-box');
    //console.log("COLOR END: " + colorEnd);
    //console.log(data.substring(colorEnd - 10, colorEnd));
    let colorSubstring = data.substring(colorStart, colorEnd);
    //console.log("COLORSUBSTRING STARTS HERE: " + colorSubstring + " COLORSUBSTRING ENDS HERE");
    //let colorValue = colorSubstring.substring(116, 119);


    // let patternTypeStart = descriptionStr.indexOf('"attr_name":"Pattern Type"');
    // let patternTypeEnd = descriptionStr.indexOf('"attr_name":"Details"');
    // let patternTypeSubstring = descriptionStr.substring(patternTypeStart, patternTypeEnd);
    // let patternTypeValue = patternTypeSubstring.substring(131, 134);


    // let sleeveLengthStart;
    // let sleeveLengthEnd;
    // let sleeveLengthSubstring;
    // let sleeveLengthValue;
    // if (descriptionStr.indexOf('"attr_name": "Sleeve Length"') != -1) {
    //     sleeveLengthStart = descriptionStr.indexOf('"attr_name":"Sleeve Length"');
    //     sleeveLengthEnd = descriptionStr.indexOf('"attr_name":"Sleeve Type"');
    //     sleeveLengthSubstring = descriptionStr.substring(sleeveLengthStart, sleeveLengthEnd);
    //     sleeveLengthValue = sleeveLengthSubstring.substring(133, 136);
    // }


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

    console.log(titleSubstring);

    const categories = ['Hoodie', 'Top', 'Dress', 'Blouse', 'Coat', 'Jacket', 'Leggings', 'Sports Bra', 'Swimsuit', 'Coverup', 'Cover Up', 'Clutch', 'Tote', 'Purse', 'Handbag', 'Necklace', 'Earring', 'Ring', 'Bracelet', 'Headband', 'Belt', 'Heels', 'Sneakers', 'Boots', 'Pumps', 'Sandals', 'Tank Top', 'Sweatshirt', 'T-shirt', 'T-Shirt', 'Tee', 'Sweaters', 'Jeans', 'Pants', 'Skirt', 'Shorts', 'Accessory'];

    let category;

    let categorySearch;
    let i = 0;

    while (categories[i]) {
        categorySearch = titleSubstring.search(categories[i]);
        if (categorySearch != -1) {
            category = categories[i];
            break;
        }
        else {
            category = "";
        }
        i++;
    }
    console.log(category); // works


    let fixedCategory;

    if ((category.toLowerCase().includes('dress'))) {
        fixedCategory = 'Dresses';
    }
    else if ((category.toLowerCase().includes('hoodie')) || (category.toLowerCase().includes('top')) || (category.toLowerCase().includes('tank')) || (category.toLowerCase().includes('sweatshirt')) || (category.toLowerCase().includes('t-shirt')) || (category.toLowerCase().includes('tee'))) {
        fixedCategory = 'Tops';
    }
    else if ((category.toLowerCase().includes('coat')) || (category.toLowerCase().includes('jacket'))) {
        fixedCategory = 'Coats & Jackets';
    }
    else if ((category.toLowerCase().includes('leggings')) || (category.toLowerCase().includes('sports bra'))) {
        fixedCategory = 'Activewear';
    }
    else if ((category.toLowerCase().includes('bikini')) || (category.toLowerCase().includes('swimsuit')) || (category.toLowerCase().includes('coverup')) || (category.toLowerCase().includes('cover up'))) {
        fixedCategory = 'Swimwear';
    }
    else if ((category.toLowerCase().includes('clutch')) || (category.toLowerCase().includes('Tote')) || (category.toLowerCase().includes('purse'))) {
        fixedCategory = 'Handbags';
    }
    else if ((category.toLowerCase().includes('necklace')) || (category.toLowerCase().includes('accessory')) || (category.toLowerCase().includes('bracelet')) || (category.toLowerCase().includes('earring')) || (category.toLowerCase().includes('ring')) || (category.toLowerCase().includes('headband')) || (category.toLowerCase().includes('belt'))) {
        fixedCategory = 'Accessories';
    }
    else if ((category.toLowerCase().includes('heel')) || (category.toLowerCase().includes('sneakers')) || (category.toLowerCase().includes('boot')) || (category.toLowerCase().includes('pump')) || (category.toLowerCase().includes('sandal'))) {
        fixedCategory = 'Shoes';
    }
    else {
        fixedCategory = "";
    }

    console.log(fixedCategory); // works

    let fixedColor;

    if (colorSubstring.toLowerCase().includes("orange")) {
        fixedColor = 'orange';
    }
    else if (colorSubstring.toLowerCase().includes('red')) {
        fixedColor = 'red';
    }
    else if (colorSubstring.toLowerCase().includes("yellow")) {
        fixedColor = 'yellow';
    }
    else if (colorSubstring.toLowerCase().includes("green")) {
        fixedColor = 'green';
    }
    else if (colorSubstring.toLowerCase().includes("blue")) {
        fixedColor = 'blue';
    }
    else if (colorSubstring.toLowerCase().includes("purple")) {
        fixedColor = 'purple';
    }
    else if (colorSubstring.toLowerCase().includes("pink")) {
        fixedColor = 'pink';
    }
    else if (colorSubstring.toLowerCase().includes("black")) {
        fixedColor = 'black';
    }
    else if (colorSubstring.toLowerCase().includes("white")) {
        fixedColor = 'white';
    }
    else if (colorSubstring.toLowerCase().includes("brown")) {
        fixedColor = "brown";
    }
    else if (colorSubstring.toLowerCase().includes("grey") || colorSubstring.toLowerCase().includes("gray")) {
        fixedColor = "grey";
    }
    else {
        fixedColor = "";
    }
    console.log(fixedColor); // always gives the 1st if statement color rn

    // let fixedPattern;

    // if (patternTypeValue == 'Sol') {
    //     fixedPattern = 'Solid';
    // }
    // else if (patternTypeValue == 'Hou') {
    //     fixedPattern = 'Houndstooth';
    // }
    // else if (patternTypeValue == 'Pla') {
    //     fixedPattern = 'Solid';
    // }
    // else if (patternTypeValue == 'Col') {
    //     fixedPattern = 'Colorblock';
    // }
    // else if (patternTypeValue == 'Dit') {
    //     fixedPattern = 'Floral';
    // }
    // console.log(fixedPattern); //undefined

    // let fixedSleeveLength;
    // if (descriptionStr.indexOf('"attr_name":"Sleeve Length"') != -1) {
    //     if (sleeveLengthValue == 'Lon') {
    //         fixedSleeveLength = 'Long%20Sleeve';
    //     }
    //     else if (sleeveLengthValue == 'Sho') {
    //         fixedSleeveLength = 'Short%20Sleeve';
    //     }
    //     else if (sleeveLengthValue == 'Thr') {
    //         fixedSleeveLength = '3-4%20Sleeve';
    //     }
    //     else if (sleeveLengthValue == 'Hal') {
    //         fixedSleeveLength = '3-4%20Sleeve';
    //     }
    //     else if (sleeveLengthValue == 'Cap') {
    //         fixedSleeveLength = 'Short%20Sleeve';
    //     }
    //     else if (sleeveLengthValue == 'Sle') {
    //         fixedSleeveLength = 'Sleeveless';
    //     }
    // }
    // console.log(fixedSleeveLength); // undefined

    let thredUrl;

    if (fixedCategory.toLowerCase().includes('top')) {
        thredUrl = 'https://www.thredup.com/women/tops?department_tags=women&category_tags=tops';
    }
    else if (fixedCategory.toLowerCase().includes('dresses')) {
        thredUrl = 'https://www.thredup.com/women/dresses?department_tags=women&category_tags=dresses';
    }
    else if (fixedCategory.toLowerCase().includes('coats') || fixedCategory.toLowerCase().includes('jackets')) {
        thredUrl = 'https://www.thredup.com/women/outerwear?department_tags=women&category_tags=outerwear';
    }
    else if (fixedCategory.toLowerCase().includes('activewear')) {
        thredUrl = 'https://www.thredup.com/women/activewear?department_tags=women&category_tags=activewear';
    }
    else if (fixedCategory.toLowerCase().includes('swimwear')) {
        thredUrl = 'https://www.thredup.com/women/swimwear?department_tags=women&category_tags=swimwear';
    }
    else if (fixedCategory.toLowerCase().includes('handbags')) {
        thredUrl = 'https://www.thredup.com/handbags?department_tags=handbags';
    }
    else if (fixedCategory.toLowerCase().includes('accessories')) {
        thredUrl = 'https://www.thredup.com/accessories?department_tags=accessories';
    }
    else if (fixedCategory.toLowerCase().includes('shoes')) {
        thredUrl = 'https://www.thredup.com/shoes?department_tags=shoes';
    }
    else if (fixedCategory.toLowerCase().includes('pants')) {
        thredUrl = 'https://www.thredup.com/women/pants?department_tags=women&category_tags=pants';
    }
    else {
        thredUrl = 'https://www.thredUp.com/women/'
    }


    if (fixedCategory.toLowerCase().includes('tops') && fixedColor != "") {
        thredUrl = thredUrl + '&color_names=' + fixedColor;
        // + '&chars_pattern=' + fixedPattern + '&chars_sleeve_length=' + fixedSleeveLength;
    }
    else if (fixedCategory == "" || fixedColor == "") {
        thredUrl = thredUrl;
    }
    else {
        thredUrl = thredUrl + '&color_names=' + fixedColor;
        //+ '&chars_pattern=' + fixedPattern;
    }
    //window.open(thredUrl);
    return thredUrl;
}