* Bij alle pagina's behalve bij de voeding pagina heb ik de grid layout op de elementen zelf gebruikt. 
Omdat de layout van deze pagina in de body op alle schermen onder elkaar staan. En daarom is het zinloos om 
deze grid te maken op de body. Echter de elementen main, article, section en footer hebben zelf wel grid layout.

Op de pagina van de voeding heb ik de grid layout wel op de body gemaakt omdat ik hier een aside
toegevoegd heb en die bij media query 1024px naast de main wilde hebben. 

De header is een lijn met stylen en is het zinloos om hier met grid te werken. 
Daarvoor heb ik hier voor flex gekozen.

* Bij het menu heb ik een hamburger menu gemaakt die toggled middels javascript. 
Er zit een external js file die via de script element boven de closing tag van de body
gekoppeld is aan de html.

* In de css heb ik de styling van de mobile menu (de nav) in een media query met een max-width gezet omdat ik wil dat 
de styling alleen maar geldt voor mobile en dus niet geldig meer is vanaf tablet omdat ik daar een andere styling
toepas. 

* Bij de picture die onder de header staat heb ik voor alle pagina's dezelfde afbeeldingen gebruikt. 
Omdat het anders tijdrovend wordt en het in principe hetzelfde is voor elke pagina.

* Heb de styling die voor alle pagina's geldt in een global.css gezet en voor iedere pagina zelf een aparte css gemaakt.
Ik weet dat het eigenlijk de bedoeling is om alles in een te gooien maar met zoveel pagina's vind ik het overzichtelijker om de 
globale styling in een aparte file te hebben. Heb gekeken of ik de variabelen kon importeren of iets vergelijkbaars
maar dat heb ik niet kunnen vinden vandaar dat in elke file de variabelen staan want anders werkt styling schijnbaar niet 
als je variabelen gebruikt in andere files.

*De email en telefoonnummer zijn verzonnen en de social media links hebben een # in de href die leiden nergens heen. 

*Voor hd schermen met meer dan 1920px heb ik in de global.css een media query gemaakt die standaar een font-size 20px heeft. 
Zodat alles automatisch iets groter wordt.
In deze media query zou de max-inline-size ook breder gezet kunnen worden zodat het iets meer vulling geeft. Maar die heb ik er voor 
nu niet bij. 
Ik heb ook geen hd scherm om te kunnen controleren of het dan wel allemaal goed blijft. 
