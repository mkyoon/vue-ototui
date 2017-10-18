<template>
    <div id="app">
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header class="mdl-layout__header">
                <div class="mdl-layout__header-row">
                <!-- Title -->
                <span class="mdl-layout-title">Video Capturing &amp; Image Detection</span>
                <!-- Add spacer, to align navigation to the right -->
                <div class="mdl-layout-spacer"></div>
                <!-- Navigation. We hide it in small screens. -->
                <nav class="mdl-navigation mdl-layout--large-screen-only">
                    <a class="mdl-navigation__link" href=""><i class="material-icons">device_hub</i> YONA</a>
                    <a class="mdl-navigation__link" href=""><i class="material-icons">account_circle</i> Login</a>
                </nav>
                </div>
            </header>
            <div class="mdl-layout__drawer">
                <span class="mdl-layout-title">Channels</span>
                <nav class="mdl-navigation">
                <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Mnet</router-link>
                <router-link class="mdl-navigation__link" to="/tvn" @click.native="hideMenu">tvN</router-link>
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
<!--
        <mu-appbar title="Title" class="title-appbar" :class="{'nav-hide': !open}">
            <mu-icon-button @click="toggle" icon="menu" slot="left"/>
            <mu-flat-button label="expand_more" slot="right"/>
            <mu-icon-button icon="expand_more" slot="right"/>

            <mu-drawer :open="open" :docked="docked" @close="toggle">
                <mu-appbar :zDepth="0" class="exmaples-nav-appbar">
                    <a @click="handleMenuChange('#/')" href="#/" class="exmaples-appbar-title">Channels</a>
                </mu-appbar>
                <mu-list @itemClick="docked ? '' : toggle">
                    <mu-list-item title="Menu Item 1"/>
                    <mu-list-item title="Menu Item 2"/>
                    <mu-list-item title="Menu Item 3"/>
                </mu-list>
            </mu-drawer>
        </mu-appbar> -->
    </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    hideMenu: function () {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    }
  }
}
</script>

<style>

</style>
