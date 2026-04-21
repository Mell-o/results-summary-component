import data from "./data.json" with {type: "json"}

const categories = document.querySelector(".categories")

console.log(categories)
for (const category of data) {
    const {category: curCategory, score, icon} = category
    console.log(curCategory, score, icon)
}