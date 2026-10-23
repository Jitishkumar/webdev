const input = document.getElementById("search");
const result = document.getElementById("result");

// 1. API se data laana
async function getData(query) {
    if (!query.trim()) {
        result.textContent = "Type something to search";
        return;
    }

    result.textContent = "Loading...";

    try {
        const response = await fetch(
            `https://dummyjson.com/recipes/search?q=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();

        if (data.recipes.length === 0) {
            result.textContent = "No recipes found";
            return;
        }

        result.textContent = data.recipes
            .map(recipe => recipe.name)
            .join(", ");

    } catch (error) {
        result.textContent = "Something went wrong";
    }
}

// 2. Debounce banana
const debounce = function (fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

// 3. Dono functions ko connect karna
const betterFunction = debounce(getData, 300);

// 4. Input ko listen karna
input.addEventListener("input", function () {
    betterFunction(this.value);
});