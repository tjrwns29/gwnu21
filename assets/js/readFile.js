function innerPage(page){
  fetch(page+'.html').then(function(response){
      response.text().then(function(text){
          document.querySelector('.load-contents').innerHTML = text;
      })
  })
}