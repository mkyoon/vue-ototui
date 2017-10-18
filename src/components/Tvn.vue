<template>
    <div id="tvn">
        <div class="vodArea">
            <div id="cjVideo"><img class="cover" src="http://image.tving.com/crop.php?u=http://image.tving.com/upload/smr/clip/2017/04/08/C01_101924.jpg&w=640" alt="" /></div>
            <button class="btn-capture mdl-button mdl-js-button mdl-button--fab">
                <i class="material-icons">camera_alt</i>
            </button>
        </div>
        <dl class="title">
            <dt>"선생님 시작할까요?" 손발척척 윤벤져스</dt>
            <dd>tvN 윤식당</dd>
            <dd class="date">20170709 | 00:03:25</dd>
        </dl>
        <div class="snsArea">
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                <i class="material-icons">favorite</i> <span>23</span>
            </button>
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                <i class="material-icons">share</i>
            </button>
        </div>
        <div class="albumList">
            <ul>
                <li>"선생님 시작할까요?" 손발척척 윤벤져스</li>
                <li>사장님 마음대로 [윤식당] 매주 (금) 밤 9시 20분 tvN</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'tvn'
}
</script>

<style scoped>
#tvn { 
    max-width:1000px;
    margin: 0 auto;
    color: #777;
    line-height: 1.7;
}
.mdl-layout__header {
    background-color: #ff4e4e;
}
.vodArea {
    position: relative;
}
.btn-capture {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 100;
}
.cover {
    width: 100%;
} 
.title, .snsArea {
    padding: 20px;
    margin: 10px 0;
    border: solid #eee;
    border-width: 1px 0;
}
.title dt {
    margin-bottom: .5em;
    color: #000;
    font-weight: bold;
    font-size: 16px;
}
.title dd {
    margin: 0;
}
</style>
