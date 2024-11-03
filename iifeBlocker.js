(async () => {
  // Delay between blocking actions (in seconds)
  const waitSeconds = 1;

  const userIdsToBlock = [
    "1761800633500188672",
    "1532695315194822656",
    "1519376342525124615",
    "1518369391381041156",
    "1517641894087602177",
    "1514057652862603264",
    "1509586158266818563",
    "1503402666696884225",
    "1497858970853285889",
    "1497715065922981892",
    "1489303469190270982",
    "1492479926540320771",
    "1494666426388467713",
    "1478029979002851336",
    "1447627027583012864",
    "1453031414627291139",
    "1456544622851858442",
    "1461268826671177736",
    "79396997",
    "301932835",
    "351830253",
    "398688988",
    "620849043",
    "796138754",
    "980392262",
    "1027075099",
    "1104549763",
    "1210416936",
    "1604377214",
    "1537714404",
    "1703333706",
    "1834258825",
    "2336149757",
    "2420349627",
    "2547444156",
    "2587253754",
    "2831760163",
    "2992606669",
    "3020981881",
    "3292915064",
    "3905408353",
    "4147463657",
    "4512670343",
    "720696684540469248",
    "739196092798078976",
    "772616087146008576",
    "774978946014253056",
    "750293443830767616",
    "794939220880199681",
    "837696096847671296",
    "863023100899864576",
    "890702309033992193",
    "892872984167407618",
    "905923506243809280",
    "941973820876914693",
    "999755351846277120",
    "1003579697224089600",
    "1041814397923078146",
    "1046060727969226752",
    "1046840443147878405",
    "1054113030412402688",
    "1061030997926576128",
    "1110256760806428673",
    "1112506423945105408",
    "1140653009506095104",
    "1146222460188155904",
    "1152566682088542209",
    "1158514454981697537",
    "1174286554694660098",
    "1176463630658879488",
    "1194204502225833984",
    "1194939570707714050",
    "1205215711871852545",
    "1214174565821059074",
    "1214542863540862976",
    "1238514913133330432",
    "1252444564641775617",
    "1259317796565069827",
    "1262355273282437120",
    "1263458354623647754",
    "1266128255981162498",
    "1266858117574332422",
    "1271195819098677250",
    "1274998926127570945",
    "1297572150631686145",
    "1298675357885898753",
    "1299491764416458752",
    "1337168429606969344",
    "1339671150297837575",
    "1352137484155686917",
    "1352981628407193600",
    "1373261691635568645",
    "1384258949952593925",
    "1405136735495933953",
    "1409856419919192064",
    "1413113023913410561",
    "1415662212505554951",
    "1424025622154776586",
    "1430637720687235078",
    "1430947924633178112",
    "1432739659541528578",
    "1433542662292901891",
    "1543990074844631040",
    "1548720299943796739",
    "1554860046718304258",
    "1557857838910808064",
    "1558525833886703621",
    "1563738029801472002",
    "1570826700874817536",
    "1571564195946156037",
    "1574735965695901696",
    "1574812112412721152",
    "1578074394827554817",
    "1637914643304775681",
    "1652508063478304768",
    "819992469593030656",
    "1418386554813304832",
    "3119729853",
    "1540339900247072768",
    "1207439474592034816",
    "88428227",
    "1648794489476067329",
    "886990966716063745",
    "1441376727427657729",
    "1591995900238483456",
    "1581329781269954560",
    "1185286331829764099",
    "1474981033",
    "2150538885",
    "1438672572879622145",
    "953796462630055936",
    "632146965",
    "845437745485021184",
    "4870889355",
    "764634277",
    "992368075654787072",
    "2329672842",
    "79759726",
    "3642410293",
    "3319138502",
    "1471527535771107343",
    "969138260",
    "3228172157",
    "2300172051",
    "883643088627007488",
    "490948196",
    "2210626270",
    "2756275322",
    "1531993461494366209",
    "1083029509388099584",
    "1091990548766969856",
    "1039318614858457091",
    "1255237292245028875",
    "1209251335243280384",
    "859815074223075328",
    "771325591",
    "2974432168",
    "2886892520",
    "781295401",
    "2706156217",
    "1435303283934048259",
    "783564380",
    "2447937513",
    "1496187056543911946",
    "1067902907163574273",
    "1243489278052663297",
    "1692413265228312576",
    "1083479659369693184",
    "1467077069955903488",
    "1705724852739440640",
    "130925204",
    "1258193607128907782",
    "873895447127052290",
    "1650825947795410947",
    "1109316081154510849",
    "1276776514504318976",
    "1094222222963675136",
    "834276516",
    "23129198",
    "2290611069",
    "1434151788",
    "1364341491523604480",
    "1354116897952948224",
    "2480429802",
    "1526277806963019780",
    "1390915259825893378",
    "427650031",
    "177279254",
    "475663577",
    "856277108552863744",
    "1314552255060889602",
    "704665431051771904",
    "1364381060172292097",
    "908513688784658432",
    "1271804806831714304",
    "750189297702240256",
    "1526287134772150272",
    "1364174592",
    "908513688784658432",
    "1334139538944516098",
    "1421698572613992450",
    "1432845333114101761",
    "839030339284643840",
    "621369251",
    "1134582624",
    "1292080531266580487",
    "1272183044170973187",
    "4849743664",
    "585794386",
    "365827164",
    "1241197327689359360",
    "1559642730338344970",
    "461369179",
    "3357798010",
    "4397233461",
    "1720030579800866816",
    "1233964325909532677",
    "1792313778278670336",
    "1527542743148511233",
    "1242563658531700739",
    "1294662940164005888",
    "1241447952",
    "796092763",
    "900494588",
    "1390657001156382723",
    "883241432",
    "2351362803",
    "1761795209921261568",
    "1794022315778330626",
    "101085810",
    "814739495597801472",
    "1546080648569528321",
    "563575597",
    "813429390159835137",
    "1166772664775643137",
    "1036608720",
    "1018480389730504704",
    "1248718423",
    "813349326151880704",
    "899815858989481984",
    "1126950207353229312",
    "754842774",
    "4181119637",
    "1622606955868045313",
    "1899907068",
    "1002058355974852608",
    "1436352324323188736",
    "807672006271500290",
    "899626718205497344",
    "1114905903592083457",
    "848827143656280066",
    "941323734727712768",
    "1528446312835862528",
    "1246739950990757888",
    "1272015050912477184",
    "2449986505",
    "1212375450749505536",
    "876130207173935104",
    "1480347350174474244",
    "374035986",
    "1535016774923702291",
    "762456139556454400",
    "565314311",
    "992498966804811776",
    "980956988082413569",
    "1072616480104173568",
    "1815649317274648576",
    "1765899207313920000",
    "1462802323",
    "1660937524875874310",
    "110236748",
    "1530149608617299968",
    "1618279890880446464",
    "1602294111297589248",
    "154962753",
    "1395837230",
    "1628835708",
    "1374541998791745538",
    "860818171258961921",
    "867801283",
    "2972651238",
    "3153839107",
    "855683408",
    "2180945265",
    "774037062",
    "363113268",
    "2587444000",
    "897643243",
    "563875025",
    "1800958793120993280",
    "1127379009082408960",
    "1727745181351309312",
    "2464893703",
    "80999637",
    "3190431349",
    "1634918616",
    "843358209847054336",
    "1520485453",
    "1197900182177951744",
    "717670679848611841",
    "1549586485",
    "989145109",
    "2415101431",
    "1806809771544027136",
    "938078735026270208",
    "1801682657257881600",
    "4860503188",
    "1805209700968882176",
    "1803377797479469056",
    "1407409171172057088",
    "3193693646",
    "153733644",
    "1643026564618100833",
    "1596864943",
    "1278419465567457287",
    "1225933894769369089",
    "1786891109890736128",
    "1115918425887584262",
    "1816067963813859328",
    "1408529535369420804",
    "1437462653568434178",
    "2335644942",
    "1502702776903688201",
    "1413828372870877187",
    "1139631575782625280",
    "2603372941",
    "1139636178297208832",
    "977207056519360513",
    "1436612027926126592",
    "1561538549035532289",
    "761599389278277633",
    "939486367477886976",
    "943945307985010689",
    "1508078139276238852",
    "1398265761718747141",
    "1307773048016302082",
    "1312804044084314112",
    "1372922377512833031",
    "1450828572327829511",
    "1436612027926126592",
    "1373901667142369284",
    "983390444",
    "1399426908815757318",
    "720291550375186435",
    "1391544407678193665",
    "1302022014383915010",
    "1303363504670466053",
    "1301347952552747012",
    "1568979557646061569",
    "1185943121315713027",
    "888306226764935168",
    "1558110862984052736",
    "1254563810041569281",
    "461259926",
    "1469754857464733701",
    "1106527153556992000",
    "386445960",
    "1843056264684924928",
    "567125121",
    "387768671",
    "1826407902162169856",
    "1475535196632059905",
    "1624491987092004865",
    "1547644818108452864",
    "1459763262761930755",
    "973524065066586112",
    "1376639388659109893",
    "1376639388659109893",
    "1753216737971953664",
    "1103542164",
  ];

  const createVisualLog = () => {
    let log = document.getElementById("visual-log");
    if (log) {
      return log;
    }
    log = document.createElement("div");
    log.id = "visual-log";
    log.style.position = "fixed";
    log.style.bottom = "0";
    log.style.left = "0";
    log.style.zIndex = "9999";
    log.style.backgroundColor = "black";
    log.style.border = "1px solid white";
    log.style.padding = "1em";
    log.style.margin = "1em";
    log.style.maxHeight = "50vh";
    log.style.maxWidth = "50vw";
    log.style.overflowY = "scroll";
    log.style.fontFamily = "monospace";
    document.body.appendChild(log);
    return log;
  };

  const log = createVisualLog();

  const logMessage = (message) => {
    const messageElement = document.createElement("div");
    messageElement.innerText = message;
    messageElement.style.opacity = "1";
    messageElement.style.transition = "opacity 1s";
    messageElement.style.marginBottom = "0.5em";
    messageElement.style.color = "white";
    log.appendChild(messageElement);
    setTimeout(() => {
      messageElement.style.opacity = "0";
      setTimeout(() => {
        log.removeChild(messageElement);
      }, 800);
    }, 4000);
  };

  // Function to get CSRF token
  function getCsrfToken() {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith("ct0="))
      .split("=")[1];
  }

  // Function to block a single user
  async function blockUser(userId) {
    const url = "https://x.com/i/api/1.1/blocks/create.json";
    const headers = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; rv:128.0) Gecko/20100101 Firefox/128.0",
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.5",
      "Content-Type": "application/x-www-form-urlencoded",
      "x-twitter-auth-type": "OAuth2Session",
      "x-csrf-token": getCsrfToken(),
      "x-twitter-client-language": "en",
      "x-twitter-active-user": "yes",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      authorization:
        "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: `user_id=${userId}`,
        credentials: "include",
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      logMessage(`Successfully blocked user ${userId}`);
      return data;
    } catch (error) {
      logMessage(`Error blocking user ${userId}: ${error.message}`);
      return null;
    }
  }

  // Function to block all users in the array
  async function blockAllUsers() {
    for (const userId of userIdsToBlock) {
      await blockUser(userId);
      await new Promise((resolve) => setTimeout(resolve, waitSeconds * 1000));
    }
    logMessage("Done.");
  }

  // Run the script
  await blockAllUsers();
})();
