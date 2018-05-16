---
author: admin
comments: false
date: 2012-11-15 11:59:54+00:00
layout: post
link: http://blog.nogago.de/global-point-of-interest-poi-search-api/
slug: global-point-of-interest-poi-search-api
title: Global Point of Interest (POI) Search API
wordpress_id: 2084
categories:
- Miscellaneous
---


	
	
	






Below is a simple example of a api request to help further understand the service. An XML document containing the nodes that match the `key-value` pair at the end of the URL below within the declared bounding box will be returned.


  




  




	Run



  










## Own Bounding-Box Search

  





	

To Search your favorite area, copy the URL above, paste it in a new tab, enter your coordinates and `key-value` pair you wish to search. A comprehensive list of map features and `key-value` pairs can be found on the [Map Features - OpenStreetMap Wiki](http://wiki.openstreetmap.org/wiki/Map_Features#Tourism) page.   
  







## Own Perimeter Search

  




Here is an Example to search a specific perimeter. All restaurants in a perimeter of 10000m around the given longitude and latitude will be returned in a XML-File.





http://www.nogago.com/poi/search?&lon;=8.40446&lat;=49.01405&perimeter;=10000&type;=amenity-restaurant





	Run






To Search your own perimeter, copy the URL above, paste it in a new tab andenter the lon ( -180.0<=lon<=180.0) and lat (-90.0<=lat<=90.0) of center point. You also can set the permiter in meters and the `key-value` pair. A comprehensive list of map features and `key-value` pairs can be found on the [Map Features - OpenStreetMap Wiki](http://wiki.openstreetmap.org/wiki/Map_Features#Tourism) page.If you want to use this API commercial purposes, please contact [management@nogago.com](mailto:management@nogago.com)nogago POI-Search API is a faster alternative to [OpenStreetMap Xapi](http://wiki.openstreetmap.org/wiki/Xapi)





	
	
	






Unten sehen Sie ein einfaches Beispiel einer API-Anfrage. Nach dem Klick auf "Anfrage schicken", wird eine XML-Datei mit den durch das `key-value`-Paar angegebenen Points of Interest innerhalb der angegebenen Koordinaten zurückgeliefert.


  




  




	Anfrage schicken



  










## Eigene Bounding-Box Suche

  





	

Um selbst eine Suche durchzuführen, kopieren Sie den oben stehenden Link und fügen ihn in ein neues Browserfenster ein. Dann geben Sie ein beliebiges `key-value`-Paar ein. Durch das Drücken von Enter wird die Anfrage gestartet. Eine Liste mit  `key-value`-Paaren finden Sie im [OpenStreetMap Wiki](http://wiki.openstreetmap.org/wiki/Map_Features#Tourism). 

	





## Eigene Umkreis-Suche

  




Unten shen Sie ein Beispiel für eine Umkreis-Suche. Alle Restaurant in einem Umkreis von 10000m um die gegebene Position (Längen-Breitengrad) werden in einer XML-Datei zurückgegeben.





http://www.nogago.com/poi/search?&lon;=8.40446&lat;=49.01405&perimeter;=10000&type;=amenity-restaurant





	Anfrage schicken






Um selbst eine Umkreis-Suche durchzuführen, kopieren Sie den oben stehenden Link und fügen ihn in ein neues Browserfenster ein. Dann geben Sie die Koordinaten des Mittelpunktes als Längen- ( -180.0<=lon<=180.0) und Breitengrad (-90.0<=lat<=90.0) an. Der gewünschte Umkreis wird in Metern angegeben. Zusätzlich können Sie nach einem bestimmten `key-value` Paar suchen. Eine Liste mit  `key-value`-Paaren finden Sie im [OpenStreetMap Wiki](http://wiki.openstreetmap.org/wiki/Map_Features#Tourism).  
  
Falls Sie diese API kommerziell nutzen möchten, köntaktieren Sie bitte [management@nogago.com](mailto:management@nogago.com)Die nogago POI-Suche ist eine schnellere Alternative zu [OpenStreetMap Xapi](http://wiki.openstreetmap.org/wiki/Xapi)



