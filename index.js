import data from "./data.json" with {type: "json"}

const categories = document.querySelector(".categories")

const createCategories = (data) => {
    return data.map(({category: curCategory, score, icon}) => {
        return `
        <div class="category ${curCategory.toLowerCase()}-cat">
            <div class="cat-label">
                <img src="${icon}" alt="">
                <span>${curCategory}</span>
            </div>
            <div class="cat-score">
                <span>${score}</span><span class="cat-score-total"> / 100</span>
            </div>
        </div>
        `
    })
}

const renderCategories = (categories, curCategories) => {
    categories.innerHTML = curCategories.join("")
}

renderCategories(categories, createCategories(data))