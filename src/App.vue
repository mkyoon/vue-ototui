<template>
    <div id="app">
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header class="mdl-layout__header">
                <div class="mdl-layout__header-row">
                <!-- Title -->
                <span class="mdl-layout-title">Video Capturing & Image Detection</span>
                <!-- Add spacer, to align navigation to the right -->
                <div class="mdl-layout-spacer"></div>
                <!-- Navigation. We hide it in small screens. -->
                <nav class="mdl-navigation mdl-layout--large-screen-only">
                    <a class="mdl-navigation__link" href=""><i class="material-icons">device_hub</i> Gitlab</a>
                    <a class="mdl-navigation__link" href=""><i class="material-icons">account_circle</i> Login</a>
                </nav>
                </div>
            </header>
            <div class="mdl-layout__drawer">
                <span class="mdl-layout-title">Channels</span>
                <nav class="mdl-navigation">
                <a class="mdl-navigation__link" href="">Mnet</a>
                <a class="mdl-navigation__link" href="">tvN</a>
                <a class="mdl-navigation__link" href="">Tooniland</a>
                <a class="mdl-navigation__link" href="">DIA TV</a>
                </nav>
            </div>
            <main class="mdl-layout__content">
                <div class="page-content">
                    <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
