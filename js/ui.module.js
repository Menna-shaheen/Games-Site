export class Ui {
   displayDataGame(data) {
      let gamesBox = ``;
      for (let i = 0; i < data.length; i++) {
         gamesBox += `
             <div class="col-lg-3 col-md-6 h-100 main text-white ">
            <div data-id="${data[i].id}" class="card bg-transparent">
            <figure> 
            <img src="${data[i].thumbnail}" class="object-fit-cover h-100 card-img-top w-100 p-2 pb-0  rounded-4" alt="...">
            </figure>
              
               <div class="card-body base d-flex justify-content-between ">
                  <h6>${data[i].title}</h6>
                  <button class="btn1">free</button>
               </div>
               <div class="description p-1">
                   <p class="card-text small text-center opacity-50 ">
                    ${data[i].short_description.split(" ",9 )}
                   </p>
                  </div>
   
               <ul class="list-group list-group-flush">

                  <li class="list-group-item bg-transparent">
                     <div class="card-end d-flex justify-content-between">
                        <a href="#" class="card-link text-decoration-none rounded-3 px-1 small">${data[i].genre}</a>
                        <a href="#" class="card-link text-decoration-none rounded-3 px-1  small">${data[i].platform}</a>
                     </div>
                  </li>
               </ul>

            </div>
         </div>
      
          `;
      }

      document.getElementById("games").innerHTML = gamesBox;
   }
   displayDetails(data) {
      const content = `
        <div class="col-md-4 mt-5">
                  <img src="${data.thumbnail}" class="w-100" alt="">
               </div>
               <div class="col-md-8 mt-5  fw-bold">
                  <h3>Title : <span>${data.title}</span></h3>
                  <p class="text-white">Category: <span>${data.genre}</span></p>
                  <p class="text-white">Platform: <span>${data.platform}</span></p>
                  <p class="text-white">Status: <span>${data.status}</span></p>
                  <p class="text-white">${data.description}</p>
                    <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
               </div>
      
      `;

      document.getElementById("details").innerHTML = content;
   }

}
