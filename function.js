const hearts = document.getElementsByClassName('heart-class');

for (const heart of hearts) {
    let heartClicked = false;

    heart.addEventListener('click', function () {
        const countElement = document.getElementById("heart-count");
        let countnumber = parseInt(countElement.innerText);

        if (heartClicked === false) {
            countnumber = countnumber + 1;
            heartClicked = true;
        }
        else {
            countnumber = countnumber - 1;
            heartClicked = false;
        }

        countElement.innerText = countnumber;
    });
}

// copy-button releated


const copyButtons = document.getElementsByClassName("copy_button");

for (const copyButton of copyButtons) {
    copyButton.addEventListener("click", function () {
        const par_element = copyButton.closest('.shadow-lg'); 
        const copyNumber = par_element.querySelector(".card-number").innerText;
        const copyCount = parseInt(document.getElementById("copyCount").innerText);

        navigator.clipboard.writeText(copyNumber)
            .then(() => {
                alert(`${copyNumber} is copied to the clipboard`);
                const newCount = copyCount + 1;
                document.getElementById("copyCount").innerText = newCount;
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    });
}





