function createHomePage() {
    const content = document.getElementById("content");
    
    const title = document.createElement("h1");
    const text = document.createElement("p");

    title.innerText = "Welcome to the restaurant";
    text.innerText = "We serve delighful dishes for the whole family since 1874"

    content.appendChild(title);
    content.appendChild(text);
    console.log("We are in the first page");
};

export {createHomePage};