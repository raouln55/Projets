
const top_Humidité_Date = document.getElementById('humidité');
const topLast_Température_Date = document.getElementById('température');
const top_Pression_Date = document.getElementById('pression');
const table_Mesures = document.getElementById('table_Mesures');


/* AFFICHAGE DE L'ONGLET "TOP MESURES" */
document.getElementById('topMesures').addEventListener('click', function(event){

    /* Permet de désactiver l'affichage des champs */
    top_Humidité_Date.style.display = "none";
    topLast_Température_Date.style.display = "none";
    top_Pression_Date.style.display = "none";
    table_Mesures.style.display = "none";

    /* Efface les données température précédemment affcihées si elles existent*/
    const oUl = document.getElementById("température");
    const liOfUl = oUl.getElementsByTagName("li");

    if (liOfUl.length > 0){
    const liToDelete1 = liOfUl[liOfUl.length-4];
    const liToDelete2 = liOfUl[liOfUl.length-3];
    const liToDelete3 = liOfUl[liOfUl.length-2];
    const liToDelete4 = liOfUl[liOfUl.length-1];

    oUl.removeChild(liToDelete1);
    oUl.removeChild(liToDelete2);
    oUl.removeChild(liToDelete3);
    oUl.removeChild(liToDelete4);
    }

    /* Efface les données humidité précédemment affcihées si elles existent*/
    const oUl2 = document.getElementById("humidité");
    const liOfUl2 = oUl2.getElementsByTagName("li");

    if (liOfUl2.length > 0){
    const liToDelete1 = liOfUl2[liOfUl2.length-4];
    const liToDelete2 = liOfUl2[liOfUl2.length-3];
    const liToDelete3 = liOfUl2[liOfUl2.length-2];
    const liToDelete4 = liOfUl2[liOfUl2.length-1];

    oUl2.removeChild(liToDelete1);
    oUl2.removeChild(liToDelete2);
    oUl2.removeChild(liToDelete3);
    oUl2.removeChild(liToDelete4);
    }

    /* Efface les données pression précédemment affcihées si elles existent*/
    const oUl3 = document.getElementById("pression");
    const liOfUl3 = oUl3.getElementsByTagName("li");

    if (liOfUl3.length > 0){
    const liToDelete1 = liOfUl3[liOfUl3.length-4];
    const liToDelete2 = liOfUl3[liOfUl3.length-3];
    const liToDelete3 = liOfUl3[liOfUl3.length-2];
    const liToDelete4 = liOfUl3[liOfUl3.length-1];

    oUl3.removeChild(liToDelete1);
    oUl3.removeChild(liToDelete2);
    oUl3.removeChild(liToDelete3);
    oUl3.removeChild(liToDelete4);
    }


    /* Récupère les données top mesures*/

    /* Etape 1 - Récupération des données d'humidité*/
    const request1 = new XMLHttpRequest();

    request1.open('GET', `http://192.168.1.197:8080/top-measure/humidity`, true);
    
    request1.onload = function () {
        if (request1.status >= 200 && request1.status < 400) {
            const jsonResult = JSON.parse(this.response);
            /* Extraction dans les var correspondantes des mesures contenues dans le jsonResult*/
            var MeasuredHumidity = jsonResult.humidity;
            var MeasuredTemperature = jsonResult.temperature;
            var MeasuredPression = jsonResult.pressure;
            var MeasuredDate = jsonResult.measureDate;

                /* Affichage des données */
            /* Va chercher le <ul id="top_Humidité_Date"> et créer une nouvelle <li>*/
            const oUl = document.getElementById("humidité");
            const oLi = document.createElement("li");
            /* Attribue le id "top_Humidité_Date" à la première <li> créée pour le repèrage de la mise en page .css*/
            oLi.id = "top_Humidité_Date";
            /*Affichage de la première ligne avec mise en forme de la date*/
            const oText = document.createTextNode("Top humidité le " + MeasuredDate.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3/$2/$1'));
            oLi.appendChild(oText);
            oUl.appendChild(oLi);
            /* création et affichag des lignes suivantes*/
            const oLi2 = document.createElement("li");
            const oText2 = document.createTextNode("Température : " + MeasuredTemperature + " °C");
            oLi2.appendChild(oText2);
            oUl.appendChild(oLi2);
            const oLi3 = document.createElement("li");
            const oText3 = document.createTextNode("Humidité : " + MeasuredHumidity + " %hum" );
            oLi3.appendChild(oText3);
            oUl.appendChild(oLi3);
            const oLi4 = document.createElement("li");
            const oText4 = document.createTextNode("Pression : " + MeasuredPression + " hPa");
            oLi4.appendChild(oText4);
            oUl.appendChild(oLi4);
    
        } else {
            console.log('Erreur de récupération des données')
        }
    }
    request1.send();

    /* Etape 2 - Récupération des données de pression*/
    const request2 = new XMLHttpRequest();

    request2.open('GET', `http://192.168.1.197:8080/top-measure/pressure`, true);
    
    request2.onload = function () {
        if (request1.status >= 200 && request1.status < 400) {
            const jsonResult = JSON.parse(this.response);
            var MeasuredHumidity = jsonResult.humidity;
            var MeasuredTemperature = jsonResult.temperature;
            var MeasuredPression = jsonResult.pressure;
            var MeasuredDate = jsonResult.measureDate;

                    /* Affichage des données */
            /* Va chercher le <ul id="top_Pression_Date"> et créer une nouvelle <li>*/
            const oUl = document.getElementById("pression");
            const oLi = document.createElement("li");
            oLi.id = "top_Pression_Date";
            const oText = document.createTextNode("Top pression le " + MeasuredDate.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3/$2/$1'));
            oLi.appendChild(oText);
            oUl.appendChild(oLi);
            const oLi2 = document.createElement("li");
            const oText2 = document.createTextNode("Température : " + MeasuredTemperature + " °C");
            oLi2.appendChild(oText2);
            oUl.appendChild(oLi2);
            const oLi3 = document.createElement("li");
            const oText3 = document.createTextNode("Humidité : " + MeasuredHumidity + " %hum" );
            oLi3.appendChild(oText3);
            oUl.appendChild(oLi3);
            const oLi4 = document.createElement("li");
            const oText4 = document.createTextNode("Pression : " + MeasuredPression + " hPa");
            oLi4.appendChild(oText4);
            oUl.appendChild(oLi4);
    
        } else {
            console.log('Erreur de récupération des données')
        }
    }
    request2.send();

    /* Etape 3 - Récupération des données de température*/
    const request3 = new XMLHttpRequest();

    request3.open('GET', `http://192.168.1.197:8080/top-measure/temperature`, true);
    
    request3.onload = function () {
        if (request3.status >= 200 && request3.status < 400) {
            const jsonResult = JSON.parse(this.response);
            var MeasuredHumidity = jsonResult.humidity;
            var MeasuredTemperature = jsonResult.temperature;
            var MeasuredPression = jsonResult.pressure;
            var MeasuredDate = jsonResult.measureDate;
            var Id = jsonResult.id;

                    /* Affichage des données */
            /* Va chercher le <ul id="topLast_Température_Date"> et créer une nouvelle <li>*/
            const oUl = document.getElementById("température");
            const oLi = document.createElement("li");
            oLi.id = "topLast_Température_Date";
            const oText = document.createTextNode("Top température le " + MeasuredDate.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3/$2/$1'));
            oLi.appendChild(oText);
            oUl.appendChild(oLi);
            const oLi2 = document.createElement("li");
            const oText2 = document.createTextNode("Température : " + MeasuredTemperature + " °C");
            oLi2.appendChild(oText2);
            oUl.appendChild(oLi2);
            const oLi3 = document.createElement("li");
            const oText3 = document.createTextNode("Humidité : " + MeasuredHumidity + " %hum" );
            oLi3.appendChild(oText3);
            oUl.appendChild(oLi3);
            const oLi4 = document.createElement("li");
            const oText4 = document.createTextNode("Pression : " + MeasuredPression + " hPa");
            oLi4.appendChild(oText4);
            oUl.appendChild(oLi4);
    
        } else {
            console.log('Erreur de récupération des données')
        }
    }
    request3.send();

    top_Humidité_Date.style.display = "block";
    topLast_Température_Date.style.display = "block";
    top_Pression_Date.style.display = "block";

});

/* AFFICHAGE DE L'ONGLET "LAST MESURE" */
document.getElementById('lastMesure').addEventListener('click', function(event){
    
    /* Désactive l'affichage des autres données à afficher par le css*/
    top_Humidité_Date.style.display = "none";
    topLast_Température_Date.style.display = "none";
    top_Pression_Date.style.display = "none";
    table_Mesures.style.display = "none";

    /* Efface les données précédemment affcihées si elles existent*/
    const oUl = document.getElementById("température");
    const liOfUl = oUl.getElementsByTagName("li");

    if (liOfUl.length > 0){
    const liToDelete1 = liOfUl[liOfUl.length-4];
    const liToDelete2 = liOfUl[liOfUl.length-3];
    const liToDelete3 = liOfUl[liOfUl.length-2];
    const liToDelete4 = liOfUl[liOfUl.length-1];

    oUl.removeChild(liToDelete1);
    oUl.removeChild(liToDelete2);
    oUl.removeChild(liToDelete3);
    oUl.removeChild(liToDelete4);
    }

    /* Récupération des données*/
    const request = new XMLHttpRequest();

    request.open('GET', `http://192.168.1.197:8080/last-measure`, true);
    
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const jsonResult = JSON.parse(this.response);
            var lastMeasuredHumidity = jsonResult.humidity;
            var lastMeasuredTemperature = jsonResult.temperature;
            var lastMeasuredPression = jsonResult.pressure;
            var lastMeasuredDate = jsonResult.measureDate;
            var Id = jsonResult.id;

                /* Affichage des données Last Measure*/
            const oUl = document.getElementById("température");
            const oLi = document.createElement("li");
            oLi.id = "topLast_Température_Date";
            const oText = document.createTextNode("Dernière mesure du " + lastMeasuredDate.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3/$2/$1'));
            oLi.appendChild(oText);
            oUl.appendChild(oLi);
            const oLi2 = document.createElement("li");
            const oText2 = document.createTextNode("Température : " + lastMeasuredTemperature + " °C");
            oLi2.appendChild(oText2);
            oUl.appendChild(oLi2);
            const oLi3 = document.createElement("li");
            const oText3 = document.createTextNode("Humidité : " + lastMeasuredHumidity + " %hum" );
            oLi3.appendChild(oText3);
            oUl.appendChild(oLi3);
            const oLi4 = document.createElement("li");
            const oText4 = document.createTextNode("Pression : " + lastMeasuredPression + " hPa");
            oLi4.appendChild(oText4);
            oUl.appendChild(oLi4);
    
        } else {
            console.log('Erreur d erécupération de la dernière mesure')
        }
    }
    
    request.send();

    /* Fait passer le display en mode block pour l'affichage */
    topLast_Température_Date.style.display = "block";

});


/* AFFICHAGE DE L'ONGLET "TABLEAU DES MESURES" */
document.getElementById('tableMesures').addEventListener('click', function(event){
    top_Humidité_Date.style.display = "none";
    topLast_Température_Date.style.display = "none";
    top_Pression_Date.style.display = "none";
    table_Mesures.style.display = "none";
    

    /* Récupération des données*/
    const request4 = new XMLHttpRequest();

    /* Les dates de début et de fin ont été ajoutées à la main --> il faut modifier les champs "endDate=2019-11-08&startDate=2019-11-08" */
    request4.open('GET', `http://192.168.1.197:8080/measure/date?endDate=2019-11-08&startDate=2019-11-08`, true);
    
    request4.onload = function () {
        if (request4.status >= 200 && request4.status < 400) {
            const jsonResult = JSON.parse(this.response);
            var MeasuredHumidity = jsonResult.humidity;
            var MeasuredTemperature = jsonResult.temperature;
            var MeasuredPression = jsonResult.pressure;
            var MeasuredDate = jsonResult.measureDate;
            var Id = jsonResult.id;
            var nbrItems = jsonResult.length;
            var tbody = document.getElementsByTagName("tbody")[0];


         /* Affichage des données du tableau*/
         for (var i=0;i<nbrItems;i++){

            var row = document.createElement("tr");
    
                var cell = document.createElement("td");
                var cellDate = document.createTextNode(jsonResult[i].measureDate.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3/$2/$1'));
                cell.appendChild(cellDate);
                row.appendChild(cell);
                tbody.appendChild(row);
                var cell2 = document.createElement("td");
                var cellTempérature = document.createTextNode(jsonResult[i].temperature);
                cell2.appendChild(cellTempérature);
                row.appendChild(cell2);
                tbody.appendChild(row);
                var cell3 = document.createElement("td");
                var cellHumidity = document.createTextNode(jsonResult[i].humidity);
                cell3.appendChild(cellHumidity);
                row.appendChild(cell3);
                tbody.appendChild(row);
                var cell4 = document.createElement("td");
                var cellPressure = document.createTextNode(jsonResult[i].pressure);
                cell4.appendChild(cellPressure);
                row.appendChild(cell4);
                tbody.appendChild(row);
            }
    
   
        } else {
            console.log('Erreur de récupération des données')
        }
    }
    
    request4.send();


    table_Mesures.style.display = "flex";

});

