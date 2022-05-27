
async function movieSearch(){
        let title = document.getElementById("ap").value;
        let url=`http://www.omdbapi.com/?t=${title}&apikey=5bb45781`;
    
        try{
            let res = await fetch(url) 
            let users = await res.json();
            console.log(users)
            display(users);
        }
        catch (err){
            errorDisplay(err);
        }    
  
    }
function display(data){
    document.getElementById("cont").innerHTML=null;
        let CARD = document.createElement("div")
        let IM = document.createElement("img")
        let H1 = document.createElement("h1")
        let H3 = document.createElement("h3")
        let H4 = document.createElement("h4")
        let H5 = document.createElement("h4")
        let BT = document.createElement("button")
        
        IM.src=data.Poster;
        H1.innerText=data.Title;
        H3.innerText=data.Released;
        H4.innerText=data.Ratings[0].Value;
        H5.innerText=data.Language;
        H5.style.color="green";
        BT.innerText="Recommended";
        BT.setAttribute("id","rec");
        

        if(data.imdbRating>8){
            CARD.append(IM,H1,H3,H4,H5,BT);
            document.getElementById("cont").append(CARD); 
        }
        else{
            CARD.append(IM,H1,H3,H4,H5);
            document.getElementById("cont").append(CARD); 
        }
          
}
function errorDisplay(err){
    document.getElementById("cont").innerHTML=null;
    let IM = document.createElement("img");
    IM.src = "https://media1.giphy.com/media/dsWOUTBz5aae8ET8Ss/200w.webp?cid=ecf05e47xec159uvmdor4psnr3pgnmkfd0poazhdxl06740g&rid=200w.webp&ct=g"
    
    document.getElementById("cont").append(IM);
}
