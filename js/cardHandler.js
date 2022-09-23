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
            newdata.name = "ULTRAtweaker";
            newdata.description = "Fully customizable tweaks and modifiers for ULTRAKILL";
            newdata.contributors = "wafflethings"
            newdata.modLoader = loaders.bepinex;
            newdata.thumbnail = "ukt.png";
            newdata.recommended = true;
            newdata.link = "https://github.com/wafflethings/ULTRAKILLtweaker/releases/download/V1.3.0/UKt_V1.3.0.zip";

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
            newdata.name = "ULTRAUNCANNY";
            newdata.description = "Flip everything including your controls!";
            newdata.contributors = "Robi"
            newdata.modLoader = loaders.bepinex;
            newdata.thumbnail = "uuc.png";
            newdata.recommended = false;
            newdata.link = "https://gitlab.com/Robieh/ultrauncanny/uploads/fd9a64699b32a14ba74db4156b12568a/ULTRAUNCANNY.dll";

            return newdata;
        }
    },
    {
        getCardDetails: function()
        {
            var newdata = defaultCardData;
            newdata.name = "QuickFist";
            newdata.description = "No more switching arms, press the arm switch keybind and instantly use knuckleblaster.";
            newdata.contributors = "BobbyShmurner"
            newdata.modLoader = loaders.bepinex;
            newdata.thumbnail = null;
            newdata.recommended = false;
            newdata.link = "https://github.com/BobbyShmurner/CGCustomWaves/releases/download/v1.0.0/CGCustomWaves.dll";

            return newdata;
        }
    },
    {
        getCardDetails: function()
        {
            var newdata = defaultCardData;
            newdata.name = "2Spooky4Me";
            newdata.description = "Configure seasonal events for ULTRAKILL.";
            newdata.contributors = "Heckteck, Distrilul_"
            newdata.modLoader = loaders.bepinex;
            newdata.thumbnail = null;
            newdata.recommended = false;
            newdata.link = "https://github.com/distributivgesetz/2Spooky4Me/releases/download/1.2/TooSpookyForMe.dll";

            return newdata;
        }
    },
    {
        getCardDetails: function()
        {
            var newdata = defaultCardData;
            newdata.name = "CGCustomWaves";
            newdata.description = "A mod that lets you set a custom wave for The Cyber Grind.";
            newdata.contributors = "BobbyShmurner"
            newdata.modLoader = loaders.bepinex;
            newdata.thumbnail = "cgcustomwaves.png";
            newdata.recommended = false;
            newdata.link = "https://github.com/BobbyShmurner/CGCustomWaves/releases/download/v1.0.0/CGCustomWaves.dll";

            return newdata;
        }
    },
    {
        getCardDetails: function()
        {
            var newdata = defaultCardData;
            newdata.name = "Cubemap Maker";
            newdata.description = "A mod that lets you set a custom wave for The Cyber Grind.";
            newdata.contributors = "BobbyShmurner"
            newdata.modLoader = loaders.bepinex;
            newdata.thumbnail = "competitor.png";
            newdata.recommended = false;
            newdata.link = "https://github.com/BobbyShmurner/CubemapMaker/releases/tag/v1.0.3";

            return newdata;
        }
    },
    {
        getCardDetails: function()
        {
            var newdata = defaultCardData;
            newdata.name = "CustomArms";
            newdata.description = "This mod started ast a quick and dirty proof of concept, to showcase some modded arm ideas, The arms are only accessible when cheats are turned on.";
            newdata.contributors = "Temperz87"
            newdata.modLoader = loaders.umm;
            newdata.thumbnail = "customarms.gif";
            newdata.recommended = false;
            newdata.link = "https://github.com/Temperz87/Ultrakill-Custom-Arms-Proof-Of-Concept/releases/download/v1.3.0/CustomArms.dll";

            return newdata;
        }
    },
    {
        getCardDetails: function()
        {
            var newdata = defaultCardData;
            newdata.name = "UKMusicReplacement";
            newdata.description = "Ultrakill mod allowing users to use custom songs in regular (non boss or special) levels";
            newdata.contributors = "@ZedDevStuff"
            newdata.modLoader = "UMM & BepInEx";
            newdata.thumbnail = null;
            newdata.recommended = false;
            newdata.link = "https://github.com/ZedDevStuff/UKMusicReplacement/releases/download/0.7.0/UKMusicReplacement-v0.7.0.zip";

            return newdata;
        }
    },
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