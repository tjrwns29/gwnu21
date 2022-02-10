function innerPage(page){
  fetch('./경로'+page+'.html').then(function(response){
      response.text().then(function(text){
          document.querySelector('나타낼 곳').innerHTML = text;
      })
  })
}