#!/usr/bin/env node
/**
 * generate-seo-pages.mjs
 * Generates all SEO pages: 13 regions, 20 departments, 50 city×sector
 */
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const APP = resolve(__dirname, "..", "app");

// ═══════════════════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════════════════

const REGIONS = [
  {
    slug: "ile-de-france", name: "Île-de-France", lat: 48.8566, lng: 2.3522, cp: "75001", mainCity: "Paris",
    cities: [
      { name: "Paris", slug: "paris" }, { name: "Boulogne-Billancourt", slug: "boulogne-billancourt" },
      { name: "Saint-Denis", slug: "saint-denis" }, { name: "Argenteuil", slug: "argenteuil" }, { name: "Versailles", slug: "versailles" }
    ],
    nbRestaurants: "45 000", draaf: "Île-de-France",
    intro: "L&apos;Île-de-France est la première région de France en nombre d&apos;établissements de restauration commerciale. Avec plus de 45 000 restaurants, snacks, food trucks et commerces alimentaires, la région francilienne concentre à elle seule près d&apos;un quart de l&apos;offre nationale de restauration. La formation HACCP y est donc un enjeu majeur pour les professionnels du secteur.",
    para1: "La Direction Régionale de l&apos;Alimentation, de l&apos;Agriculture et de la Forêt (DRAAF) d&apos;Île-de-France est compétente pour agréer les organismes de formation en hygiène alimentaire sur l&apos;ensemble des huit départements franciliens : Paris (75), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94), Yvelines (78), Essonne (91), Val-d&apos;Oise (95) et Seine-et-Marne (77). Tous les organismes proposant la formation HACCP dans ces départements doivent être enregistrés auprès de cette DRAAF.",
    para2: "Le tissu économique francilien est d&apos;une richesse exceptionnelle. Paris, capitale gastronomique mondiale, abrite à elle seule plus de 15 000 restaurants allant du bistrot de quartier aux établissements étoilés. La petite couronne (92, 93, 94) connaît un développement rapide des food trucks, dark kitchens et concepts de restauration rapide, tous soumis à l&apos;obligation de formation. La grande couronne (78, 91, 95, 77) voit se multiplier les zones commerciales avec des pôles de restauration importants.",
    para3: "La formation hygiène alimentaire en Île-de-France dure 14 heures, conformément au décret du 24 juin 2011 modifié par l&apos;arrêté du 12 février 2024. Elle comprend désormais 4 heures obligatoires de mise en pratique. Le programme aborde la réglementation européenne (paquet hygiène), les dangers alimentaires (biologiques, chimiques, physiques), les 7 principes de la méthode HACCP, le Plan de Maîtrise Sanitaire (PMS) et la gestion des allergènes. En Île-de-France, les contrôles de la DDPP sont particulièrement fréquents en raison de la densité d&apos;établissements.",
    para4: "Le financement de la formation HACCP en Île-de-France est accessible par plusieurs voies. L&apos;OPCO AKTO prend en charge à 100 % la formation pour les salariés du secteur CHR (cafés, hôtels, restaurants). Les demandeurs d&apos;emploi peuvent bénéficier d&apos;une prise en charge par France Travail (ex-Pôle Emploi). Les créateurs d&apos;entreprise peuvent mobiliser les aides régionales ou le dispositif CPF. Le prix moyen d&apos;une formation HACCP en Île-de-France varie entre 290 € et 490 € TTC en présentiel, avec des sessions disponibles chaque semaine dans la plupart des villes de la région.",
    para5: "La région francilienne présente des spécificités en matière d&apos;hygiène alimentaire. La densité de population et le nombre élevé de touristes internationaux (plus de 50 millions par an) imposent une vigilance accrue sur la sécurité sanitaire des aliments. Les services de la DDPP de Paris et de la petite couronne effectuent des contrôles réguliers, et l&apos;absence d&apos;attestation de formation HACCP peut entraîner une amende de 5e classe (jusqu&apos;à 1 500 €). Les restaurants des zones touristiques (Champs-Élysées, Montmartre, Le Marais) sont particulièrement surveillés.",
    faq: [
      { q: "La formation HACCP est-elle obligatoire pour tous les restaurants en Île-de-France ?", a: "Oui, depuis octobre 2012, tous les établissements de restauration commerciale en Île-de-France (restaurants, snacks, food trucks, traiteurs) doivent justifier d&apos;au moins un membre du personnel formé en hygiène alimentaire. Cette obligation s&apos;applique dans les 8 départements franciliens." },
      { q: "Combien coûte une formation HACCP en Île-de-France ?", a: "Le prix d&apos;une formation HACCP en Île-de-France varie entre 290 € et 490 € TTC en présentiel. Des sessions en ligne sont disponibles à partir de 200 €. La formation peut être prise en charge à 100 % par l&apos;OPCO AKTO pour les salariés du secteur CHR." },
      { q: "Où se déroulent les formations HACCP en Île-de-France ?", a: "Des sessions de formation sont proposées dans toutes les grandes villes de la région : Paris (nombreux centres dans chaque arrondissement), Boulogne-Billancourt, Saint-Denis, Versailles, Argenteuil, Créteil, Nanterre et bien d&apos;autres communes." },
      { q: "Quelle est la DRAAF compétente pour l&apos;Île-de-France ?", a: "La DRAAF Île-de-France, basée à Paris, est l&apos;autorité compétente pour agréer les organismes de formation en hygiène alimentaire dans les 8 départements de la région (75, 77, 78, 91, 92, 93, 94, 95)." },
      { q: "Combien de temps dure la formation HACCP en Île-de-France ?", a: "La formation dure 14 heures minimum (généralement réparties sur 2 jours). Depuis l&apos;arrêté du 12 février 2024, elle doit comporter au moins 4 heures de mise en pratique. L&apos;attestation est délivrée à vie, sans obligation de recyclage." }
    ]
  },
  {
    slug: "auvergne-rhone-alpes", name: "Auvergne-Rhône-Alpes", lat: 45.7640, lng: 4.8357, cp: "69001", mainCity: "Lyon",
    cities: [
      { name: "Lyon", slug: "lyon" }, { name: "Grenoble", slug: "grenoble" },
      { name: "Saint-Étienne", slug: "saint-etienne" }, { name: "Clermont-Ferrand", slug: "clermont-ferrand" }, { name: "Annecy", slug: "annecy" }
    ],
    nbRestaurants: "32 000", draaf: "Auvergne-Rhône-Alpes",
    intro: "La région Auvergne-Rhône-Alpes est la deuxième région de France par sa population et son dynamisme économique. Avec Lyon, capitale mondiale de la gastronomie, et plus de 32 000 établissements de restauration commerciale, la formation HACCP constitue un enjeu central pour les professionnels de l&apos;alimentation dans cette région.",
    para1: "La DRAAF Auvergne-Rhône-Alpes, dont le siège est à Lyon, agrée les organismes de formation en hygiène alimentaire pour les 12 départements de la région : Ain (01), Allier (03), Ardèche (07), Cantal (15), Drôme (26), Isère (38), Loire (42), Haute-Loire (43), Puy-de-Dôme (63), Rhône (69), Savoie (73) et Haute-Savoie (74). La diversité des territoires, entre métropoles dynamiques et zones rurales de montagne, impose une offre de formation adaptée.",
    para2: "Lyon, troisième ville de France, est internationalement reconnue pour sa gastronomie. Les bouchons lyonnais, les restaurants étoilés et les halles Paul Bocuse font de la métropole lyonnaise un pôle majeur de la restauration. Grenoble, au pied des Alpes, et Annecy, ville touristique prisée, comptent également un nombre important de restaurants. Les stations de ski (Chamonix, Val d&apos;Isère, Les 2 Alpes) génèrent une forte activité saisonnière de restauration qui nécessite des formations HACCP régulières.",
    para3: "Le programme de formation HACCP en Auvergne-Rhône-Alpes suit le référentiel national de 14 heures. Il comprend l&apos;étude de la réglementation française et européenne, l&apos;identification des dangers alimentaires spécifiques à la région (fromages AOP au lait cru, charcuteries artisanales), les 7 principes HACCP et leur application pratique. L&apos;arrêté du 12 février 2024 impose désormais 4 heures minimum de mise en pratique, renforçant l&apos;aspect opérationnel de la formation.",
    para4: "Le financement de la formation est facilité par l&apos;OPCO AKTO qui prend en charge les salariés du secteur CHR. Les créateurs d&apos;entreprise en Auvergne-Rhône-Alpes peuvent solliciter les aides de la Région ou de France Travail. Le coût moyen est de 290 € à 450 € TTC. De nombreuses sessions sont disponibles chaque semaine à Lyon, Grenoble, Saint-Étienne, Clermont-Ferrand et Annecy.",
    para5: "La région Auvergne-Rhône-Alpes se distingue par la richesse de ses produits du terroir : fromages AOP (Saint-Nectaire, Reblochon, Beaufort, Fourme d&apos;Ambert, Cantal), charcuteries, vins (Côtes du Rhône, Beaujolais) et spécialités culinaires (quenelles, gratin dauphinois, truffade). La manipulation de ces produits, notamment les fromages au lait cru, exige une maîtrise rigoureuse des principes HACCP. Les contrôles sanitaires dans la région sont effectués par les DDPP de chaque département.",
    faq: [
      { q: "La formation HACCP est-elle obligatoire à Lyon et en Auvergne-Rhône-Alpes ?", a: "Oui, tous les établissements de restauration commerciale de la région Auvergne-Rhône-Alpes sont soumis à l&apos;obligation de former au minimum un salarié à l&apos;hygiène alimentaire. Cela concerne les 12 départements de la région." },
      { q: "Combien coûte la formation HACCP en Auvergne-Rhône-Alpes ?", a: "Le prix varie entre 290 € et 450 € TTC en présentiel. La prise en charge par l&apos;OPCO AKTO est possible à 100 % pour les salariés du secteur CHR. Les demandeurs d&apos;emploi peuvent faire financer la formation par France Travail." },
      { q: "Où trouver une formation HACCP en Auvergne-Rhône-Alpes ?", a: "Des sessions sont organisées régulièrement dans les grandes villes : Lyon, Grenoble, Saint-Étienne, Clermont-Ferrand, Annecy, Valence, Chambéry et Bourg-en-Bresse. Des formations en ligne sont également disponibles." },
      { q: "La formation HACCP aborde-t-elle les spécificités des produits locaux ?", a: "Oui, le programme inclut l&apos;étude des dangers spécifiques liés aux produits du terroir (fromages au lait cru, charcuteries artisanales). Les organismes de formation adaptent souvent leurs exemples aux spécialités locales de la région." },
      { q: "Combien de restaurants sont concernés en Auvergne-Rhône-Alpes ?", a: "La région compte environ 32 000 établissements de restauration commerciale, dont plus de 3 500 à Lyon seul. Tous sont soumis à l&apos;obligation de formation HACCP depuis octobre 2012." }
    ]
  },
  {
    slug: "provence-alpes-cote-d-azur", name: "Provence-Alpes-Côte d&apos;Azur", lat: 43.2965, lng: 5.3698, cp: "13001", mainCity: "Marseille",
    cities: [
      { name: "Marseille", slug: "marseille" }, { name: "Nice", slug: "nice" },
      { name: "Toulon", slug: "toulon" }, { name: "Aix-en-Provence", slug: "aix-en-provence" }, { name: "Avignon", slug: "avignon" }
    ],
    nbRestaurants: "28 000", draaf: "Provence-Alpes-Côte d&apos;Azur",
    intro: "La région Provence-Alpes-Côte d&apos;Azur (PACA) est l&apos;une des destinations touristiques les plus fréquentées de France. Avec plus de 28 000 établissements de restauration et une forte saisonnalité estivale, la formation HACCP revêt une importance particulière pour les professionnels de la restauration en PACA.",
    para1: "La DRAAF PACA, basée à Marseille, agrée les organismes de formation en hygiène alimentaire pour les 6 départements de la région : Bouches-du-Rhône (13), Var (83), Alpes-Maritimes (06), Vaucluse (84), Alpes-de-Haute-Provence (04) et Hautes-Alpes (05). La côte méditerranéenne concentre la majorité des établissements, avec une densité particulièrement élevée entre Marseille et Menton.",
    para2: "La Côte d&apos;Azur accueille chaque année des millions de touristes, ce qui génère une demande importante en restauration, notamment pendant la saison estivale. Restaurants de plage, paillotes, snacks de bord de mer, food trucks des marchés provençaux : tous ces établissements sont soumis à l&apos;obligation de formation HACCP. Les villes de Nice, Cannes, Saint-Tropez et Antibes voient leur nombre de restaurants doubler en été, nécessitant des sessions de formation régulières pour le personnel saisonnier.",
    para3: "Le programme de formation HACCP en PACA dure 14 heures et aborde les spécificités de la cuisine méditerranéenne : conservation des produits de la mer (bouillabaisse, poissons grillés), gestion des températures en climat chaud, manipulation de l&apos;huile d&apos;olive et des herbes de Provence, sécurité des buffets en extérieur. L&apos;arrêté du 12 février 2024 renforce la partie pratique avec 4 heures minimum de mise en situation.",
    para4: "Le financement est accessible via l&apos;OPCO AKTO (salariés CHR), France Travail (demandeurs d&apos;emploi) et les aides régionales. En PACA, le prix moyen est de 290 € à 490 € TTC. Les sessions sont disponibles toute l&apos;année à Marseille, Nice, Toulon et Aix-en-Provence, avec des sessions renforcées avant la saison estivale (mars-mai) pour préparer l&apos;afflux de saisonniers.",
    para5: "Les services de la DDPP en PACA sont particulièrement vigilants pendant la saison estivale. Les contrôles se concentrent sur les établissements saisonniers, les restaurants de plage et les food trucks. La chaleur méditerranéenne impose une rigueur accrue dans le respect de la chaîne du froid. Les professionnels de la restauration en PACA doivent maîtriser les températures de conservation, le transport des denrées et la gestion des terrasses extérieures, points critiques fréquemment contrôlés.",
    faq: [
      { q: "La formation HACCP est-elle obligatoire en PACA ?", a: "Oui, tous les établissements de restauration commerciale en Provence-Alpes-Côte d&apos;Azur sont soumis à l&apos;obligation de formation HACCP. Cela concerne les restaurants, snacks, food trucks, traiteurs et commerces alimentaires des 6 départements de la région." },
      { q: "Les saisonniers doivent-ils suivre la formation HACCP en PACA ?", a: "L&apos;obligation porte sur l&apos;établissement : au moins un membre du personnel doit détenir l&apos;attestation. Il est recommandé de former les saisonniers avant la saison estivale pour garantir la conformité lors des contrôles." },
      { q: "Quel est le prix de la formation HACCP à Marseille ou Nice ?", a: "Le tarif varie entre 290 € et 490 € TTC en présentiel. Des formations en ligne sont proposées à partir de 200 €. Le financement OPCO AKTO peut couvrir 100 % du coût pour les salariés du secteur CHR." },
      { q: "Quand suivre la formation HACCP en PACA ?", a: "Des sessions sont disponibles toute l&apos;année. Il est conseillé de planifier la formation entre mars et mai pour être prêt avant la haute saison touristique. Les organismes proposent également des sessions accélérées." },
      { q: "Les restaurants de plage sont-ils soumis à la formation HACCP ?", a: "Oui, tous les établissements de restauration commerciale, y compris les paillotes et restaurants de plage, doivent justifier d&apos;au moins un salarié formé en hygiène alimentaire. Les contrôles DDPP sont renforcés sur le littoral en été." }
    ]
  },
  {
    slug: "occitanie", name: "Occitanie", lat: 43.6047, lng: 1.4442, cp: "31000", mainCity: "Toulouse",
    cities: [
      { name: "Toulouse", slug: "toulouse" }, { name: "Montpellier", slug: "montpellier" },
      { name: "Nîmes", slug: "nimes" }, { name: "Perpignan", slug: "perpignan" }, { name: "Béziers", slug: "beziers" }
    ],
    nbRestaurants: "25 000", draaf: "Occitanie",
    intro: "L&apos;Occitanie, née de la fusion du Languedoc-Roussillon et de Midi-Pyrénées, est une région riche en traditions culinaires. Avec Toulouse et Montpellier comme métropoles phares et plus de 25 000 établissements de restauration, la formation HACCP est essentielle pour les professionnels de la restauration en Occitanie.",
    para1: "La DRAAF Occitanie agrée les organismes de formation en hygiène alimentaire pour les 13 départements de la région, de l&apos;Ariège aux Pyrénées-Orientales, du Lot à l&apos;Hérault. Cette vaste région présente des réalités très différentes : métropoles dynamiques (Toulouse, Montpellier), stations balnéaires du littoral méditerranéen, villages touristiques du Tarn ou de l&apos;Aveyron, et stations thermales des Pyrénées.",
    para2: "La gastronomie occitane est d&apos;une grande diversité : cassoulet de Castelnaudary, foie gras du Gers, roquefort de l&apos;Aveyron, aligot de l&apos;Aubrac, brandade de Nîmes, anchoïade de Collioure. Ces spécialités imposent des connaissances spécifiques en matière d&apos;hygiène alimentaire, notamment la maîtrise des températures de conservation du foie gras et la gestion des produits laitiers crus comme le roquefort.",
    para3: "La formation HACCP en Occitanie suit le programme national de 14 heures avec 4 heures de pratique obligatoire depuis 2024. Elle couvre la réglementation (paquet hygiène, décret 2011), les dangers alimentaires, la méthode HACCP en 7 principes, le PMS et la traçabilité. Les formateurs adaptent les exemples aux produits du terroir occitan et aux enjeux locaux : restauration de plage sur le littoral, saisonnalité touristique, marchés de plein air.",
    para4: "Le financement est assuré par l&apos;OPCO AKTO pour les salariés CHR, France Travail pour les demandeurs d&apos;emploi, et les aides régionales d&apos;Occitanie. Le prix moyen est de 290 € à 450 € TTC. Des sessions sont proposées chaque semaine à Toulouse, Montpellier, Nîmes, Perpignan et dans les principales villes de la région.",
    para5: "Le littoral occitan, de la Grande-Motte à Argelès-sur-Mer, voit sa population et son nombre de restaurants exploser en été. Les contrôles sanitaires sont renforcés pendant la haute saison par les DDPP départementales. Les marchés de producteurs et les tables d&apos;hôtes rurales, très populaires dans les campagnes occitanes, sont également soumis à la réglementation sur l&apos;hygiène alimentaire. La formation HACCP permet aux professionnels de maîtriser ces enjeux et d&apos;éviter les sanctions.",
    faq: [
      { q: "La formation HACCP est-elle obligatoire en Occitanie ?", a: "Oui, tous les établissements de restauration commerciale en Occitanie doivent justifier d&apos;au moins un membre du personnel formé à l&apos;hygiène alimentaire (14h). Cette obligation s&apos;applique dans les 13 départements de la région depuis 2012." },
      { q: "Combien coûte la formation HACCP à Toulouse ou Montpellier ?", a: "Le tarif varie entre 290 € et 450 € TTC en présentiel. La formation peut être financée à 100 % par l&apos;OPCO AKTO pour les salariés ou par France Travail pour les demandeurs d&apos;emploi." },
      { q: "La formation HACCP aborde-t-elle les produits du terroir occitan ?", a: "Le programme national est adapté au contexte local. Les formateurs illustrent les principes HACCP avec des exemples concrets liés au foie gras, au roquefort, au cassoulet et aux autres spécialités de la région." },
      { q: "Où trouver une formation HACCP en Occitanie ?", a: "Des sessions sont organisées régulièrement à Toulouse, Montpellier, Nîmes, Perpignan, Béziers, Albi, Tarbes et Carcassonne. Des formations à distance sont également disponibles depuis toute la région." },
      { q: "Les saisonniers du littoral doivent-ils être formés en HACCP ?", a: "L&apos;établissement doit justifier d&apos;au moins un salarié formé. Pour les restaurants saisonniers du littoral, il est vivement recommandé de former le personnel avant l&apos;ouverture, car les contrôles DDPP sont renforcés en été." }
    ]
  },
  {
    slug: "nouvelle-aquitaine", name: "Nouvelle-Aquitaine", lat: 44.8378, lng: -0.5792, cp: "33000", mainCity: "Bordeaux",
    cities: [
      { name: "Bordeaux", slug: "bordeaux" }, { name: "Limoges", slug: "limoges" },
      { name: "Poitiers", slug: "poitiers" }, { name: "Pau", slug: "pau" }, { name: "La Rochelle", slug: "la-rochelle" }
    ],
    nbRestaurants: "22 000", draaf: "Nouvelle-Aquitaine",
    intro: "La Nouvelle-Aquitaine est la plus vaste région de France et un territoire d&apos;excellence gastronomique. De Bordeaux et ses vignobles au bassin d&apos;Arcachon et ses huîtres, en passant par le Pays basque et le Périgord, la région compte plus de 22 000 établissements de restauration commerciale qui doivent tous respecter l&apos;obligation de formation HACCP.",
    para1: "La DRAAF Nouvelle-Aquitaine agrée les organismes de formation pour les 12 départements de la région, de la Charente-Maritime aux Pyrénées-Atlantiques, de la Corrèze aux Landes. La diversité des territoires — littoral atlantique, vignobles bordelais, campagnes périgourdines, montagnes basques — se traduit par des besoins variés en matière de formation en hygiène alimentaire.",
    para2: "La Nouvelle-Aquitaine est un territoire de gastronomie par excellence. Bordeaux, classée au patrimoine mondial de l&apos;UNESCO, est une métropole viticole et gastronomique de premier plan. Le bassin d&apos;Arcachon produit des huîtres réputées mondialement, le Périgord est la terre du foie gras et de la truffe, et le Pays basque offre une cuisine reconnue (piment d&apos;Espelette, gâteau basque, jambon de Bayonne). Tous ces secteurs imposent une maîtrise rigoureuse de l&apos;hygiène alimentaire.",
    para3: "La formation HACCP en Nouvelle-Aquitaine dure 14 heures avec 4 heures de pratique obligatoire. Le programme couvre la réglementation, les dangers alimentaires, la méthode HACCP et le PMS. Les spécificités régionales sont prises en compte : manipulation des produits de la mer (huîtres, fruits de mer), conservation du foie gras et des produits du canard, hygiène dans les caves viticoles proposant de la restauration.",
    para4: "Le financement est possible via l&apos;OPCO AKTO, France Travail et les aides de la Région Nouvelle-Aquitaine. Le prix moyen est de 290 € à 450 € TTC. Des sessions sont disponibles toute l&apos;année à Bordeaux, Limoges, Poitiers, Pau, La Rochelle et dans les principales villes de chaque département.",
    para5: "Le tourisme estival sur la côte atlantique (Arcachon, Biarritz, Royan, La Rochelle) génère une forte demande saisonnière en restauration. Les ostréiculteurs du bassin d&apos;Arcachon, les restaurateurs de la côte basque et les traiteurs du littoral doivent tous respecter les normes HACCP. Les DDPP de la région renforcent leurs contrôles pendant la haute saison, et l&apos;attestation de formation est systématiquement vérifiée lors des inspections.",
    faq: [
      { q: "La formation HACCP est-elle obligatoire en Nouvelle-Aquitaine ?", a: "Oui, tous les établissements de restauration commerciale de la région Nouvelle-Aquitaine sont soumis à cette obligation. Elle concerne les 12 départements, de la Charente aux Pyrénées-Atlantiques." },
      { q: "Combien coûte la formation HACCP à Bordeaux ?", a: "Le prix varie entre 290 € et 450 € TTC en présentiel. L&apos;OPCO AKTO peut financer la totalité du coût pour les salariés du secteur CHR. Des aides régionales sont également disponibles." },
      { q: "Les ostréiculteurs doivent-ils suivre la formation HACCP ?", a: "Les ostréiculteurs qui vendent directement au consommateur ou qui proposent de la dégustation sur place sont concernés par l&apos;obligation de formation en hygiène alimentaire." },
      { q: "Où trouver une formation HACCP en Nouvelle-Aquitaine ?", a: "Des sessions sont organisées chaque semaine à Bordeaux, Limoges, Poitiers, Pau, La Rochelle, Bayonne, Angoulême et Périgueux. Des formations en ligne sont aussi disponibles." },
      { q: "La formation HACCP est-elle adaptée aux produits du Périgord ?", a: "Les formateurs illustrent les principes HACCP avec des exemples locaux : conservation du foie gras, manipulation de la truffe, hygiène dans les marchés au gras. Le programme national est complété par des cas pratiques régionaux." }
    ]
  },
  {
    slug: "hauts-de-france", name: "Hauts-de-France", lat: 50.6292, lng: 3.0573, cp: "59000", mainCity: "Lille",
    cities: [
      { name: "Lille", slug: "lille" }, { name: "Amiens", slug: "amiens" },
      { name: "Roubaix", slug: "roubaix" }, { name: "Tourcoing", slug: "tourcoing" }, { name: "Dunkerque", slug: "dunkerque" }
    ],
    nbRestaurants: "18 000", draaf: "Hauts-de-France",
    intro: "Les Hauts-de-France, première région agroalimentaire de France, comptent plus de 18 000 établissements de restauration commerciale. De Lille à Amiens, en passant par les villes du littoral picard et de la Côte d&apos;Opale, la formation HACCP est incontournable pour tous les professionnels de la restauration.",
    para1: "La DRAAF Hauts-de-France agrée les organismes de formation pour les 5 départements de la région : Nord (59), Pas-de-Calais (62), Somme (80), Aisne (02) et Oise (60). La région est le premier bassin agroalimentaire de France, avec de grandes industries de transformation alimentaire et un réseau dense de restauration.",
    para2: "La gastronomie des Hauts-de-France est riche et conviviale : estaminets traditionnels, brasseries, friteries, restaurants de moules-frites. La carbonnade flamande, le welsh, le maroilles, les ficelles picardes et la tarte au sucre font partie du patrimoine culinaire régional. La proximité de la Belgique influence la cuisine locale, notamment avec la culture des bières artisanales et des frites.",
    para3: "La formation HACCP dans les Hauts-de-France dure 14 heures avec 4 heures de pratique. Elle aborde la réglementation européenne et française, les dangers alimentaires (avec un focus sur les spécificités de la friture et de la conservation des bières), les 7 principes HACCP et le Plan de Maîtrise Sanitaire. Les formateurs adaptent les exemples aux réalités de la restauration régionale.",
    para4: "Le financement est possible via l&apos;OPCO AKTO pour les salariés CHR, France Travail pour les demandeurs d&apos;emploi, et les aides du Conseil Régional des Hauts-de-France. Le prix moyen est de 280 € à 420 € TTC. Des sessions sont proposées chaque semaine à Lille, Amiens, Roubaix, Dunkerque et dans les principales villes de la région.",
    para5: "La région des Hauts-de-France est un carrefour de transit (Eurotunnel, autoroutes vers la Belgique et les Pays-Bas) avec de nombreuses aires de restauration et restaurants routiers soumis à la formation HACCP. Le littoral de la Côte d&apos;Opale (Boulogne-sur-Mer, Le Touquet, Berck) voit affluer les touristes en été, augmentant les besoins en personnel formé. L&apos;industrie agroalimentaire régionale (sucreries, conserveries, brasseries) complète le panorama des professionnels concernés par l&apos;hygiène alimentaire.",
    faq: [
      { q: "La formation HACCP est-elle obligatoire dans les Hauts-de-France ?", a: "Oui, tous les établissements de restauration commerciale des 5 départements des Hauts-de-France doivent justifier d&apos;au moins un salarié formé à l&apos;hygiène alimentaire (14h). L&apos;obligation est en vigueur depuis octobre 2012." },
      { q: "Combien coûte la formation HACCP à Lille ?", a: "Le prix varie entre 280 € et 420 € TTC en présentiel. La formation peut être prise en charge à 100 % par l&apos;OPCO AKTO pour les salariés du secteur CHR ou par France Travail pour les demandeurs d&apos;emploi." },
      { q: "Les friteries et estaminets sont-ils concernés ?", a: "Oui, les friteries, estaminets et tous les commerces alimentaires avec service sur place ou à emporter sont soumis à l&apos;obligation de formation HACCP." },
      { q: "Où trouver une formation HACCP dans les Hauts-de-France ?", a: "Des sessions sont organisées régulièrement à Lille, Amiens, Roubaix, Tourcoing, Dunkerque, Calais, Beauvais et Compiègne. Des formations à distance sont aussi disponibles." },
      { q: "L&apos;industrie agroalimentaire est-elle concernée par la formation HACCP ?", a: "L&apos;obligation de formation HACCP de 14h concerne spécifiquement la restauration commerciale. Cependant, les entreprises agroalimentaires doivent mettre en place des procédures HACCP dans le cadre de leurs obligations réglementaires (paquet hygiène)." }
    ]
  },
  {
    slug: "grand-est", name: "Grand Est", lat: 48.5734, lng: 7.7521, cp: "67000", mainCity: "Strasbourg",
    cities: [
      { name: "Strasbourg", slug: "strasbourg" }, { name: "Reims", slug: "reims" },
      { name: "Metz", slug: "metz" }, { name: "Nancy", slug: "nancy" }, { name: "Mulhouse", slug: "mulhouse" }
    ],
    nbRestaurants: "20 000", draaf: "Grand Est",
    intro: "La région Grand Est, carrefour européen entre la France, l&apos;Allemagne et le Luxembourg, est une terre de traditions culinaires riches. Avec Strasbourg, capitale européenne, et plus de 20 000 établissements de restauration, la formation HACCP est indispensable pour les professionnels de la région.",
    para1: "La DRAAF Grand Est agrée les organismes de formation pour les 10 départements de la région : Bas-Rhin (67), Haut-Rhin (68), Moselle (57), Meurthe-et-Moselle (54), Meuse (55), Vosges (88), Marne (51), Aube (10), Haute-Marne (52) et Ardennes (08). La diversité culturelle — Alsace, Lorraine, Champagne — se traduit par des traditions culinaires variées.",
    para2: "La cuisine alsacienne est mondialement connue : winstubs, choucroute, tarte flambée, baeckeoffe, kouglof. En Lorraine, la quiche lorraine, la potée et les mirabelles sont emblématiques. La Champagne est célèbre pour ses vignobles et sa gastronomie raffinée. Strasbourg, avec son marché de Noël (le plus ancien de France), attire des millions de visiteurs qui fréquentent les restaurants de la ville. Toutes ces traditions culinaires exigent une maîtrise de l&apos;hygiène alimentaire.",
    para3: "La formation HACCP dans le Grand Est suit le programme national de 14 heures, avec 4 heures de pratique obligatoire depuis 2024. Le programme couvre la réglementation, les dangers alimentaires, la méthode HACCP et le PMS. Les formateurs intègrent des exemples locaux : conservation de la choucroute, gestion des températures dans les winstubs, hygiène lors des marchés de Noël.",
    para4: "Le financement est assuré par l&apos;OPCO AKTO pour les salariés CHR, France Travail pour les demandeurs d&apos;emploi, et les aides de la Région Grand Est. Le prix moyen est de 280 € à 420 € TTC. Des sessions sont disponibles à Strasbourg, Reims, Metz, Nancy, Mulhouse et Colmar.",
    para5: "La position transfrontalière du Grand Est crée des enjeux spécifiques. De nombreux travailleurs frontaliers (Luxembourg, Allemagne, Suisse) exercent dans la restauration. La réglementation française en matière d&apos;hygiène alimentaire peut différer des normes allemandes ou luxembourgeoises, rendant la formation HACCP d&apos;autant plus importante. Le tourisme viticole en Alsace et en Champagne génère également une activité de restauration saisonnière nécessitant des formations régulières.",
    faq: [
      { q: "La formation HACCP est-elle obligatoire dans le Grand Est ?", a: "Oui, tous les établissements de restauration commerciale des 10 départements du Grand Est doivent former au moins un salarié à l&apos;hygiène alimentaire (14h). L&apos;obligation s&apos;applique depuis octobre 2012." },
      { q: "Combien coûte la formation HACCP à Strasbourg ?", a: "Le tarif varie entre 280 € et 420 € TTC en présentiel. La prise en charge OPCO AKTO est possible à 100 % pour les salariés du secteur CHR." },
      { q: "Les winstubs sont-elles soumises à la formation HACCP ?", a: "Oui, les winstubs, comme tous les établissements de restauration commerciale, doivent justifier d&apos;au moins un salarié formé en hygiène alimentaire." },
      { q: "Où trouver une formation HACCP dans le Grand Est ?", a: "Des sessions sont proposées à Strasbourg, Reims, Metz, Nancy, Mulhouse, Colmar, Troyes et Charleville-Mézières. Des formations en ligne sont aussi disponibles." },
      { q: "La formation HACCP est-elle reconnue en Allemagne ou au Luxembourg ?", a: "La formation HACCP française répond aux exigences du règlement européen (CE) 852/2004, applicable dans toute l&apos;UE. Cependant, chaque pays peut avoir des exigences complémentaires. L&apos;attestation française est valable pour exercer en France." }
    ]
  },
  {
    slug: "pays-de-la-loire", name: "Pays de la Loire", lat: 47.2184, lng: -1.5536, cp: "44000", mainCity: "Nantes",
    cities: [
      { name: "Nantes", slug: "nantes" }, { name: "Angers", slug: "angers" },
      { name: "Le Mans", slug: "le-mans" }, { name: "Saint-Nazaire", slug: "saint-nazaire" }, { name: "Laval", slug: "laval" }
    ],
    nbRestaurants: "15 000", draaf: "Pays de la Loire",
    intro: "Les Pays de la Loire, région dynamique de l&apos;Ouest français, comptent plus de 15 000 établissements de restauration commerciale. De Nantes, métropole en plein essor, aux stations balnéaires de la côte atlantique, la formation HACCP est une obligation pour tous les professionnels de la restauration ligérienne.",
    para1: "La DRAAF Pays de la Loire agrée les organismes de formation pour les 5 départements de la région : Loire-Atlantique (44), Maine-et-Loire (49), Sarthe (72), Mayenne (53) et Vendée (85). La région offre un mélange de métropoles dynamiques et de territoires ruraux ou côtiers.",
    para2: "La gastronomie ligérienne est marquée par les produits de la mer (fruits de mer de la côte vendéenne, sardines de Saint-Gilles-Croix-de-Vie), les vins du muscadet et de l&apos;Anjou, les rillettes du Mans et les spécialités nantaises. Le littoral vendéen et la presqu&apos;île de Guérande avec ses marais salants complètent ce tableau gastronomique riche.",
    para3: "La formation HACCP en Pays de la Loire dure 14 heures, comprenant 4 heures de pratique obligatoire. Le programme suit le référentiel national : réglementation, dangers alimentaires, méthode HACCP, PMS et traçabilité. Les formateurs intègrent des exemples liés aux produits locaux et aux enjeux de la restauration côtière.",
    para4: "Le financement est possible via l&apos;OPCO AKTO, France Travail et les aides régionales. Le prix moyen est de 280 € à 430 € TTC. Des sessions sont proposées régulièrement à Nantes, Angers, Le Mans, Saint-Nazaire et La Roche-sur-Yon.",
    para5: "Le tourisme sur la côte vendéenne et dans les stations balnéaires de la Loire-Atlantique (La Baule, Pornic) génère une forte activité saisonnière de restauration. Les crêperies, les restaurants de fruits de mer et les glaciers du littoral sont tous concernés par l&apos;obligation de formation HACCP. Les DDPP de la région renforcent les contrôles pendant l&apos;été, et l&apos;attestation de formation est vérifiée systématiquement.",
    faq: [
      { q: "La formation HACCP est-elle obligatoire en Pays de la Loire ?", a: "Oui, tous les établissements de restauration commerciale des 5 départements des Pays de la Loire doivent former au moins un salarié à l&apos;hygiène alimentaire (14h)." },
      { q: "Combien coûte la formation HACCP à Nantes ?", a: "Le prix varie entre 280 € et 430 € TTC en présentiel. Le financement est possible via l&apos;OPCO AKTO (salariés CHR) ou France Travail (demandeurs d&apos;emploi)." },
      { q: "Où trouver une formation HACCP en Pays de la Loire ?", a: "Des sessions sont disponibles à Nantes, Angers, Le Mans, Saint-Nazaire, La Roche-sur-Yon et Laval. Des formations en ligne sont aussi proposées." },
      { q: "Les restaurants de fruits de mer sont-ils concernés ?", a: "Oui, tous les restaurants et commerces alimentaires avec service sur place, y compris les restaurants de fruits de mer, sont soumis à l&apos;obligation de formation HACCP." },
      { q: "La formation HACCP aborde-t-elle les produits de la mer ?", a: "Le programme national inclut la conservation des denrées alimentaires, dont les produits de la mer. Les formateurs adaptent les exemples aux spécificités locales : huîtres, moules, poissons frais." }
    ]
  },
  {
    slug: "normandie", name: "Normandie", lat: 49.4431, lng: 1.0993, cp: "76000", mainCity: "Rouen",
    cities: [
      { name: "Rouen", slug: "rouen" }, { name: "Le Havre", slug: "le-havre" },
      { name: "Caen", slug: "caen" }, { name: "Cherbourg", slug: "cherbourg" }, { name: "Évreux", slug: "evreux" }
    ],
    nbRestaurants: "14 000", draaf: "Normandie",
    intro: "La Normandie, terre de traditions culinaires, est reconnue pour ses fromages (camembert, livarot, pont-l&apos;évêque), son cidre, son calvados et ses fruits de mer. Avec plus de 14 000 établissements de restauration, la formation HACCP est une obligation pour tous les professionnels normands.",
    para1: "La DRAAF Normandie agrée les organismes de formation pour les 5 départements : Seine-Maritime (76), Calvados (14), Manche (50), Eure (27) et Orne (61). De Rouen au Mont-Saint-Michel, la région offre une diversité culinaire remarquable.",
    para2: "La gastronomie normande est indissociable de ses produits laitiers. Le camembert de Normandie AOP, le livarot, le pont-l&apos;évêque et le neufchâtel sont fabriqués dans les fromageries locales. La crème fraîche, le beurre et le cidre sont omniprésents dans la cuisine normande. Les fruits de mer (huîtres de Saint-Vaast, coquilles Saint-Jacques de la baie de Seine, moules de Barfleur) complètent cette richesse gastronomique.",
    para3: "La formation HACCP en Normandie dure 14 heures avec 4 heures de pratique. Le programme aborde la réglementation, les dangers alimentaires (avec un focus sur les produits laitiers au lait cru et les fruits de mer), la méthode HACCP et le PMS. Les enjeux liés à la chaîne du froid des produits de la mer sont particulièrement développés.",
    para4: "Le financement est accessible via l&apos;OPCO AKTO, France Travail et les aides régionales. Le prix moyen est de 280 € à 420 € TTC. Des sessions sont disponibles à Rouen, Le Havre, Caen, Cherbourg et Évreux.",
    para5: "Le tourisme normand (plages du Débarquement, Deauville, Honfleur, Mont-Saint-Michel) attire des millions de visiteurs chaque année. Les restaurants, crêperies et établissements de bord de mer voient leur activité décupler en saison. Les contrôles DDPP sont renforcés dans les zones touristiques. La Normandie est aussi un bassin important pour l&apos;industrie agroalimentaire (Danone, Lactalis), qui impose ses propres exigences HACCP.",
    faq: [
      { q: "La formation HACCP est-elle obligatoire en Normandie ?", a: "Oui, tous les établissements de restauration commerciale des 5 départements normands doivent former au moins un salarié à l&apos;hygiène alimentaire (14h)." },
      { q: "Combien coûte la formation HACCP en Normandie ?", a: "Le tarif varie entre 280 € et 420 € TTC en présentiel. Le financement OPCO AKTO est possible à 100 % pour les salariés du secteur CHR." },
      { q: "Où trouver une formation HACCP en Normandie ?", a: "Des sessions sont proposées à Rouen, Le Havre, Caen, Cherbourg, Évreux, Lisieux et Dieppe. Des formations en ligne sont aussi disponibles." },
      { q: "La formation aborde-t-elle les fromages au lait cru ?", a: "Oui, le programme inclut la gestion des produits laitiers et les dangers liés au lait cru. Les formateurs normands illustrent les bonnes pratiques avec des exemples concrets sur le camembert et les autres fromages AOP." },
      { q: "Les restaurants du Mont-Saint-Michel sont-ils concernés ?", a: "Oui, tous les restaurants du Mont-Saint-Michel et des zones touristiques normandes doivent justifier d&apos;au moins un salarié formé en hygiène alimentaire." }
    ]
  },
  {
    slug: "bretagne", name: "Bretagne", lat: 48.1173, lng: -1.6778, cp: "35000", mainCity: "Rennes",
    cities: [
      { name: "Rennes", slug: "rennes" }, { name: "Brest", slug: "brest" },
      { name: "Quimper", slug: "quimper" }, { name: "Lorient", slug: "lorient" }, { name: "Vannes", slug: "vannes" }
    ],
    nbRestaurants: "16 000", draaf: "Bretagne",
    intro: "La Bretagne, péninsule entre Manche et Atlantique, est une terre de gastronomie maritime et de traditions culinaires fortes. Avec plus de 16 000 établissements de restauration — crêperies, restaurants de fruits de mer, bistrots marins — la formation HACCP est indispensable pour tous les professionnels bretons.",
    para1: "La DRAAF Bretagne agrée les organismes de formation pour les 4 départements : Ille-et-Vilaine (35), Finistère (29), Côtes-d&apos;Armor (22) et Morbihan (56). La Bretagne est la première région de pêche française et un bassin majeur d&apos;ostréiculture, ce qui impose des exigences élevées en matière d&apos;hygiène alimentaire.",
    para2: "La cuisine bretonne est indissociable de la mer : huîtres de Cancale, homard breton, coquilles Saint-Jacques, sardines, bar de ligne. Les crêperies, institution bretonne par excellence, servent galettes de blé noir et crêpes de froment dans tout le territoire. Le far breton, le kouign-amann, le cidre et le chouchen complètent le patrimoine culinaire. La manipulation de ces produits, notamment les fruits de mer et le blé noir, nécessite des connaissances approfondies en hygiène.",
    para3: "La formation HACCP en Bretagne dure 14 heures avec 4 heures de pratique. Le programme national est enrichi par les formateurs locaux avec des exemples concrets : conservation des fruits de mer, gestion de la chaîne du froid pour le poisson frais, hygiène dans les crêperies, traçabilité des coquillages.",
    para4: "Le financement est assuré par l&apos;OPCO AKTO pour les salariés CHR, France Travail pour les demandeurs d&apos;emploi, et les aides régionales. Le prix moyen est de 280 € à 420 € TTC. Des sessions sont disponibles à Rennes, Brest, Quimper, Lorient, Vannes et Saint-Brieuc.",
    para5: "Le littoral breton, avec ses milliers de kilomètres de côtes, attire un tourisme estival important. Les restaurants de fruits de mer, les crêperies du bord de mer et les bars à huîtres doivent tous respecter les normes HACCP. L&apos;industrie de la conserve (sardines, maquereaux) et l&apos;ostréiculture bretonne sont également soumises aux exigences d&apos;hygiène. Les DDPP bretonnes sont particulièrement vigilantes sur la traçabilité des produits de la mer.",
    faq: [
      { q: "La formation HACCP est-elle obligatoire en Bretagne ?", a: "Oui, tous les établissements de restauration commerciale des 4 départements bretons doivent former au moins un salarié à l&apos;hygiène alimentaire (14h)." },
      { q: "Combien coûte la formation HACCP en Bretagne ?", a: "Le tarif varie entre 280 € et 420 € TTC en présentiel. Le financement OPCO AKTO est possible pour les salariés du secteur CHR." },
      { q: "Les crêperies sont-elles concernées par la formation HACCP ?", a: "Oui, les crêperies sont des établissements de restauration commerciale et doivent justifier d&apos;au moins un salarié formé en hygiène alimentaire." },
      { q: "Où trouver une formation HACCP en Bretagne ?", a: "Des sessions sont proposées à Rennes, Brest, Quimper, Lorient, Vannes, Saint-Brieuc et Saint-Malo. Des formations en ligne sont aussi disponibles." },
      { q: "La formation aborde-t-elle les produits de la mer ?", a: "Oui, le programme inclut la conservation et la manipulation des produits de la mer. Les formateurs bretons insistent sur la chaîne du froid du poisson, la traçabilité des coquillages et les risques liés aux fruits de mer." }
    ]
  },
  {
    slug: "bourgogne-franche-comte", name: "Bourgogne-Franche-Comté", lat: 47.3220, lng: 5.0415, cp: "21000", mainCity: "Dijon",
    cities: [
      { name: "Dijon", slug: "dijon" }, { name: "Besançon", slug: "besancon" },
      { name: "Belfort", slug: "belfort" }, { name: "Chalon-sur-Saône", slug: "chalon-sur-saone" }, { name: "Auxerre", slug: "auxerre" }
    ],
    nbRestaurants: "11 000", draaf: "Bourgogne-Franche-Comté",
    intro: "La Bourgogne-Franche-Comté est une région de grande tradition gastronomique. Des vignobles de Bourgogne aux fromageries du Jura, en passant par la moutarde de Dijon et les escargots, la région compte plus de 11 000 établissements de restauration commerciale soumis à l&apos;obligation de formation HACCP.",
    para1: "La DRAAF Bourgogne-Franche-Comté agrée les organismes de formation pour les 8 départements : Côte-d&apos;Or (21), Saône-et-Loire (71), Yonne (89), Nièvre (58), Doubs (25), Jura (39), Haute-Saône (70) et Territoire de Belfort (90). La richesse des terroirs impose des connaissances spécifiques en hygiène alimentaire.",
    para2: "La gastronomie bourguignonne est l&apos;une des plus réputées de France. Le bœuf bourguignon, les escargots de Bourgogne, la fondue comtoise, les gougères et la pôchouse sont des plats emblématiques. Les vins de Bourgogne (romanée-conti, chambertin, chablis) et le comté AOP sont connus dans le monde entier. La moutarde de Dijon, le cassis de Bourgogne et les fromages franc-comtois (comté, morbier, mont d&apos;or) complètent ce panorama gastronomique exceptionnel.",
    para3: "La formation HACCP en Bourgogne-Franche-Comté dure 14 heures avec 4 heures de pratique. Le programme traite de la réglementation, des dangers alimentaires, de la méthode HACCP et du PMS. Les formateurs intègrent des exemples locaux : affinage du comté et du morbier, conservation des escargots, hygiène dans les caves de dégustation proposant de la restauration.",
    para4: "Le financement est possible via l&apos;OPCO AKTO, France Travail et les aides régionales. Le prix moyen est de 280 € à 420 € TTC. Des sessions sont disponibles à Dijon, Besançon, Chalon-sur-Saône, Auxerre et Belfort.",
    para5: "Le tourisme viticole en Bourgogne (Route des Grands Crus) et le tourisme gastronomique attirent des visiteurs du monde entier. Les restaurants, tables d&apos;hôtes et caves de dégustation avec restauration doivent tous respecter les normes HACCP. La Cité internationale de la Gastronomie et du Vin de Dijon, inaugurée en 2022, renforce le rayonnement gastronomique de la région et l&apos;importance de l&apos;hygiène alimentaire.",
    faq: [
      { q: "La formation HACCP est-elle obligatoire en Bourgogne-Franche-Comté ?", a: "Oui, tous les établissements de restauration commerciale des 8 départements de la région doivent former au moins un salarié à l&apos;hygiène alimentaire (14h)." },
      { q: "Combien coûte la formation HACCP à Dijon ?", a: "Le prix varie entre 280 € et 420 € TTC en présentiel. Le financement OPCO AKTO couvre 100 % du coût pour les salariés CHR." },
      { q: "Les caves de dégustation avec restauration sont-elles concernées ?", a: "Oui, dès lors qu&apos;un établissement propose de la restauration commerciale (service de repas sur place), il est soumis à l&apos;obligation de formation HACCP." },
      { q: "Où trouver une formation HACCP en Bourgogne-Franche-Comté ?", a: "Des sessions sont proposées à Dijon, Besançon, Chalon-sur-Saône, Auxerre, Belfort, Mâcon et Dole. Des formations en ligne sont aussi disponibles." },
      { q: "La formation aborde-t-elle les fromages au lait cru ?", a: "Oui, le programme inclut les bonnes pratiques de manipulation des produits laitiers, avec des exemples concrets sur le comté, le morbier et le mont d&apos;or, produits emblématiques de la Franche-Comté." }
    ]
  },
  {
    slug: "centre-val-de-loire", name: "Centre-Val de Loire", lat: 47.9029, lng: 1.9093, cp: "45000", mainCity: "Orléans",
    cities: [
      { name: "Orléans", slug: "orleans" }, { name: "Tours", slug: "tours" },
      { name: "Bourges", slug: "bourges" }, { name: "Blois", slug: "blois" }, { name: "Chartres", slug: "chartres" }
    ],
    nbRestaurants: "10 000", draaf: "Centre-Val de Loire",
    intro: "Le Centre-Val de Loire, terre des châteaux et du patrimoine gastronomique ligérien, compte plus de 10 000 établissements de restauration commerciale. De Tours à Orléans, en passant par les vignobles de Touraine et de Sancerre, la formation HACCP est obligatoire pour tous les professionnels de la restauration.",
    para1: "La DRAAF Centre-Val de Loire agrée les organismes de formation pour les 6 départements : Loiret (45), Indre-et-Loire (37), Cher (18), Loir-et-Cher (41), Eure-et-Loir (28) et Indre (36). La région, traversée par la Loire, est célèbre pour ses châteaux et son tourisme gastronomique.",
    para2: "La gastronomie du Centre-Val de Loire est raffinée : rillettes et rillons de Tours, tarte Tatin, fromages de chèvre (Sainte-Maure-de-Touraine, Valençay, Selles-sur-Cher, Crottin de Chavignol), vins de Touraine, de Sancerre et de Chinon. Le patrimoine culinaire ligérien est inscrit au patrimoine mondial de l&apos;UNESCO à travers le paysage culturel de la Loire.",
    para3: "La formation HACCP en Centre-Val de Loire dure 14 heures avec 4 heures de pratique. Le programme aborde la réglementation, les dangers alimentaires, la méthode HACCP et le PMS. Les formateurs intègrent les spécificités locales : conservation des fromages de chèvre au lait cru, hygiène dans les caves de dégustation, gestion des buffets dans les châteaux-restaurants.",
    para4: "Le financement est possible via l&apos;OPCO AKTO, France Travail et les aides régionales. Le prix moyen est de 280 € à 420 € TTC. Des sessions sont disponibles à Orléans, Tours, Bourges, Blois et Chartres.",
    para5: "Le tourisme des châteaux de la Loire (Chambord, Chenonceau, Amboise) génère une activité de restauration importante. Les restaurants gastronomiques, les tables d&apos;hôtes et les traiteurs liés à l&apos;événementiel dans les châteaux doivent tous respecter les normes HACCP. Les marchés de producteurs et les caves de dégustation avec restauration complètent le panorama des professionnels concernés dans la région.",
    faq: [
      { q: "La formation HACCP est-elle obligatoire en Centre-Val de Loire ?", a: "Oui, tous les établissements de restauration commerciale des 6 départements de la région doivent former au moins un salarié à l&apos;hygiène alimentaire (14h)." },
      { q: "Combien coûte la formation HACCP à Tours ou Orléans ?", a: "Le prix varie entre 280 € et 420 € TTC en présentiel. Le financement OPCO AKTO est possible pour les salariés du secteur CHR." },
      { q: "Les restaurants des châteaux de la Loire sont-ils concernés ?", a: "Oui, tous les établissements de restauration commerciale, y compris ceux situés dans les châteaux, doivent justifier d&apos;au moins un salarié formé en hygiène alimentaire." },
      { q: "Où trouver une formation HACCP en Centre-Val de Loire ?", a: "Des sessions sont proposées à Orléans, Tours, Bourges, Blois, Chartres et Châteauroux. Des formations en ligne sont aussi disponibles." },
      { q: "La formation aborde-t-elle les fromages de chèvre ?", a: "Oui, le programme inclut la manipulation des produits laitiers. Les formateurs locaux illustrent les bonnes pratiques avec des exemples concrets sur les fromages de chèvre AOP de la région (Sainte-Maure, Valençay, Selles-sur-Cher)." }
    ]
  },
  {
    slug: "corse", name: "Corse", lat: 41.9263, lng: 8.7369, cp: "20000", mainCity: "Ajaccio",
    cities: [
      { name: "Ajaccio", slug: "ajaccio" }, { name: "Bastia", slug: "bastia" },
      { name: "Porto-Vecchio", slug: "porto-vecchio" }, { name: "Calvi", slug: "calvi" }, { name: "Corte", slug: "corte" }
    ],
    nbRestaurants: "4 500", draaf: "Corse",
    intro: "La Corse, île de beauté et de traditions culinaires uniques, compte plus de 4 500 établissements de restauration commerciale. Du littoral touristique aux villages de montagne, la formation HACCP est obligatoire pour tous les professionnels de la restauration insulaire.",
    para1: "La DRAAF de Corse agrée les organismes de formation pour les 2 départements : Corse-du-Sud (2A) et Haute-Corse (2B). L&apos;insularité de la Corse crée des défis spécifiques en matière de formation : le déplacement des formateurs depuis le continent ou l&apos;organisation de sessions locales sont des enjeux logistiques importants.",
    para2: "La gastronomie corse est riche et authentique : charcuteries AOP (coppa, lonzu, prisuttu, figatellu), fromages (brocciu AOP, tomme corse), miel de maquis, huile d&apos;olive, farine de châtaigne. La cuisine corse mêle influences méditerranéennes et traditions montagnardes. Les auberges de montagne, les restaurants de plage et les fermes-auberges proposent une cuisine du terroir qui nécessite une maîtrise de l&apos;hygiène alimentaire.",
    para3: "La formation HACCP en Corse dure 14 heures avec 4 heures de pratique. Le programme national est adapté aux réalités insulaires : conservation des charcuteries artisanales, manipulation du brocciu frais, hygiène dans les fermes-auberges, gestion de la chaîne du froid dans un contexte insulaire (transport maritime des denrées).",
    para4: "Le financement est possible via l&apos;OPCO AKTO, France Travail et les aides de la Collectivité de Corse. Le prix moyen est de 300 € à 490 € TTC (légèrement plus élevé qu&apos;en métropole en raison de l&apos;insularité). Des sessions sont organisées à Ajaccio et Bastia, et des formations en ligne permettent de pallier l&apos;éloignement géographique.",
    para5: "La Corse accueille plus de 3 millions de touristes chaque année, principalement en été. Cette saisonnalité intense multiplie les besoins en personnel formé pour les restaurants côtiers, les paillotes de plage et les hôtels-restaurants. Les DDPP de Corse renforcent les contrôles en haute saison. L&apos;insularité impose également une vigilance accrue sur le transport et la conservation des denrées alimentaires acheminées par bateau ou avion depuis le continent.",
    faq: [
      { q: "La formation HACCP est-elle obligatoire en Corse ?", a: "Oui, tous les établissements de restauration commerciale de Corse (Corse-du-Sud et Haute-Corse) doivent former au moins un salarié à l&apos;hygiène alimentaire (14h)." },
      { q: "Combien coûte la formation HACCP en Corse ?", a: "Le prix varie entre 300 € et 490 € TTC en présentiel, légèrement plus élevé qu&apos;en métropole. Des formations en ligne sont disponibles à partir de 200 €. Le financement OPCO AKTO est possible." },
      { q: "Peut-on suivre la formation HACCP en ligne depuis la Corse ?", a: "Oui, des formations à distance sont disponibles et permettent de pallier l&apos;insularité. Depuis l&apos;arrêté de 2024, 4 heures de pratique sont obligatoires, mais certains organismes proposent des solutions mixtes." },
      { q: "Où trouver une formation HACCP en Corse ?", a: "Des sessions sont organisées à Ajaccio et Bastia principalement. Des organismes du continent se déplacent également pour proposer des sessions à Porto-Vecchio, Calvi ou Corte selon la demande." },
      { q: "Les fermes-auberges corses sont-elles concernées ?", a: "Oui, les fermes-auberges qui proposent de la restauration commerciale sont soumises à l&apos;obligation de formation HACCP." }
    ]
  }
];

const DEPARTEMENTS = [
  {
    slug: "75-paris", name: "Paris", num: "75", region: "Île-de-France", lat: 48.8566, lng: 2.3522, cp: "75001", mainCity: "Paris",
    cities: [{ name: "Paris", slug: "paris" }, { name: "Boulogne-Billancourt", slug: "boulogne-billancourt" }, { name: "Saint-Denis", slug: "saint-denis" }, { name: "Montreuil", slug: "montreuil" }, { name: "Nanterre", slug: "nanterre" }],
    nbRestaurants: "15 000",
    intro: "Paris, capitale de la France et de la gastronomie mondiale, concentre plus de 15 000 établissements de restauration commerciale. Des bistrots de quartier aux restaurants étoilés, des food trucks aux dark kitchens, la formation HACCP est une obligation incontournable pour tous les professionnels parisiens de la restauration.",
    content: "Paris est le département français qui compte le plus grand nombre de restaurants au mètre carré. Chaque arrondissement possède ses spécificités : les restaurants gastronomiques du 8e, les bistrots du 11e, les restaurants asiatiques du 13e, les tables branchées du Marais. La DDPP de Paris effectue des contrôles réguliers, particulièrement dans les zones touristiques (Champs-Élysées, Montmartre, Saint-Germain-des-Prés, Le Marais). L&apos;absence d&apos;attestation de formation HACCP lors d&apos;un contrôle peut entraîner une amende de 5e classe. Le financement de la formation est facilité par l&apos;OPCO AKTO pour les salariés du secteur CHR et par France Travail pour les demandeurs d&apos;emploi. De nombreux organismes proposent des sessions chaque semaine dans Paris intra-muros, avec des formations en présentiel dans tous les arrondissements."
  },
  {
    slug: "69-rhone", name: "Rhône", num: "69", region: "Auvergne-Rhône-Alpes", lat: 45.7640, lng: 4.8357, cp: "69001", mainCity: "Lyon",
    cities: [{ name: "Lyon", slug: "lyon" }, { name: "Villeurbanne", slug: "villeurbanne" }, { name: "Vénissieux", slug: "venissieux" }, { name: "Caluire-et-Cuire", slug: "caluire-et-cuire" }, { name: "Saint-Priest", slug: "saint-priest" }],
    nbRestaurants: "3 500",
    intro: "Le Rhône, avec Lyon comme préfecture, est un département emblématique de la gastronomie française. Les bouchons lyonnais, les restaurants étoilés et les halles Paul Bocuse font du Rhône un territoire où la formation HACCP revêt une importance particulière.",
    content: "Lyon est internationalement reconnue comme la capitale mondiale de la gastronomie. Les bouchons lyonnais, ces restaurants traditionnels servant quenelles, tablier de sapeur et cervelle de canut, sont une institution. Le département compte environ 3 500 établissements de restauration commerciale, tous soumis à l&apos;obligation de formation HACCP. La DRAAF Auvergne-Rhône-Alpes, basée à Lyon, agrée les organismes de formation. Le Rhône bénéficie d&apos;une offre de formation particulièrement riche, avec des sessions disponibles chaque semaine dans la métropole lyonnaise. Les prix varient entre 290 € et 450 € TTC en présentiel."
  },
  {
    slug: "13-bouches-du-rhone", name: "Bouches-du-Rhône", num: "13", region: "PACA", lat: 43.2965, lng: 5.3698, cp: "13001", mainCity: "Marseille",
    cities: [{ name: "Marseille", slug: "marseille" }, { name: "Aix-en-Provence", slug: "aix-en-provence" }, { name: "Arles", slug: "arles" }, { name: "Martigues", slug: "martigues" }, { name: "Salon-de-Provence", slug: "salon-de-provence" }],
    nbRestaurants: "5 500",
    intro: "Les Bouches-du-Rhône, avec Marseille comme préfecture, sont le département le plus peuplé de la région PACA. Avec plus de 5 500 établissements de restauration et la célèbre bouillabaisse marseillaise, la formation HACCP est essentielle pour les professionnels du département.",
    content: "Marseille, deuxième ville de France, est un creuset culinaire méditerranéen. La bouillabaisse, la panisse, les navettes et les spécialités de fruits de mer font la renommée de la gastronomie marseillaise. Aix-en-Provence, ville universitaire et touristique, compte également un nombre important de restaurants. Le département des Bouches-du-Rhône connaît une forte saisonnalité avec l&apos;afflux touristique estival. Les contrôles DDPP sont particulièrement fréquents sur le Vieux-Port de Marseille et dans les calanques. La formation HACCP de 14 heures est obligatoire pour tous les établissements."
  },
  {
    slug: "31-haute-garonne", name: "Haute-Garonne", num: "31", region: "Occitanie", lat: 43.6047, lng: 1.4442, cp: "31000", mainCity: "Toulouse",
    cities: [{ name: "Toulouse", slug: "toulouse" }, { name: "Colomiers", slug: "colomiers" }, { name: "Tournefeuille", slug: "tournefeuille" }, { name: "Blagnac", slug: "blagnac" }, { name: "Muret", slug: "muret" }],
    nbRestaurants: "3 200",
    intro: "La Haute-Garonne, avec Toulouse la ville rose, est le département le plus dynamique d&apos;Occitanie. Ville étudiante, pôle aéronautique (Airbus) et capitale du cassoulet, Toulouse et son département comptent plus de 3 200 établissements de restauration soumis à la formation HACCP.",
    content: "Toulouse est la quatrième ville de France et la plus grande ville étudiante. Cette jeunesse dynamique se traduit par une offre de restauration variée : restaurants traditionnels servant le cassoulet et le magret, kebabs et snacks, food trucks, restaurants du monde. Le quartier des Carmes, la place du Capitole et la rue Saint-Rome concentrent une densité importante de restaurants. Le pôle aéronautique d&apos;Airbus à Blagnac génère également une demande importante en restauration collective et d&apos;entreprise. Le financement via l&apos;OPCO AKTO est particulièrement sollicité dans ce département dynamique."
  },
  {
    slug: "33-gironde", name: "Gironde", num: "33", region: "Nouvelle-Aquitaine", lat: 44.8378, lng: -0.5792, cp: "33000", mainCity: "Bordeaux",
    cities: [{ name: "Bordeaux", slug: "bordeaux" }, { name: "Mérignac", slug: "merignac" }, { name: "Pessac", slug: "pessac" }, { name: "Talence", slug: "talence" }, { name: "Arcachon", slug: "arcachon" }],
    nbRestaurants: "3 000",
    intro: "La Gironde, département de Bordeaux et de ses prestigieux vignobles, est un territoire d&apos;excellence gastronomique. Avec le bassin d&apos;Arcachon, ses huîtres, ses vins et plus de 3 000 restaurants, la formation HACCP est incontournable pour les professionnels girondins.",
    content: "Bordeaux, classée au patrimoine mondial de l&apos;UNESCO, est une métropole gastronomique de premier plan. Les restaurants du quartier Saint-Pierre, de la place de la Bourse et des Chartrons proposent une cuisine raffinée accompagnée des grands crus bordelais. Le bassin d&apos;Arcachon est célèbre pour ses huîtres et ses cabanes de dégustation, toutes soumises à l&apos;obligation HACCP. Le tourisme viticole dans le Médoc, à Saint-Émilion et dans le Sauternais attire des visiteurs qui fréquentent les restaurants et tables d&apos;hôtes du vignoble. Les formations sont disponibles chaque semaine à Bordeaux et dans les villes de la métropole."
  },
  {
    slug: "59-nord", name: "Nord", num: "59", region: "Hauts-de-France", lat: 50.6292, lng: 3.0573, cp: "59000", mainCity: "Lille",
    cities: [{ name: "Lille", slug: "lille" }, { name: "Roubaix", slug: "roubaix" }, { name: "Tourcoing", slug: "tourcoing" }, { name: "Dunkerque", slug: "dunkerque" }, { name: "Valenciennes", slug: "valenciennes" }],
    nbRestaurants: "4 000",
    intro: "Le Nord, département le plus peuplé de France hors Paris, est une terre de convivialité culinaire. Estaminets, brasseries, friteries et restaurants de moules-frites : plus de 4 000 établissements sont soumis à la formation HACCP dans le département.",
    content: "Lille, capitale des Flandres, est une métropole dynamique où la restauration se réinvente constamment. Les estaminets traditionnels côtoient les restaurants gastronomiques et les concepts de street food. Le welsh, la carbonnade flamande, le potjevleesch et les moules-frites sont des plats incontournables. La métropole lilloise (Roubaix, Tourcoing, Villeneuve-d&apos;Ascq) concentre la majorité des établissements. La proximité de la Belgique influence la culture culinaire locale. Dunkerque, port maritime, et Valenciennes complètent le panorama de la restauration nordiste. Les formations sont disponibles chaque semaine dans la métropole lilloise."
  },
  {
    slug: "67-bas-rhin", name: "Bas-Rhin", num: "67", region: "Grand Est", lat: 48.5734, lng: 7.7521, cp: "67000", mainCity: "Strasbourg",
    cities: [{ name: "Strasbourg", slug: "strasbourg" }, { name: "Haguenau", slug: "haguenau" }, { name: "Schiltigheim", slug: "schiltigheim" }, { name: "Illkirch-Graffenstaden", slug: "illkirch-graffenstaden" }, { name: "Sélestat", slug: "selestat" }],
    nbRestaurants: "2 000",
    intro: "Le Bas-Rhin, avec Strasbourg capitale européenne, est le cœur de l&apos;Alsace gastronomique. Winstubs, restaurants de choucroute, brasseries : plus de 2 000 établissements doivent justifier de la formation HACCP dans le département.",
    content: "Strasbourg, siège du Parlement européen, est une ville touristique majeure. La Petite France, la cathédrale et le marché de Noël (Christkindelsmärik) attirent des millions de visiteurs. Les winstubs, ces restaurants traditionnels alsaciens, servent choucroute, baeckeoffe, flammekueche et bretzel. La cuisine alsacienne, riche et généreuse, nécessite une maîtrise des techniques d&apos;hygiène alimentaire. Le marché de Noël de Strasbourg, le plus grand de France, génère une activité de restauration intense en décembre. Les formations HACCP sont disponibles toute l&apos;année à Strasbourg et dans les villes du département."
  },
  {
    slug: "44-loire-atlantique", name: "Loire-Atlantique", num: "44", region: "Pays de la Loire", lat: 47.2184, lng: -1.5536, cp: "44000", mainCity: "Nantes",
    cities: [{ name: "Nantes", slug: "nantes" }, { name: "Saint-Nazaire", slug: "saint-nazaire" }, { name: "Rezé", slug: "reze" }, { name: "Saint-Herblain", slug: "saint-herblain" }, { name: "Orvault", slug: "orvault" }],
    nbRestaurants: "2 200",
    intro: "La Loire-Atlantique, avec Nantes comme métropole, est un département dynamique de l&apos;Ouest français. Entre l&apos;estuaire de la Loire et l&apos;océan Atlantique, le département compte plus de 2 200 restaurants soumis à l&apos;obligation de formation HACCP.",
    content: "Nantes est une métropole en plein essor, élue à plusieurs reprises meilleure ville de France où vivre. La scène gastronomique nantaise est variée : restaurants de fruits de mer, bistrots, restaurants gastronomiques et street food. Le muscadet, vin blanc emblématique de la Loire-Atlantique, accompagne les poissons et les huîtres. Saint-Nazaire, ville portuaire, et les stations balnéaires (La Baule, Pornic, Le Croisic) complètent l&apos;offre de restauration. Les marais salants de Guérande, avec leurs producteurs et boutiques, sont également concernés par l&apos;hygiène alimentaire."
  },
  {
    slug: "76-seine-maritime", name: "Seine-Maritime", num: "76", region: "Normandie", lat: 49.4431, lng: 1.0993, cp: "76000", mainCity: "Rouen",
    cities: [{ name: "Rouen", slug: "rouen" }, { name: "Le Havre", slug: "le-havre" }, { name: "Dieppe", slug: "dieppe" }, { name: "Sotteville-lès-Rouen", slug: "sotteville-les-rouen" }, { name: "Saint-Étienne-du-Rouvray", slug: "saint-etienne-du-rouvray" }],
    nbRestaurants: "2 500",
    intro: "La Seine-Maritime, département normand entre Rouen et Le Havre, est un territoire de traditions culinaires. Cuisine normande, fruits de mer et produits laitiers : plus de 2 500 établissements sont soumis à la formation HACCP dans le département.",
    content: "Rouen, la capitale historique de la Normandie, possède un patrimoine gastronomique riche. Le canard rouennais, les tripes à la mode de Caen (plat normand par excellence), le cidre et le calvados sont emblématiques. Le Havre, grand port maritime, offre une restauration variée avec des spécialités de poissons et fruits de mer. Dieppe, premier port de pêche pour la coquille Saint-Jacques, voit ses restaurants servir ce produit phare de novembre à mai. Les falaises d&apos;Étretat et la côte d&apos;Albâtre attirent un tourisme important qui alimente la restauration locale."
  },
  {
    slug: "06-alpes-maritimes", name: "Alpes-Maritimes", num: "06", region: "PACA", lat: 43.7102, lng: 7.2620, cp: "06000", mainCity: "Nice",
    cities: [{ name: "Nice", slug: "nice" }, { name: "Cannes", slug: "cannes" }, { name: "Antibes", slug: "antibes" }, { name: "Grasse", slug: "grasse" }, { name: "Menton", slug: "menton" }],
    nbRestaurants: "2 800",
    intro: "Les Alpes-Maritimes, joyau de la Côte d&apos;Azur, comptent plus de 2 800 établissements de restauration. De Nice à Cannes, de Menton à Antibes, la formation HACCP est indispensable dans ce département touristique de premier plan.",
    content: "Nice, cinquième ville de France, est le cœur de la Riviera française. La cuisine niçoise — salade niçoise, socca, pissaladière, ratatouille, pan bagnat — est reconnue mondialement. Cannes, avec son festival international du film, ses palaces et ses restaurants étoilés, impose les plus hauts standards d&apos;hygiène alimentaire. Antibes, Menton et Grasse complètent ce territoire gastronomique d&apos;exception. Le tourisme de luxe et la clientèle internationale exigent une qualité irréprochable. Les DDPP renforcent les contrôles pendant la saison estivale et lors des événements majeurs (Festival de Cannes, Carnaval de Nice)."
  },
  {
    slug: "34-herault", name: "Hérault", num: "34", region: "Occitanie", lat: 43.6108, lng: 3.8767, cp: "34000", mainCity: "Montpellier",
    cities: [{ name: "Montpellier", slug: "montpellier" }, { name: "Béziers", slug: "beziers" }, { name: "Sète", slug: "sete" }, { name: "Agde", slug: "agde" }, { name: "Lunel", slug: "lunel" }],
    nbRestaurants: "2 200",
    intro: "L&apos;Hérault, département méditerranéen d&apos;Occitanie, est un territoire de gastronomie et de tourisme. De Montpellier à Sète, en passant par le Cap d&apos;Agde, plus de 2 200 établissements sont soumis à la formation HACCP.",
    content: "Montpellier, ville étudiante et touristique en pleine croissance, possède une scène gastronomique dynamique. Sète, port de pêche et patrie de la tielle (tourte de poulpe), est un haut lieu de la cuisine méditerranéenne. Les huîtres de l&apos;étang de Thau (Bouzigues, Marseillan) sont réputées dans toute la France. Le Cap d&apos;Agde et les stations balnéaires du littoral héraultais voient leur activité de restauration exploser en été. Les vins du Languedoc (Pic Saint-Loup, Faugères, Saint-Chinian) accompagnent une cuisine du soleil qui nécessite une attention particulière à la chaîne du froid en période estivale."
  },
  {
    slug: "57-moselle", name: "Moselle", num: "57", region: "Grand Est", lat: 49.1193, lng: 6.1757, cp: "57000", mainCity: "Metz",
    cities: [{ name: "Metz", slug: "metz" }, { name: "Thionville", slug: "thionville" }, { name: "Sarreguemines", slug: "sarreguemines" }, { name: "Forbach", slug: "forbach" }, { name: "Montigny-lès-Metz", slug: "montigny-les-metz" }],
    nbRestaurants: "1 800",
    intro: "La Moselle, département frontalier du Grand Est, est un territoire de culture culinaire lorraine. Avec Metz comme préfecture et une forte influence luxembourgeoise, plus de 1 800 établissements sont soumis à la formation HACCP.",
    content: "Metz, ville d&apos;art et d&apos;histoire, possède un patrimoine gastronomique lorrain riche : quiche lorraine, potée lorraine, pâté lorrain, mirabelles. La proximité du Luxembourg attire de nombreux travailleurs frontaliers qui fréquentent la restauration locale. Thionville, à la frontière luxembourgeoise, connaît un dynamisme économique qui se traduit par une offre de restauration croissante. Sarreguemines et Forbach, proches de l&apos;Allemagne, offrent une cuisine aux influences transfrontalières. Le Centre Pompidou-Metz attire des visiteurs culturels qui alimentent la restauration messine."
  },
  {
    slug: "38-isere", name: "Isère", num: "38", region: "Auvergne-Rhône-Alpes", lat: 45.1885, lng: 5.7245, cp: "38000", mainCity: "Grenoble",
    cities: [{ name: "Grenoble", slug: "grenoble" }, { name: "Saint-Martin-d&apos;Hères", slug: "saint-martin-d-heres" }, { name: "Échirolles", slug: "echirolles" }, { name: "Vienne", slug: "vienne" }, { name: "Bourgoin-Jallieu", slug: "bourgoin-jallieu" }],
    nbRestaurants: "1 800",
    intro: "L&apos;Isère, département alpin au cœur de la région Auvergne-Rhône-Alpes, est un territoire de montagne et de gastronomie. Avec Grenoble comme préfecture et les stations de ski environnantes, plus de 1 800 établissements sont soumis à la formation HACCP.",
    content: "Grenoble, capitale des Alpes françaises, est une ville universitaire et technologique entourée de montagnes. Le gratin dauphinois, les noix de Grenoble AOP et le Saint-Marcellin sont des spécialités emblématiques. Les stations de ski (Alpe d&apos;Huez, Les 2 Alpes, Chamrousse) génèrent une activité de restauration saisonnière importante, nécessitant des formations HACCP avant chaque saison d&apos;hiver. Vienne, ville gallo-romaine au bord du Rhône, est reconnue pour ses restaurants gastronomiques. Le festival Jazz à Vienne attire chaque été des milliers de visiteurs."
  },
  {
    slug: "63-puy-de-dome", name: "Puy-de-Dôme", num: "63", region: "Auvergne-Rhône-Alpes", lat: 45.7772, lng: 3.0870, cp: "63000", mainCity: "Clermont-Ferrand",
    cities: [{ name: "Clermont-Ferrand", slug: "clermont-ferrand" }, { name: "Riom", slug: "riom" }, { name: "Issoire", slug: "issoire" }, { name: "Thiers", slug: "thiers" }, { name: "Cournon-d&apos;Auvergne", slug: "cournon-d-auvergne" }],
    nbRestaurants: "1 200",
    intro: "Le Puy-de-Dôme, au cœur de l&apos;Auvergne, est un département de terroir et de gastronomie fromagère. Avec Clermont-Ferrand comme préfecture et ses fromages AOP mondialement connus, plus de 1 200 établissements sont soumis à la formation HACCP.",
    content: "Clermont-Ferrand, ville du Michelin et de la chaîne des Puys (inscrite au patrimoine mondial UNESCO), est le cœur de la gastronomie auvergnate. Les fromages AOP du Puy-de-Dôme — Saint-Nectaire, Bleu d&apos;Auvergne, Fourme d&apos;Ambert, Cantal — sont parmi les plus réputés de France. La truffade, l&apos;aligot, la potée auvergnate et les lentilles vertes du Puy complètent ce patrimoine culinaire. La manipulation des fromages au lait cru exige une maîtrise rigoureuse de l&apos;hygiène alimentaire. Les restaurants, auberges de montagne et fermes-auberges du département sont concernés par l&apos;obligation de formation."
  },
  {
    slug: "35-ille-et-vilaine", name: "Ille-et-Vilaine", num: "35", region: "Bretagne", lat: 48.1173, lng: -1.6778, cp: "35000", mainCity: "Rennes",
    cities: [{ name: "Rennes", slug: "rennes" }, { name: "Saint-Malo", slug: "saint-malo" }, { name: "Fougères", slug: "fougeres" }, { name: "Vitré", slug: "vitre" }, { name: "Bruz", slug: "bruz" }],
    nbRestaurants: "1 700",
    intro: "L&apos;Ille-et-Vilaine, avec Rennes comme préfecture et Saint-Malo comme joyau maritime, est le département breton le plus peuplé. Crêperies, restaurants de fruits de mer et bistrots : plus de 1 700 établissements sont soumis à la formation HACCP.",
    content: "Rennes, deuxième ville de Bretagne, est une métropole dynamique et étudiante. La rue Saint-Michel (\"la rue de la soif\") et le centre historique concentrent une offre de restauration dense. Saint-Malo, cité corsaire, est un haut lieu touristique dont les restaurants de fruits de mer et les crêperies sont très fréquentés. Les huîtres de Cancale, les galettes de blé noir et le cidre breton sont des produits phares. La formation HACCP est disponible chaque semaine à Rennes et régulièrement à Saint-Malo."
  },
  {
    slug: "45-loiret", name: "Loiret", num: "45", region: "Centre-Val de Loire", lat: 47.9029, lng: 1.9093, cp: "45000", mainCity: "Orléans",
    cities: [{ name: "Orléans", slug: "orleans" }, { name: "Montargis", slug: "montargis" }, { name: "Fleury-les-Aubrais", slug: "fleury-les-aubrais" }, { name: "Olivet", slug: "olivet" }, { name: "Saint-Jean-de-Braye", slug: "saint-jean-de-braye" }],
    nbRestaurants: "900",
    intro: "Le Loiret, avec Orléans comme préfecture, est le département le plus septentrional du Centre-Val de Loire. Terre de gastronomie ligérienne et porte des châteaux de la Loire, le département compte environ 900 établissements soumis à la formation HACCP.",
    content: "Orléans, ville historique de Jeanne d&apos;Arc, possède un patrimoine culinaire méconnu mais riche : le vinaigre d&apos;Orléans (tradition centenaire), le cotignac (pâte de coing), les pralines de Montargis. La proximité de Paris (1h en train) fait du Loiret un territoire attractif pour les professionnels de la restauration. Les bords de Loire, avec leurs guinguettes et restaurants, offrent une ambiance champêtre. Le tourisme lié aux châteaux (Sully-sur-Loire, Meung-sur-Loire) génère une activité de restauration importante."
  },
  {
    slug: "87-haute-vienne", name: "Haute-Vienne", num: "87", region: "Nouvelle-Aquitaine", lat: 45.8336, lng: 1.2611, cp: "87000", mainCity: "Limoges",
    cities: [{ name: "Limoges", slug: "limoges" }, { name: "Saint-Junien", slug: "saint-junien" }, { name: "Panazol", slug: "panazol" }, { name: "Isle", slug: "isle" }, { name: "Couzeix", slug: "couzeix" }],
    nbRestaurants: "750",
    intro: "La Haute-Vienne, avec Limoges comme préfecture, est un département de traditions culinaires limousines. La viande limousine, les châtaignes et le clafoutis font la renommée gastronomique de ce territoire où environ 750 établissements sont soumis à la formation HACCP.",
    content: "Limoges, célèbre pour sa porcelaine, possède également un patrimoine gastronomique riche. La viande de race limousine est l&apos;une des plus réputées de France, servie dans les boucheries et restaurants du département. Les châtaignes du Limousin, le clafoutis, le boudin aux châtaignes et le gâteau creusois sont des spécialités locales. La Haute-Vienne est un département rural où les circuits courts et les marchés de producteurs jouent un rôle important. Les restaurants, traiteurs et commerces alimentaires de Limoges et des bourgs environnants doivent tous respecter l&apos;obligation de formation HACCP."
  },
  {
    slug: "14-calvados", name: "Calvados", num: "14", region: "Normandie", lat: 49.1829, lng: -0.3707, cp: "14000", mainCity: "Caen",
    cities: [{ name: "Caen", slug: "caen" }, { name: "Lisieux", slug: "lisieux" }, { name: "Bayeux", slug: "bayeux" }, { name: "Hérouville-Saint-Clair", slug: "herouville-saint-clair" }, { name: "Deauville", slug: "deauville" }],
    nbRestaurants: "1 200",
    intro: "Le Calvados, département normand par excellence, est la terre du camembert, du cidre et du calvados AOC. De Caen à Deauville, en passant par les plages du Débarquement, plus de 1 200 établissements sont soumis à la formation HACCP.",
    content: "Caen, préfecture du Calvados, est une ville universitaire et historique. Les tripes à la mode de Caen, le trou normand et les fruits de mer font partie du patrimoine culinaire. Deauville et Trouville, stations balnéaires élégantes, possèdent des restaurants gastronomiques de renom. Les plages du Débarquement (Omaha Beach, Juno Beach) attirent un tourisme mémoriel important. Le calvados AOC, eau-de-vie de pomme vieillie en fût de chêne, est utilisé en cuisine et en pâtisserie. La formation HACCP est disponible régulièrement à Caen et dans les principales villes du département."
  },
  {
    slug: "29-finistere", name: "Finistère", num: "29", region: "Bretagne", lat: 47.9960, lng: -4.0999, cp: "29000", mainCity: "Quimper",
    cities: [{ name: "Brest", slug: "brest" }, { name: "Quimper", slug: "quimper" }, { name: "Morlaix", slug: "morlaix" }, { name: "Concarneau", slug: "concarneau" }, { name: "Douarnenez", slug: "douarnenez" }],
    nbRestaurants: "1 300",
    intro: "Le Finistère, pointe occidentale de la Bretagne, est un département maritime par excellence. Fruits de mer, crêperies, conserveries : plus de 1 300 établissements de restauration sont soumis à la formation HACCP dans le \"bout du monde\".",
    content: "Brest, deuxième ville de Bretagne, est un port militaire et commercial avec une scène gastronomique tournée vers la mer. Quimper, ville d&apos;art et d&apos;histoire, est la capitale de la Cornouaille et du kouign-amann. Les conserveries de Douarnenez et Concarneau sont un pan historique de l&apos;industrie alimentaire bretonne. Les fruits de mer — langoustines du Guilvinec, huîtres de la rade de Brest, coquilles Saint-Jacques — sont au cœur de la gastronomie finistérienne. Le tourisme côtier (Crozon, pointe du Raz, archipel de Molène) génère une activité de restauration saisonnière importante."
  },
  {
    slug: "21-cote-d-or", name: "Côte-d&apos;Or", num: "21", region: "Bourgogne-Franche-Comté", lat: 47.3220, lng: 5.0415, cp: "21000", mainCity: "Dijon",
    cities: [{ name: "Dijon", slug: "dijon" }, { name: "Beaune", slug: "beaune" }, { name: "Chenôve", slug: "chenove" }, { name: "Talant", slug: "talant" }, { name: "Chevigny-Saint-Sauveur", slug: "chevigny-saint-sauveur" }],
    nbRestaurants: "1 200",
    intro: "La Côte-d&apos;Or, avec Dijon comme préfecture, est le cœur de la Bourgogne viticole et gastronomique. Moutarde de Dijon, vins de la Côte de Nuits et de Beaune, escargots : plus de 1 200 établissements sont soumis à la formation HACCP.",
    content: "Dijon, capitale des Ducs de Bourgogne, est une ville gastronomique de premier plan. La Cité internationale de la Gastronomie et du Vin, inaugurée en 2022, consacre Dijon comme haut lieu de la gastronomie française. La moutarde de Dijon, le pain d&apos;épices, les escargots de Bourgogne et le bœuf bourguignon sont des spécialités mondialement connues. Beaune, capitale des vins de Bourgogne, avec ses Hospices et sa vente aux enchères célèbre, attire un tourisme viticole haut de gamme. Les restaurants, caves de dégustation et tables d&apos;hôtes du vignoble doivent tous respecter la formation HACCP."
  }
];

const CROISEMENTS_SECTEURS = [
  { slug: "restaurant", name: "Restaurant", naf: "56.10A", nafLabel: "Restaurant traditionnel", desc: "restaurants traditionnels" },
  { slug: "snack", name: "Snack", naf: "56.10C", nafLabel: "Restauration rapide", desc: "snacks et restauration rapide" },
  { slug: "food-truck", name: "Food Truck", naf: "56.10C", nafLabel: "Restauration de type rapide", desc: "food trucks" },
  { slug: "boucherie", name: "Boucherie", naf: "47.22Z", nafLabel: "Boucherie-charcuterie", desc: "boucheries et charcuteries" },
  { slug: "boulangerie", name: "Boulangerie", naf: "10.71C", nafLabel: "Boulangerie-pâtisserie", desc: "boulangeries et pâtisseries" }
];

const CROISEMENTS_VILLES = [
  { slug: "paris", name: "Paris", cp: "75001", lat: 48.8566, lng: 2.3522, spec: "capitale gastronomique mondiale avec plus de 15 000 restaurants" },
  { slug: "lyon", name: "Lyon", cp: "69001", lat: 45.7640, lng: 4.8357, spec: "capitale de la gastronomie et des bouchons lyonnais" },
  { slug: "marseille", name: "Marseille", cp: "13001", lat: 43.2965, lng: 5.3698, spec: "deuxième ville de France, cuisine méditerranéenne et bouillabaisse" },
  { slug: "toulouse", name: "Toulouse", cp: "31000", lat: 43.6047, lng: 1.4442, spec: "ville rose et capitale du cassoulet" },
  { slug: "bordeaux", name: "Bordeaux", cp: "33000", lat: 44.8378, lng: -0.5792, spec: "métropole viticole classée UNESCO" },
  { slug: "lille", name: "Lille", cp: "59000", lat: 50.6292, lng: 3.0573, spec: "capitale des Flandres, estaminets et brasseries" },
  { slug: "nantes", name: "Nantes", cp: "44000", lat: 47.2184, lng: -1.5536, spec: "métropole dynamique de l&apos;Ouest, fruits de mer et muscadet" },
  { slug: "nice", name: "Nice", cp: "06000", lat: 43.7102, lng: 7.2620, spec: "joyau de la Côte d&apos;Azur, cuisine niçoise et tourisme" },
  { slug: "strasbourg", name: "Strasbourg", cp: "67000", lat: 48.5734, lng: 7.7521, spec: "capitale européenne, winstubs et cuisine alsacienne" },
  { slug: "rennes", name: "Rennes", cp: "35000", lat: 48.1173, lng: -1.6778, spec: "capitale bretonne, crêperies et galettes" }
];

// ═══════════════════════════════════════════════════════════════════════════════
// GENERATORS
// ═══════════════════════════════════════════════════════════════════════════════

function generateRegionPage(r) {
  const cityLinks = r.cities.map(c =>
    `                <li><Link href="/formation-haccp-${c.slug}" className="text-blue-600 hover:text-blue-800 font-medium underline">${c.name}</Link></li>`
  ).join("\n");

  const faqItems = r.faq.map((f, i) => `
              <details key={${i}} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  ${f.q}
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">${f.a}</div>
              </details>`).join("\n");

  return `import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP ${r.name} — Hygiène Alimentaire Obligatoire 2026",
  description: "Formation hygiène alimentaire HACCP en ${r.name}. Organismes certifiés dans ${r.cities.length} grandes villes. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: \`\${SITE_URL}/formation-haccp-${r.slug}\` }
}

const FAQ = [
${r.faq.map(f => `  { question: "${f.q}", answer: "${f.a}" },`).join("\n")}
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Formation HACCP ${r.name}", url: "/formation-haccp-${r.slug}" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP en ${r.name}",
        description: "Formation spécifique en matière d&apos;hygiène alimentaire adaptée à la restauration commerciale en ${r.name}",
        city: "${r.mainCity}",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness({
        name: "Formation HACCP ${r.name}",
        city: "${r.mainCity}",
        postalCode: "${r.cp}",
        lat: ${r.lat},
        lng: ${r.lng}
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Villes</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP ${r.name}</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 ${r.name} — ${r.nbRestaurants} établissements concernés
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">en ${r.name}</span><br />
              <span className="text-2xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              ${r.intro}
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                ["✅", "Organismes agréés DRAAF"],
                ["📋", "Attestation officielle"],
                ["💰", "Financement OPCO possible"],
                ["⚡", "Sessions disponibles rapidement"],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-2">{icon} {text}</div>
              ))}
            </div>
          </div>
          <div>
            <LeadForm city="${r.mainCity}" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation hygiène alimentaire en ${r.name} — Ce qu&apos;il faut savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tous les établissements de restauration commerciale en ${r.name} doivent justifier d&apos;au minimum un salarié ayant suivi la formation spécifique en matière d&apos;hygiène alimentaire de 14 heures (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>${r.para1}</p>
            <p>${r.para2}</p>
            <p>${r.para3}</p>
            <p>${r.para4}</p>
            <p>${r.para5}</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Trouver une formation HACCP en ${r.name}</h2>
          <p className="text-gray-600 mb-4">Des sessions de formation sont disponibles dans les principales villes de la région :</p>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
${cityLinks}
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "${r.nbRestaurants}+" },
              { label: "Durée formation", value: "14 heures" },
              { label: "Prix indicatif", value: "290€ – 490€" },
              { label: "Financement OPCO", value: "100%" },
            ].map(stat => (
              <div key={stat.label} className="bg-blue-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-extrabold text-blue-700">{stat.value}</div>
                <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP en ${r.name}</h2>
          <div className="space-y-3">
${faqItems}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Trouver ma formation HACCP en ${r.name}</h2>
          <p className="text-blue-100 mb-6">Nos conseillers identifient les meilleures sessions disponibles dans votre secteur et vous transmettent un devis personnalisé sous 24h.</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
`;
}

function generateDeptPage(d) {
  const cityLinks = d.cities.map(c =>
    `                <li><Link href="/formation-haccp-${c.slug}" className="text-blue-600 hover:text-blue-800 font-medium underline">${c.name}</Link></li>`
  ).join("\n");

  const faq = [
    { q: `La formation HACCP est-elle obligatoire dans le ${d.name} (${d.num}) ?`, a: `Oui, tous les établissements de restauration commerciale du département ${d.name} (${d.num}) sont soumis à l&apos;obligation de former au minimum un salarié à l&apos;hygiène alimentaire. Cette formation de 14 heures est obligatoire depuis octobre 2012.` },
    { q: `Combien coûte une formation HACCP dans le ${d.name} ?`, a: `Le tarif varie entre 290€ et 490€ TTC en présentiel. La formation peut être prise en charge à 100% par l&apos;OPCO AKTO pour les salariés du secteur CHR ou par France Travail pour les demandeurs d&apos;emploi.` },
    { q: `Où trouver une formation HACCP dans le ${d.name} ?`, a: `Des sessions sont organisées régulièrement à ${d.cities.map(c => c.name).join(", ")}. Des formations en ligne sont également disponibles.` },
    { q: `Quelle est la DRAAF compétente pour le ${d.name} ?`, a: `Le département ${d.name} (${d.num}) dépend de la DRAAF ${d.region} pour l&apos;agrément des organismes de formation en hygiène alimentaire.` },
    { q: `Combien de restaurants sont concernés dans le ${d.name} ?`, a: `Le département ${d.name} compte environ ${d.nbRestaurants} établissements de restauration commerciale soumis à l&apos;obligation de formation HACCP.` }
  ];

  return `import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP ${d.name} (${d.num}) — Hygiène Alimentaire Obligatoire 2026",
  description: "Formation hygiène alimentaire HACCP dans le ${d.name} (${d.num}). Organismes certifiés DRAAF, 14h, attestation officielle. Financement OPCO disponible. Devis gratuit.",
  alternates: { canonical: \`\${SITE_URL}/formation-haccp-${d.slug}\` }
}

const FAQ = [
${faq.map(f => `  { question: "${f.q}", answer: "${f.a}" },`).join("\n")}
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par département", url: "/villes" },
        { name: "Formation HACCP ${d.name} (${d.num})", url: "/formation-haccp-${d.slug}" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — ${d.name} (${d.num})",
        description: "Formation HACCP adaptée à la restauration commerciale dans le département ${d.name}",
        city: "${d.mainCity}",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness({
        name: "Formation HACCP ${d.name}",
        city: "${d.mainCity}",
        postalCode: "${d.cp}",
        lat: ${d.lat},
        lng: ${d.lng}
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Départements</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP ${d.name} (${d.num})</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 ${d.name} (${d.num}) — ${d.region}
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">${d.name} (${d.num})</span><br />
              <span className="text-2xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              ${d.intro}
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                ["✅", "Organismes agréés DRAAF"],
                ["📋", "Attestation officielle"],
                ["💰", "Financement OPCO possible"],
                ["⚡", "Sessions disponibles rapidement"],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-2">{icon} {text}</div>
              ))}
            </div>
          </div>
          <div>
            <LeadForm city="${d.mainCity}" title="Devis gratuit — ${d.name} (${d.num})" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation hygiène alimentaire dans le ${d.name} — Tout savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tous les établissements de restauration commerciale du département ${d.name} (${d.num}) doivent justifier d&apos;au minimum un salarié ayant suivi la formation en hygiène alimentaire de 14 heures.
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>${d.content}</p>
            <p>La formation hygiène alimentaire dans le ${d.name} dure <strong>14 heures</strong>, conformément au décret du 24 juin 2011 modifié par l&apos;arrêté du 12 février 2024. Elle comprend désormais <strong>4 heures obligatoires de mise en pratique</strong>. Le programme aborde la réglementation européenne (paquet hygiène), les dangers alimentaires (biologiques, chimiques, physiques), les 7 principes de la méthode HACCP, le Plan de Maîtrise Sanitaire (PMS) et la gestion des allergènes.</p>
            <p>Le financement de la formation HACCP dans le ${d.name} peut être pris en charge par <strong>l&apos;OPCO AKTO</strong> pour les salariés du secteur CHR (cafés, hôtels, restaurants). Les demandeurs d&apos;emploi peuvent bénéficier d&apos;une prise en charge par <strong>France Travail</strong>. Les créateurs d&apos;entreprise peuvent mobiliser le CPF ou les aides régionales.</p>
            <p>Les services de la <strong>DDPP du ${d.name}</strong> effectuent des contrôles réguliers dans les établissements de restauration. L&apos;absence d&apos;attestation de formation HACCP lors d&apos;un contrôle peut entraîner une <strong>amende de 5e classe</strong> (jusqu&apos;à 1 500 €). Il est donc essentiel pour tout professionnel de la restauration dans le département de s&apos;assurer qu&apos;au moins un membre de son personnel détient cette attestation.</p>
            <p>À l&apos;issue de la formation de 14 heures, le stagiaire reçoit une <strong>attestation officielle</strong> délivrée par un organisme agréé par la DRAAF ${d.region}. Cette attestation est <strong>valable à vie</strong>, sans obligation de recyclage. Cependant, il est recommandé de mettre à jour ses connaissances régulièrement, notamment après les évolutions réglementaires comme l&apos;arrêté de 2024 sur les heures de pratique.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Principales villes du ${d.name} pour la formation HACCP</h2>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
${cityLinks}
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Restaurants dans le ${d.num}", value: "${d.nbRestaurants}+" },
              { label: "Durée formation", value: "14 heures" },
              { label: "Prix indicatif", value: "290€ – 490€" },
              { label: "Financement OPCO", value: "100%" },
            ].map(stat => (
              <div key={stat.label} className="bg-blue-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-extrabold text-blue-700">{stat.value}</div>
                <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP ${d.name} (${d.num})</h2>
          <div className="space-y-3">
            {FAQ.map((faq, i) => (
              <details key={i} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  {faq.question}
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Trouver ma formation HACCP dans le ${d.name}</h2>
          <p className="text-blue-100 mb-6">Nos conseillers identifient les meilleures sessions disponibles dans votre département et vous transmettent un devis personnalisé sous 24h.</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
`;
}

function generateCrossPage(secteur, ville) {
  const faq = [
    { q: `La formation HACCP est-elle obligatoire pour les ${secteur.desc} à ${ville.name} ?`, a: `Oui, tous les établissements de type ${secteur.name} (code NAF ${secteur.naf}) à ${ville.name} sont soumis à l&apos;obligation de former au minimum un salarié à l&apos;hygiène alimentaire (14h). Cette obligation est en vigueur depuis octobre 2012.` },
    { q: `Combien coûte la formation HACCP ${secteur.name} à ${ville.name} ?`, a: `Le tarif varie entre 290€ et 490€ TTC en présentiel à ${ville.name}. La formation peut être prise en charge à 100% par l&apos;OPCO AKTO pour les salariés du secteur ou par France Travail pour les demandeurs d&apos;emploi.` },
    { q: `Quelle est la durée de la formation HACCP ${secteur.name} ?`, a: `La formation dure 14 heures minimum, incluant 4 heures de mise en pratique obligatoire depuis l&apos;arrêté du 12 février 2024. Elle est généralement dispensée sur 2 jours.` },
    { q: `L&apos;attestation HACCP ${secteur.name} est-elle valable à vie ?`, a: `Oui, l&apos;attestation de formation en hygiène alimentaire est délivrée à vie, sans obligation de recyclage. Elle est valable pour tout type d&apos;établissement alimentaire en France.` },
    { q: `Peut-on suivre la formation HACCP ${secteur.name} en ligne depuis ${ville.name} ?`, a: `Certains organismes proposent des formations à distance. Cependant, depuis 2024, 4 heures de mise en pratique sont obligatoires. Des formules mixtes (e-learning + présentiel) existent à ${ville.name}.` }
  ];

  return `import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP ${secteur.name} à ${ville.name} — Hygiène Alimentaire 2026",
  description: "Formation hygiène alimentaire pour ${secteur.desc} à ${ville.name}. 14h, attestation DRAAF, financement OPCO. Devis gratuit sous 24h.",
  alternates: { canonical: \`\${SITE_URL}/formation-haccp-${secteur.slug}-${ville.slug}\` }
}

const FAQ = [
${faq.map(f => `  { question: "${f.q}", answer: "${f.a}" },`).join("\n")}
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formation HACCP ${secteur.name}", url: "/formation-haccp-${secteur.slug}" },
        { name: "Formation HACCP ${secteur.name} ${ville.name}", url: "/formation-haccp-${secteur.slug}-${ville.slug}" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP ${secteur.name} à ${ville.name}",
        description: "Formation hygiène alimentaire spécifique ${secteur.nafLabel} à ${ville.name}",
        city: "${ville.name}",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness({
        name: "Formation HACCP ${secteur.name} ${ville.name}",
        city: "${ville.name}",
        postalCode: "${ville.cp}",
        lat: ${ville.lat},
        lng: ${ville.lng}
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/formation-haccp-${secteur.slug}" className="hover:text-blue-600">${secteur.name}</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">${secteur.name} à ${ville.name}</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold">
              ⚠️ OBLIGATOIRE — Code NAF ${secteur.naf}
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">${secteur.name} à ${ville.name}</span><br />
              <span className="text-xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              ${ville.name}, ${ville.spec}, impose à tous les ${secteur.desc} de former au moins un salarié à l&apos;hygiène alimentaire. Trouvez la meilleure formation HACCP ${secteur.name} près de chez vous.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["✅ 14h de formation","📋 Attestation officielle DRAAF","💰 Financement OPCO 100%","⚡ Sessions à ${ville.name}"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="${secteur.slug}" city="${ville.name}" title="Devis gratuit — ${secteur.name} ${ville.name}" /></div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation HACCP ${secteur.name} à ${ville.name} — Ce que la loi impose</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tout établissement de type ${secteur.nafLabel} (code NAF ${secteur.naf}) à ${ville.name} doit justifier d&apos;au minimum un salarié ayant suivi la formation spécifique en matière d&apos;hygiène alimentaire de 14 heures.
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>À <strong>${ville.name}</strong>, les ${secteur.desc} sont soumis à l&apos;obligation de formation en hygiène alimentaire depuis le décret du 24 juin 2011. Cette formation, communément appelée « formation HACCP », dure <strong>14 heures</strong> et doit être dispensée par un organisme agréé par la DRAAF. Elle comprend désormais <strong>4 heures de mise en pratique obligatoire</strong> depuis l&apos;arrêté du 12 février 2024.</p>
            <p>Le programme de la formation HACCP pour les ${secteur.desc} couvre quatre grands axes : la <strong>réglementation</strong> française et européenne (paquet hygiène), l&apos;identification des <strong>dangers alimentaires</strong> spécifiques au secteur ${secteur.name.toLowerCase()}, les <strong>7 principes de la méthode HACCP</strong> et leur application concrète, ainsi que la mise en place d&apos;un <strong>Plan de Maîtrise Sanitaire</strong> (PMS) adapté.</p>
            <p>Les ${secteur.desc} de ${ville.name} font l&apos;objet de <strong>contrôles réguliers de la DDPP</strong>. L&apos;absence d&apos;attestation de formation HACCP peut entraîner une amende de 5e classe (jusqu&apos;à 1 500 €). Au-delà de l&apos;obligation légale, la formation permet de maîtriser les bonnes pratiques d&apos;hygiène essentielles à la sécurité des consommateurs.</p>
            <p>Le <strong>financement</strong> de la formation HACCP ${secteur.name} à ${ville.name} peut être pris en charge par l&apos;<strong>OPCO AKTO</strong> pour les salariés du secteur CHR, par <strong>France Travail</strong> pour les demandeurs d&apos;emploi, ou par le <strong>CPF</strong> et les aides régionales pour les créateurs d&apos;entreprise. Le tarif moyen à ${ville.name} est de <strong>290 € à 490 € TTC</strong> en présentiel.</p>
            <p>À l&apos;issue de la formation, le stagiaire reçoit une <strong>attestation officielle</strong> valable à vie, sans obligation de recyclage. Cette attestation est reconnue dans toute la France et permet d&apos;exercer dans n&apos;importe quel type d&apos;établissement alimentaire.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Programme adapté — ${secteur.name}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { titre: "Réglementation", points: ["Paquet hygiène européen", "Obligations légales ${secteur.nafLabel}", "Contrôles DDPP", "Sanctions et amendes"] },
              { titre: "Dangers alimentaires", points: ["Microbiologie des aliments", "Dangers biologiques, chimiques, physiques", "TIAC et toxi-infections", "Gestion des allergènes (14 allergènes)"] },
              { titre: "Méthode HACCP", points: ["7 principes HACCP", "Points Critiques de Contrôle (CCP)", "Plan de Maîtrise Sanitaire", "Traçabilité et documentation"] },
              { titre: "Mise en pratique (4h)", points: ["Températures conservation/cuisson", "Chaîne du froid et du chaud", "Nettoyage et désinfection", "Bonnes pratiques en ${secteur.name.toLowerCase()}"] },
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">✓</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — HACCP ${secteur.name} à ${ville.name}</h2>
          <div className="space-y-3">
            {FAQ.map((faq, i) => (
              <details key={i} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  {faq.question}
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Formation HACCP ${secteur.name} à ${ville.name}</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés à ${ville.name}</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
`;
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════════════════════

let count = 0;

// Regions
for (const r of REGIONS) {
  const dir = resolve(APP, `formation-haccp-${r.slug}`);
  writeFileSync(resolve(dir, "page.tsx"), generateRegionPage(r), "utf-8");
  count++;
  console.log(`✓ Region: ${r.name}`);
}

// Departments
for (const d of DEPARTEMENTS) {
  const dir = resolve(APP, `formation-haccp-${d.slug}`);
  writeFileSync(resolve(dir, "page.tsx"), generateDeptPage(d), "utf-8");
  count++;
  console.log(`✓ Dept: ${d.name} (${d.num})`);
}

// Cross pages
for (const s of CROISEMENTS_SECTEURS) {
  for (const v of CROISEMENTS_VILLES) {
    const dir = resolve(APP, `formation-haccp-${s.slug}-${v.slug}`);
    writeFileSync(resolve(dir, "page.tsx"), generateCrossPage(s, v), "utf-8");
    count++;
    console.log(`✓ Cross: ${s.name} × ${v.name}`);
  }
}

console.log(`\n✅ Done! ${count} pages generated.`);
