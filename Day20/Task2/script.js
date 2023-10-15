let apiKey = "o69TBwO9n8alhcatROf2wfNl5nGKZVxdJ_qia_pO_8o";
let photo_Url = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=30`;

let gallery = document.getElementById("mainGalleryt");
let allImg;

let getImg = async () => {
  await fetch(photo_Url)
    .then((res) => res.json())
    .then((data,index) => {
        data.forEach(item => {
            let img = document.createElement("img");
            img.src = item.urls.regular;
            img.className = "gallery_img";
                gallery.appendChild(img);
                img.addEventListener('click', () => {
                    
                    let popup = document.getElementById("popup");
                    let downloadbtn = document.getElementById("downloadbtn");
                    let closebtn = document.getElementById("closebtn");
                    let imagepp = document.getElementById("imagepp");

                    popup.classList.remove("hide");
                    downloadbtn.setAttribute("href", `${item.links.html}`);
                    imagepp.src = item.urls.regular;
                    closebtn.addEventListener("click", () => {
                    popup.classList.add("hide");
                    });
                        
                })
            
        });
            
    })
    
};
getImg();