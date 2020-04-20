
<template>
  <Menu width="auto" :active-name="activeName" :open-names="openNames">
    <template v-for="item in menuConfig">
      <MenuItem :name="item.path" v-if="!item.children" :key="item.key" :to="item.path">
        <Icon :type="item.icon" />
        <span>{{item.name}}</span>
      </MenuItem>
      <Submenu :name="item.path" v-else :key="item.key">
        <template slot="title">
          <Icon :type="item.icon" />
          <span>{{item.name}}</span>
        </template>
        <MenuItem
          :name="citem.path"
          v-for="citem in item.children"
          :key="citem.key"
          :to="citem.path"
        >{{citem.name}}</MenuItem>
      </Submenu>
    </template>
  </Menu>
</template>
<script>
/* eslint-disable */
export default {
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
    activeName() {
      return this.$route.path
    },
    openNames() {
      const path = this.$route.path.split('/')
      if (path.length >= 3) {
        return ['/' + path[1]]
      }
    }
  }
}
</script>