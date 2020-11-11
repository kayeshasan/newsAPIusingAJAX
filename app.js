console.log("running")
// 7e28ec565114447f85a16aa6319c1887
let nAccordion = document.getElementById("newsAccordion")

const xhr = new XMLHttpRequest()
xhr.open('GET', 'http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=7e28ec565114447f85a16aa6319c1887', true)

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        // console.log(json)
        let articles = json.articles
        // console.log(articles)

        let newsHtml = ''
        articles.forEach(function(element, index) {
            let khobor = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += khobor;

        });

        nAccordion.innerHTML = newsHtml
    }
    else {
        console.log("some error occured")
    }
}

xhr.send()


