 fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(resp => {
        let allProducts = resp.products;
        let productRows = "";
        allProducts.forEach(product => {
          let stars = "";
          const fullStars = Math.floor(product.rating);
          const halfStar = product.rating - fullStars >= 0.5 ? 1 : 0;
          const emptyStars = 5 - fullStars - halfStar;

          for (let i = 0; i < fullStars; i++) stars += `<i class="bi bi-star-fill text-warning"></i>`;
          if (halfStar) stars += `<i class="bi bi-star-half text-warning"></i>`;
          for (let i = 0; i < emptyStars; i++) stars += `<i class="bi bi-star text-warning"></i>`;

          productRows += `
            <div class="col-md-3 col-sm-6">
              <div class="card h-100">
                <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}" style="height:180px; object-fit:cover;">
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="card-text">${product.description}</p>
                  <div class="mt-auto d-flex justify-content-between align-items-center">
                    <span class="h6 text-success">Rs. ${Math.trunc(product.price * 280)}</span>
                    <div class="star-rating">${stars} <small class="text-muted">(${product.rating})</small></div>
                  </div>
                </div>
                <div class="card-footer d-flex justify-content-between bg-light">
                  <button class="btn btn-primary btn-sm">Add to Cart</button>
                  <button class="btn btn-outline-secondary btn-sm"><i class="bi bi-heart"></i></button>
                </div>
              </div>
            </div>
          `;
        });
        document.getElementById("myProducts").innerHTML = productRows;
      });