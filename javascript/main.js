var currentHtml;

for(var count = 0; count < etsyData.results.length; count++){
  currentHtml = $(".results").html();
  console.log(currentHtml);
  currentHtml += `<div class="image"><img src="${etsyData.results[count].Images[0].url_170x135}"/></div>`;
  $(".results").html(currentHtml);
  console.log(currentHtml);
}
