<template>
  <div id="chat">
    <div class="headd">聊天机器人</div>
    <div class="contenting">
      <!-- <template v-for="(item,index) in list"  >
        <div class="mine" :key="index" v-if="send(data,1)"> -->
          <!-- <img src="../assets/logo.png" alt="图片" class="mychar" /> -->
          <!-- <span class="myChat">{{item.text}}</span> -->
        </div>
        <!-- <div class="mine" :key="index" v-else="send(data,2)"> -->
          <!-- <img src="../assets/logo.png" alt="图片" class="mychar" /> -->
          <!-- <span class="myChat">{{item.text}}</span> -->
        <!-- </div> -->
      <!-- </template> -->
    <!-- </div> -->
    <div class="input">
      <input type="text" id="chatArea" v-model="inputChar" />
      <div id="sendBtn" @click="send()">发送</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      inputChar: "",
      list: '',
    };
  },
  methods: {
    send(list,type) {
      // if (this.inputChar == "") {
        alert("暂未完善开发，请稍后等待....");
        this.inputChar = ""
      // } else {
        // console.log("bub");
        // axios
        //   .get("https://developer.duyiedu.com/edu/turing/chat", {
        //     params: {
        //       text: this.inputChar,
        //     },
        //   })
        //   .then((res) => {
        //     console.log(res.data.text);
        //     this.list = res.data.text;
        //     // console.log(this.list)
        //   });
      // }
    },
  },
};
</script>
<style  scoped>
body,
html {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
#chat {
  width: 450px;
  /* height: 700px; */
  position: relative;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  /* background: blue; */
}

.headd {
  width: 100%;
  height: 50px;
  background: #ccc;
  line-height: 50px;
  text-align: center;
  color: #333;
  font-size: 20px;
}
.contenting::-webkit-scrollbar {
  width: 1px;
}
.contenting {
  width: 100%;
  height: 600px;
  background: #ebebeb;
  border: 2px dashed #fff;
  overflow-y: scroll;
  box-sizing: border-box;
}

.input {
  width: 100%;
  height: 50px;
  background: #d3d3d3;
  position: relative;
}
img {
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  padding: 5px 2px;
}
img.root {
  float: left;
  margin-left: 5px;
}
img.mychar {
  float: right;

  margin-right: 5px;
}
#chatArea {
  width: 350px;
  height: 25px;
  border: 0px;
  position: absolute;
  top: 50%;
  margin-top: -12px;
  margin-left: -210px;
  outline: none;
  border-radius: 5px;
}
.mine {
  margin-top: 15px;
}
.myChat {
  position: relative;
  display: inline-block;
  float: right;
  background: rgb(158, 234, 106);
  padding: 5px 10px;
  line-height: 25px;
  border-radius: 5px;
  margin-right: 10px;
  max-width: 75%;
  /* border: 1px solid; */
}
.myChat:after {
  content: "";
  position: absolute;
  display: block;
  right: -10px;
  top: 8px;
  width: 0;
  height: 0;
  line-height: 0;
  font-size: 0;
  border-width: 5px;
  border-style: solid;
  border-color: #ebebeb #ebebeb #ebebeb rgb(158, 234, 106);
}
.robotChat,
.myChat {
  word-wrap: break-word;
  word-break: break-word;
}
.robotChat {
  position: relative;
  display: inline-block;
  float: left;
  background: white;
  padding: 5px 10px;
  line-height: 25px;
  border-radius: 5px;
  margin-left: 10px;
  max-width: 75%;
}

.robotChat:after {
  content: "";
  position: absolute;
  display: block;
  left: -10px;
  top: 8px;
  width: 0;
  height: 0;
  line-height: 0;
  font-size: 0;
  border-width: 5px;
  border-style: solid;
  border-color: #ebebeb white #ebebeb #ebebeb;
}
#sendBtn {
  width: 65px;
  height: 25px;
  background: yellowgreen;
  border-radius: 5px;
  color: white;
  text-align: center;
  line-height: 25px;
  position: absolute;
  margin-left: 370px;
  top: 50%;
  margin-top: -12px;
  cursor: pointer;
}
</style>
