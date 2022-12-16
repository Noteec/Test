window.onload = (event) => {

    let Selector = document.getElementById("Companies")
    let AddBtn = document.getElementById("AddBtn")
    let Start = document.getElementById("StartBtn")

    let i = 0;

    AddBtn.onclick = function(){
        Selector.innerHTML += `<select class="selector">
        <option value="Yandex">Yandex</option>
        <option value="Apple">Apple</option>
        <option value="Microsoft">Microsoft</option>
        </select>`
        i += 1
    };
    
    Start.onclick = function(){
        for(k = 0; k < i; k++) {
            
        }
    }

}