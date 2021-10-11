class GameManager {
    constructor(oSceneObj,oBody){
        this.oSceneObj = oSceneObj;
        this.oBody = oBody;
        this.oOppPlayer = new PlayerProfileForTable(oSceneObj, 200,200);
        this.oBody.add(this.oOppPlayer);
        console.log(oSceneObj);
    }
}