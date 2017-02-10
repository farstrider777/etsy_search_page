var currentHtml;

for(var count = 0; count < etsyData.results.length; count++){
  currentHtml = $(".results").html();
  currentHtml += `<div class="image-container">
  <div class="image"><a href="${etsyData.results[count].url}">
    <img width=230 height=184 src="${etsyData.results[count].Images[0].url_170x135}"/></div>
  </a>
  <div class="caption"><a href="${etsyData.results[count].url}">
    ${captionShrink(etsyData.results[count].title)}</div>
  </a>
  <div class="cap-sell-price">
    <div class="seller"><a href="#">
      ${etsyData.results[count].Shop.shop_name}</div>
    </a>
    <div class="price"><a href="#">
      ${etsyData.results[count].price}</div>
    </a>
    <div class="p-code"><a href="#">
      ${convertPriceCode(etsyData.results[count].currency_code)}</div>
    </a>
  </div>`;
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
