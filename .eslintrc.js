// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,//目录追溯
  env: {//语法解析、全局变量
      node: true
  },
  parserOptions: {//解析器
      parser: "babel-eslint"
  },
  extends: [//规则限制
      "plugin:vue/essential",
      "prettier"
  ],
  plugins: [//提示额外处理
      "prettier",
      "vue"
  ],
  rules: {//覆盖规则
      "prettier/prettier": ["error", {
          "endOfLine": "auto"
      }],
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
}

