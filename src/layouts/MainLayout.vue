<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <span class="text-h6">Example </span> <span class="text-caption">Google Maps</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px;">
        <q-list >
          <q-item-label header>Menu</q-item-label>
          <q-item clickable to="/" exact active-class="text-primary">
            <q-item-section avatar>
              <q-icon name="fas fa-home" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Home</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable tag="a" target="_blank" href="https://github.com/PAHJunior/Quasar-Signature-Pad">
            <q-item-section avatar>
              <q-icon name="fab fa-github" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Github do Projeto</q-item-label>
              <q-item-label caption>Repositório com o código fonte</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <q-img class="absolute-top" src="https://img.freepik.com/vetores-gratis/fundo-de-formas-abstratas-triangulo-branco_1035-17544.jpg?size=626&ext=jpg" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://avatars3.githubusercontent.com/u/45493635?v=4">
          </q-avatar>
          <div class="text-dark text-weight-bold">Paulo Arthur</div>
          <div class="q-gutter-sm">
            <q-btn flat text-color="primary" round size="sm" icon="fab fa-github"
            type="a" href="https://github.com/PAHJunior" target="_blank" />
            <q-btn flat text-color="primary" round size="sm" icon="fab fa-linkedin-in"
            type="a" href="https://www.linkedin.com/in/paulo-arthur-haller-junior-65109815b/" target="_blank" />
          </div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
