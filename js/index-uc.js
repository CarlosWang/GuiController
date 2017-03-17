/*******************************************************************************
 *
 *  檔案名稱：index-uc.js
 *      作者：向皓田
 *      說明：Use Case Controller
 *
 *******************************************************************************/

var IndexUC = (function () {

    var CLEAR_BUTTON_ID = "clear-button";
    var END_BUTTON_ID = "end-button";
    var START_BUTTON_ID = "start-button";
    var ANIMAL_SELECT_ID = "animal-selector";

    /**
     * 取得選項資料
     * @returns {string[]}
     */
    function _getAnimals() {
        return ["Lion King", "Peter Rabiit", "Kitty Cat", "Micky Mouse"];
    }

    /**
     * 設定選項資料
     * @param animals
     */
    function _setAnimals(animals) {
        var selector = document.getElementById("animal-selector");
        for (var i = 0; i < animals.length; i += 1) {
            var option = document.createElement("option");
            option.text = animals[i];
            selector.add(option);
        }
    }

    /**
     * 設定清除按鈕狀態
     * @param enabled
     */
    function _enableClearButton(enabled) {
        document.getElementById(CLEAR_BUTTON_ID).disabled = !enabled;
    }

    /**
     * 設定結束按鈕狀態
     * @param enabled
     */
    function _enableEndButton(enabled) {
        document.getElementById(END_BUTTON_ID).disabled = !enabled;
    }

    /**
     * 設定開始按鈕狀態
     * @param enabled
     */
    function _enableStartButton(enabled) {
        document.getElementById(START_BUTTON_ID).disabled = !enabled;
    }

    /**
     * 清按按鈕被按下
     */
    function onClearButtonClicked() {
        var selector = document.getElementById(ANIMAL_SELECT_ID);
        selector.innerHTML = '';
    }

    /**
     * 結束按鈕被按下
     */
    function onEndButtonClicked() {
        IndexGC.endButtonClicked();
    }

    /**
     * 開始按鈕被按下
     */
    function onStartButtonClicked() {
        IndexGC.startButtonClicked();
    }

    /**
     * 初始化
     */
    function _init() {
        document.getElementById(CLEAR_BUTTON_ID).onclick = onClearButtonClicked;
        document.getElementById(END_BUTTON_ID).onclick = onEndButtonClicked;
        document.getElementById(START_BUTTON_ID).onclick = onStartButtonClicked;
        IndexGC.init();
    }

    return {
        init: _init,
        getAnimals: _getAnimals,
        setAnimals: _setAnimals,
        enableClearButton: _enableClearButton,
        enableEndButton: _enableEndButton,
        enableStartButton: _enableStartButton
    }

}());