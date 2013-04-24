var context = "selection",
    title = "Google Translate";
chrome.contextMenus.create({"title": title, "contexts":[context], "onclick": function(info){
    var searchLink = "http://translate.google.com/#auto/zh-CN/" + encodeURI(info.selectionText);
    window.open(searchLink);
}});