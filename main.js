var URLToChange = "http://google.com";
var linksPage = "http://dl.dropbox.com/u/19699329/feedme.json";

function getNextLink(){

    if (isStorageLinksEmpty()){
	var JSONText = getLinksJSON();
	var responseJSON = JSON.parse(JSONText);
	localStorage['links'] = JSON.stringify(responseJSON['links']);
    }
    
    var nextLink = getLinkFromStorage();
    return nextLink;
}

function isStorageLinksEmpty(){
    var localStorageLinks = localStorage['links'];
    if (!localStorageLinks) {
	return true;
    }
    else{
	var linksJSON = JSON.parse(localStorageLinks);
	if (linksJSON.length == 0) {
	    return true;
	}
	else { return false;}
    }
}
function getLinkFromStorage(){
    var linksText = localStorage['links'];
    var linksJSON = JSON.parse(linksText);
    var first_link = linksJSON[0];
    removeLastLinkFromStorage(linksJSON);
    return first_link;
}

function removeLastLinkFromStorage(storageJSON){
    storageJSON.splice(0, 1);
    localStorage['links'] = JSON.stringify(storageJSON);
}

function getLinksJSON(){
    var linksArr = {};
    linksArr = $.ajax({
	url: linksPage,
	dataType: 'json',
	async: false
    });
    return linksArr.responseText;
    /*
    $.getJSON(linksPage, function(data){
	linksArr = data;
    });
    */
}

function markLinkServed(linkId){
    //send this information off
    return "";
}

function main(){
    var link = getNextLink()
    changePage(link['url']);
    setPopupText(link);
    markLinkServed(0); //should change to link['id']
    
}

function changePage(newUrl){
    chrome.tabs.getSelected(null, function(tab){
	chrome.tabs.update(tab.id, {url: newUrl});
    });
}

function setPopupText(linkInfo){
    document.getElementById('link-title').innerHTML = linkInfo.title;
}
/*
var JSONText = getLinksJSON();
//alert(JSONText);
var linksJSON = JSON.parse(JSONText);
//alert(linksJSON);
var links = linksJSON['links'];
var first_link = links[0];

document.getElementById('link-title').innerHTML = first_link.title;
changePage(first_link.url);
*/
main();