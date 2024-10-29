window.onload = function() {


    fetch('../res/json/myjson.json') //  ../..   -lähen 1x tagasi
        .then((response) => response.json()) //Response on see,kus on status:200, body ning veel igast parameetrite väärtused. .json() loeb õigemale kujule
        console.log("lol")
        .then(json => {
            console.log("lol")
            console.log(json); //json on andmed,kus on 100 asja, iganäeb välja nt: {id:1, name:Aadu, title:suema, body:tahan süüa}
            
            for (let i=0; i < json.length; i++){ // Kordus, mis käib läbi kõik elemendid. 
                console.log(json[i]);

                let section = document.createElement("section"); // Loob uue <div> elemendi.
                section.className = 'post'
                    let h1 = document.createElement("h1");
                        let a = document.createElement("a");
                        a.innerText = (json[i].author_pic); //Võtame json'ist author_pic'i ja salvestame muutujasse a ehk a' le lisame user_icon pildi
                        h1.appendChild(a);
                        let p = document.createElement("p");
                        p.innerText = (json[i].created_time); //Võtame json'ist created_time'i ja salvestame muutujasse p
                        h1.appendChild(p);
                    section.appendChild(h1);

                    let div = document.createElement("div");
                    div.className = 'postWithPic';
                        let div_a = document.createElement("a");
                        div_a.innerText = (json[i].image); //Võtame json'ist image ja salvestame muutujasse div_a ehk div_a'le lisame postituse pildi
                        div.appendChild(div_a);
                    section.appendChild(div);

                    let footer = document.createElement("footer");
                        let footer_p = document.createElement("p");
                        footer_p.innerText = (json[i].content); //Võtame json'ist content ja salvestame muutujasse footer_p ehk lisame postituse kommentaari
                        footer.appendChild(footer_p);
                        let footer_a = document.createElement("a");
                        // a' le lisame like pildi
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