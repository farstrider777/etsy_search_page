var currentHtml;

for(var count = 0; count < etsyData.results.length; count++){
  currentHtml = $(".results").html();
  currentHtml += `<div class="image-container">
  <div class="image"><img width=230 height=184 src="${etsyData.results[count].Images[0].url_170x135}"/></div>
  <div class="cap-sell-price">
  <div class="caption">${captionShrink(etsyData.results[count].title)}</div>
  <div class="seller">${etsyData.results[count].Shop.shop_name}</div>
  <div class="p-code">${convertPriceCode(etsyData.results[count].currency_code)}</div>
  <div class="price">${etsyData.results[count].price}</div>
  </div>
  <div>`;
  $(".results").html(currentHtml);
}

function captionShrink(longCaption){
  if(longCaption.length > 34){
    return longCaption.slice(0, 31) + "...";
  }
}

function convertPriceCode(pCode){
  if(pCode === "USD"){
    return "$";
  }else if(pCode === "EUR"){
    return "&#8364;";
  }else if(pCode === "GBP"){
    return "&#163;";
  }

}
