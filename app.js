function controlls() {
    for (let i = 1; i <= 6; i++) {
        document
            .querySelector("#subject-" + i)
            .addEventListener("change", function () {
                for (let j = 1; j <= 6; j++) {
                    var remind = document.querySelectorAll("#subject-" + j);
                    remind.forEach(function (index) {
                        console.log(index[i]);

                        if (index[i] != index.children[j]) {
                            console.log(index[i]);
                            index.children[i].parentNode.removeChild(
                                index.children[i]
                            );
                        }
                    });
                }
            });
    }
}
controlls();
for (let i = 1; i <= 6; i++) {
    var userName = document.querySelector("#input-cdt-" + i);
    userName.addEventListener("keypress", oneDigit);

    function oneDigit(e) {
        var newValue = this.value.replace(this.value, "");
        this.value = newValue;
    }

    userName.addEventListener("input", restrictNumber);
    function restrictNumber(e) {
        var newValue = this.value.replace(/[^1-4]/, "");
        this.value = newValue;
    }
}

for (let i = 1; i <= 6; i++) {
    var userName = document.querySelector("#input-result-" + i);

    userName.addEventListener("input", restrictNumber);
    function restrictNumber(e) {
        if (this.value < 0 || this.value > 100) {
            var newValue = this.value.replace(this.value, "100");
            this.value = newValue;
        }
    }
}

var defWidth = window.outerWidth;
if (defWidth < 768) {
    for (let i = 1; i <= 6; i++) {
        var cdtInputs = document.querySelector("#input-cdt-" + i);
        cdtInputs.setAttribute("placeholder", "ورودی کریدت مضمون");

        var resInputs = document.querySelector("#input-result-" + i);
        resInputs.setAttribute("placeholder", "ورودی نتیجه مضمون");
    }
}

function resize(e) {
    var width = e.target.outerWidth;
    if (width < 768) {
        for (let i = 1; i <= 6; i++) {
            var cdtInputs = document.querySelector("#input-cdt-" + i);
            cdtInputs.setAttribute("placeholder", "ورودی کریدت مضمون");

            var resInputs = document.querySelector("#input-result-" + i);
            resInputs.setAttribute("placeholder", "ورودی نتیجه مضمون");
        }
    } else if (width >= 768) {
        for (let i = 1; i <= 6; i++) {
            var cdtInputs = document.querySelector("#input-cdt-" + i);
            cdtInputs.setAttribute("placeholder", "");

            var resInputs = document.querySelector("#input-result-" + i);
            resInputs.setAttribute("placeholder", "");
        }
    }
}

window.addEventListener("resize", resize);

document.querySelector("#calculate").addEventListener("click", function () {
    let name = document.querySelector("#input-name").value;

    let inputSubject = [];
    let inputCdt = [];
    let inputResult = [];
    let totalResults = [];

    let sumCdt = 0;
    let fullResults = 0;

    for (let i = 1; i <= 6; i++) {
        inputSubject[i - 1] = document.querySelector("#subject-" + i).value;
        inputCdt[i - 1] = document.querySelector("#input-cdt-" + i).value;
        inputResult[i - 1] = document.querySelector("#input-result-" + i).value;
    }

    for (let i = 0; i < inputResult.length; i++) {
        if (
            inputSubject[i] == "emp" ||
            inputCdt[i] == null ||
            inputCdt[i].trim() == "" ||
            inputResult[i] == null ||
            inputResult[i].trim() == "" ||
            name.trim() == ""
        ) {
            console.log(inputSubject[i]);
            console.log(inputCdt[i]);
            console.log(inputResult[i]);
            alert("Please, fill the input fields");
            break;
        } else {
            var tableName = document.querySelector("#name-ta");
            tableName.textContent = " ( " + name + " ) ";

            var tableSub = document.querySelector("#sub-" + (i + 1));
            tableSub.innerHTML = inputSubject[i];

            var tableCdt = document.querySelector("#credit-" + (i + 1));
            tableCdt.textContent = inputCdt[i];

            let intCdt = parseInt(inputCdt[i]);
            sumCdt += intCdt;

            var tableResult = document.querySelector("#result-" + (i + 1));
            tableResult.textContent = inputResult[i];

            var tableTotalResult = document.querySelector(
                "#fullResult-" + (i + 1)
            );

            totalResults.push(inputResult[i] * inputCdt[i]);

            let intResults = parseInt(totalResults[i]);
            fullResults += intResults;

            tableTotalResult.textContent = inputResult[i] * inputCdt[i];

            document.querySelector(".title-table").style.display = "block";
            document.querySelector("div.results").style.display = "block";
        }
    }
    if (name.trim() != "" || inputSubject[i] == "emp" ||
    inputCdt[i] != null ||
    inputCdt[i].trim() != "" ||
    inputResult[i] != null ||
    inputResult[i].trim() != "") {
        var totalCdt = document.querySelector("#total-cdt");
        totalCdt.textContent = sumCdt;

        var percentage = document.querySelector("#average");
        percentage.textContent = (fullResults / sumCdt).toFixed(2) + "%";
    }else{
        var totalCdt = document.querySelector("#total-cdt");
        totalCdt.textContent = '';

        var percentage = document.querySelector("#average");
        percentage.textContent = '';
    }
});

document.querySelector("#reset").addEventListener("click", function () {
    

    for (let i = 1; i <= 6; i++) {
        document.querySelector("#input-name").value = "";
        document.querySelector("#input-cdt-" + i).value = "";
        document.querySelector("#input-result-" + i).value = "";
    }
});
