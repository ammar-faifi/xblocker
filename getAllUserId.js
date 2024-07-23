//
// This script is to open the profile page for each user
// and extract its `user_id`. So you need `node`
// with `puppeteer` installed
//

const puppeteer = require("puppeteer");

async function extractUserId(page) {
  return await page.evaluate(() => {
    const img = document.querySelector(
      'img[src^="https://pbs.twimg.com/profile_banners/"]',
    );
    if (img) {
      const src = img.getAttribute("src");
      const match = src.match(/\/profile_banners\/(\d+)\//);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  });
}

async function fetchUserIdFromUsername(browser, username) {
  try {
    const page = await browser.newPage();
    await page.goto(`https://x.com/${username}`, { waitUntil: "networkidle0" });
    const userId = await extractUserId(page);
    await page.close();
    return userId;
  } catch (error) {
    console.error(`Error fetching user ID for ${username}:`, error);
    return null;
  }
}

async function processUsernames(usernames) {
  const browser = await puppeteer.launch();
  const results = [];

  try {
    for (const username of usernames) {
      const userId = await fetchUserIdFromUsername(browser, username);
      console.log(username, userId);
      results.push({ username, userId });
    }
  } finally {
    await browser.close();
  }

  return results;
}

// Example usage
// pipe the `stdout` to a json file
const usernames = [
  "catchy_9",
  "ScY6q",
  "BiiB_74",
  "pur2e",
  "a009654",
  "rw7iu",
  "zrqlymm_1",
  "Ciew__",
  "hh120aah",
  "eso_115",
  "kkm77230",
  "ABD_ALQASEM",
  "hhyf0",
  "alamyrahiam",
  "hanan_shok",
  "9l006",
  "1Rii99_",
  "osamasari77",
  "Zekrrr_",
  "zajelSs",
  "l8l4l8l",
  "zz__qe",
  "FaisalMudhish",
  "BBPP3M",
  "kkkz90",
  "myr554",
  "AmrHassan_0",
  "Najib_1911",
  "ArbMa8",
  "Reem_aziz32",
  "i1rules",
  "7akie",
  "_Tedium",
  "ei2en",
  "TG_ADB",
  "Laytah",
  "Arab_Gym",
  "lovei3i",
  "KitchenArb",
  "1massg_",
  "Storwd",
  "katib52",
  "mrtq4",
  "Mohamed41341333",
  "me_e1i",
  "1king__",
  "Tumblrx7",
  "ieii77",
  "1whatsapp_",
  "_0heart",
  "1_Uu_0",
  "li_llw",
  "eshq_19",
  "Great_Phr",
  "1Ensn",
  "kwtqq8",
  "heartt_6",
  "MH204_",
  "iQutesii",
  "ttbeq",
  "si6r1",
  "RSAL94",
  "3thbz",
  "3alm_2kl_",
  "GEYER__",
  "iiillue",
  "lfky",
  "rayd2312311",
  "Heart133_",
  "Bantabooha_2030",
  "___gll",
  "mjrdzayr337191",
  "zz__sz",
  "7bbtoke_",
  "areejahmed366",
  "roz_hocker",
  "yy736yy",
  "sol12215",
  "N_ayil",
  "8jijr",
  "9ali_",
  "nurahu345",
  "AB_886",
  "emadelembaby1",
  "thiqa__2030",
  "urfavbeauty1",
  "Mr_7l",
  "ooom",
  "facts444",
  "alemalm3rfa",
  "PyschG",
  "Alb7eaR",
  "k41_ed",
  "kdd1414",
  "ii19i96",
  "azahrani_1",
  "mohamed123ab8",
  "Avada_1",
  "ml_ml1990",
  "emadelembaby1",
  "todaymessagee",
  "Risslh",
  "haukma",
  "hussain786_fkh",
  "ibrahemalfaraj",
  "1gheith",
  "M_Al3wlqi",
  "Warrq_",
  "motm2na_",
  "alright800",
  "Gretest_",
  "K_TheRebel",
  "Mmo7moD",
  "TnsyqN",
  "dash_cam_Store",
  "ArabTreda",
  "tmp6k",
  "ahmed131996A",
  "Quran__Video",
  "Joj_208888",
  "alanazi9089",
  "ana_positive1",
  "w000_3",
  "Abotalal_1800",
  "7k511_",
  "1l7l_",
  "KLM_A4",
  "A2T___",
  "so_so_Bkr",
  "naglaa7576",
  "Nawwal236606",
  "tafasil",
  "tkr62k",
  "ffi2f",
  "aymanaldktwrh",
  "mime_my",
  "C800_",
  "kafomedia",
  "CurriculumVita0",
  "3l12_",
  "1sjil",
  "26iq_",
  "aarreej1100",
  "7aneen_7a",
  "payne_beautiful",
  "r00h_a",
  "v_8lo",
];
processUsernames(usernames)
  .then((results) => console.log("Done."))
  .catch((error) => console.error("Error processing usernames:", error));
