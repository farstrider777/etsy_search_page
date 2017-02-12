var currentHtml;

//etsyData.results.length not used for loop... mockup had 16 showing only
for(var count = 0; count < 16; count++){
  currentHtml = $(".results").html();
  currentHtml += `<div class="image-container">
  <div class="heart-burger">
    <div class="heart-container"><a href="#"><img class="invisible" src="images/heart.png"></a></div>
    <div class="burger-container"><a href="#"><img class="invisible" src="images/hamburger.png"></a></div>
  </div>
  <div class="image"><a href="${etsyData.results[count].url}">
    <img class="search-image" src="${etsyData.results[count].Images[0].url_170x135}"/></a>
  </div>
  <div class="caption"><a href="${etsyData.results[count].url}">
    ${etsyData.results[count].title}</a>
  </div>
  <div class="cap-sell-price">
    <div class="seller"><a href="${etsyData.results[count].Shop.url}">
      ${etsyData.results[count].Shop.shop_name}</a>
    </div>
    <div class="price"><a href="#">
      ${etsyData.results[count].price}</a>
    </div>
    <div class="p-code"><a href="#">
      ${convertPriceCode(etsyData.results[count].currency_code)}</a>
    </div>
  </div>`;
  $(".results").html(currentHtml);
}

//${if(count < 4)}
//<div class="ad">Ad</div> 


function convertPriceCode(pCode){
  if(pCode === "USD"){
    return "$";
  }else if(pCode === "EUR"){
    return "&#8364;";
  }else if(pCode === "GBP"){
    return "&#163;";
  }
}

$(".image-container").hover(function(event) {
  var jevent = event.currentTarget;
  jevent = $(jevent);
  console.log(jevent.children('div.heart-burger'));
  jevent.children("div").children("div").children("a").children('img').removeClass("invisible").addClass("reg-size");
//  $(jevent).find("div").removeClass("invisible").addClass("reg-size");
  //$(".heart-burger img").removeClass("invisible").addClass("reg-size");
  jevent.children("div").children("div.heart-container").addClass("hb-background");
  jevent.children("div").children("div.burger-container").addClass("hb-background");
  //$(".heart-container").addClass("hb-background");
  //$(".burger-container").addClass("hb-background");
  //jevent.addClass("z-up");
}, function(event) {
  $(".heart-burger img").removeClass("reg-size").addClass("invisible");
  $(".heart-container").removeClass("hb-background");
  $(".burger-container").removeClass("hb-background");
});
