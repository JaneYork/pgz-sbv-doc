# 前端网页唤起 exe 客户端

<div style="width: 100%;text-align: center">
<div
			style="margin: 0 auto;padding-left: 12px; background-color: #f4f8fa;   padding-right: 12px;    padding-top: 10px;    padding-bottom: 10px;border-width: 0.1px;border-color: deepskyblue;border-radius: 10px;border-style: solid;	    flex: 130px;	    text-align: left;		    display: flex;		    min-width: 150px;		    position: relative;		    overflow: hidden;			    flex-wrap: wrap;	">
			<a href="https://www.aliyun.com/activity/new?userCode=pqofinu5" style="color: orange;width: 100%;height: 100%; text-decoration:none;   font-weight: 500!important;font-size: 14px!important;display: flex;align-items: center;" rel="external nofollow noreferrer" target="_blank">
				<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h57dyxb6t1j20h80h8aa6.jpg"
					alt="www.pusdn.com图片"
					style="max-width:60px;width: 60px!important; border-radius: 8px;   height: 60px!important;vertical-align: middle;    border-style: none;" />
<div style="margin-left: 10px;">
				<span
					style="font-weight: 500!important;padding-left: 10px;    font-size: 14px!important;    word-wrap: break-word;line-height: 1.4;">
【特惠】阿里云服务器 - 低至99元/年。云服务器百亿补贴，助力中小企业上云
</span>
</div>
					<a href="javascript:void(0)" style="text-decoration:none;"> <span
						style="font-size: 1px; 	position: absolute;	right: 25px;	bottom: 3px;   	margin-left: 3px;	color: #a6b7bf;">推荐AD</span>
				</a>
			</a>
</div>
</div>

## 业务场景

- PC 网页点击按钮唤起建行 POS 客户端。
- PC 网页唤起第三方打印 exe 程序。
- PC 网页唤起 VR 客户端。

## 如何使用

点击事件唤起指定客户端协议。`pusdn-open://`为客户端自定义的协议。

```html
<button type="button" onclick="yyg()">示例一：唤起</button>
<a href="pusdn-open://pgz?id=1&name=2其他参数">示例二：唤起</a>
```

按钮点击事件

```js
function yyg() {
  // 可以传递一些参数
  var posData = {};
  posData.TransType = '01';
  posData.TransAmount = '000000000001';
  console.log(JSON.stringify(posData));
  var pdata = encodeURIComponent(JSON.stringify(posData));
  // 唤起
  window.location.href = 'pusdn-open://pgz?d=' + pdata;
}
```

## EXE 客户端需要做什么

此处不做讨论，请自行实现。

参考思路：

> EXE 自定义的 URL Protocol 协议。\
> 注册表 reg 自定义 Protocol 协议。

### 方式一：EXE 内部开发

方便、可定制接受参数、单实例客户端考虑...

### 方式二：注册表创建

Windows 下使用记事本创建 `pgz-custom.reg` 文件，写入以下内容：

```text
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\pusdn-open]
@="URL:pusdn-open"
"URL Protocol"=""

[HKEY_CLASSES_ROOT\pusdn-open\shell]
@=""

[HKEY_CLASSES_ROOT\pusdn-open\shell\Open]
@=""

[HKEY_CLASSES_ROOT\pusdn-open\shell\Open\command]
@="你的EXE路径，如D:\\Tencent\\WeChat\\WeChat.exe %1"
```

## 体验

- 请在 Windows 电脑下体验。
- 建议使用 Chrome 浏览器。
- 若遇到奇奇怪怪错误，建议下载模板 reg 文件。

### 唤起建行 POS

1. 下载示例 EXE[建行 POS](https://janeyork.lanzoub.com/iNFjp0c7ssne)
2. 按照提示安装
3. 点击<a href="pgz-ccb-proxy://ccb?id=1&name=2其他参数">这里</a>唤起

#### 唤起微信

1. 假设你的微信安装目录为 `D:\Tencent\WeChat\WeChat.exe`
2. 下载注册表文件，双击安装。[点我下载](https://janeyork.lanzoub.com/iZeNx0c80f2d)
3. 双击安装。
4. 点击<a href="pusdn-open://pgz?id=1&name=2">这里</a>唤起

若需要修改，仅需要修改如下：

<div align="center">
<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h6gm99xkhkj20so0ic406.jpg" alt="image-20220923162545239" style="zoom: 50%;" />
</div>
<br>
<div align="center">
<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h6gmgp5rnwj20hy03tt93.jpg" alt="QQ20220923-0"  />
</div>
