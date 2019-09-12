(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{158:function(e,a,n){"use strict";n.r(a);var t=n(0),l=Object(t.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"egg-框架的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#egg-框架的使用","aria-hidden":"true"}},[e._v("#")]),e._v(" egg 框架的使用")]),n("p",[e._v("介绍egg框架的基本使用方法，如：")]),n("ul",[n("li",[n("h3",{attrs:{id:"router配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#router配置","aria-hidden":"true"}},[e._v("#")]),e._v(" router配置")])]),n("li",[n("h3",{attrs:{id:"controller使用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#controller使用方法","aria-hidden":"true"}},[e._v("#")]),e._v(" controller使用方法")])]),n("li",[n("h3",{attrs:{id:"model（squelize）关联数据库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#model（squelize）关联数据库","aria-hidden":"true"}},[e._v("#")]),e._v(" model（squelize）关联数据库")])]),n("li",[n("h3",{attrs:{id:"plugin配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plugin配置","aria-hidden":"true"}},[e._v("#")]),e._v(" plugin配置")])]),n("li",[n("h3",{attrs:{id:"config配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#config配置","aria-hidden":"true"}},[e._v("#")]),e._v(" config配置")])]),n("li",[n("h3",{attrs:{id:"model创建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#model创建","aria-hidden":"true"}},[e._v("#")]),e._v(" Model创建")])])]),n("p",[e._v("egg-squelize的使用方法\n首先需要下载 "),n("code",[e._v("egg-sequelize 和 mysql2")]),e._v("包\n然后在config文件中配置egg-sequelize")]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('  exports.sequelize = {\n    // 数据库类型\n    dialect: "mysql",\n    // host\n    host: "localhost",\n    // 端口号\n    port: "3306",\n    // 用户名\n    username: "root",\n    // 密码\n    password: "***",\n    // 数据库名\n    database: "***"\n  };\n')])])]),n("p",[e._v("然后在plugin中配置")]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('exports.sequelize = {\n  enable: true,\n  package: "egg-sequelize"\n};\n')])])]),n("p",[e._v("在egg-sequelize源码中")]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    const defaultConfig = {\n    logging: app.logger,\n    host: 'localhost',\n    port: 3306,\n    username: 'root',\n    benchmark: true,\n    define: {\n      freezeTableName: false,\n      underscored: true,\n    },\n  };\n  const config = Object.assign(defaultConfig, app.config.sequelize);\n\n  app.Sequelize = Sequelize;\n\n  const sequelize = new Sequelize(config.database, config.username, config.password, config);\n\n  // app.sequelize\n  Object.defineProperty(app, 'model', {\n    value: sequelize,\n    writable: false,\n    configurable: false,\n  });\n\n  loadModel(app);\n\n  app.beforeStart(function* () {\n    yield authenticate(app);\n  });\n};\n")])])]),n("p",[e._v("给egg实例创建了一个model属性，这个属性的值就是根据上面在config中配置的mysql，来创建的sequelize对象。")]),n("ul",[n("li",[e._v("sequelize对象具备很多实用的方法")]),n("li",[e._v("find：搜索数据库中的一个特定元素，可以通过 findById 或 findOne；")]),n("li",[e._v("findOrCreate：搜索特定元素或在不可用时创建它；")]),n("li",[e._v("findAndCountAll：搜索数据库中的多个元素，返回数据和总数；")]),n("li",[e._v("findAll：在数据库中搜索多个元素；")]),n("li",[e._v("复杂的过滤/ OR / NOT 查询；")]),n("li",[e._v("使用 limit(限制)，offset(偏移量)，order(顺序)和 group(组)操作数据集;")]),n("li",[e._v("count：计算数据库中元素的出现次数；")]),n("li",[e._v("max：获取特定表格中特定属性的最大值；")]),n("li",[e._v("min：获取特定表格中特定属性的最小值；")]),n("li",[e._v("sum：特定属性的值求和；")]),n("li",[e._v("create：创建数据库 Model 实例；")]),n("li",[e._v("update：更新数据库 Model 实例；")]),n("li",[e._v("destroy：销毁数据库 Model 实例。")])]),n("p",[e._v("这样就可以在egg实例中使用app.model就能够获取到squeslize实例，并调用相关的方法")]),n("h3",{attrs:{id:"model创建-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#model创建-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Model创建")]),n("p",[e._v("每一个数据表的创建应该都建立在一定的规范上面，下面这段代码实现了一些基本的规则配置")]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('function defineModel(app, name, attributes) {\n  let attrs = {};\n  for (let key in attributes) {\n    let value = attributes[key];\n    if (typeof value === "object" && value["type"]) {\n      value.allowNull = value.allowNull && true;\n      attrs[key] = value;\n    } else {\n      attrs[key] = {\n        type: value,\n        allowNull: true\n      };\n    }\n  }\n\n  return app.model.define(name, attrs, {\n    createdAt: "createdAt",\n    updatedAt: "updatedAt",\n    version: true,\n    freezeTableName: true\n  });\n}\n\nmodule.exports = { defineModel };\n')])])]),n("p",[e._v("下列这段代码是创建用户数据的实例， id这个字段标记了autoIncrement（默认自增从序列1开始，在创建的时候不用传入id参数），primaryKey标注此属性为主键。\n插入一条新的数据用create方法"),n("code",[e._v("await ctx.model.Post.create(ctx.request.body)")])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('const db = require("../db");\n\nmodule.exports = app => {\n  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;\n\n  const User = db.defineModel(app, "users", {\n    id: {\n      type: INTEGER,\n      autoIncrement: true,\n      primaryKey: true,\n    },\n    username: { type: STRING, unique: true, allowNull: false }, // 用户名\n    email: { type: STRING, unique: true, allowNull: false }, // 邮箱\n    password: { type: STRING, allowNull: false }, // 密码\n    name: STRING, // 姓名\n    sex: INTEGER, // 用户性别：1男性, 2女性, 0未知\n    age: INTEGER, // 年龄\n    avatar: STRING, // 头像\n    company: STRING, // 公司\n    department: STRING, // 部门\n    telePhone: STRING, // 联系电话\n    mobilePhone: STRING, // 手机号码\n    info: STRING, // 备注说明\n    roleId: STRING, // 角色id\n    status: STRING, // 用户状态\n    token: STRING, // 认证 token\n    lastSignInAt: DATE // 上次登录时间\n  });\n\n  return User;\n};\n')])])])])}],!1,null,null,null);a.default=l.exports}}]);