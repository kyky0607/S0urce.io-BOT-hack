// ==UserScript==
// @name 		Kylian
// @version		2.3
// @description	BOT Autonome et contrôlable de hack et d'amélioration
// @author 		Kylian
// @match 		*://s0urce.io/*
// ==/UserScript==

// Initialisation des variables
let config, vars, app, loops, gui;

// CONFIGURATION
config = {

	// Message de hack pour la victime
	message: "☠️ HACKED BY Kylian 💻",

	autoTarget: true,			// Attaque automatique
	autoAttack: true,			// Cibles automatique
	log: true,					// Logs en console
	minage: true,				// Amélioration des mineurs automatique

	freq: {
		word: 750,				// Temps avant de deviner le mot
		mine: 5000,				// Temps avant d'améliorer les mines
		upgrade: 3000,			// Temps avant d'améliorer le firewall
		broke: 3000,			// Temps avant de réessayer de hacker si monnaie insuffisante
		hack: 1000,				// Temps avant de hacker un autre joueur
	},

	playerToAttack: 0,			// Par quel joueur commencer l'attaque dans la liste (0 = 1er)
	maxHackFails: 5,			// Nombre d'erreurs de hack avant de redémarrer le bot
	maxMinerLevel: 999,			// Niveau max des mineurs sauf Botnet et Quantum server
	maxQBLevel: 999,				// Niveau max des mineurs Botnet et Quantum server
	maxUpgradeCost: .99,			// Somme maximale pour l'amélioration (BTC actuel * maxUpgradeCost)

	// Paramètres de l'interface de contrôle du BOT
	gui: {
		enabled: true,
		width: "400px",
		height: "690px"
	},

	// Système de décryptage des images en texte
	ocr: {
		enabled: false,
		url: "http://api.ocr.space/parse/image",
		key: "XXX"
	}
};

// VARIABLES
vars = {

	// Liste des images des mots (remplissage automatique)
	listingURL: {},

	// Base de données des mots
	listingB64: {"15311015":"module","19874074":"file","47175883":"encryptfile","78482505":"stat","98536489":"url","101243014":"eventlistdir","121093601":"password","130603323":"deleteallids","148244845":"rootcookieset","248513203":"loadaltevent","267308791":"info","348636898":"username","398561552":"add","401153668":"tempdatapass","419398556":"num","456062031":"point","514120436":"send","567102362":"data","589336711":"generate","599598412":"command","605282908":"loop","618676639":"ghostfilesystem","648763823":"create3axisvector","657256265":"cookies","668315514":"add","670312741":"writefile","782829474":"respondertimeout","847167870":"setnewproxy","854884272":"wordcounter","861244767":"joinnetworkclient","901243531":"newline","902745501":"changeusername","907181842":"syscall","938919465":"getxmlprotocol","968556280":"callmodule","974918423":"constructor","979066172":"signal","979636581":"global","985712586":"statusofprocess","1025302195":"anon","1036824887":"uploaduserstats","1059114713":"http","1116412930":"getping","1129543136":"load","1136257323":"handle","1144523139":"pass","1150909553":"package","1159860793":"sizeofhexagon","1171225457":"hostnewserver","1183279706":"listconfig","1207346080":"thread","1224854595":"datatype","1226991364":"setcookie","1277154470":"getid","1297084254":"fillgrid","1297139737":"loadbytes","1302383528":"host","1338515272":"getfirewallchannel","1346956584":"channelsetpackage","1372243801":"hostserver","1420184963":"event","1442699894":"responder","1472847174":"getfile","1557099499":"port","1567951055":"sizeof","1594121102":"serverproxy","1605981605":"removenewcookie","1609121367":"eventtype","1638349176":"gridheight","1647872193":"user","1653524095":"poly","1672574785":"log","1683542193":"val","1684232653":"status","1719618689":"root","1726234710":"patcheventlog","1733767903":"mysql","1768556497":"net","1770626869":"checkhttptype","1788506574":"delete","1852667296":"emitconfiglist","1856168944":"download","1882426025":"disconnectchannel","1905636872":"changepassword","1939344114":"urlcheck","1956925611":"fileexpresslog","1987315504":"length","1987630692":"encode","1999688087":"blockthreat","2044041787":"getdatapassword","2091854663":"join","2114328775":"bufferpingset","2127289026":"socket","2146605725":"create2axisvector","-2022313631":"get","-1626066211":"dir","-2118249843":"list","-2017827979":"ghost","-505734822":"ping","-105754243":"write","-596486220":"remove","-1411454256":"bytes","-1138367387":"count","-418857538":"reset","-1672823040":"com","-29353888":"key","-92886755":"buffer","-1616694298":"bit","-23912487":"size","-1249268365":"upload","-1468886921":"temp","-626053887":"system","-1156711839":"client","-81054603":"init","-141168411":"xml","-1345603115":"part","-679234549":"emit","-1587204252":"set","-1308065871":"call","-1266608331":"type","-193204407":"left","-1628499386":"right","-287565771":"domain","-1728017658":"intel","-1064389816":"getpass","-1164465758":"setstats","-1127904142":"encrypt","-406197419":"accountname","-945581080":"setnewid","-1222053453":"process","-508873827":"proxy","-1354700300":"filedir","-196679888":"newhost","-1461353192":"server","-683593749":"number","-836893237":"gridwidth","-2012064394":"decrypt","-294405445":"config","-39918655":"getinfo","-1476080363":"userport","-553981589":"account","-2131859196":"filetype","-700611194":"decryptfile","-179602858":"setport","-317210335":"threat","-1896953293":"userid","-689028013":"channel","-934078508":"hexagon","-222362882":"disconnect","-2047298844":"protocol","-487602046":"getkey","-32035591":"getlog","-900965004":"export","-1327076929":"connect","-517864587":"newserver","-440931039":"findpackage","-1172656994":"vector","-616163997":"response","-1986603776":"setping","-1941630950":"unpacktmpfile","-75721908":"getmysqldomain","-1695566202":"httpbuffersize","-819294973":"removeoldcookie","-2135624083":"getpartoffile","-410733505":"disconnectserver","-1100099911":"batchallfiles","-1008193379":"exportconfigpackage","-363307462":"loadloggedpassword","-841313941":"sendintelpass","-486089412":"decryptdatabatch","-414160473":"loadregisterlist","-1136603235":"systemgridtype","-1274291847":"encodenewfolder","-1758655872":"encryptunpackedbatch","-797896268":"destroybatch","-1293468912":"dodecahedron","-2089156425":"includedirectory","-1811003021":"systemportkey","-580269682":"mergesocket","-1898909613":"createnewpackage","-1505677585":"createfilethread","-745659096":"generatecodepack","-1279135495":"createnewsocket"},

	balance: 0,					// BitCoins sur le compte

	flags: {
		ocrBlock: false,		// Attente de la fin d'OCR
		progressBlock: false	// Attente de la progression de la barre de hack
	},

	// Initialisation des événements de boucle
	loops: {
		word: null,
		upgrade: null,
		miner: null
	},

	hackProgress: 0,			// Progression sur un hack
	hackFailures: 0,			// Nombre d'erreurs sur un hack

	// Mineurs et leur niveau actuel (automatique)
	minerStatus: [
		{ name: "shop-basic-miner", value: 0 },
		{ name: "shop-advanced-miner", value: 0 },
		{ name: "shop-mining-drill", value: 0 },
		{ name: "shop-data-center", value: 0 },
		{ name: "shop-bot-net", value: 0 },
		{ name: "shop-quantum-server", value: 0 }
	],

	// Ports du pare-feu et autorisation d'amélioration
	fireWall: [
		{ name: "A", index: 1, needUpgrade: true },
		{ name: "B", index: 2, needUpgrade: true },
		{ name: "C", index: 3, needUpgrade: true },
		{ name: "ALL", needUpgrade: true }
	],

	// Initialisation système pour la fenêtre de contrôle du BOT
	gui: {
		dragReady: false,
		dragOffset: { x: 0, y: 0 }
	}
};

app = {

	// Démarrage du BOT
	start: () => {

		// Ouverture des fenêtres si elles ne sont pas ouvertes
		if ($("#player-list").is(":visible") === false) {
			$("#desktop-list").children("img").click();
		}
		if ($("#window-shop").is(":visible") === false) {
			$("#desktop-shop").children("img").click();
			$("#desktop-miner").children("img").click();
		}
		if ($("#window-computer").is(":visible") === false) {
			$("#desktop-computer").children("img").click();
		}
		if (config.gui.enabled === true) {
			if ($("#custom-gui").length > 0) {
				$("#custom-gui").show();
			} else {
				gui.show();
			}
		}

		// Lancement des boucles d'actions du BOT
		app.automate();
	},

	// Redémarrage du BOT
	restart: () => {
		app.stop();
		log(">> Redémarrage ...");

		setTimeout(() => {
			log(">> Redémarré!");
			app.automate();
		}, config.freq.hack);
	},

	// Arrêt du BOT
	stop: () => {

		// Supprime chaque boucle d'actions
		for (const loop in vars.loops) {
			if (vars.loops[loop] === null) {
				log(`La boucle ${loop} est déjà arrêtée`);
				continue;
			}
			clearInterval(vars.loops[loop]);
			vars.loops[loop] = null;
		}

		// Réinitialisation des variables nécessaires
		vars.hackProgress = 0;
		vars.flags.ocrBlock = false;
		vars.flags.progressBlock = false;
		log(">> Arrêté");
	},

	// Automatisation du BOT
	automate: () => {

		// Prépare la prochaine attaque (paramètres etc)
		app.attack();

		// Démarre la boucle d'actions pour améliorer les mines
		if (vars.loops.miner === null) {
			vars.loops.miner = setInterval(loops.miner, config.freq.mine);
		}

		// Démarre la boucle d'actions pour améliorer le pare-feu
		if (vars.loops.upgrade === null) {
			vars.loops.upgrade = setInterval(loops.upgrade, config.freq.upgrade);
		}
	},

	// Attaque du BOT
	attack: () => {

		// Cible automatique pour l'attaque
		if (config.autoTarget) {

			// Choisi aléatoirement un joueur entre la position choisie sur la liste et les 5 suivants
			const rndTarget = getRandomInt(config.playerToAttack, config.playerToAttack + 5);

			// Récupération du nom du joueur ciblé
			const targetName = $("#player-list").children("tr").eq(rndTarget)[0].innerText;
			log(`=> Attaque de : ${targetName}`);

			// Ouverture du menu pour hacker le joueur
			$("#player-list").children("tr").eq(rndTarget)[0].click();
			$("#window-other-button").click();
		}

		// Attaque automatique
		if (config.autoAttack) {

			// Choisi un port aléatoirement pour attaquer
			const portNumber = getRandomInt(1, 3);

			// Vérifie si assez de BitCoins sur le compte pour hack, sinon attends
			const portStyle = $(`#window-other-port${portNumber}`).attr("style");
			if (portStyle.indexOf("opacity: 1") === -1) {
				log("~ Hack trop cher, en attente...");
				setTimeout(app.attack, config.freq.broke);
				return;
			}

			// Clique sur le port à attaquer
			$(`#window-other-port${portNumber}`).click();
		}

		// Si le BOT doit attaquer
		if(config.autoTarget || config.autoAttack) {

			// Boucle d'actions du hack
			if (vars.loops.word === null) {
				vars.loops.word = setInterval(loops.word, config.freq.word);
			}
		} else {

			// Attente de BitCoins pour attaquer
			setTimeout(app.attack, config.freq.broke);
			return;
		}
	},

	findWord: () => {
		const wordLink = $(".tool-type-img").prop("src");
		if (!wordLink.endsWith("s0urce.io/client/img/words/template.png")) {
			if (vars.listingURL.hasOwnProperty(wordLink) === true) {
				const word = vars.listingURL[wordLink];
				log(`Mot trouvé (URL): [${word}]`);
				app.submit(word);
				return;
			}
			toDataURL(wordLink).then((dataUrl) => {
				const hash = getHashCode(dataUrl);
				if (vars.listingB64.hasOwnProperty(hash) === true) {
					const word = vars.listingB64[hash];
					log(`Mot trouvé (BDD): [${word}]`);
					app.learn(word);
					return;
				}
				if (config.ocr.enabled === true) {
					log("* Not seen, trying OCR...");
					app.doOCR(config.ocr.url, {
						apikey: config.ocr.key,
						language: "eng",
						url: wordLink
					});
				} else {
					log("* OCR disabled, skipping...");
				}
			});
		} else {
			log("Impossible de trouver le mot");
			// if the target is disconnected and autoTarget disabled, re-enable it.
			if ($("#cdm-text-container span:last").text() === "Target is disconnected from the Server." && !config.autoTarget) {
				$("#custom-autoTarget-button").click();
			}
			app.restart();
		}
	},

	learn: (word) => {
		const wordLink = $(".tool-type-img").prop("src");
		vars.listingURL[wordLink] = word;
		app.submit(word);
	},

	submit: (word) => {
		$("#tool-type-word").val(word);
		$("#tool-type-word").submit();
	},

	doOCR: (link, payload) => {
		vars.flags.ocrBlock = true;
		// this is made somewhat generic to allow different ocr vendors
		$.post(link, payload).done((data) => {
			const word = String(data["ParsedResults"][0]["ParsedText"]).trim().toLowerCase().split(" ").join("");
			if (word.length > 2) {
				log(`. Got data: [${word}]`);
				$("#tool-type-word").val(word);
				app.learn(word);
				vars.flags.ocrBlock = false;
			} else {
				log("* OCR failed");
				app.restart();
			}
		});
	}
};

loops = {
	word: () => {
		// block is true is we're mid-OCR
		if (vars.flags.ocrBlock === true) {
			return;
		}
		if ($("#targetmessage-input").is(":visible") === true) {

			// Message envoyé après le hack
			$("#targetmessage-input").val(config.message);
			$("#targetmessage-button-send").click();
			log("=> Hack réussi!");
			app.restart();
			return;
		}
		// if we're waiting on the progress bar to move...
		if (vars.flags.progressBlock === true) {
			const newHackProgress = parseHackProgress($("#progressbar-firewall-amount").attr("style"));
			// check to see if it's new
			if (vars.hackProgress === newHackProgress) {
				// the bar hasn't moved
				log(">> La barre de progression semble figée...");
				vars.hackFails++;
				if (vars.hackFails >= config.maxHackFails) {
					vars.hackFails = 0;
					log("La barre de progression est bloquée, redémarrage...");
					// maybe the URLs have changed
					vars.listingURL = {};
					app.restart();
				}
				return;
			}
			// the bar has moved
			vars.hackFails = 0;
			vars.hackProgress = newHackProgress;
			vars.flags.progressBlock = false;
		}
		// actually do the word stuff
		vars.flags.progressBlock = true;
		app.findWord();
	},

	miner: () => {
		if(config.minage) {
			// first, get the status of our miners
			for (const miner of vars.minerStatus) {
				// set value
				miner.value = parseInt($(`#${miner.name}-amount`).text());
				// this is available to buy
				if ($(`#${miner.name}`).attr("style") === "opacity: 1;") {
					// buy more quantum servers and botnets, buy botnets at the same rate as the quantum servers.
					if (miner.value >= config.maxQBLevel) {
						// we're beyond or at the max QB level, no updates needed
						continue;
					}
					// is this an advanced miner?
					const isAdvancedMiner = (miner.name === "shop-quantum-server" || miner.name === "shop-bot-net") ? true : false;
					if (miner.value >= config.maxMinerLevel && isAdvancedMiner === false) {
						// this isn't an advanced miner and it's beyond the max level, no updates needed
						continue;
					}
					// we should buy this
					$(`#${miner.name}`).click();
				}
			}
		}
	},

	upgrade: () => {
		// leave if all firewalls are upgraded to max
		if (!vars.fireWall[3].needUpgrade)
			return;
		// get a random firewall
		// i refers to the location in the vars.firewall array
		const i = getRandomInt(0, 2);
		// index refers to 1,2,3, the index in the DOM (use for selectors)
		const index = vars.fireWall[i].index;
		// if this fireWall is already fully upgraded, get an other random firewall.
		if (!vars.fireWall[i].needUpgrade)
			vars.loops.upgrade();
		vars.balance = parseInt($("#window-my-coinamount").text());



		// if the back button is visible, we're on a page, let's back out and hide the firewall warning.
		if ($("#window-firewall-pagebutton").is(":visible") === true) {
			$("#tutorial-firewall").css("display", "none");
			$("#window-firewall-pagebutton").click();
		}

		// click on the firewall
		log(`. Handling upgrades to firewall ${vars.fireWall[i].name}`);
		$(`#window-firewall-part${index}`).click();
		// get stats
		const stats = [
			parseInt($("#shop-max-charges").text()), parseInt($("#shop-strength").text()), parseInt($("#shop-regen").text())
		];
		const statLookup = [
			"max_charge10", "difficulty", "regen"
		];
		const maxStats = [
			30, 4, 10
		];
		let maxUpgradeCount = 0;
		for (const stat in maxStats) {
			if (stats[stat] < maxStats[stat]) {
				const statPrice = parseInt($(`#shop-firewall-${statLookup[stat]}-value`).text());
				if (statPrice < (vars.balance * config.maxUpgradeCost)) {
					log(`. Buying: ${$(".window-shop-element-info b").eq(stat).text()}`);
					$(`#shop-firewall-${statLookup[stat]}`).click();
					// buy more than one upgrade, but only if they cost less than a third of the bitcoin balance.
					// return;
				}
			} else {
				maxUpgradeCount++;
				if (maxUpgradeCount === 3) {
					vars.fireWall[i].needUpgrade = false;
					if (vars.fireWall.every(checkFirewallsUpgrades))
						vars.fireWall[3].needUpgrade = false;
				}
			}
		}
		// let's go back
		if ($("#window-firewall-pagebutton").is(":visible") === true) {
			$("#window-firewall-pagebutton").click();
		}
	},
};

gui = {
	show: () => {
		const sizeCSS = `height: ${config.gui.height}; width: ${config.gui.width}; text-align: center;`;
		const labelMap = {
			word: "Vitesse des mots",
			mine: "Amélioration des mines",
			upgrade: "Amélioration du pare-feu",
			hack: "Temps entre les hacks"
		};
		const freqInput = (type) => {
			return `<span style="font-size:15px">
				${labelMap[type]}:
				<input type="text" class="custom-gui-freq input-form" style="width:50px;margin:0px 0px 15px 5px;background:#444;"
				  value="${config.freq[type]}" data-type="${type}">
				<span>(ms)</span><br>
			</span>`;
		};
		const botWindowHTML = `
		<div id="custom-gui" class="window" style="border-color: rgb(62, 76, 95); color: rgb(191, 207, 210); ${sizeCSS} z-index: 10; top: 10%; right: 7%;">
			<div id="custom-gui-bot-title" class="window-title" style="background-color: rgb(62, 76, 95);">
				🤖 Pannel
				<span class="window-close-style">
					<img class="window-close-img" src="http://s0urce.io/client/img/icon-close.png">
				</span>
			</div>
			<div class="window-content" style="${sizeCSS}">
				<div id="custom-restart-button" class="button" style="display: block; margin-bottom: 15px">
					Redémarrer le bot
				</div>
				<div id="custom-stop-button" class="button" style="display: block; margin-bottom: 15px;">
					Arrêter le bot
				</div>

				<div style="width:100%;border-bottom: 1px solid grey;"></div>
				<h3 style="text-align:center;">ATTAQUES</h3>
				<div id="custom-autoAttack-button" class="button" style="display: block; margin-bottom: 15px";>
					Attaques automatiques sur la cible
				</div>
				<div id="custom-autoTarget-button" class="button" style="display: block; margin-bottom: 15px";>
					Séléction automatique des cibles
				</div>
				<span style="margin-left:15px;">Position de départ:</span>
				<input type="text" id="positionAttaque" class="custom-gui-freq input-form" style="width:30px;margin:0px 0px 15px 5px;background:#444;"
				  value="${config.playerToAttack + 1}" >
				<div style="width:100%;border-bottom: 1px solid grey;"></div>

				<div id="custom-firewall-button" class="button" style="display: block; margin-bottom: 15px; margin-top: 15px;">
					Améliorer le firewall
				</div>
				<div id="custom-mineur-button" class="button" style="display: block; margin-bottom: 15px">
					Améliorer les mineurs
				</div>
				<div id="custom-log-button" class="button" style="display: block; margin-bottom: 15px">
					Afficher les logs
				</div><br>
				<span style="margin-bottom: 0.2em;">Message de hack:</span>
				<br>
				<input type="text" class="custom-gui-msg input-form" style="width:300px;height:30px;border:;background:lightgrey;color:black;margin-top:0.3em;" value="${config.message}" >
				<br><br>
				${freqInput("word")}
				${freqInput("mine")}
				${freqInput("upgrade")}
				${freqInput("hack")}
			</div>
		</div>`;

		const boutonBOT = `
		<div class="desktop-element" id="desktop-bot" style="position: absolute; top: 85px; right: 0">
			<div style="font-size: 2em;">🤖</div>
			<div class="desktop-element-title">BOT</div>
		</div>
		`;

		// Choix des limites d'amélioration pour chaque mineur
		const limitesMineurs = `
		<div style="text-align:center;">
			<span>MAX mineurs de base : </span>
			<input type="text" id="limitSmallMiner" class="input-form" style="width:40px;margin:15px 0px 15px 5px;background:#444;"
			  value="${config.maxMinerLevel}" ><br>
			<span>MAX mineurs avancés : </span>
			<input type="text" id="limitBigMiner" class="input-form" style="width:40px;margin:0px 0px 15px 5px;background:#444;"
			  value="${config.maxQBLevel}" >
		</div>
		`;

		$(".window-wrapper").append(botWindowHTML);

		// Bouton d'ouverture du BOT
		$("#desktop-wrapper").append(boutonBOT);
		$("#desktop-bot").on("click", () => {
			$("#custom-gui").show();
		});

		// Masque le message d'AdBlock
		$("#window-msg2 .message").html('<h1>🤖 BOT par Kylian</h1>');


		// MINEURS
		$("#window-miner .window-content").css("height", "500px");
		$("#window-miner .window-content").append(limitesMineurs);

		// Boutons de valeur (OUI/NON)
		$("#custom-autoTarget-button").css("color", config.autoTarget ? "green" : "red");
		$("#custom-autoAttack-button").css("color", config.autoAttack ? "green" : "red");
		$("#custom-firewall-button").css("color", vars.fireWall[3].needUpgrade ? "green" : "red");
		$("#custom-mineur-button").css("color", config.minage ? "green" : "red");
		$("#custom-log-button").css("color", config.log ? "green" : "red");

		// Fermeture de la fenêtre du BOT
		$("#custom-gui-bot-title > span.window-close-style").on("click", () => {
			$("#custom-gui").hide();
		});

		// Changement du message de hack
		$(".custom-gui-msg").on("keypress", (e) => {
			if (e.keyCode !== 13) {
				return;
			}
			config.message = $(e.target).val();
			log(`Message de hack défini à : ${config.message}`);
			changementEffectue();
		});

		$("#custom-restart-button").on("click", () => {
			app.restart();
		});
		$("#custom-stop-button").on("click", () => {
			app.stop();
		});
		$("#custom-autoAttack-button").on("click", () => {
			config.autoAttack = !config.autoAttack;

			if(config.autoTarget == true) {
				config.autoTarget = false;
			}

			$("#custom-autoAttack-button").css("color", config.autoAttack ? "green" : "red");
			$("#custom-autoTarget-button").css("color", config.autoTarget ? "green" : "red");
		});

		$("#custom-autoTarget-button").on("click", () => {
			config.autoTarget = !config.autoTarget;
			$("#custom-autoTarget-button").css("color", config.autoTarget ? "green" : "red");
		});
		$("#custom-firewall-button").on("click", () => {
			vars.fireWall[3].needUpgrade = !vars.fireWall[3].needUpgrade;
			$("#custom-firewall-button").css("color", vars.fireWall[3].needUpgrade ? "green" : "red");
		});
		$("#custom-mineur-button").on("click", () => {
			config.minage = !config.minage;
			$("#custom-mineur-button").css("color", config.minage ? "green" : "red");
		});
		$("#custom-log-button").on("click", () => {
			config.log = !config.log;
			$("#custom-log-button").css("color", config.log ? "green" : "red");
		});

		$(".custom-gui-freq").on("keypress", (e) => {
			if (e.keyCode !== 13) {
				return;
			}
			const type = $(e.target).attr("data-type");
			if (!config.freq[type]) {
				// invalid input, disregard i guess?
				return;
			}
			config.freq[type] = $(e.target).val();
			log(`* Fréquence de '${type}' définie à ${config.freq[type]}`);
			changementEffectue();
		});
		$("#positionAttaque").on("keypress", (e) => {
			if (e.keyCode !== 13) {
				return;
			}
			config.playerToAttack = $(e.target).val() - 1;
			log(`Position à attaquer : ${config.playerToAttack}`);
			changementEffectue();
		});
		$("#limitSmallMiner").on("keypress", (e) => {
			if (e.keyCode !== 13) {
				return;
			}
			config.maxMinerLevel = $(e.target).val();
			log(`Limite des petits mineurs : ${config.maxMinerLevel}`);
			changementEffectue();
		});
		$("#limitBigMiner").on("keypress", (e) => {
			if (e.keyCode !== 13) {
				return;
			}
			config.maxQBLevel = $(e.target).val();
			log(`Limites des grands mineurs : ${config.maxQBLevel}`);
			changementEffectue();
		});

		// make the bot window draggable
		const botWindow = ("#custom-gui");
		const botWindowTitle = ("#custom-gui-bot-title");
		$(document).on("mousedown", botWindowTitle, (e) => {
			vars.gui.dragReady = true;
			vars.gui.dragOffset.x = e.pageX - $(botWindow).position().left;
			vars.gui.dragOffset.y = e.pageY - $(botWindow).position().top;
		});
		$(document).on("mouseup", botWindowTitle, () => {
			vars.gui.dragReady = false;
		});
		$(document).on("mousemove", (e) => {
			if (vars.gui.dragReady) {
				$(botWindow).css("top", `${e.pageY - vars.gui.dragOffset.y}px`);
				$(botWindow).css("left", `${e.pageX - vars.gui.dragOffset.x}px`);
			}
		});
	}
};

function checkFirewallsUpgrades(FW, index) {
	if (index === 3)
		return true;
	return FW.needUpgrade === false;
}

function parseHackProgress(progress) {
	// remove the %;
	const newProgress = progress.slice(0, -2);
	const newProgressParts = newProgress.split("width: ");
	return parseInt(newProgressParts.pop());
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getHashCode(data) {
	let hash = 0;
	if (data.length === 0) {
		return hash;
	}
	for (let i = 0; i < data.length; i++) {
		const c = data.charCodeAt(i);
		hash = ((hash << 5) - hash) + c;
		hash &= hash;
	}
	return hash.toString();
}

function toDataURL(url) {
	return fetch(url)
		.then(response => response.blob())
		.then(blob => new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onloadend = () => resolve(reader.result);
			reader.onerror = reject;
			reader.readAsDataURL(blob);
		}));
}

function isFromEdit(e) {
	if (window.event) e = window.event;
	var target = e.target ? e.target : e.srcElement;
	return ((target.tagName=="INPUT" && (target.type == "text" || target.type == "password")) || target.tagName=="TEXTAREA");
}

function blocBadTouche(e) {
	if (window.event) e = window.event;
	var touche = window.event ? e.keyCode : e.which;
	var target = e.target ? e.target : e.srcElement;
	if (touche == 8 && !isFromEdit(e)) {
		if (e.keyCode) e.keyCode=0;
		return false;
	}
	return true;
}

function log(message) {
	if(config.log) {
		console.log(`:: ${message}`);
	}
}

// Clignotement vert de la fenêtre pour confirmer le changement
function changementEffectue() {
	$("#custom-gui").css("transition", "all ease-in-out 0.3s");
	$("#custom-gui").css("box-shadow", "0px 0px 20px green");

	setTimeout(function() {
		$("#custom-gui").css("box-shadow", "0px 0px 0px green");
		setTimeout(function () {
			$("#custom-gui").css("transition", "none");
		}, 500);
	}, 500);
}

// Pour empêcher le retour de page avec le bouton supprimer
$("body").on("keydown", function(event) {
	return blocBadTouche(event);
});

console.clear();
app.start();
