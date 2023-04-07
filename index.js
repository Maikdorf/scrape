/* 
TODO:
  ** Hacer que descargue todo el sitio web
  ** Que sea recursivo con los link y que los cambie para que la pagina sea autonoma en local
*/
import scrape from 'website-scraper';
import PuppeteerPlugin from 'website-scraper-puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __FILENAME = fileURLToPath(import.meta.url);
const __DIRNAME = path.dirname(__FILENAME);

const DOMAIN = 'http://books.toscrape.com';
let directory = DOMAIN.split('//')[1];

directory = path.resolve(__DIRNAME, directory.replace('/', '__'));

const URLS = [
  `${DOMAIN}`,
  //`${DOMAIN}/home.html`,
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