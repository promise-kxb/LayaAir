import { Laya } from "./Laya";
import { Main } from "./../Main";
import { Stage } from "../laya/display/Stage"
	import { Text } from "../laya/display/Text"
	import { Browser } from "../laya/utils/Browser"
	import { Ease } from "../laya/utils/Ease"
	import { Tween } from "../laya/utils/Tween"
	import { WebGL } from "../laya/webgl/WebGL"

	export class Tween_Letters
	{
		
		constructor(){
			// 不支持WebGL时自动切换至Canvas
Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
//
			Laya.stage.alignV = Stage.ALIGN_MIDDLE;
			Laya.stage.alignH = Stage.ALIGN_CENTER;
//
//			Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
			Laya.stage.bgColor = "#232628";

			
			this.setup();
		}
		
		private setup():void 
		{
			var w:number = 400;
			var offset:number = Laya.stage.width - w >> 1;
			var endY:number = Laya.stage.height / 2 - 50;
			var demoString:string = "LayaBox";
			
			for (var i:number = 0, len:number = demoString.length; i < len; ++i)
			{
				var letterText:Text = this.createLetter(demoString.charAt(i));
				letterText.x = w / len * i + offset;
				
				Tween.to(letterText, { y : endY }, 1000, Ease.elasticOut, null, i * 1000);
			}
		}
		
		private createLetter(char:string):Text
		{
			var letter:Text = new Text();
			letter.text = char;
			letter.color = "#FFFFFF";
			letter.font = "Impact";
			letter.fontSize = 110;
			Main.box2D.addChild(letter);
			
			return letter;
		}
	}

