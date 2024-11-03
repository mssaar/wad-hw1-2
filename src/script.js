window.onload = function() {


    fetch('https://api.npoint.io/c6922b3ef4c80f488eaf/'  ) //  või '../res/json/myjson.json'   (../   -lähen 1x tagasi)
        .then((response) => 
            response.json()) //Response on see,kus on status:200, body ning veel igast parameetrite väärtused. .json() loeb õigemale kujule
        .then(json => {
            console.log(json); //json on andmed,kus on 100 asja, iganäeb välja nt: {id:1, name:Aadu, title:suema, body:tahan süüa}
            
            for (let i=0; i < json.length; i++){ // Kordus, mis käib läbi kõik elemendid. 
                //console.log(json[i]);

                let section = document.createElement("section"); // Loob uue <div> elemendi, kus on postitus
                section.className = 'post'
                    let h1 = document.createElement("h1");
                    h1.className = 'kuupaevJaPilt'
                        let a = document.createElement("a");
                        a.className = 'userPic'
                            let userImage = document.createElement("img");
                            userImage.src = json[i].author_pic;  // kasutaja pilt
                            userImage.alt = "User Icon";  
                            userImage.width = 50;
                            userImage.height = 50;
                            a.appendChild(userImage);
                        h1.appendChild(a);
                        let p = document.createElement("p");
                        p.innerText = (json[i].created_time); //Võtame json'ist created_time'i ja salvestame muutujasse p
                        h1.appendChild(p);
                    section.appendChild(h1);

                    if( json[i].image != null){ //Kui pilt on olemas, siis lisame pildi sektsiooni ja pildi
                        let div = document.createElement("div");
                        div.className = 'postWithPic';  
                            let div_a = document.createElement("a");
                                let postImage = document.createElement("img");
                                postImage.className = 'postPic' //Et saaks pärast telo variandil pilti kitsamaks teha
                                postImage.src = json[i].image; // lisame postituse pildi. Võtame json'ist image ja salvestame muutujasse div_a ehk div_a'le lisame postituse pildi
                                postImage.alt = "Post Image";  
                                postImage.width = 570;
                                div_a.appendChild(postImage);
                            div.appendChild(div_a);
                        section.appendChild(div);
                    }

                    let footer = document.createElement("footer"); // Postituse kirjalik sisu ja like
                        let footer_p = document.createElement("p");
                        footer_p.innerText = (json[i].content); //Võtame json'ist content ja salvestame muutujasse footer_p ehk lisame postituse kommentaari
                        footer.appendChild(footer_p);
                        let footer_a = document.createElement("a");
                            let likeImage = document.createElement("img");
                            likeImage.src = json[i].like;  //  lisame like pildi
                            likeImage.alt = "Like Image";  
                            likeImage.width = 35;
                            likeImage.height = 35;
                            footer_a.appendChild(likeImage);
                        footer.appendChild(footer_a);
                    section.appendChild(footer);


                document.body.appendChild(section); //Lisame selle postituse veebilehele
            }
        })
        .catch(err => { //Kui error, siis kuvab kasti (kuna post), kus "TypeError: Failed to fetch"
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
            })
        .finally(() => { //teeb igal juhul 
                })
}

function toggleDropdown() { // vajutades nupule (pildi peale), avaneb dropdown
    document.getElementById("dropdown").classList.toggle("show");
}

window.addEventListener('click', (event) => {
    let dropdownMenu = document.getElementById("dropdown");
    // kui dropdown on lahti ja hiirevajutus on väljaspool dropdowni, siis eemaldab dropdowni
    if (dropdownMenu.classList.contains("show") && !event.target.matches('.dropdown, .dropdown *')) {
        dropdownMenu.classList.remove("show");
    }
});

{/* <section class="post">
<h1 class="kuupaevJaPilt">
    <a class="userPic" href="#"><img src="res/images/user_icon.png" width="50" height="50" alt="My picture"></a>
    <p> 25.12.2023</p>
</h1>
<div class="postWithPic">
    <a class="post_picture" href="#">
        <img src="res/images/masin.png" alt="My picture">
    </a>
</div>
<footer class="postComments">
    <p>
        Tagavararehepeksumasin
    </p>
    <a class="like" href="#"><img src="res/images/like.png" width="35" height="35" alt="My picture"></a>
</footer>
</section> */}