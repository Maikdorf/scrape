/* 
TODO:
  ** Hacer que descargue todo el sitio web
  ** Que sea recursivo con los link y que los cambie para que la pagina sea autonoma en local
  ** Validar si el directorio existe para no sobrescribir y si existe crear uno add _1
*/
import scrape from 'website-scraper';
import PuppeteerPlugin from 'website-scraper-puppeteer';
import path from 'path';

const DOMAIN = 'http://juanduncan.com'; //example
let directory = DOMAIN.split('//')[1];

directory = path.resolve('scratching/', directory.replace('/', '__'));

const URLS = [
  `${DOMAIN}`,
  //`${DOMAIN}/home.html`, example
];

scrape({
  urls: URLS,
  directory: directory,
  plugins: [
    new PuppeteerPlugin({
      launchOptions: {
        headless: true
      }, /* documentation optional*/
      scrollToBottom: {
        timeout: 10000,
        viewportN: 10
      } /* optional */
    })
  ]
});