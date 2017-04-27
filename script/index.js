/**
 * @author: linzchan
 * Date: 17/4/27
 * Time: 下午20:37
 */
(function(){
    chrome.browserAction.onLoad.addListener(function(tab) {
        console.log(tab);
    });
})();
