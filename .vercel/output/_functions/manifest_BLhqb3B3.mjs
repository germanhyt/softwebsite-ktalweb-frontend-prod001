import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_BJrghET3.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Bx5XpiHz.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/ivanh/Downloads/9_Trabajo_Empresas/KTALWEB/softwebsite-ktalweb-frontend-prod001/","cacheDir":"file:///C:/Users/ivanh/Downloads/9_Trabajo_Empresas/KTALWEB/softwebsite-ktalweb-frontend-prod001/node_modules/.astro/","outDir":"file:///C:/Users/ivanh/Downloads/9_Trabajo_Empresas/KTALWEB/softwebsite-ktalweb-frontend-prod001/dist/","srcDir":"file:///C:/Users/ivanh/Downloads/9_Trabajo_Empresas/KTALWEB/softwebsite-ktalweb-frontend-prod001/src/","publicDir":"file:///C:/Users/ivanh/Downloads/9_Trabajo_Empresas/KTALWEB/softwebsite-ktalweb-frontend-prod001/public/","buildClientDir":"file:///C:/Users/ivanh/Downloads/9_Trabajo_Empresas/KTALWEB/softwebsite-ktalweb-frontend-prod001/dist/client/","buildServerDir":"file:///C:/Users/ivanh/Downloads/9_Trabajo_Empresas/KTALWEB/softwebsite-ktalweb-frontend-prod001/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/chat","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/chat\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"chat","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/chat.ts","pathname":"/api/chat","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/download-brochure","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/download-brochure\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"download-brochure","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/download-brochure.ts","pathname":"/api/download-brochure","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio","isIndex":false,"type":"page","pattern":"^\\/portfolio\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio.astro","pathname":"/portfolio","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://ktalweb.com.pe","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ivanh/Downloads/9_Trabajo_Empresas/KTALWEB/softwebsite-ktalweb-frontend-prod001/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/download-brochure@_@ts":"pages/api/download-brochure.astro.mjs","\u0000@astro-page:src/pages/portfolio@_@astro":"pages/portfolio.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/api/chat@_@ts":"pages/api/chat.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/ivanh/Downloads/9_Trabajo_Empresas/KTALWEB/softwebsite-ktalweb-frontend-prod001/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Cl-Qkjjv.mjs","\u0000@astrojs-manifest":"manifest_BLhqb3B3.mjs","@/components/Header":"_astro/Header.BmzC2b-_.js","@/components/HeroBanner":"_astro/HeroBanner.CjmgMnHT.js","@/components/SolicitarCTABannerSection":"_astro/SolicitarCTABannerSection.1IGWp2F-.js","@/components/GoogleReviewsCarousel":"_astro/GoogleReviewsCarousel.XXFxyc9H.js","@/components/PrimeVideoCarousel":"_astro/PrimeVideoCarousel.BYUN6WOq.js","@/components/DescargarBrochureSection":"_astro/DescargarBrochureSection.BC767cSL.js","@/components/Footer":"_astro/Footer.BOk4wgnk.js","@/components/ChatWidget":"_astro/ChatWidget.9vh4Ma4k.js","@astrojs/react/client.js":"_astro/client.Bn71CrNp.js","C:/Users/ivanh/Downloads/9_Trabajo_Empresas/KTALWEB/softwebsite-ktalweb-frontend-prod001/src/components/CaptarConvertirCrecer.astro?astro&type=script&index=0&lang.ts":"_astro/CaptarConvertirCrecer.astro_astro_type_script_index_0_lang.BF9pV2zl.js","C:/Users/ivanh/Downloads/9_Trabajo_Empresas/KTALWEB/softwebsite-ktalweb-frontend-prod001/src/components/Workprocess.astro?astro&type=script&index=0&lang.ts":"_astro/Workprocess.astro_astro_type_script_index_0_lang.C_pE4mHY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/ivanh/Downloads/9_Trabajo_Empresas/KTALWEB/softwebsite-ktalweb-frontend-prod001/src/components/CaptarConvertirCrecer.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const c=document.getElementById(\"acordeon-c3\");if(!c)return;const a=c.querySelectorAll(\"button[data-idx]\"),r=c.querySelectorAll(\"div[id^='panel-c3-']\");let t=0;function s(e){if(t===e)return;a[t].setAttribute(\"aria-expanded\",\"false\");const o=a[t].querySelector(\"span.text-2xl\");o&&(o.textContent=\"+\"),r[t].classList.remove(\"max-h-32\",\"opacity-100\"),r[t].classList.add(\"max-h-0\",\"opacity-0\"),a[e].setAttribute(\"aria-expanded\",\"true\");const n=a[e].querySelector(\"span.text-2xl\");n&&(n.textContent=\"-\"),r[e].classList.remove(\"max-h-0\",\"opacity-0\"),r[e].classList.add(\"max-h-32\",\"opacity-100\"),t=e}s(0),a.forEach((e,o)=>{e.addEventListener(\"click\",()=>s(o)),e.addEventListener(\"keydown\",n=>{(n.key===\"Enter\"||n.key===\" \")&&(n.preventDefault(),s(o))})})});"],["C:/Users/ivanh/Downloads/9_Trabajo_Empresas/KTALWEB/softwebsite-ktalweb-frontend-prod001/src/components/Workprocess.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const o=document.querySelectorAll(\".workprocess-icon-btn\"),i=document.querySelectorAll(\".workprocess-content-panel\");let s=0,l=null;const u=4e3;function n(e){o.forEach((c,t)=>{c.classList.toggle(\"active\",t===e);const a=c.querySelector(\".workprocess-icon-circle\");a&&a.classList.toggle(\"active\",t===e)}),i.forEach((c,t)=>{c.classList.toggle(\"active\",t===e)}),s=e}function f(){let e=(s+1)%o.length;n(e)}function r(){l&&clearInterval(l),l=setInterval(f,u)}n(0),r(),o.forEach((e,c)=>{e.addEventListener(\"click\",()=>{n(c),r()}),e.addEventListener(\"keydown\",t=>{(t.key===\"Enter\"||t.key===\" \")&&(t.preventDefault(),n(c),r())})})});"]],"assets":["/_astro/logo_lvenergy.O90wizNr.webp","/_astro/logo_offroadperu.BmGW2LB8.webp","/_astro/logo_laboratoria_bcp.vlMfaJbj.webp","/_astro/portfolio_offroad_1.jWDi59kd.webp","/_astro/logo_zukarzen.D-HTLJAc.webp","/_astro/logo_laboratoria_mackinsey.Bc4f_xPX.webp","/_astro/portfolio_offroad_2.B2NdB6Jl.webp","/_astro/portfolio_labbcp_1.1pgAxDDq.webp","/_astro/portfolio_labbcp_2.CI8wGRTm.webp","/_astro/portfolio_lyvenergy_1.EQezXBli.webp","/_astro/portfolio_lyvenergy_2.C1e1fm_s.webp","/_astro/portfolio_zukarzen_2.C7Cg2WLk.webp","/_astro/portfolio_zukarzen_1.DUEhegLK.webp","/_astro/portfolio_labmack_1.D1vZoiv7.webp","/_astro/portfolio_labmack_2.B36Dc4F8.webp","/_astro/logo.C7sPZubz.webp","/_astro/logo_bcp.CmEpf_e3.webp","/_astro/k.BA1NnYB0.webp","/_astro/logo_haz_la_tarea.CoRZo3NY.png","/_astro/logo_biotraining.8k1WI6eo.webp","/_astro/logo_laboratoria.woBEIoUx.webp","/_astro/logo_mckinsey.CDJZKgvh.webp","/_astro/soluciones_2.BZZpzBVp.webp","/_astro/soluciones_3.JEtGKZD1.webp","/_astro/diseño_captar_convertir_crecer.0v-MSNOd.webp","/_astro/index.CaatXXpH.css","/favicon.png","/favicon.svg","/ktalweb.webp","/logo.webp","/_astro/ChatWidget.9vh4Ma4k.js","/_astro/client.Bn71CrNp.js","/_astro/DescargarBrochureSection.BC767cSL.js","/_astro/Footer.BOk4wgnk.js","/_astro/GoogleReviewsCarousel.XXFxyc9H.js","/_astro/Header.BmzC2b-_.js","/_astro/HeroBanner.CjmgMnHT.js","/_astro/iconBase.CaGotM-K.js","/_astro/index.B17P1hFc.js","/_astro/index.BrTJx5YZ.js","/_astro/index.BSTUxmN8.js","/_astro/index.Dr6EUZKd.js","/_astro/index.qpg6o9tL.js","/_astro/index.wIsbZsoh.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/logo.D1iuADiA.js","/_astro/PrimeVideoCarousel.BYUN6WOq.js","/_astro/SolicitarCTABannerSection.1IGWp2F-.js","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"9McrmWXehnL8iep6YNFvue22aMA+HX0z/5K/aVZtJPU="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
