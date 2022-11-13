const images = {
    none: "images/none.jpg"
}

const loaders = {
    bepinex: "BepInEx",
    umm: "UMM",
    both: "UMM & BepInEx",
}

var defaultCardData = {
    "name": "title",
    "description": "description",
    "contributors": "contributors",
    "link": null,
    "thumbnail": null,

    "recommended": false,
    "modLoader": null,
    "rating": 0,
}

var cardData = [
    {
        getCardDetails: function()
        {
            var newdata = defaultCardData;
            newdata.name = "UltrakULL";
            newdata.description = "ULTRAKILL language translation and localization into various languages.";
            newdata.contributors = "ClearwaterTM"
            newdata.modLoader = loaders.umm;
            newdata.thumbnail = null;
            newdata.recommended = true;
            newdata.link = "https://github.com/ClearwaterTM/UltrakULL";

            return newdata;
        }
    },
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
            newdata.link = "https://github.com/Temperz87/ultra-mod-manager/releases";

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
            newdata.modLoader = loaders.umm;
            newdata.thumbnail = "ukt.png";
            newdata.recommended = true;
            newdata.link = "https://github.com/wafflethings/ULTRAKILLtweaker";

            return newdata;
        }
    },
    {
        getCardDetails: function()
        {
            var newdata = defaultCardData;
            newdata.name = "UltraFunGuns";
            newdata.description = "An ULTRAKILL mod with fun weapons!!";
            newdata.contributors = "Hydraxous"
            newdata.modLoader = loaders.bepinex;
            newdata.thumbnail = "ufg.png";
            newdata.recommended = true;
            newdata.link = "https://github.com/Hydraxous/UltraFunGuns";

            return newdata;
        }
    },
    {
        getCardDetails: function()
        {
            var newdata = defaultCardData;
            newdata.name = "EasyPZ-ULTRAKILL";
            newdata.description = "Tiny QoL mod for ULTRAKILL to give you a bit more info about the P rank requirements, restart hotkeys, and automatic restarts.";
            newdata.contributors = "Hydraxous"
            newdata.modLoader = loaders.bepinex;
            newdata.thumbnail = "easypz.png";
            newdata.recommended = true;
            newdata.link = "https://github.com/Hydraxous/EasyPZ-ULTRAKILL";

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
            newdata.link = "https://github.com/The-DoomMan/ULTRASKINS";

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
            newdata.contributors = "maranarasauce"
            newdata.modLoader = loaders.both;
            newdata.thumbnail = null;
            newdata.recommended = false;
            newdata.link = "https://github.com/maranarasauce/QuickFist";

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
            newdata.link = "https://github.com/distributivgesetz/2Spooky4Me";

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
            newdata.link = "https://github.com/BobbyShmurner/CGCustomWaves";

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
            newdata.link = "https://github.com/BobbyShmurner/CubemapMaker";

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
            newdata.link = "https://github.com/Temperz87/Ultrakill-Custom-Arms-Proof-Of-Concept";

            return newdata;
        }
    },
    {
        getCardDetails: function()
        {
            var newdata = defaultCardData;
            newdata.name = "UKMusicReplacement";
            newdata.description = "Ultrakill mod allowing users to use custom songs in regular (non boss or special) levels";
            newdata.contributors = "ZedDevStuff"
            newdata.modLoader = loaders.both;
            newdata.thumbnail = null;
            newdata.recommended = false;
            newdata.link = "https://github.com/ZedDevStuff/UKMusicReplacement";

            return newdata;
        }
    },
    {
        getCardDetails: function()
        {
            var newdata = defaultCardData;
            newdata.name = "UltraRandomizer";
            newdata.description = "Enemy Randomizer for ULTRAKILL";
            newdata.contributors = "radsi, nptnk"
            newdata.modLoader = loaders.bepinex;
            newdata.thumbnail = null;
            newdata.recommended = false;
            newdata.link = "https://github.com/radsi/Ultrakill-Randomizer";

            return newdata;
        }
    },
    {
        getCardDetails: function()
        {
            var newdata = defaultCardData;
            newdata.name = "BetterWeaponColourMenu";
            newdata.description = "A mod designed to improve the custom gun colour system.";
            newdata.contributors = "nota8ot"
            newdata.modLoader = loaders.umm;
            newdata.thumbnail = null;
            newdata.recommended = false;
            newdata.link = "https://github.com/nota8ot/BetterWeaponColourMenu";

            return newdata;
        }
    },
]

window.onload = function () {
    console.warn("hi");
    const cards = document.getElementById("cards")
    for (var index = 0; index < cardData.length; index++) {
        var data = cardData[index].getCardDetails();
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
};