
function emojiSearch(){
    let inputVal = document.querySelector(".searchBox").value;
    //console.log(inputVal);
    displayEmoji(inputVal);

}
function displayEmoji(searchQuery= ""){

    //filtering the emojis with filter on the basis of tags, aliases, desc
    let filteredData = emojiList.filter((e)=>{
        if(e.description.indexOf(searchQuery) != -1){
            return true;
        }

        if(e.tags.some(elem=>elem.startsWith(searchQuery))){
            return true;
        }

        if(e.aliases.some(elem=>elem.startsWith(searchQuery))){
            return true;
        }
    })

    console.log(filteredData);


    let parent = document.querySelector("#emojeeContainer");
    parent.innerHTML = "";
    filteredData.forEach((e)=>{
        let new_row = document.createElement("tr");
        let new_col_emoji = document.createElement("td");
        let new_col_alises = document.createElement("td");
        let new_col_desc = document.createElement("td");
        //console.log(new_col_emoji, new_col_alises, new_col_desc);
        new_col_emoji.innerText = e.emoji;
        new_col_alises.innerText = e.aliases;
        new_col_desc.innerText = e.description;
        //console.log(new_col_emoji, new_col_alises, new_col_desc);
        new_row.append(new_col_emoji);
        new_row.append(new_col_alises);
        new_row.append(new_col_desc);
        //console.log(new_row);
        parent.append(new_row);
    })
   
}
window.onload = () => (displayEmoji());

document.querySelector(".searchBox").addEventListener("keyup", emojiSearch)
   
