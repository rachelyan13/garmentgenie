const axios = require("axios");
let data;

/*async function test () {
    let page = await axios.get('https://us.shein.com/Corduroy-Flap-Pocket-Button-Up-Crop-Jacket-p-2915435-cat-1776.html?src_identifier=on%3DBanner%60cn%3Dh4%60hz%3D0%60ps%3D2_1%60jc%3Dsheinpicks_1&src_module=WomenHomePage&src_tab_page_id=page_home1665442779220&mallCode=1&scici=WomenHomePage~~ON_Banner,CN_h4,HZ_0,HI_0~~2_1~~shein_picks_1~~~~');
    data = page.data;
    console.log(data);
};*/



async function test() {
  let promise = new Promise((resolve, reject) => {
    let page = axios.get('https://us.shein.com/Corduroy-Flap-Pocket-Button-Up-Crop-Jacket-p-2915435-cat-1776.html?src_identifier=on%3DBanner%60cn%3Dh4%60hz%3D0%60ps%3D2_1%60jc%3Dsheinpicks_1&src_module=WomenHomePage&src_tab_page_id=page_home1665442779220&mallCode=1&scici=WomenHomePage~~ON_Banner,CN_h4,HZ_0,HI_0~~2_1~~shein_picks_1~~~~');
    //setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

test().then(function () {
  let beginProductDetails = data.indexOf('"productDetails": [{attr_id');
  let endProductDetails = data.indexOf('attr_image":""}');
  let descriptionStr = data.substring(beginProductDetails, endProductDetails);
  console.log(descriptionStr);
})