	import { TestPageUI } from "../ui/test/TestPageUI"
import { Event } from "../../laya/core/laya/events/Event";
import { Laya } from "../../laya/core/Laya";
import { Box } from "../../laya/core/laya/ui/Box";
import { Label } from "../../laya/core/laya/ui/Label";
	
	export class TestView extends TestPageUI {
		constructor(){
			//btn是编辑器界面设定的，代码里面能直接使用，并且有代码提示
			super();
this.btn.on(Event.CLICK, this, this.onBtnClick);
			this.btn2.on(Event.CLICK, this, this.onBtn2Click);
			
			Laya.stage.on("keydown", this, this.onKeydown);
		}
		
		private onKeydown(e:Event):void {
			//trace("keycode",e.keyCode, e.ctrlKey);
		}
		
		private onBtnClick(e:Event):void {
			//手动控制组件属性
			this.radio.selectedIndex = 1;
			this.clip.index = 8;
			this.tab.selectedIndex = 2;
			this.combobox.selectedIndex = 0;
			this.check.selected = true;
		}
		
		private onBtn2Click(e:Event):void {
			//通过赋值可以简单快速修改组件属性
			//赋值有两种方式：
			//简单赋值，比如：progress:0.2，就是更改progress组件的value为2
			//复杂复制，可以通知某个属性，比如：label:{color:"#ff0000",text:"Hello LayaAir"}
			this.box.dataSource = {slider: 50, scroll: 80, progress: 0.2, input: "This is a input", label: {color: "#ff0000", text: "Hello LayaAir"}};
			
			//list赋值，先获得一个数据源数组
			var arr:any[] = [];
			for (var i:number = 0; i < 100; i++) {
				arr.push({label: "item " + i, clip: i % 9});
			}
			
			//给list赋值更改list的显示
			this.list.array = arr;
		
			//还可以自定义list渲染方式，可以打开下面注释看一下效果
			//list.renderHandler = new Handler(this, onListRender);
		}
		
		private onListRender(item:Box, index:number):void {
			//自定义list的渲染方式
			var label = (<Label>item.getChildByName("label") );
			if (index % 2) {
				label.color = "#ff0000";
			} else {
				label.color = "#000000";
			}
		}
	}

