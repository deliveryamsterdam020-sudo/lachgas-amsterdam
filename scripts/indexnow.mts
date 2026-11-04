/**
 * Notifies IndexNow (Bing, Yandex, Seznam, Naver and others) of every URL in the
 * live sitemap, so new and changed pages get crawled quickly.
 *
 *   npm run indexnow
 *
 * Run it after a deployment with new or changed pages is live. The key is not a
 * secret: it must be publicly readable at /<key>.txt to prove ownership.
 */
const HOST = "www.lachgasinfo.nl";
const KEY = "45c719e7e8ea2b25e1da642343d9a414";

const sitemap = await fetch(`https://${HOST}/sitemap.xml`).then((r) => {
  if (!r.ok) throw new Error(`sitemap: HTTP ${r.status}`);
  return r.text();
});
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urlList.length === 0) throw new Error("sitemap contains no URLs");

const keyCheck = await fetch(`https://${HOST}/${KEY}.txt`);
if (!keyCheck.ok || (await keyCheck.text()).trim() !== KEY) {
  throw new Error(`key file https://${HOST}/${KEY}.txt is not live yet — deploy first`);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
// 200 = accepted, 202 = accepted, key validation pending
console.log(`IndexNow: HTTP ${res.status} for ${urlList.length} URLs`);
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text());
  process.exit(1);
}
