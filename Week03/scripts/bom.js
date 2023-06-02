const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
var chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener("click", () => {
    if (input.value !== "") {
      displayList(input.value);
      chaptersArray.push(input.value);
      setChapterList();
      input.value = "";
      input.focus();
    }
});


function displayList(item) {
  let listItem = document.createElement("li");
  let deleteBread = document.createElement("button");
  listItem.textContent = item;
  deleteBread.textContent = "X";
  deleteBread.classList.add("delete");
  listItem.append(deleteBread);
  list.append(listItem);
  deleteBread.addEventListener("click", function () {
    list.removeChild(listItem);
    deleteChapter(listItem.textContent);
    input.focus();
  });
  console.log("Do NOT click: https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}
function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}
function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
  }
