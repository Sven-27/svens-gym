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