const apiUrl = "http://206.189.148.20:8080/api/get";

fetch(apiUrl)
    .then(res => {
        return res.json();
    })

    .then(data =>  {
        data.forEach(product => {
            let markup = `<img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text">${product.price}</p>
              <a href="#" class="btn btn-light">Add to Cart</a>
            </div>`;

            document.querySelector('.card-output').innerHTML=markup ;
        });
    })

    .catch(error => {
        console.error('Error:', error);
    });