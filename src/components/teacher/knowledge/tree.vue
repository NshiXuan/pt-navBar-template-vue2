<template>
  <div class="tree">
    <div class="custom-tree-container">
      <div class="block">
        <el-tree :data="data" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false">
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <span>
              <el-button type="text" size="mini" @click="() => append(data)">
                添加
              </el-button>
              <el-button type="text" size="mini" @click="() => append(data)">
                编辑
              </el-button>
              <el-button type="text" size="mini" @click="() => remove(node, data)">
                删除
              </el-button>
            </span>
          </span>
        </el-tree>
      </div>
    </div>
  </div>
</template>

<script >
let id = 1000

export default {
  data() {
    const data = [{
      id: 1,
      label: "数据结构",
      children: [
        {
          id: 4,
          label: "线性链表",
          children: [
            {
              id: 9,
              label: "单链表"
            },
            {
              id: 10,
              label: "循环链表"
            },
            {
              id: 11,
              label: "双向链表"
            }
          ]
        },
        {
          id: 5,
          label: "栈",
        },
        {
          id: 6,
          label: "队列"
        },
      ]
    }];
    return {
      data: JSON.parse(JSON.stringify(data)),
      data: JSON.parse(JSON.stringify(data))
    };
  },
  methods: {
    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },
    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    }
  },
};
</script>

<style lang="less" scoped>
.tree {
  height: 100%;

  .custom-tree-container {
    width: 300px;
    // max-height: 900px;
    height: 800px;
    border-radius: 5px;
    background-color: #fff;

    .block {
      padding: 10px;
    }

    .custom-tree-node {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      padding-right: 8px;
    }
  }

}
</style>