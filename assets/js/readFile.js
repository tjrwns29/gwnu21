function innerPage(url){
  fetch(url+'.html').then(function(response){
    response.text().then(function(text){
      document.querySelector('.loadPageContents').innerHTML = text;
    })
  })
}