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

// call and clear funtionality 

const history = [];

const callButtons = document.getElementsByClassName('callButton');
for (const callButton of callButtons) {
    callButton.addEventListener('click', function () {
        const coinCount = parseInt(document.getElementById("point-count").innerText);
        const callerID = callButton.parentElement.parentElement;
        const service = callerID.querySelector(".service-name").innerText;
        const card_number = callerID.querySelector(".card-number").innerText;

        if (coinCount >= 20) {
            alert(`calling ${service} ${card_number}...`);
            const newCoinCount = coinCount - 20;
            document.getElementById("point-count").innerText = newCoinCount;
            const storeHistory = document.getElementById("call-History");


            const callHistory = {
                name: service,
                number: card_number,
                time: new Date().toLocaleTimeString()

            };

            history.push(callHistory);



            const div = document.createElement('div');
            div.innerHTML = `
                <div class ="bg-[#FAFAFA] hind-madurai-font flex justify-between items-center my-4 p-4 rounded-[8px]">
                    <div>
                    <h1 class="inter-font font-semibold text-[18px]">${callHistory.name}</h1>
                    <h1 class="text-[18px] text-gray-500 ">${callHistory.number}</h1>
                </div>
                <div>
                    <h1 class="text-[18px] ">${callHistory.time}</h1>
                </div>
                </div>
            `;
            storeHistory.appendChild(div);

        } else {
            alert("I have not  enough coin to make a call");
        }



    });

}


// clear option 
document.getElementById("clearButton").addEventListener("click", function () {
    const storeHistory = document.getElementById("call-History");
    storeHistory.innerText = " ";
})

        
