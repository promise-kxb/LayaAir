import { Laya } from "./Laya";
import { Main } from "./../Main";
import { Stage } from "../laya/display/Stage"
	import { Loader } from "../laya/net/Loader"
	import { URL } from "../laya/net/URL"
	import { Particle2D } from "../laya/particle/Particle2D"
	import { ParticleSetting } from "../laya/particle/ParticleSetting"
	import { Browser } from "../laya/utils/Browser"
	import { Handler } from "../laya/utils/Handler"
	import { Stat } from "../laya/utils/Stat"
	import { WebGL } from "../laya/webgl/WebGL"

	export class Particle_T3
	{
		private sp:Particle2D;

		constructor(){
			// 不支持WebGL时自动切换至Canvas
Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);

			Laya.stage.alignV = Stage.ALIGN_MIDDLE;
			Laya.stage.alignH = Stage.ALIGN_CENTER;

			Laya.stage.scaleMode = "showall";
			Laya.stage.bgColor = "#232628";

			Stat.show();
			
			Laya.loader.load("res/particles/particleNew.part", Handler.create(this, this.onAssetsLoaded), null, Loader.JSON);
		}

		 onAssetsLoaded(settings:ParticleSetting):void
		{
			this.sp = new Particle2D(settings);
			this.sp.emitter.start(); 	
			this.sp.play();
			Main.box2D.addChild(this.sp);

			this.sp.x = Laya.stage.width / 2;
			this.sp.y = Laya.stage.height / 2;
		}
		
		 dispose():void
		{
			if(this.sp)
			{
				this.sp.emitter.stop();
				this.sp.destroy();
			}
		}
	}


