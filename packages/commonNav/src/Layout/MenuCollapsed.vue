<template>
  <Menu class="mini-nav" width="auto" :active-name="activeName">
    <template v-for="item in menuConfig">
      <Dropdown
        :key="item.key"
        :class="{'ivu-menu-item-active ivu-menu-item-selected':activeName===item.path}"
        class="ivu-menu-item"
        placement="right-start"
        transfer
        @on-click="handleClick"
      >
        <Icon class="mini-sider-icon" :type="item.icon"></Icon>
        <DropdownMenu slot="list">
          <template v-if="!item.children">
            <DropdownItem
              :name="item.path"
              :class="{'active':activeItem === item.path}"
            >{{item.name}}</DropdownItem>
          </template>
          <template v-else>
            <DropdownItem
              :name="citem.path"
              :class="{'active':activeItem === citem.path}"
              v-for="citem in item.children"
              :key="citem.key"
            >{{citem.name}}</DropdownItem>
          </template>
        </DropdownMenu>
      </Dropdown>
    </template>

    <!-- <Dropdown name="2" class="ivu-menu-item" placement="right-start" transfer>
      <Icon class="mini-sider-icon" type="ios-people"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem>新增用户</DropdownItem>
        <DropdownItem>活跃用户</DropdownItem>
      </DropdownMenu>
    </Dropdown>

    <Dropdown name="3" class="ivu-menu-item" placement="right-start" transfer>
      <Icon class="mini-sider-icon" type="ios-stats"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem>新增和启动</DropdownItem>
        <DropdownItem>活跃分析</DropdownItem>
      </DropdownMenu>
    </Dropdown>-->
  </Menu>
</template>

<script>
/* eslint-disable */
import { Dropdown, DropdownItem, Icon } from 'view-design'

export default {
  components: { Dropdown, DropdownItem, Icon },
  props: {
    menuConfig: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  computed: {
    activeItem() {
      return this.$route.path
    },
    activeName() {
      const path = this.$route.path.split('/')
      if (path.length >= 3) {
        return '/' + path[1]
      } else {
        return this.$route.path
      }
    }
  },
  methods: {
    handleClick(name) {
      this.$router.push({
        path: name
      })
    }
  }
}
</script>
<style lang="stylus">
.mini-sider-icon
  width 100%
</style>
