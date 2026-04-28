import data from "./data.json" with {type: "json"}

const categories = document.querySelector(".categories")

const createCategories = (categoryData) => {
    return categoryData.map(({category: curCategory, score, icon}) => {
        return `
        <li class="category ${curCategory.toLowerCase()}-cat">
            <div class="cat-label">
                <img src="${icon}" alt="">
                <span>${curCategory}</span>
            </div>
            <div class="cat-score">
                <span>${score}</span><span class="cat-score-total"> / 100</span>
            </div>
        </li>
        `
    })
}

const renderCategories = (containerEl, categoryItems) => {
    containerEl.innerHTML = categoryItems.join("")
}

renderCategories(categories, createCategories(data))