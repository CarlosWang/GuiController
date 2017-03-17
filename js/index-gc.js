/*******************************************************************************
 *
 *  檔案名稱：index-gc.js
 *      作者：向皓田
 *      說明：GUI Controller
 *
 *******************************************************************************/
var IndexGC = (function () {

    /**
     * 狀態變數 A
     */
    var StateA;

    /**
     * 進入狀態 1
     */
    function _enterState1() {
        StateA = 1;
        IndexUC.enableClearButton(true);
        IndexUC.enableEndButton(false);
        IndexUC.enableStartButton(true);
    }

    /**
     * 進入狀態 2
     */
    function _enterState2() {
        StateA = 2;
        IndexUC.enableClearButton(true);
        IndexUC.enableEndButton(true);
        IndexUC.enableStartButton(false);
        var animals = IndexUC.getAnimals();
        IndexUC.setAnimals(animals);
    }

    /**
     *結束按鈕被按下
     */
    function _endButtonClicked() {
        if (StateA === 2) {
            _enterState1();
        }
    }

    /**
     * 開始按鈕被按下
     */
    function _startButtonClicked() {
        if (StateA === 1) {
            _enterState2();
        }
    }

    /**
     * 初始化
     */
    function _init() {
        _enterState1();
    }

    return {
        init: _init,
        endButtonClicked: _endButtonClicked,
        startButtonClicked: _startButtonClicked
    }

}());