// function closeSecondDiv(string) {
//   let stringArr = Array.from(string);
//   let newString = '';
//   let divCount = 0;
//   let currentDiv = '';
//   let idx = 0;
//
//   while (stringArr.length > 0) {
//     let innerCount = 0
//     if (stringArr[idx] === '<' && stringArr[idx + 1] === 'd') {
//       while (currentDiv !== '<div>') {
//         if (innerCount > 5 || stringArr.length === 0){
//           break
//         }
//         innerCount ++
//         currentDiv += stringArr.shift();
//       }
//       divCount++;
//       if (divCount === 1) {
//         newString += currentDiv;
//         currentDiv = '';
//       } else if (currentDiv === '<div>') {
//         let divArr = Array.from(currentDiv);
//         divArr.splice(1, 0, '/');
//         newString += divArr.join('');
//         currentDiv = '';
//         divCount = 0;
//       }else {
//         newString += currentDiv
//       }
//     } else {
//       newString += stringArr.shift();
//     }
//   }
//
//   return newString;
// }
//
// console.log(closeSecondDiv('<div>div<div>'));
// <div></div>

// function solve(input) {
//   let newInput = [];
//   let count = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === "d" && input[i + 1] === "i" && input[i + 2] === "v") {
//       count++;
//       if (count === 2) {
//         newInput.push("/d");
//         count = 0;
//       } else {
//         newInput.push(input[i]);
//       }
//     } else {
//       newInput.push(input[i]);
//     }
//   }
//   console.log(newInput.join(""));
// }
// //<div><p><div><div></p> -> "<div><p></div><div></p>"
// solve("<div>div<div>");



function solve() {
    const generateButtonElement = document.querySelector("#exercise button");
    generateButtonElement.addEventListener("click", createFurniture);
    const buyButton = document.querySelectorAll("button")[1];
    buyButton.addEventListener("click", buy);
    console.log(buyButton);

    function createFurniture() {
        const textAreaElement = document.querySelector("#exercise textarea");
        const tableBodyElement = document.querySelector("tbody");
        let values = JSON.parse(textAreaElement.value);

        for (const {img, name, price, decFactor} of values) {
            const tableRow = createHtmlElement('tr', '', tableBodyElement);
            const tdImgElement = createHtmlElement('td', '', tableRow);
            createHtmlElement('img','',tdImgElement, '', {src:img});
            const tdFurnitureName = createHtmlElement('td', '', tableRow);
            createHtmlElement('p',name, tdFurnitureName);
            const tdFurniturePrice = createHtmlElement('td','', tableRow);
            createHtmlElement('p', price, tdFurniturePrice);
            const tdFurnitureDeFactor = createHtmlElement('td', '', tableRow);
            createHtmlElement('p', decFactor, tdFurnitureDeFactor);
            const tdInput = createHtmlElement('td','', tableRow);
            createHtmlElement('input','', tdInput, '', {type:'checkbox'});
        }
    }

    function createHtmlElement(typeOfElement,  content,   parent,  classes,attributes) {
        const htmlElement = document.createElement(typeOfElement);
        if (typeOfElement !== "input" && content) {
            htmlElement.textContent = content;
        }
        if(typeOfElement==='input' && content){
            htmlElement.value = content;
        }
        if(classes){
            htmlElement.classList.add(...classes);
        }
        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }
        }
        if(parent){
            parent.appendChild(htmlElement);
        }
        return htmlElement;
    }

    function buy() {
        let boughtFurnitureNames = [];
        let totalPrice = 0;
        let averageDeFactor = 0;

        Array.from(document.querySelectorAll("tbody tr")).forEach((row) => {
            checkbox = row.querySelector("td:nth-child(5) input");
            if (checkbox.checked) {
                const furnitureName =
                    row.querySelector("td:nth-child(2) p").textContent;
                const price = row.querySelector("td:nth-child(3) p").textContent;
                const deFactor = row.querySelector("td:nth-child(4) p").textContent;
                boughtFurnitureNames.push(furnitureName);
                totalPrice += Number(price);
                averageDeFactor += Number(deFactor);
            }
        });
        averageDeFactor /= boughtFurnitureNames.length;
        const textAreaOutput = document.querySelectorAll("textarea")[1];
        textAreaOutput.textContent = `Bought furniture: ${boughtFurnitureNames.join(
            ", "
        )}\nTotal price: ${totalPrice.toFixed(
            2
        )}\nAverage decoration factor: ${averageDeFactor}`;
    }
}