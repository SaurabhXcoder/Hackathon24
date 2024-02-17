  city       = ["Select your city","Delhi","Hyderabad","Mumbai"];
	Delhi      = ["Select Cinema","Delight","Miraj","Moti"];
	Delight    = ["Select Movie","Dark_Knight","Faster"];
	Miraj      = ["Select Movie","Inception","Spartons"];
	Moti       = ["Select Movie","Iron_Man","Skyfall"];

	Mumbai     = ["Select Cinema","Capitol","Reagol","Maratha"];
	Capitol    = ["Select Movie","Pirates","Wolverine"];
	Reagol     = ["Select Movie","Avatar","Part"];
	Maratha    = ["Select Movie","Justice_League","The_Mummy"];

	Hyderabad  = ["Select Cinema","Imax","PVR","PVS"];
	Imax       = ["Select Movie","World_War","Kongens"];
	PVR        = ["Select Movie","Iron_Sky","Total_Recall"];
	PVS        = ["Select Movie","Resident_Evil","Guardians_Galaxy"];
	ShowTiming = ["Select Show Timing","11AM","3PM","9PM"];
	
	className  = ["Select Class","Silver","Gold","Platinum"];
	
	function bodyload()
	{
		lstCity = document.getElementById("lstCity");
		var sel = document.createElement("select");
		for(var i=0; i<city.length; i++)
		{
			var opt   = document.createElement("option");
			opt.text  = city[i];
			opt.value = city[i];
			sel.appendChild(opt);
		}
		sel.id = "cityId";
		lstCity.appendChild(sel);
	}

	function ShowCinema()
	{
		lstCity   = document.getElementById("cityId");
		lstCinema = document.getElementById("lstCinema");
		var sel   = document.createElement("select");
		sel.id    = "cinemaId";
		switch(lstCity.value)
		{
			case "Delhi":
			lstCinema.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstTiming.innerHTML = "";
			lstClass.innerHTML  = "";
			lstMovie.innerHTML  = "";
			for(var i=0; i<Delhi.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = Delhi[i];
				opt.value = Delhi[i];
				sel.appendChild(opt);
			}
			break;

			case "Mumbai":
			lstCinema.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstTiming.innerHTML = "";
			lstClass.innerHTML  = "";
			lstMovie.innerHTML  = "";
			for(var i=0; i<Mumbai.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = Mumbai[i];
				opt.value = Mumbai[i];
				sel.appendChild(opt);
			}
			break; 

			case "Hyderabad":
			lstCinema.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstTiming.innerHTML = "";
			lstClass.innerHTML  = "";
			lstMovie.innerHTML  = "";
			for(var i=0; i<Hyderabad.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = Hyderabad[i];
				opt.value = Hyderabad[i];
				sel.appendChild(opt);
			}
			break;
			default:
			lstCinema.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstTiming.innerHTML = "";
			lstClass.innerHTML  = "";
			lstMovie.innerHTML  = "";
			alert("Please Select City");
			break;
		}
		lstCinema.appendChild(sel);
	}

	function ShowMovie()
	{
		lstCinema = document.getElementById("cinemaId");
		lstMovie  = document.getElementById("lstMovie");
		var sel   = document.createElement("select");
		sel.id    = "movieId";
		switch(lstCinema.value)
		{
			case "Delight":
			lstPrice.innerHTML  = "";
			lstTiming.innerHTML = "";
			lstClass.innerHTML  = "";
			lstMovie.innerHTML  = "";
			for(var i=0; i<Delight.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = Delight[i];
				opt.value = Delight[i];
				sel.appendChild(opt);
			}
			break;

			case "Miraj":
			lstPrice.innerHTML  = "";
			lstTiming.innerHTML = "";
			lstClass.innerHTML  = "";
			lstMovie.innerHTML  = "";
			for(var i=0; i<Miraj.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = Miraj[i];
				opt.value = Miraj[i];
				sel.appendChild(opt);
			}
			break;

			case "Moti":
			lstPrice.innerHTML  = "";
			lstTiming.innerHTML = "";
			lstClass.innerHTML  = "";
			lstMovie.innerHTML  = "";
			for(var i=0; i<Moti.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = Moti[i];
				opt.value = Moti[i];
				sel.appendChild(opt);
			}
			break;

			case "Capitol":
			lstPrice.innerHTML  = "";
			lstTiming.innerHTML = "";
			lstClass.innerHTML  = "";
			lstMovie.innerHTML  = "";
			for(var i=0; i<Capitol.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = Capitol[i];
				opt.value = Capitol[i];
				sel.appendChild(opt);
			}
			break;

			case "Reagol":
			lstPrice.innerHTML  = "";
			lstTiming.innerHTML = "";
			lstClass.innerHTML  = "";
			lstMovie.innerHTML  = "";
			for(var i=0; i<Reagol.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = Reagol[i];
				opt.value = Reagol[i];
				sel.appendChild(opt);
			}
			break;

			case "Maratha":
			lstPrice.innerHTML  = "";
			lstTiming.innerHTML = "";
			lstClass.innerHTML  = "";
			lstMovie.innerHTML  = "";
			for(var i=0; i<Maratha.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = Maratha[i];
				opt.value = Maratha[i];
				sel.appendChild(opt);
			}
			break;

			case "Imax":
			lstPrice.innerHTML  = "";
			lstTiming.innerHTML = "";
			lstClass.innerHTML  = "";
			lstMovie.innerHTML  = "";
			for(var i=0; i<Imax.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = Imax[i];
				opt.value = Imax[i];
				sel.appendChild(opt);
			}
			break;

			case "PVR":
			lstPrice.innerHTML  = "";
			lstTiming.innerHTML = "";
			lstClass.innerHTML  = "";
			lstMovie.innerHTML  = "";
			for(var i=0; i<PVR.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = PVR[i];
				opt.value = PVR[i];
				sel.appendChild(opt);
			}
			break;

			case "PVS":
			lstPrice.innerHTML  = "";
			lstTiming.innerHTML = "";
			lstClass.innerHTML  = "";
			lstMovie.innerHTML  = "";
			for(var i=0; i<PVS.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = PVS[i];
				opt.value = PVS[i];
				sel.appendChild(opt);
			}
			break;
			default:
			lstMovie.innerHTML  = "";
			lstTiming.innerHTML = "";
			alert("Please Select Cinema");
			lstPrice.innerHTML ="";
			break;
		}
		lstMovie.appendChild(sel);
	}

	function showTiming()
	{
		pic       = document.getElementById("pic");
		lstMovie  = document.getElementById("movieId");
		lstTiming = document.getElementById("lstTiming");
		var sel   = document.createElement("select");
		sel.id    = "timeId";
		switch(lstMovie.value)
		{
			case "Dark_Knight":
			pic.src             = "images/mvi1.jpg";
			lstTiming.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstClass.innerHTML  = "";
			for(var i=0; i<ShowTiming.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = ShowTiming[i];
				opt.value = ShowTiming[i];
				sel.appendChild(opt);
			}
			break;

			case "Faster":
			pic.src             = "images/mvi2.jpg";
			lstTiming.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstClass.innerHTML  = "";
			for(var i=0; i<ShowTiming.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = ShowTiming[i];
				opt.value = ShowTiming[i];
				sel.appendChild(opt);
			}
			break;

			case "Inception":
			pic.src             = "images/mvi3.jpg";
			lstTiming.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstClass.innerHTML  = "";
			for(var i=0; i<ShowTiming.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = ShowTiming[i];
				opt.value = ShowTiming[i];
				sel.appendChild(opt);
			}
			break;

			case "Spartons":
			pic.src             = "images/mvi4.jpg";
			lstTiming.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstClass.innerHTML  = "";
			for(var i=0; i<ShowTiming.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = ShowTiming[i];
				opt.value = ShowTiming[i];
				sel.appendChild(opt);
			}
			break;

			case "Iron_Man":
			pic.src             = "images/mvi5.jpg";
			lstTiming.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstClass.innerHTML  = "";
			for(var i=0; i<ShowTiming.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = ShowTiming[i];
				opt.value = ShowTiming[i];
				sel.appendChild(opt);
			}
			break;

			case "Skyfall":
			pic.src             = "images/mvi6.jpg";
			lstTiming.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstClass.innerHTML  = "";
			for(var i=0; i<ShowTiming.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = ShowTiming[i];
				opt.value = ShowTiming[i];
				sel.appendChild(opt);
			}
			break;

			case "Pirates":
			pic.src             = "images/mvi7.jpg";
			lstTiming.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstClass.innerHTML  = "";
			for(var i=0; i<ShowTiming.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = ShowTiming[i];
				opt.value = ShowTiming[i];
				sel.appendChild(opt);
			}
			break;

			case "Wolverine":
			pic.src             = "images/mvi8.jpg";
			lstTiming.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstClass.innerHTML  = "";
			for(var i=0; i<ShowTiming.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = ShowTiming[i];
				opt.value = ShowTiming[i];
				sel.appendChild(opt);
			}
			break;

			case "Avatar":
			pic.src             = "images/mvi9.jpg";
			lstTiming.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstClass.innerHTML  = "";
			for(var i=0; i<ShowTiming.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = ShowTiming[i];
				opt.value = ShowTiming[i];
				sel.appendChild(opt);
			}
			break;

			case "Part":
			pic.src             = "images/mvi10.jpg";
			lstTiming.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstClass.innerHTML  = "";
			for(var i=0; i<ShowTiming.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = ShowTiming[i];
				opt.value = ShowTiming[i];
				sel.appendChild(opt);
			}
			break;

			case "Justice_League":
			pic.src             = "images/mvi11.png";
			lstTiming.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstClass.innerHTML  = "";
			for(var i=0; i<ShowTiming.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = ShowTiming[i];
				opt.value = ShowTiming[i];
				sel.appendChild(opt);
			}
			break;

			case "The_Mummy":
			pic.src             = "images/mvi12.jpg";
			lstTiming.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstClass.innerHTML  = "";
			for(var i=0; i<ShowTiming.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = ShowTiming[i];
				opt.value = ShowTiming[i];
				sel.appendChild(opt);
			}
			break;

			case "World_War":
			pic.src             = "images/mvi13.jpg";
			lstTiming.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstClass.innerHTML  = "";
			for(var i=0; i<ShowTiming.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = ShowTiming[i];
				opt.value = ShowTiming[i];
				sel.appendChild(opt);
			}
			break;

			case "Kongens":
			pic.src             = "images/mvi14.jpg";
			lstTiming.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstClass.innerHTML  = "";
			for(var i=0; i<ShowTiming.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = ShowTiming[i];
				opt.value = ShowTiming[i];
				sel.appendChild(opt);
			}
			break;

			case "Iron_Sky":
			pic.src             = "images/mvi15.jpg";
			lstTiming.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstClass.innerHTML  = "";
			for(var i=0; i<ShowTiming.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = ShowTiming[i];
				opt.value = ShowTiming[i];
				sel.appendChild(opt);
			}
			break;

			case "Total_Recall":
			pic.src             = "images/mvi16.jpg";
			lstTiming.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstClass.innerHTML  = "";
			for(var i=0; i<ShowTiming.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = ShowTiming[i];
				opt.value = ShowTiming[i];
				sel.appendChild(opt);
			}
			break;

			case "Resident_Evil":
			pic.src             = "images/mvi17.jpg";
			lstTiming.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstClass.innerHTML  = "";
			for(var i=0; i<ShowTiming.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = ShowTiming[i];
				opt.value = ShowTiming[i];
				sel.appendChild(opt);
			}
			break;

			case "Guardians_Galaxy":
			pic.src             = "images/mvi18.jpg";
			lstTiming.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstClass.innerHTML  = "";
			for(var i=0; i<ShowTiming.length; i++)
			{
				var opt   = document.createElement("option");
				opt.text  = ShowTiming[i];
				opt.value = ShowTiming[i];
				sel.appendChild(opt);
			}
			break;

			default:
			alert("Please Select Movie");
			lstTiming.innerHTML = "";
			lstPrice.innerHTML  = "";
			lstClass.innerHTML  = "";
			break;
		}
		lstTiming.appendChild(sel);
	}

	function ShowClass()
	{
		lstTiming = document.getElementById("timeId");
		lstClass  = document.getElementById("lstClass");
		var sel   = document.createElement("select");
		sel.id    = "classId";
		for(var i=0; i<className.length; i++)
		{
			var opt            = document.createElement("option");
			lstPrice.innerHTML = "";
			lstClass.innerHTML = "";
			opt.text           = className[i];
			opt.value          = className[i];
			sel.appendChild(opt);
		}
		lstClass.appendChild(sel);
	}

	function ShowPrice()
	{
		lstClass = document.getElementById("classId");
		lstPrice = document.getElementById("lstPrice");
		switch(lstClass.value)
		{
			case "Gold":
			lstPrice.innerHTML = 200;
			lstPrice.value     = 200;
			break;

			case "Platinum":
			lstPrice.innerHTML = 300;
			lstPrice.value     = 300;
			break;

			case "Silver":
			lstPrice.innerHTML = 100;
			lstPrice.value     = 100;
			break;

			default:
			lstPrice.innerHTML = "";
			lstPrice.value     = 0;
			document.getElementById("details").style.display = "none";	
			break;
		}
	}


	function ShowDetails()
	{	
		cinema           = document.getElementById("cinema");
		mname            = document.getElementById("mname");
		timing           = document.getElementById("timing");
		sclass           = document.getElementById("sclass");
		count            = document.getElementById("count");
		amount           = document.getElementById("amount");
		cinema.innerHTML = lstCinema.value;
		mname.innerHTML  = lstMovie.value;
		timing.innerHTML = lstTiming.value;
		sclass.innerHTML = lstClass.value;
		count.innerHTML  = lstCount.value;
		amount.innerHTML = ((lstPrice.value)*(lstCount.value));

		if(lstPrice.value==100 || lstPrice.value==200 || lstPrice.value==300)
			document.getElementById("details").style.display = "block";	
		else
			alert("Please fill all details correctly.");
	}
