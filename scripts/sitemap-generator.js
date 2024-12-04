const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

// URL de base de ton site
const BASE_URL = 'https://happyclicks.fr';

// Liste des routes de ton site
const routes = [
    { url: '/', changefreq: 'monthly', priority: 1.0 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
    { url: '/portfolio', changefreq: 'monthly', priority: 0.8 },
    { url: '/blog', changefreq: 'monthly', priority: 0.7 },
];

// Créer le sitemap
const sitemap = new SitemapStream({ hostname: BASE_URL });

// Ajouter les routes au sitemap
routes.forEach(route => sitemap.write(route));
sitemap.end();

// Générer le fichier sitemap.xml
streamToPromise(sitemap).then(data => {
    fs.writeFileSync('./public/sitemap.xml', data.toString());
    console.log('✅ Sitemap généré avec succès !');
}).catch(error => {
    console.error('❌ Erreur lors de la génération du sitemap :', error);
});
