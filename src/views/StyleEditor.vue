<template>
  <div class="StyleMain">
    <div class="StyleContent1">
      <p style="color: #ffffff; font-size: 24px">Style Editor</p>

      <el-divider></el-divider>
      
      <div class="select">
        <el-select class="s1" v-model="s1" placeholder="選擇編輯樣式" value-key="v1">
          <el-option
            v-for="item in options1.value"
            :key="item.Name"
            :label="item.Name"
            :value="item.Name"
            :disabled="item.disabled"
          />
        </el-select>

        <el-select class="s2" v-model="s2" placeholder="h1">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          />
        </el-select>
      </div>
      <br />
      <div class="StyleInput" v-if="s2!='hr'">

      <div v-for="item in data.style" :key="item.Name" >
        
        <el-input placeholder="background-color" v-model="item.Style.h1[0].backgroundColor" v-if="item.Name == s1" />
        <el-input placeholder="color"  v-model="item.Style.h1[0].color" v-if="item.Name == s1"/>
        <el-input placeholder="border" v-model="item.Style.h1[0].border" v-if="item.Name == s1" />
        <el-input
          placeholder="border-color"
          v-model="item.Style.h1[0].borderColor"
          v-if="item.Name == s1"
        />
        <el-input
          placeholder="margin-top"
          v-model="item.Style.h1[0].marginTop"
          v-if="item.Name == s1"
        />
        <el-input
          placeholder="margin-right"
          v-model="item.Style.h1[0].marginRight"
          v-if="item.Name == s1"
        />
        <el-input
          placeholder="margin-bottom"
          v-model="item.Style.h1[0].marginBottom"
          v-if="item.Name == s1"
        />
        <el-input
          placeholder="margin-left"
          v-model="item.Style.h1[0].marginLeft"
          v-if="item.Name == s1"
        />
        <el-input
          placeholder="padding-top"
          v-model="item.Style.h1[0].paddingTop"
          v-if="item.Name == s1"
        />
        <el-input
          placeholder="padding-right"
          v-model="item.Style.h1[0].paddingRight"
          v-if="item.Name == s1"
        />
        <el-input
          placeholder="padding-bottom"
          v-model="item.Style.h1[0].paddingBottom"
          v-if="item.Name == s1"
        />
        <el-input
          placeholder="padding-left"
          v-model="item.Style.h1[0].paddingLeft"
          v-if="item.Name == s1"
        />
      </div>
      <div class="StyleInput-hr" v-if="s2=='hr'">
        <el-input placeholder="size" v-model="data.style[0].format[0].hr[0].size" />
        <el-input placeholder="color"  v-model="data.style[0].format[0].hr[0].color"/>
      </div>

      <div class="StyleBottom" >
        <el-divider></el-divider>
        <el-input placeholder="Description" v-model="data.style[0].description" />
        <br />
        <br />

        <div class="title">
          <el-input placeholder="Title" v-model="s1" />

          <el-button type="primary" @click="updateStyle" plain>Save</el-button>
        </div>
      </div>
        
        
<!-- 
        <p style="color: #f66060">ERROR：不能重複儲存</p> -->
      </div>
    </div>
    <div class="StyleContent2">
      <div class="main">
        <h1>h1</h1>
        <el-divider></el-divider>
        <h2>h2</h2>
        <el-divider></el-divider>
        <h3>h3</h3>
        <el-divider></el-divider>
        <h4>h4</h4>
        <el-divider></el-divider>
        <h5>h5</h5>
        <el-divider></el-divider>
        <li>ltem1</li>
        <li>ltem2</li>
        <li>ltem3</li>
        <el-divider></el-divider>
        <li>ltem1</li>
        <li>ltem2</li>
        <li>ltem3</li>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive,onMounted } from "vue";
import axios from "axios";
import config from "../../config";

export default {
  setup() {
    const s1 = ref("");
    const s2 = ref("");
    const v1 = ref(0);
    const data = reactive({
      style: [
      {
    "Name": "正式版樣式01",
    "Style": {
        "h1": [
            {
                "backgroundColor": "#666666",
                "color": "#666666",
                "border": "0",
                "borderColor": "#666666",
                "marginTop": "0",
                "marginRight": "0",
                "marginBottom": "0",
                "marginLeft": "0",
                "paddingTop": "0",
                "paddingRight": "0",
                "paddingBottom": "0",
                "paddingLeft": "0"
            }
        ],
        "h2": [
            {
                "backgroundColor": "",
                "color": "",
                "border": "",
                "borderColor": "",
                "marginTop": "",
                "marginRight": "",
                "marginBottom": "",
                "marginLeft": "",
                "paddingTop": "",
                "paddingRight": "",
                "paddingBottom": "",
                "paddingLeft": ""
            }
        ],
        "h3": [
            {
                "backgroundColor": "",
                "color": "",
                "border": "",
                "borderColor": "",
                "marginTop": "",
                "marginRight": "",
                "marginBottom": "",
                "marginLeft": "",
                "paddingTop": "",
                "paddingRight": "",
                "paddingBottom": "",
                "paddingLeft": ""
            }
        ],
        "h4": [
            {
                "backgroundColor": "",
                "color": "",
                "border": "",
                "borderColor": "",
                "marginTop": "",
                "marginRight": "",
                "marginBottom": "",
                "marginLeft": "",
                "paddingTop": "",
                "paddingRight": "",
                "paddingBottom": "",
                "paddingLeft": ""
            }
        ],
        "h5": [
            {
                "backgroundColor": "",
                "color": "",
                "border": "",
                "borderColor": "",
                "marginTop": "",
                "marginRight": "",
                "marginBottom": "",
                "marginLeft": "",
                "paddingTop": "",
                "paddingRight": "",
                "paddingBottom": "",
                "paddingLeft": ""
            }
        ],
        "h6": [
            {
                "backgroundColor": "",
                "color": "",
                "border": "",
                "borderColor": "",
                "marginTop": "",
                "marginRight": "",
                "marginBottom": "",
                "marginLeft": "",
                "paddingTop": "",
                "paddingRight": "",
                "paddingBottom": "",
                "paddingLeft": ""
            }
        ],
        "hr": [
            {
                "size": "",
                "color": ""
            }
        ]
    }
}
      ],
    });

    const options1 = reactive({value:{}});
    const options2 = [
      {
        value: "h1",
        label: "h1",
      },
      // {
      //   value: "h2",
      //   label: "h2",
      // },
      // {
      //   value: "h3",
      //   label: "h3",
      // },
      // {
      //   value: "h4",
      //   label: "h4",
      // },
      // {
      //   value: "h5",
      //   label: "h5",
      // },
      // {
      //   value: "h6",
      //   label: "h6",
      // },
      // {
      //   value: "ol",
      //   label: "ol",
      // },
      // {
      //   value: "l",
      //   label: "l",
      // },
      // {
      //   value: "ul",
      //   label: "ul",
      // },
      // {
      //   value: "l li",
      //   label: "l li",
      // },
      // {
      //   value: "l p",
      //   label: "l p",
      // },
      // {
      //   value: "l a",
      //   label: "l a",
      // },
      // {
      //   value: "hr",
      //   label: "hr",
      // },
    ];

    onMounted( () => {
      updateStyleList()
    });

    // 取得所有樣式，並儲存到options1
    const updateStyleList=()=>{
      axios
      .get(`${config.api}/api/style`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        options1.value = res.data.data.Data;
        data.style=res.data.data.Data;
      });
    }

    const updateStyle=()=>{
      data.style.forEach(function(value){
        if(value.Name===s1.value){
          console.log(value.Name)
          axios
            .put(`${config.api}/api/style`, value , {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then((res) => {
              console.log(res)
            });
        }
      })
      
    }

    

    return {
      options1,
      options2,
      s1,
      s2,
      data,
      v1,
      updateStyle,
    };
  },
};
</script>

<style scoped>
.StyleMain {
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow-y: auto;
}

.StyleContent1 {
  padding: 50px;
  width: 50%;
  background-color: #3e3c49;
}
.StyleContent1 .select {
  display: flex;
}
.StyleContent1 .select .s2 {
  width: 15%;
  margin-left: 10px;
}

.StyleContent2 {
  width: 50%;
}
.StyleContent2 .main {
  padding: 30px;
}
.StyleInput {
  width: 600px;
  flex-direction: column;
}
.StyleInput .el-input {
  width: 200px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.StyleInput-hr {
  width: 600px;
  flex-direction: column;
}
.StyleInput-hr .el-input {
  width: 200px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.StyleBottom {
  margin-top: 120px;
}
.StyleBottom .el-input {
  width: 70%;
}
.StyleBottom .title {
  display: flex;
}
.StyleBottom .title .el-input {
  width: 50%;
}
.StyleBottom .title .el-button {
  margin-left: 10px;
}

.el-input__inner {
  background-color: #8888A4;
  color: #ffffff;
}
@media screen and (max-width: 1150px) {
  .StyleInput {
    width: 100%;
  }
  .StyleInput .el-input {
    width: 100%;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>

<style>
/* .el-input__wrapper {
  background-color: #8888A4;
  color: #ffffff;
}
.el-input__inner {
  background-color: #8888A4;
  color: #ffffff;
} */

</style>
