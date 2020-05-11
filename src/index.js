/**
 * 应用入口
 * @author daizq 
 */

import React from "react";
import ReactDOM from "react-dom";
import { service, appModel } from "win-trade-base";
import { MainPort } from "./yss-biz";
import "win-trade-base/static/css/main.css";
import 'yss-biz/common/style/base.less'
import 'yss-biz/common/style/indexs.less'

import ChildRoutes from "./router";

if (!window.singleSpaNavigate) {
  ReactDOM.render(<MainPort ChildRoutes={ChildRoutes} />, document.getElementById("root"));
}

// 提供基础服务
export const baseConfig = {
  service,
  appModel
};
