<template>
    <div id="mnet">
        <div class="vodArea">
            <div id="cjVideo"><img class="cover" src="http://cmsimg.mnet.com/clipimage/vod/580/000/187/187174.jpg" alt="" /></div>
            <button class="btn-capture mdl-button mdl-js-button mdl-button--fab">
                <i class="material-icons">camera_alt</i>
            </button>
        </div>
        <dl class="title">
            <dt>팔레트 (Feat. G-DRAGON)</dt>
            <dd>아이유(IU)</dd>
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
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'mnet'
}
</script>

<style scoped>
#mnet { 
    max-width:1000px;
    margin: 0 auto;
    color: #777;
    line-height: 1.7;
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
