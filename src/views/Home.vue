<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <form-create
      :rule="rule"
      v-model="fApi"
      :option="options"
      :value.sync="value"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
// import FormTest from './FormTest.vue'

export default Vue.extend({
  name: "Home",
  data() {
    return {
      fApi: {},
      value: {
        field1: "111",
        field2: "222",
        field3: "333",
        field4: "444",
        field5: "555",
        field6: "666",
        time: "11:11:11",
      },
      options: {
        onSubmit: (formData: any) => {
          alert(JSON.stringify(formData));
        },
        // form:{
        //   inline: true
        // },
        // row:{
        //   gutter:0,
        //   type:'flex',
        //   align:'middle',
        //   justify:'start',
        // }
      },
      rule: [
        {
          type: "input",
          field: "field1",
          title: "项目名称",
          value: "aaa",
          col: { span: 8 },
          validate: [
            { required: true, message: "请输入商品名称", trigger: "blur" },
          ],
          props: {
            disabled: false,
            clearable: true,
          },
        },
        {
          type: "input",
          field: "field2",
          title: "field2",
          value: "sss",
          col: { span: 8 },
        },
        {
          type: "input",
          field: "field3",
          title: "field3",
          value: "aaa",
          col: { span: 8 },
        },
        {
          type: "input",
          field: "field4",
          title: "field4",
          value: "sss",
          col: { span: 8 },
        },
        {
          type: "input",
          field: "field5",
          title: "field5",
          value: "aaa",
          col: { span: 8 },
        },
        {
          type: "select",
          field: "field6",
          title: "field6",
          value: "sss",
          col: { span: 8 },
          options: [],
        },
        {
          type: "timePicker",
          field: "time",
          title: "time",
          value: "12:12:12",
          col: { span: 8 },
        },
        {
          type: "ElButton",
          title: "Modify field1",
          col: { span: 24 },
          native: false,
          on: {
            click: () => {
              this.rule[0].value += "a";
            },
          },
          children: ["Click"],
        },
      ],
    };
  },
  components: {
    // FormTest,
    // HelloWorld,
  },
  mounted() {
    this.rule[5].options = [
      { value: 1, label: "第一行" },
      { value: 2, label: "第二行" },
    ];
  },
});
</script>
