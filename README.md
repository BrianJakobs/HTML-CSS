# Webanimaties (HTML/CSS), 2018/2019
#### Brian Jakobs 500753523

Live Preview: [Live Preview](https://brianjakobs.github.io/HTML-CSS/).
Filmfragment: [Blade Runner - Voight-Kampff test](https://youtu.be/Umc9ezAyJv0).
Kort onderzoek: [Dropbox Paper](https://paper.dropbox.com/doc/Webanimation--AdrUduRdZt9Nr3AwEKi8OyqNAQ-RQN1lpkkazV241B30lkJ3)

## Poster

![poster_1](/images/poster_1.jpg)
![poster_2](/images/poster_2.jpg)

## Waarom deze poster

De poster had veel variaties, waar ik erg benieuwd naar was om te kijken of ik deze allemaal kon gebruiken. Vervolgens heb ik de poster met de lijnen gekozen, (poster_2 afbeelding 2), omdat deze is opgebouwd uit lijnen, wat goed na te maken is als svg. De poster is vrij eenvoudig en ondanks de vele gebogen en ronde lijnen is de compositie statisch. Voor de small screen versie heb ik de layout van poster_1 gebruikt omdat dit geschikter leek voor mobiele schermen.

## Het concept

Bij het uitkiezen van de poster had ik al direct in gedachten dat ik iets aan de lijnen wilde animeren. Daarom heb ik dit dus ook gedaan met een dasharray offset animatie.

```css
svg g {
	stroke-dasharray: var(--dasharray-num);
	stroke-dashoffset: 0;
	animation: dash 5s ease alternate infinite;
    stroke: #000;
    stroke-width:2.5px;
    fill: rgba(0, 0, 0, 0);
}

/*https://css-tricks.com/svg-line-animation-works/*/
@keyframes dash {
    from {
        stroke-dashoffset: 0;
    }
    to {
        stroke-dashoffset: 1101;
    }
}

@keyframes dashStop {
    to {
        stroke-dashoffset: 0;
    }
}
```

Het voordeel hiervan is ook direct dat er altijd iets op het scherm beweegt en er dus nooit een statisch beeld aanwezig is. Deze animatie bracht mij ook op het idee om de gebruiker deze animatie aan te kunnen laten passen. Daarom heb ik een slider gemaakt waarmee de dasharray aangepast kan worden. Vervolgens moesten er ook nog andere events in komen, dus heb ik besloten om op voor elk hoofdelement (man, vrouw, auto en bloemen) een gepaste click event te maken. Zo kijkt de man de andere kant op, wijst de vrouw omhoog en omlaag, bewegen de bloemen en rijdt de auto heen en weer. Om de beweging natuurlijker te maken en heb ik een cubic-bezier gebruikt.

```css
/*https://cubic-bezier.com/#.4,-0.4,.5,1.05*/
svg #car {
    transition: transform 3s cubic-bezier(.4,-0.4,.5,1.05);
}

.carLeft {
    transform-origin: center; 
    transform: translateX(-19%);
}

```

```js
car.addEventListener('click', function() {
    car.classList.toggle("carLeft");
});

```

Deze functies heb ik ook direct werkend gemaakt met het indrukken van de pijltjes op het toetsenbord. Links beweegt der auto, rechts draait het hoofd van de man, naar benden draaien de bloemen en omhoog wijst de vinger van de vrouw.

```js
//Keypress events
//https://keycode.info/
//e staat voor event
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) {
        console.log("he");
        car.classList.toggle("carLeft");
    }
    else if (e.keyCode == 39) {
        head.classList.toggle("flipHead");
        headArea.classList.toggle("flipHeadFill");
        headCa.classList.toggle("flipHead");
    }
    else if (e.keyCode == 38) {
        womanArm.classList.toggle("rotateArm");
        womanArmCa.classList.toggle("rotateArm");
    }
    else if (e.keyCode == 40) {
        flowerSBellOpen.classList.toggle("flowerDingleOpen");
        flowersBellClosed.classList.toggle("flowerDingleClosed");
        flowerSBellOpenCa.classList.toggle("flowerDingleOpen");
        flowersBellClosedCa.classList.toggle("flowerDingleClosed");
        flowerSBellOpenArea.classList.toggle("flowerDingleOpenFill");
        flowersBellClosedArea.classList.toggle("flowerDingleClosedFill");
    }
});

```

Tot slot wilde ik erg graag dat de kleuren aangepast konden worden naar eigen keuze van de gebruiker. Dus heb ik een input field gemaakt met het type 'color' waardoor ik de kleuren kon aanpassen. Vervolgens heb ik dit met CSS en JS werkend gemaakt.

```js
//https://vanseodesign.com/css/custom-properties-and-javascript/
colorPick.addEventListener("change", function() {
    headerOne.style.setProperty("--color",this.value);
});

dashArraySlider.addEventListener("change", function() {
    for (var i=0; i < strokes.length; i++) {
    var strokeStyles = window.getComputedStyle(strokes[i]),
        dashArrayValue = strokeStyles.getPropertyValue("--dasharray-num)");
        strokes[i].style.setProperty("--dasharray-num",this.value);
    }
});

```

## De input

Zoals gezegd heb ik dus op verschillende manieren voor input gezorgd, zo heb ik hover, click, slider, color en keydown.

## CSS feature

Als uitdaging wilde ik graag een nieuwe CSS feature gebruiken, in het bijzonder ben ik aan de gang gegaan met een CSS variabele of te wel CSS costume property. Dit werkt in principe hetzelfde als een JS variabele en kan bij veel terugkerende waardes een uitkomst zijn voor productiviteit. In dit project was het niet heel relevant, maar heb ik het toch gebruikt zodat ik deze techniek in ieder geval wel oefen. Als extra toevoeging wilde ik ook graag gelijk de waarde van deze CSS variabele aanpassen met JS op basis van de input van de gebruiker, zoals ik met de color picker heb gedaan. Hierdoor heb ik ook gelijk een andere toepassing geleerd.

```css
/*https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties*/
:root {
    --color: rgba(156, 64, 49, 1);
    --dasharray-num: 550;
}

```