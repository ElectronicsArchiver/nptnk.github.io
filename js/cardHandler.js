const images = {
    none: "images/none.jpg"
}

const loaders = {
    bepinex: "BepInEx",
    umm: "UMM",
}

var defaultCardData = {
    "name": "title",
    "description": "description",
    "contributors": "contributors",
    "link": null,
    "thumbnail": null,

    "recommended": false,
    "modLoader": null,
}

var cardData = [
    {
        getCardDetails: function()
        {
            var newdata = defaultCardData;
            newdata.name = "ULTRA MOD MANAGER";
            newdata.description = "Ingame mod manager for ULTRAKILL";
            newdata.contributors = "Temperz87"
            newdata.modLoader = loaders.umm;
            newdata.thumbnail = "Temperz87/UMM.png";
            newdata.recommended = true;
            newdata.link = "https://github.com/Temperz87/ultra-mod-manager/releases/download/0.4.1/UMM.v0.4.1.zip";

            return newdata;
        }
    },
    {
        getCardDetails: function()
        {
            var newdata = defaultCardData;
            newdata.name = "MULTIKILL";
            newdata.description = "Multiplayer mod for ULTRAKILL";
            newdata.contributors = "Distrilul_, Heckteck, nptnk"
            newdata.modLoader = loaders.bepinex;
            newdata.thumbnail = null;
            newdata.recommended = false;
            newdata.link = "";

            return newdata;
        }
    },
    {
        getCardDetails: function()
        {
            var newdata = defaultCardData;
            newdata.name = "ULTRASKINS";
            newdata.description = "Fully customizable texture changes for ULTRAKILL";
            newdata.contributors = "The-DoomMan"
            newdata.modLoader = loaders.bepinex;
            newdata.thumbnail = null;
            newdata.recommended = false;
            newdata.link = "https://github.com/The-DoomMan/ULTRASKINS/releases/download/release/ULTRASKINS.zip";

            return newdata;
        }
    },
    {
        getCardDetails: function()
        {
            var newdata = defaultCardData;
            newdata.name = "ULTRAtweaker";
            newdata.description = "Fully customizable tweaks and modifiers for ULTRAKILL";
            newdata.contributors = "The-DoomMan"
            newdata.modLoader = loaders.bepinex;
            newdata.thumbnail = "ukt.png";
            newdata.recommended = false;
            newdata.link = "https://github.com/wafflethings/ULTRAKILLtweaker/releases/download/V1.3.0/UKt_V1.3.0.zip";

            return newdata;
        }
    },

    https://github.com/wafflethings/ULTRAKILLtweaker/releases/download/V1.3.0/UKt_V1.3.0.zip
]

window.onload = function () {
    setTimeout(function(){
        const cards = document.getElementById("cards")
        for (var index = 0; index < cardData.length; index++) {
            var data = cardData[index].getCardDetails();
            console.log(data);
            cards.innerHTML += 
            `<a target="_blank" ${"href=" + data.link}>
                <div class=${data.recommended == false ? "card fadeIn" : "recommendedcard fadeIn"}>      
                    <div>
                        <img src="${data.thumbnail == null ? "./images/none.png" : "./images/" + data.thumbnail}" class="cardimage">
                    </div>
                    <div>
                        <p class="grayish-white">${data.modLoader}</p>
                    </div>
                    <div>
                        <p class="text">${data.name}</p>
                    </div>
                    <div>
                        <p class="text">${data.contributors == null ? "" : data.contributors}</p>
                    </div>
                    <div>
                        <p class="text description">${data.description == null ? "" : data.description}</p>
                    </div>
                </div>
            </a>`
        }
    }, 1000);
};