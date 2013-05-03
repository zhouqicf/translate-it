var context = "selection",
    title = "Translate It";
chrome.contextMenus.create({"title": title, "contexts":[context], "onclick": function(info){
    var searchLink = "http://translate.google.com/#auto/" + (localStorage['translate_it_target_language'] || "zh-CN") + "/" + encodeURI(info.selectionText);
    window.open(searchLink);
}});