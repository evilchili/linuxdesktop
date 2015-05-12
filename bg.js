google.load('search', '1');
var gis;
var done = false;
function nope() {
    
    gis = new google.search.ImageSearch();
    gis.setResultSetSize(8);
    gis.setNoHtmlGeneration();
    gis.setSearchCompleteCallback(this, function() {
        // Check that we got results
        if (gis.results && gis.results.length > 0) {
            if (! done)  {
                gis.gotoPage(Math.floor(Math.random()*8)) - 1;
                done = true;
                return;
            }
            var res = gis.results[Math.floor(Math.random()*gis.results.length)];
            var container = document.getElementById('bg');
            var image = document.createElement('img');
            image.src = res.url;
            container.appendChild(image);
            document.getElementById('nope').style.display = 'inline-block';
        }
    }, null);
    gis.execute("linux desktop error broken weird");
    google.search.Search.getBranding('branding');
};

google.setOnLoadCallback(nope);
