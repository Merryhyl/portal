<template>
  <div class="main-wrapper">
    <Layout class="protal-menu">
      <Sider hide-trigger :class="miniSider">
        <div class="protal-logo logo-dark">
          <span>Logo</span>
          <span v-if="!isCollapsed" class="protal-title">| Title</span>
        </div>
        <component :is="menuComponent" :menuConfig="menuConfig"></component>
      </Sider>
      <Layout>
        <Header class="protal-header">
          <span class="header-trigger" @click="collapsedSider">
            <Icon type="md-menu" :class="rotateIcon" />
          </span>
          <div class="protal-header-user">
            <Dropdown placement="bottom-end">
              <span>
                {{username}}
                <Icon type="ios-menu"></Icon>
              </span>
              <DropdownMenu slot="list">
                <DropdownItem>{{email}}</DropdownItem>
                <DropdownItem style="color: #ed4014" @click="logout">
                  <span>退出登录</span>
                  <Icon type="ios-arrow-forward" />
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Header>
        <Content>
          <Breadcrumb class="protal-breadcrumb">
            <BreadcrumbItem>{{protalTitle}}</BreadcrumbItem>
          </Breadcrumb>
          <div class="protal-content">
            <slot name="viewContent"></slot>
            <!-- <router-view>
              <slot name="viewContent"></slot>
            </router-view>-->
          </div>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
/* eslint-disable */
import 'view-design/dist/styles/iview.css'
import '../../../static/common.styl'
import { Layout, Sider, Breadcrumb, Dropdown, Content } from 'view-design'
// import { APP_MENU } from '../../../utils/main'
export default {
  name: 'CommonNav',

  components: {
    Layout,
    Sider,
    Breadcrumb,
    Dropdown,
    Content,
    MenuContent(resolve) {
      require(['./Layout/MeunContent'], resolve)
    },
    MenuCollapsed(resolve) {
      require(['./Layout/MenuCollapsed'], resolve)
    }
  },
  computed: {
    miniSider() {
      return [this.isCollapsed ? 'mini-sider' : '']
    },
    rotateIcon() {
      return [this.isCollapsed ? 'rotate-icon' : '']
    },
    menuComponent() {
      return this.isCollapsed ? 'MenuCollapsed' : 'MenuContent'
    },
    protalTitle() {
      return this.$route.meta.title
    }
  },

  data() {
    return {
      menuConfig: APP_MENU,
      isCollapsed: false,
      username: 'user',
      email: 'user@123.com'
    }
  },

  methods: {
    collapsedSider() {
      this.isCollapsed = !this.isCollapsed
    },
    logout() {}
  }
}
</script>
