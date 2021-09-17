const Metronomo = {
	
	click: 0,
	tamtempo:0,
	color_beet: document.getElementsByClassName("beet_color_li"),

	beep() {
		let player = document.getElementById("metronomo");

		Metronomo.beet_color_list()

		if (Metronomo.click === 0) {
			
			player.setAttribute("autoplay", "")
			player.setAttribute("src", "beep-08b.mp3");
			document.querySelector("#metronomo").classList.add('active')
			Metronomo.click += 1
		}
		else{
			if (Metronomo.click <=4) {

				player.setAttribute("autoplay", "")
				player.setAttribute("src", "button-29.mp3");
				document.querySelector("#metronomo").classList.add('active')
				Metronomo.click += 1
				
				if(Metronomo.click >= 4){
					Metronomo.limpar_beep()
				}
	
			}
		}
	},

	limpar_beep(){
	//	Metronomo.click = 0
		//Metronomo.color_beet[Metronomo.click].classList.remove("active")
		Metronomo.click = 0
	

	},

	beet_color_list(){
		
		if(Metronomo.click === 0){
			Metronomo.color_beet[Metronomo.click].classList.add("active")
		}
		else{
			Metronomo.color_beet[Metronomo.click - 1].classList.remove("active")
			Metronomo.color_beet[Metronomo.click].classList.add("active")		

		}
	},

	bpm_click(){

		temp_bpm = document.querySelector("input"),
		temp_bpm.addEventListener("input", ()=>{
			document.getElementById("bpm_value").innerHTML = temp_bpm.value.toString();
		})

	},

	start() {
		let titleButton = document.getElementById("ButtonStart");
		let bpm_value = document.getElementById("bpm_value").innerHTML

		Init.valor = setInterval(Metronomo.beep, (60*1000)/bpm_value)
		titleButton.innerHTML = "STOP";
		Metronomo.beep()

	},

	stop() {

		clearInterval(Init.valor)
		Init.valor = null
		document.getElementById("ButtonStart").innerHTML = "START"
		Metronomo.click = 0

	},

};

const Init = {
	valor: null,
	start() {
		if (Init.valor === null) {

			Metronomo.start()

		}
		else {

			Metronomo.stop()
		}
	},
}
Metronomo.bpm_click()
