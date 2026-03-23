#!/usr/bin/env node
/**
 * generate-dept-pages.mjs — Creates department pages for all 76 remaining departments
 */
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const APP = resolve(__dirname, "..", "app");

// Already created: 75,69,13,31,33,59,67,44,76,06,34,57,38,63,35,45,87,14,29,21
const EXISTING = new Set(["75","69","13","31","33","59","67","44","76","06","34","57","38","63","35","45","87","14","29","21"]);

// All 96 French metropolitan departments
// [num, name, slug, region, chefLieu, cp, lat, lng, nbRestaurants, cities[5], intro, content]
const DEPTS = [
  ["01","Ain","ain","Auvergne-Rhône-Alpes","Bourg-en-Bresse","01000",46.2056,5.2252,"2 200",
    [["Bourg-en-Bresse","bourg-en-bresse"],["Oyonnax","oyonnax"],["Ambérieu-en-Bugey","amberieu-en-bugey"],["Gex","gex"],["Bellegarde-sur-Valserine","bellegarde-sur-valserine"]],
    "L&apos;Ain, entre Bresse, Dombes et pays de Gex, est un département gourmand : volaille de Bresse AOP, grenouilles, poissons des étangs de la Dombes, vins du Bugey. Avec environ 2 200 établissements de restauration, la formation HACCP est obligatoire pour tous les professionnels.",
    "Le département de l&apos;Ain bénéficie d&apos;une position stratégique entre Lyon et Genève. Le pays de Gex, frontalier de la Suisse, connaît un dynamisme économique qui se traduit par une offre de restauration croissante. La volaille de Bresse, seule volaille AOP de France, impose des exigences strictes en matière d&apos;hygiène alimentaire. Les restaurants, fermes-auberges et traiteurs du département doivent tous respecter l&apos;obligation de formation."
  ],
  ["02","Aisne","aisne","Hauts-de-France","Laon","02000",49.5639,3.6244,"1 500",
    [["Saint-Quentin","saint-quentin"],["Laon","laon"],["Soissons","soissons"],["Château-Thierry","chateau-thierry"],["Tergnier","tergnier"]],
    "L&apos;Aisne, département picard au riche patrimoine historique, compte environ 1 500 établissements de restauration. De Saint-Quentin à Soissons, la formation HACCP est incontournable pour les professionnels de la restauration.",
    "L&apos;Aisne est un département rural et historique des Hauts-de-France. Saint-Quentin, principale ville, et Laon, la préfecture perchée sur sa butte, concentrent l&apos;essentiel de l&apos;activité de restauration. La cuisine picarde — flamiche aux poireaux, ficelles picardes — et la proximité de la Champagne (Château-Thierry) enrichissent le panorama gastronomique local."
  ],
  ["03","Allier","allier","Auvergne-Rhône-Alpes","Moulins","03000",46.5656,3.3325,"1 200",
    [["Montluçon","montlucon"],["Vichy","vichy"],["Moulins","moulins"],["Cusset","cusset"],["Yzeure","yzeure"]],
    "L&apos;Allier, au cœur du Bourbonnais, est un département de traditions culinaires : pâté aux pommes de terre, pompe aux grattons, pastilles de Vichy. Avec environ 1 200 établissements de restauration, la formation HACCP s&apos;impose à tous les professionnels.",
    "Vichy, ville thermale reconnue, attire un tourisme de bien-être qui génère une activité de restauration importante. Montluçon et Moulins complètent l&apos;offre départementale. La DRAAF Auvergne-Rhône-Alpes agrée les organismes de formation pour ce département."
  ],
  ["04","Alpes-de-Haute-Provence","alpes-de-haute-provence","Provence-Alpes-Côte d&apos;Azur","Digne-les-Bains","04000",44.0925,6.2358,"800",
    [["Manosque","manosque"],["Digne-les-Bains","digne-les-bains"],["Sisteron","sisteron"],["Forcalquier","forcalquier"],["Château-Arnoux-Saint-Auban","chateau-arnoux-saint-auban"]],
    "Les Alpes-de-Haute-Provence, terre de lavande et d&apos;huile d&apos;olive, comptent environ 800 établissements de restauration. Le tourisme rural et les produits du terroir imposent une maîtrise de l&apos;hygiène alimentaire.",
    "Ce département alpin est marqué par le tourisme vert et les produits provençaux : huile d&apos;olive, miel de lavande, agneau de Sisteron. Les restaurants, auberges de montagne et marchés de producteurs sont concernés par l&apos;obligation de formation HACCP."
  ],
  ["05","Hautes-Alpes","hautes-alpes","Provence-Alpes-Côte d&apos;Azur","Gap","05000",44.5594,6.0786,"700",
    [["Gap","gap"],["Briançon","briancon"],["Embrun","embrun"],["Laragne-Montéglin","laragne-monteglin"],["L&apos;Argentière-la-Bessée","l-argentiere-la-bessee"]],
    "Les Hautes-Alpes, département le plus haut de France, comptent environ 700 établissements de restauration. Les stations de ski et le tourisme de montagne génèrent une activité saisonnière importante.",
    "Gap, préfecture du département, et Briançon, plus haute ville de France, concentrent l&apos;essentiel de la restauration. Les stations de ski (Serre Chevalier, Les Orres, Vars) voient leur nombre de restaurants augmenter en saison, nécessitant des formations HACCP pour le personnel saisonnier."
  ],
  ["07","Ardèche","ardeche","Auvergne-Rhône-Alpes","Privas","07000",44.7353,4.5981,"1 200",
    [["Annonay","annonay"],["Aubenas","aubenas"],["Guilherand-Granges","guilherand-granges"],["Tournon-sur-Rhône","tournon-sur-rhone"],["Privas","privas"]],
    "L&apos;Ardèche, terre de caractère entre vallée du Rhône et Cévennes, est réputée pour ses châtaignes, son picodon et ses vins. Environ 1 200 établissements de restauration sont soumis à la formation HACCP.",
    "Le tourisme estival autour des gorges de l&apos;Ardèche et du mont Gerbier-de-Jonc génère une forte activité saisonnière de restauration. Les marchés de producteurs, très populaires, complètent le panorama. La châtaigne d&apos;Ardèche AOP et le picodon AOP sont des produits phares du département."
  ],
  ["08","Ardennes","ardennes","Grand Est","Charleville-Mézières","08000",49.7731,4.7197,"1 000",
    [["Charleville-Mézières","charleville-mezieres"],["Sedan","sedan"],["Rethel","rethel"],["Givet","givet"],["Fumay","fumay"]],
    "Les Ardennes, département frontalier de la Belgique, comptent environ 1 000 établissements de restauration. La cacasse à cul nu, le boudin blanc de Rethel et la bière artisanale font la richesse culinaire locale.",
    "Charleville-Mézières, patrie du poète Rimbaud, et Sedan, avec sa forteresse, attirent un tourisme culturel. La proximité belge influence la gastronomie locale avec brasseries et restaurants de gibier."
  ],
  ["09","Ariège","ariege","Occitanie","Foix","09000",42.9647,1.6053,"600",
    [["Pamiers","pamiers"],["Foix","foix"],["Saint-Girons","saint-girons"],["Lavelanet","lavelanet"],["Mirepoix","mirepoix"]],
    "L&apos;Ariège, département pyrénéen, compte environ 600 établissements de restauration. La gastronomie montagnarde — azinat, mounjetado — et le tourisme thermal et de plein air imposent la formation HACCP.",
    "Ce département de montagne est marqué par le thermalisme (Ax-les-Thermes, Aulus-les-Bains) et le tourisme de neige. Foix, avec son château, et Pamiers concentrent l&apos;activité de restauration."
  ],
  ["10","Aube","aube","Grand Est","Troyes","10000",48.2972,2.7817,"1 400",
    [["Troyes","troyes"],["Romilly-sur-Seine","romilly-sur-seine"],["La Chapelle-Saint-Luc","la-chapelle-saint-luc"],["Saint-André-les-Vergers","saint-andre-les-vergers"],["Sainte-Savine","sainte-savine"]],
    "L&apos;Aube, au cœur de la Champagne, compte environ 1 400 établissements de restauration. Troyes, capitale de la maille et de l&apos;andouillette, est un pôle gastronomique reconnu.",
    "Troyes est célèbre pour son andouillette AAAAA et ses ruelles médiévales à pans de bois. La Champagne viticole (côte des Bar) génère un tourisme œnologique avec restaurants et tables d&apos;hôtes. Les magasins d&apos;usine attirent des millions de visiteurs qui fréquentent la restauration locale."
  ],
  ["11","Aude","aude","Occitanie","Carcassonne","11000",43.2128,2.3514,"1 800",
    [["Carcassonne","carcassonne"],["Narbonne","narbonne"],["Castelnaudary","castelnaudary"],["Lézignan-Corbières","lezignan-corbieres"],["Limoux","limoux"]],
    "L&apos;Aude, terre du cassoulet de Castelnaudary et de la Cité de Carcassonne, compte environ 1 800 établissements de restauration soumis à la formation HACCP.",
    "La Cité de Carcassonne, monument le plus visité du Midi, attire des millions de touristes. Castelnaudary, capitale mondiale du cassoulet, et Narbonne, ville romaine au bord de la Méditerranée, complètent l&apos;offre gastronomique. Les vins de Corbières et Minervois accompagnent une cuisine du Sud riche."
  ],
  ["12","Aveyron","aveyron","Occitanie","Rodez","12000",44.3497,2.5753,"1 100",
    [["Rodez","rodez"],["Millau","millau"],["Villefranche-de-Rouergue","villefranche-de-rouergue"],["Onet-le-Château","onet-le-chateau"],["Decazeville","decazeville"]],
    "L&apos;Aveyron, terre de l&apos;aligot, du roquefort et de l&apos;Aubrac, est un département gastronomique majeur. Environ 1 100 établissements de restauration sont concernés par la formation HACCP.",
    "Rodez, avec le musée Soulages, et Millau, célèbre pour son viaduc, attirent un tourisme culturel et naturel. Le roquefort AOP, l&apos;aligot de l&apos;Aubrac et le farçous aveyronnais font la renommée gastronomique du département. Les burons et fermes-auberges de l&apos;Aubrac sont des lieux emblématiques."
  ],
  ["15","Cantal","cantal","Auvergne-Rhône-Alpes","Aurillac","15000",44.9261,2.4406,"700",
    [["Aurillac","aurillac"],["Saint-Flour","saint-flour"],["Mauriac","mauriac"],["Arpajon-sur-Cère","arpajon-sur-cere"],["Ytrac","ytrac"]],
    "Le Cantal, département de moyenne montagne, est réputé pour son fromage AOP éponyme, sa truffade et sa gentiane. Environ 700 établissements de restauration sont soumis à la formation HACCP.",
    "Aurillac, préfecture et ville du festival de théâtre de rue, concentre l&apos;essentiel de la restauration. Le Cantal AOP (jeune, entre-deux, vieux) et la viande Salers sont les produits phares. Les burons d&apos;estive et les fermes-auberges enrichissent l&apos;offre touristique et gastronomique."
  ],
  ["16","Charente","charente","Nouvelle-Aquitaine","Angoulême","16000",45.6500,0.1556,"1 200",
    [["Angoulême","angouleme"],["Cognac","cognac"],["Soyaux","soyaux"],["La Couronne","la-couronne"],["L&apos;Isle-d&apos;Espagnac","l-isle-d-espagnac"]],
    "La Charente, terre du cognac et de la bande dessinée, compte environ 1 200 établissements de restauration. Le festival de la BD d&apos;Angoulême et les maisons de cognac attirent un tourisme important.",
    "Cognac, capitale de l&apos;eau-de-vie éponyme, et Angoulême, ville de la BD, sont les pôles touristiques majeurs. Le cognac est utilisé en cuisine et en pâtisserie. Le grillon charentais, le chabichou du Poitou et les escargots petit-gris complètent le patrimoine culinaire."
  ],
  ["17","Charente-Maritime","charente-maritime","Nouvelle-Aquitaine","La Rochelle","17000",46.1603,-1.1511,"2 800",
    [["La Rochelle","la-rochelle"],["Rochefort","rochefort"],["Saintes","saintes"],["Royan","royan"],["Tonnay-Charente","tonnay-charente"]],
    "La Charente-Maritime, département littoral de l&apos;Atlantique, est célèbre pour ses huîtres de Marennes-Oléron, son pineau des Charentes et ses îles (Ré, Oléron). Environ 2 800 établissements de restauration sont soumis à la formation HACCP.",
    "La Rochelle, port historique, est une destination touristique majeure. Les îles de Ré et d&apos;Oléron attirent des millions de visiteurs en été. Les huîtres de Marennes-Oléron, la mouclade et le farci poitevin sont des spécialités incontournables. La saisonnalité estivale multiplie les besoins en formation."
  ],
  ["18","Cher","cher","Centre-Val de Loire","Bourges","18000",47.0833,2.3964,"1 200",
    [["Bourges","bourges"],["Vierzon","vierzon"],["Saint-Amand-Montrond","saint-amand-montrond"],["Saint-Doulchard","saint-doulchard"],["Mehun-sur-Yèvre","mehun-sur-yevre"]],
    "Le Cher, avec Bourges, ville d&apos;art et d&apos;histoire, et les vignobles de Sancerre, compte environ 1 200 établissements de restauration soumis à la formation HACCP.",
    "Bourges, inscrite au patrimoine UNESCO pour sa cathédrale, attire un tourisme culturel. Le Printemps de Bourges anime chaque année la ville. Le sancerre, le crottin de Chavignol et la galette aux pommes de terre sont des spécialités du Berry."
  ],
  ["19","Corrèze","correze","Nouvelle-Aquitaine","Tulle","19000",45.2672,1.7686,"1 000",
    [["Brive-la-Gaillarde","brive-la-gaillarde"],["Tulle","tulle"],["Ussel","ussel"],["Malemort-sur-Corrèze","malemort-sur-correze"],["Égletons","egletons"]],
    "La Corrèze, terre de gastronomie limousine, est réputée pour sa viande de race limousine, ses noix du Périgord et ses champignons. Environ 1 000 établissements de restauration sont concernés par la formation HACCP.",
    "Brive-la-Gaillarde, ville dynamique du sud de la Corrèze, concentre la majorité des restaurants. La foire du livre et la foire grasse de Brive attirent des visiteurs gourmands. Le veau de lait sous la mère, les noix et le gâteau aux noix sont des produits emblématiques."
  ],
  ["2A","Corse-du-Sud","corse-du-sud","Corse","Ajaccio","20000",41.9263,8.7369,"1 500",
    [["Ajaccio","ajaccio"],["Porto-Vecchio","porto-vecchio"],["Propriano","propriano"],["Sartène","sartene"],["Bonifacio","bonifacio"]],
    "La Corse-du-Sud, avec Ajaccio, Bonifacio et Porto-Vecchio, est un pôle touristique majeur. Environ 1 500 établissements de restauration sont soumis à la formation HACCP.",
    "L&apos;insularité de la Corse-du-Sud crée des défis logistiques pour la formation. Les charcuteries corses AOP (lonzu, coppa, prisuttu), le brocciu et les vins de Figari font la richesse gastronomique. Le tourisme estival génère une forte saisonnalité avec des besoins en formation importants."
  ],
  ["2B","Haute-Corse","haute-corse","Corse","Bastia","20200",42.6972,9.4506,"1 200",
    [["Bastia","bastia"],["Corte","corte"],["Biguglia","biguglia"],["Borgo","borgo"],["Calvi","calvi"]],
    "La Haute-Corse, de Bastia à Calvi en passant par Corte, compte environ 1 200 établissements de restauration. La cuisine corse et le tourisme balnéaire imposent la formation HACCP.",
    "Bastia, deuxième ville de Corse, est le principal port commercial. Calvi, citadelle génoise, et la Balagne attirent un tourisme haut de gamme. Le figatellu, la pulenta et le fiadone sont des spécialités locales. Les formations sont disponibles principalement à Bastia et Corte."
  ],
  ["22","Côtes-d&apos;Armor","cotes-d-armor","Bretagne","Saint-Brieuc","22000",48.5131,-2.7608,"1 500",
    [["Saint-Brieuc","saint-brieuc"],["Lannion","lannion"],["Dinan","dinan"],["Lamballe-Armor","lamballe-armor"],["Plérin","plerin"]],
    "Les Côtes-d&apos;Armor, département breton entre Côte de Granit Rose et baie de Saint-Brieuc, comptent environ 1 500 établissements de restauration soumis à la formation HACCP.",
    "Saint-Brieuc, préfecture, et la Côte de Granit Rose (Perros-Guirec, Trégastel) attirent un tourisme côtier important. La coquille Saint-Jacques de la baie de Saint-Brieuc est un produit phare. Dinan, cité médiévale, possède de nombreux restaurants gastronomiques."
  ],
  ["23","Creuse","creuse","Nouvelle-Aquitaine","Guéret","23000",46.1714,1.8714,"400",
    [["Guéret","gueret"],["La Souterraine","la-souterraine"],["Aubusson","aubusson"],["Bourganeuf","bourganeuf"],["Felletin","felletin"]],
    "La Creuse, département rural par excellence, compte environ 400 établissements de restauration. La cuisine limousine et le tourisme vert imposent la formation HACCP même dans les plus petites structures.",
    "Guéret, préfecture, et Aubusson, célèbre pour ses tapisseries UNESCO, sont les principales villes. La Creuse mise sur le tourisme vert et les circuits courts. La viande limousine, les châtaignes et le pâté de pommes de terre sont les spécialités locales."
  ],
  ["24","Dordogne","dordogne","Nouvelle-Aquitaine","Périgueux","24000",45.1847,0.7211,"2 000",
    [["Périgueux","perigueux"],["Bergerac","bergerac"],["Sarlat-la-Canéda","sarlat-la-caneda"],["Coulounieix-Chamiers","coulounieix-chamiers"],["Trélissac","trelissac"]],
    "La Dordogne, terre du Périgord, est un haut lieu de la gastronomie française : foie gras, truffe noire, noix, vins de Bergerac. Environ 2 000 établissements de restauration sont soumis à la formation HACCP.",
    "Sarlat-la-Canéda, joyau médiéval du Périgord noir, est l&apos;une des villes les plus touristiques de France. Les marchés au gras, les fermes-auberges et les tables d&apos;hôtes sont très fréquentés. Le foie gras de canard, la truffe du Périgord, les cèpes et les noix imposent une maîtrise rigoureuse de l&apos;hygiène."
  ],
  ["25","Doubs","doubs","Bourgogne-Franche-Comté","Besançon","25000",47.2378,6.0241,"1 500",
    [["Besançon","besancon"],["Montbéliard","montbeliard"],["Pontarlier","pontarlier"],["Audincourt","audincourt"],["Valentigney","valentigney"]],
    "Le Doubs, département franc-comtois, est la terre du comté AOP et de la saucisse de Morteau. Environ 1 500 établissements de restauration sont soumis à la formation HACCP.",
    "Besançon, ville classée UNESCO, et Pontarlier, porte du Haut-Doubs, concentrent l&apos;essentiel de la restauration. Le comté AOP, la saucisse de Morteau IGP, la cancoillotte et l&apos;absinthe de Pontarlier sont des produits emblématiques. Le tourisme transfrontalier (Suisse) dynamise la restauration."
  ],
  ["26","Drôme","drome","Auvergne-Rhône-Alpes","Valence","26000",44.9333,4.8917,"1 800",
    [["Valence","valence"],["Montélimar","montelimar"],["Romans-sur-Isère","romans-sur-isere"],["Bourg-lès-Valence","bourg-les-valence"],["Pierrelatte","pierrelatte"]],
    "La Drôme, entre vallée du Rhône et Provence, est le pays du nougat de Montélimar, de la clairette de Die et de la truffe. Environ 1 800 établissements de restauration sont soumis à la formation HACCP.",
    "Valence, préfecture, est reconnue comme porte du Midi. Montélimar et son nougat, Romans et sa pogne : chaque ville a sa spécialité. Le picodon AOP, les olives de Nyons et la lavande complètent ce panorama provençal-drômois."
  ],
  ["27","Eure","eure","Normandie","Évreux","27000",49.0237,1.1517,"1 400",
    [["Évreux","evreux"],["Vernon","vernon"],["Louviers","louviers"],["Val-de-Reuil","val-de-reuil"],["Gisors","gisors"]],
    "L&apos;Eure, département normand entre Seine et campagne, compte environ 1 400 établissements de restauration. Les produits normands — cidre, camembert, crème — imposent la formation HACCP.",
    "Évreux, préfecture, et Vernon, porte de Giverny (jardins de Monet), concentrent la restauration. L&apos;Eure bénéficie de la proximité de Paris et de Rouen, attirant un tourisme de week-end. La cuisine normande y est bien représentée."
  ],
  ["28","Eure-et-Loir","eure-et-loir","Centre-Val de Loire","Chartres","28000",48.4469,1.4892,"1 200",
    [["Chartres","chartres"],["Dreux","dreux"],["Lucé","luce"],["Châteaudun","chateaudun"],["Nogent-le-Rotrou","nogent-le-rotrou"]],
    "L&apos;Eure-et-Loir, avec la cathédrale de Chartres classée UNESCO, compte environ 1 200 établissements de restauration. La Beauce, grenier de la France, alimente une gastronomie de terroir.",
    "Chartres attire des millions de visiteurs pour sa cathédrale et son événement Chartres en Lumières. Dreux et Châteaudun complètent l&apos;offre touristique. Le pâté de Chartres et les cochonnailles beauceronnes sont des spécialités locales."
  ],
  ["30","Gard","gard","Occitanie","Nîmes","30000",43.8367,4.3601,"2 500",
    [["Nîmes","nimes"],["Alès","ales"],["Bagnols-sur-Cèze","bagnols-sur-ceze"],["Beaucaire","beaucaire"],["Villeneuve-lès-Avignon","villeneuve-les-avignon"]],
    "Le Gard, département entre Cévennes et Méditerranée, est réputé pour sa brandade de Nîmes, ses olives et ses vins (costières-de-nîmes). Environ 2 500 établissements de restauration sont soumis à la formation HACCP.",
    "Nîmes, ville romaine aux arènes millénaires, et le pont du Gard attirent un tourisme important. Alès, porte des Cévennes, et Uzès, premier duché de France, complètent l&apos;offre. Les férias de Nîmes génèrent une activité de restauration intense."
  ],
  ["32","Gers","gers","Occitanie","Auch","32000",43.6461,0.5856,"800",
    [["Auch","auch"],["Condom","condom"],["Fleurance","fleurance"],["Lectoure","lectoure"],["Mirande","mirande"]],
    "Le Gers, cœur de la Gascogne, est le département du foie gras, de l&apos;armagnac et du magret de canard. Environ 800 établissements de restauration sont soumis à la formation HACCP.",
    "Auch, préfecture, et les bastides gasconnes attirent un tourisme gastronomique de qualité. Le Gers est le premier producteur français de foie gras. L&apos;armagnac, le floc-de-gascogne et le croustade gersoise complètent ce patrimoine culinaire exceptionnel."
  ],
  ["36","Indre","indre","Centre-Val de Loire","Châteauroux","36000",46.8108,1.6911,"900",
    [["Châteauroux","chateauroux"],["Issoudun","issoudun"],["Déols","deols"],["Le Blanc","le-blanc"],["Argenton-sur-Creuse","argenton-sur-creuse"]],
    "L&apos;Indre, au cœur du Berry, compte environ 900 établissements de restauration. Le pouligny-saint-pierre AOP et les lentilles vertes du Berry sont des produits phares.",
    "Châteauroux, préfecture, concentre l&apos;essentiel de la restauration. Le Berry est une terre de fromages de chèvre (pouligny-saint-pierre, valençay) et de gibier. George Sand a immortalisé les paysages et la cuisine berrichonne."
  ],
  ["37","Indre-et-Loire","indre-et-loire","Centre-Val de Loire","Tours","37000",47.3941,0.6848,"2 200",
    [["Tours","tours"],["Joué-lès-Tours","joue-les-tours"],["Saint-Cyr-sur-Loire","saint-cyr-sur-loire"],["Amboise","amboise"],["Saint-Pierre-des-Corps","saint-pierre-des-corps"]],
    "L&apos;Indre-et-Loire, cœur du Val de Loire et des châteaux, compte environ 2 200 établissements de restauration. Tours, ville gastronomique, et les rillettes de Tours sont emblématiques.",
    "Tours est une ville étudiante et gastronomique réputée. Les châteaux de Chenonceau, Amboise et Villandry attirent des millions de visiteurs. Les rillettes de Tours, les rillons, le sainte-maure-de-touraine AOP et les vins de Vouvray et Chinon enrichissent la table tourangelle."
  ],
  ["39","Jura","jura","Bourgogne-Franche-Comté","Lons-le-Saunier","39000",46.6744,5.5528,"900",
    [["Dole","dole"],["Lons-le-Saunier","lons-le-saunier"],["Saint-Claude","saint-claude"],["Champagnole","champagnole"],["Morez","morez"]],
    "Le Jura, département de moyenne montagne, est la terre du comté, du vin jaune et de la saucisse de Morteau. Environ 900 établissements de restauration sont soumis à la formation HACCP.",
    "Dole, patrie de Pasteur, et Lons-le-Saunier, ville thermale, concentrent la restauration. Le comté AOP, le morbier AOP, le vin jaune d&apos;Arbois et le bleu de Gex sont des trésors gastronomiques. Les stations de ski du Haut-Jura génèrent une activité saisonnière."
  ],
  ["40","Landes","landes","Nouvelle-Aquitaine","Mont-de-Marsan","40000",43.8933,-0.4972,"1 500",
    [["Mont-de-Marsan","mont-de-marsan"],["Dax","dax"],["Biscarrosse","biscarrosse"],["Saint-Paul-lès-Dax","saint-paul-les-dax"],["Tarnos","tarnos"]],
    "Les Landes, plus grand département forestier de France, sont réputées pour le foie gras, le magret et les férias de Dax. Environ 1 500 établissements de restauration sont soumis à la formation HACCP.",
    "Dax, première ville thermale de France, et les stations balnéaires (Hossegor, Capbreton, Biscarrosse) génèrent une forte activité de restauration. Le surf attire une clientèle jeune et internationale. Le foie gras des Landes, le magret et la tourtière landaise sont des incontournables."
  ],
  ["41","Loir-et-Cher","loir-et-cher","Centre-Val de Loire","Blois","41000",47.5861,1.3359,"1 200",
    [["Blois","blois"],["Romorantin-Lanthenay","romorantin-lanthenay"],["Vendôme","vendome"],["Vineuil","vineuil"],["Mer","mer"]],
    "Le Loir-et-Cher, terre de Chambord et des châteaux de la Loire, compte environ 1 200 établissements de restauration. Le tourisme château génère une activité gastronomique soutenue.",
    "Blois et son château royal, Chambord, le zoo de Beauval (premier zoo de France) : le Loir-et-Cher est un département très touristique. La tarte Tatin (née à Lamotte-Beuvron), les vins de Cheverny et le fromage de Selles-sur-Cher AOP sont les produits phares."
  ],
  ["42","Loire","loire","Auvergne-Rhône-Alpes","Saint-Étienne","42000",45.4397,4.3872,"2 200",
    [["Saint-Étienne","saint-etienne"],["Roanne","roanne"],["Saint-Chamond","saint-chamond"],["Firminy","firminy"],["Montbrison","montbrison"]],
    "La Loire, département entre Massif central et vallée du Rhône, compte environ 2 200 établissements de restauration. Saint-Étienne, ville UNESCO du design, et Roanne, cité gastronomique, imposent la formation HACCP.",
    "Saint-Étienne se réinvente comme ville créative et gastronomique. Roanne, avec la maison Troisgros (3 étoiles Michelin), est un temple de la haute gastronomie. La fourme de Montbrison AOP, les côtes-du-forez et la rigotte de Condrieu enrichissent le patrimoine culinaire."
  ],
  ["43","Haute-Loire","haute-loire","Auvergne-Rhône-Alpes","Le Puy-en-Velay","43000",45.0444,3.8844,"800",
    [["Le Puy-en-Velay","le-puy-en-velay"],["Monistrol-sur-Loire","monistrol-sur-loire"],["Brioude","brioude"],["Yssingeaux","yssingeaux"],["Langeac","langeac"]],
    "La Haute-Loire, département volcanique, est la terre de la lentille verte du Puy AOP et de la verveine. Environ 800 établissements de restauration sont soumis à la formation HACCP.",
    "Le Puy-en-Velay, point de départ du chemin de Compostelle, attire des pèlerins et touristes du monde entier. La lentille verte du Puy AOP, la verveine du Velay et le fin gras du Mézenc sont des produits d&apos;exception."
  ],
  ["46","Lot","lot","Occitanie","Cahors","46000",44.4478,1.4408,"900",
    [["Cahors","cahors"],["Figeac","figeac"],["Gourdon","gourdon"],["Gramat","gramat"],["Souillac","souillac"]],
    "Le Lot, département du Quercy, est réputé pour son vin de Cahors (malbec), sa truffe noire et ses noix. Environ 900 établissements de restauration sont soumis à la formation HACCP.",
    "Cahors, cité médiévale au bord du Lot, et Rocamadour, village classé accroché à la falaise, attirent un tourisme important. Le fromage de Rocamadour AOP, le vin noir de Cahors et la truffe du Quercy sont des trésors gastronomiques."
  ],
  ["47","Lot-et-Garonne","lot-et-garonne","Nouvelle-Aquitaine","Agen","47000",44.2028,0.6164,"1 200",
    [["Agen","agen"],["Villeneuve-sur-Lot","villeneuve-sur-lot"],["Marmande","marmande"],["Le Passage","le-passage"],["Tonneins","tonneins"]],
    "Le Lot-et-Garonne, terre du pruneau d&apos;Agen et de la tomate marmandaise, compte environ 1 200 établissements de restauration soumis à la formation HACCP.",
    "Agen, préfecture, est mondialement connue pour son pruneau. Marmande et sa tomate, Villeneuve-sur-Lot et ses bastides complètent le panorama. Le Lot-et-Garonne est un verger de la France : prunes, fraises, tomates, melons."
  ],
  ["48","Lozère","lozere","Occitanie","Mende","48000",44.5183,3.4989,"350",
    [["Mende","mende"],["Marvejols","marvejols"],["Saint-Chély-d&apos;Apcher","saint-chely-d-apcher"],["Langogne","langogne"],["Florac","florac"]],
    "La Lozère, département le moins peuplé de France, compte environ 350 établissements de restauration. Le tourisme vert et la gastronomie de l&apos;Aubrac imposent néanmoins la formation HACCP.",
    "La Lozère est un écrin de nature : gorges du Tarn, mont Lozère, Margeride, Aubrac. L&apos;aligot de l&apos;Aubrac, le pélardon AOP, la fouace et le miel des Cévennes sont des produits emblématiques. Les gîtes ruraux et tables d&apos;hôtes doivent respecter l&apos;obligation de formation."
  ],
  ["49","Maine-et-Loire","maine-et-loire","Pays de la Loire","Angers","49000",47.4784,-0.5632,"2 000",
    [["Angers","angers"],["Cholet","cholet"],["Saumur","saumur"],["Avrillé","avrille"],["Les Ponts-de-Cé","les-ponts-de-ce"]],
    "Le Maine-et-Loire, terre d&apos;Anjou, est réputé pour ses vins (anjou, saumur-champigny, coteaux-du-layon), ses rillauds et son cointreau. Environ 2 000 établissements de restauration sont soumis à la formation HACCP.",
    "Angers, ville verte et dynamique, et Saumur, cité du cheval et du vin, concentrent l&apos;offre de restauration. Cholet, capitale industrielle des Mauges, complète le panorama. Les fouées angevines, le crémet d&apos;Anjou et le cointreau (né à Angers) font la richesse gastronomique locale."
  ],
  ["50","Manche","manche","Normandie","Saint-Lô","50000",49.1167,-1.0833,"1 800",
    [["Cherbourg-en-Cotentin","cherbourg-en-cotentin"],["Saint-Lô","saint-lo"],["Granville","granville"],["Coutances","coutances"],["Avranches","avranches"]],
    "La Manche, département du Cotentin et du Mont-Saint-Michel, compte environ 1 800 établissements de restauration. Les fruits de mer, le beurre d&apos;Isigny et le prés-salé imposent la formation HACCP.",
    "Cherbourg-en-Cotentin, principal port, et Granville, la Monaco du Nord, sont des pôles gastronomiques. Le Mont-Saint-Michel, merveille de l&apos;Occident, génère une activité de restauration considérable. L&apos;agneau de prés-salé, les huîtres de Saint-Vaast et le beurre d&apos;Isigny AOP sont des produits d&apos;exception."
  ],
  ["51","Marne","marne","Grand Est","Châlons-en-Champagne","51000",48.9567,4.3631,"2 000",
    [["Reims","reims"],["Châlons-en-Champagne","chalons-en-champagne"],["Épernay","epernay"],["Vitry-le-François","vitry-le-francois"],["Tinqueux","tinqueux"]],
    "La Marne, berceau du champagne, compte environ 2 000 établissements de restauration. Reims, ville des sacres, et Épernay, avenue de Champagne, imposent les plus hauts standards d&apos;hygiène alimentaire.",
    "Le champagne est le moteur économique et touristique du département. Les coteaux, maisons et caves de Champagne sont inscrits au patrimoine UNESCO. Les biscuits roses de Reims, le boudin blanc de Rethel et la moutarde de Reims complètent le patrimoine culinaire."
  ],
  ["52","Haute-Marne","haute-marne","Grand Est","Chaumont","52000",48.1117,5.1389,"600",
    [["Saint-Dizier","saint-dizier"],["Chaumont","chaumont"],["Langres","langres"],["Joinville","joinville"],["Nogent","nogent"]],
    "La Haute-Marne, terre de forges et de fromages, compte environ 600 établissements de restauration. Le langres AOP et la coutellerie de Nogent sont des produits emblématiques.",
    "Chaumont et Saint-Dizier concentrent la restauration. Langres, ville fortifiée, est connue pour son fromage AOP. Le Festival International de l&apos;Affiche de Chaumont attire des visiteurs. La gastronomie champenoise et lorraine se mêlent dans ce département."
  ],
  ["53","Mayenne","mayenne","Pays de la Loire","Laval","53000",48.0731,-0.7689,"1 000",
    [["Laval","laval"],["Mayenne","mayenne"],["Château-Gontier-sur-Mayenne","chateau-gontier-sur-mayenne"],["Saint-Berthevin","saint-berthevin"],["Changé","change"]],
    "La Mayenne, département rural de l&apos;Ouest, compte environ 1 000 établissements de restauration. L&apos;entrecôte mayennaise et le fromage de Port-Salut sont des spécialités locales.",
    "Laval, préfecture, et Château-Gontier concentrent la restauration. Le département est réputé pour ses circuits courts et son agriculture de qualité. Le lait de la Mayenne alimente de grandes fromageries. Les crêperies et restaurants du terroir dominent l&apos;offre gastronomique."
  ],
  ["54","Meurthe-et-Moselle","meurthe-et-moselle","Grand Est","Nancy","54000",48.6921,6.1844,"2 200",
    [["Nancy","nancy"],["Vandœuvre-lès-Nancy","vandoeuvre-les-nancy"],["Lunéville","luneville"],["Toul","toul"],["Pont-à-Mousson","pont-a-mousson"]],
    "La Meurthe-et-Moselle, avec Nancy et sa place Stanislas classée UNESCO, compte environ 2 200 établissements de restauration soumis à la formation HACCP.",
    "Nancy est une ville universitaire et artistique (Art nouveau) avec une scène gastronomique dynamique. La quiche lorraine, le pâté lorrain, les bergamotes de Nancy et la mirabelle sont des spécialités emblématiques. Longwy, à la frontière luxembourgeoise, connaît un dynamisme transfrontalier."
  ],
  ["55","Meuse","meuse","Grand Est","Bar-le-Duc","55000",48.7728,5.1597,"500",
    [["Verdun","verdun"],["Bar-le-Duc","bar-le-duc"],["Commercy","commercy"],["Étain","etain"],["Stenay","stenay"]],
    "La Meuse, département de mémoire (Verdun), compte environ 500 établissements de restauration. La madeleine de Commercy et la confiture de groseilles de Bar-le-Duc sont des spécialités uniques.",
    "Verdun et ses champs de bataille attirent un tourisme mémoriel important. La madeleine de Commercy est exportée dans toute la France. La confiture de groseilles de Bar-le-Duc, épépinée à la plume d&apos;oie, est l&apos;un des produits les plus rares de la gastronomie française."
  ],
  ["56","Morbihan","morbihan","Bretagne","Vannes","56000",47.6586,-2.7606,"2 200",
    [["Vannes","vannes"],["Lorient","lorient"],["Lanester","lanester"],["Ploemeur","ploemeur"],["Hennebont","hennebont"]],
    "Le Morbihan, département breton du golfe et des îles, compte environ 2 200 établissements de restauration. Les huîtres du golfe, les galettes et le cidre imposent la formation HACCP.",
    "Vannes, cité médiévale au bord du golfe du Morbihan, et Lorient, port de pêche et ville du Festival Interceltique, sont les pôles gastronomiques. Les huîtres du golfe du Morbihan, la galette-saucisse et le far breton sont des incontournables. Belle-Île-en-Mer attire un tourisme haut de gamme."
  ],
  ["58","Nièvre","nievre","Bourgogne-Franche-Comté","Nevers","58000",46.9897,3.1589,"700",
    [["Nevers","nevers"],["Cosne-Cours-sur-Loire","cosne-cours-sur-loire"],["Varennes-Vauzelles","varennes-vauzelles"],["Decize","decize"],["La Charité-sur-Loire","la-charite-sur-loire"]],
    "La Nièvre, département du Morvan et du charolais, compte environ 700 établissements de restauration. Le bœuf charolais et les vins de Pouilly-sur-Loire imposent la formation HACCP.",
    "Nevers, ville de la faïence, et le circuit de Magny-Cours attirent des visiteurs. Le Morvan, parc naturel régional, offre une gastronomie de terroir : jambon du Morvan, gougères, bœuf charolais. Le pouilly-fumé est l&apos;un des grands vins blancs de Loire."
  ],
  ["60","Oise","oise","Hauts-de-France","Beauvais","60000",49.4294,2.0800,"2 200",
    [["Beauvais","beauvais"],["Compiègne","compiegne"],["Creil","creil"],["Nogent-sur-Oise","nogent-sur-oise"],["Senlis","senlis"]],
    "L&apos;Oise, département picard proche de Paris, compte environ 2 200 établissements de restauration. Senlis, Chantilly et Compiègne attirent un tourisme historique important.",
    "Beauvais et sa cathédrale, Compiègne et son palais impérial, Chantilly et son château (musée Condé, crème Chantilly) : l&apos;Oise est un département de patrimoine. La crème Chantilly, le cidre picard et les haricots de Soissons sont des spécialités emblématiques."
  ],
  ["61","Orne","orne","Normandie","Alençon","61000",48.4322,0.0931,"900",
    [["Alençon","alencon"],["Flers","flers"],["Argentan","argentan"],["L&apos;Aigle","l-aigle"],["La Ferté-Macé","la-ferte-mace"]],
    "L&apos;Orne, département normand du bocage et du Perche, compte environ 900 établissements de restauration. Le camembert de Normandie (né à Vimoutiers) impose la formation HACCP.",
    "Alençon, ville de la dentelle, et le Perche, territoire de charme, attirent un tourisme de week-end. Le camembert de Normandie AOP est né dans l&apos;Orne. Les tripes à la mode de la Ferté-Macé et le boudin de Mortagne sont des spécialités locales."
  ],
  ["62","Pas-de-Calais","pas-de-calais","Hauts-de-France","Arras","62000",50.2917,2.7775,"3 500",
    [["Calais","calais"],["Boulogne-sur-Mer","boulogne-sur-mer"],["Arras","arras"],["Lens","lens"],["Liévin","lievin"]],
    "Le Pas-de-Calais, département littoral et minier, compte environ 3 500 établissements de restauration. Boulogne-sur-Mer, premier port de pêche français, et la Côte d&apos;Opale imposent la formation HACCP.",
    "Boulogne-sur-Mer, premier centre de transformation des produits de la mer en Europe, et Calais, porte de l&apos;Angleterre, sont des pôles majeurs. Arras et ses places baroques, Lens et le Louvre-Lens attirent des visiteurs. Le welsh, les moules de Boulogne et le Maroilles du pays minier sont emblématiques."
  ],
  ["64","Pyrénées-Atlantiques","pyrenees-atlantiques","Nouvelle-Aquitaine","Pau","64000",43.2951,-0.3708,"2 500",
    [["Pau","pau"],["Bayonne","bayonne"],["Anglet","anglet"],["Biarritz","biarritz"],["Hendaye","hendaye"]],
    "Les Pyrénées-Atlantiques, entre Béarn et Pays basque, comptent environ 2 500 établissements de restauration. La cuisine basque — piment d&apos;Espelette, jambon de Bayonne, gâteau basque — impose la formation HACCP.",
    "Biarritz, station balnéaire élégante, et Bayonne, capitale du jambon et du chocolat, sont des destinations gastronomiques majeures. Pau, préfecture, offre une vue sur les Pyrénées et une cuisine béarnaise réputée (poule au pot, garbure). Le piment d&apos;Espelette AOP et l&apos;ossau-iraty AOP sont des trésors du terroir."
  ],
  ["65","Hautes-Pyrénées","hautes-pyrenees","Occitanie","Tarbes","65000",43.2328,0.0781,"1 200",
    [["Tarbes","tarbes"],["Lourdes","lourdes"],["Bagnères-de-Bigorre","bagneres-de-bigorre"],["Aureilhan","aureilhan"],["Séméac","semeac"]],
    "Les Hautes-Pyrénées, terre de Lourdes et du cirque de Gavarnie, comptent environ 1 200 établissements de restauration. Le tourisme religieux et montagnard impose la formation HACCP.",
    "Lourdes, deuxième ville hôtelière de France après Paris, accueille des millions de pèlerins chaque année. Tarbes, préfecture, et les stations de ski (Cauterets, La Mongie) complètent l&apos;offre. La garbure, le haricot tarbais IGP et le madiran sont des spécialités locales."
  ],
  ["66","Pyrénées-Orientales","pyrenees-orientales","Occitanie","Perpignan","66000",42.6887,2.8948,"2 200",
    [["Perpignan","perpignan"],["Canet-en-Roussillon","canet-en-roussillon"],["Saint-Estève","saint-esteve"],["Argelès-sur-Mer","argeles-sur-mer"],["Saint-Cyprien","saint-cyprien"]],
    "Les Pyrénées-Orientales, département catalan entre mer et montagne, comptent environ 2 200 établissements de restauration. Le tourisme balnéaire et la gastronomie catalane imposent la formation HACCP.",
    "Perpignan, ancienne capitale des rois de Majorque, et les stations balnéaires (Argelès, Canet, Saint-Cyprien) génèrent une activité intense. Collioure, Port-Vendres : la Côte Vermeille est un écrin gastronomique. Les anchois de Collioure, la cargolade (escargots grillés) et les vins de Banyuls sont emblématiques."
  ],
  ["68","Haut-Rhin","haut-rhin","Grand Est","Colmar","68000",48.0794,7.3558,"2 500",
    [["Mulhouse","mulhouse"],["Colmar","colmar"],["Saint-Louis","saint-louis"],["Illzach","illzach"],["Wittenheim","wittenheim"]],
    "Le Haut-Rhin, entre vignoble alsacien et frontière suisse, compte environ 2 500 établissements de restauration. Colmar, la Petite Venise, et la route des vins imposent les plus hauts standards HACCP.",
    "Colmar, joyau de l&apos;Alsace, et son marché de Noël sont mondialement connus. Mulhouse, ville industrielle reconvertie dans la culture (Cité de l&apos;Automobile, Cité du Train), possède une restauration variée. Le kugelhopf, les vins d&apos;Alsace (riesling, gewurztraminer) et le munster AOP sont des produits phares."
  ],
  ["70","Haute-Saône","haute-saone","Bourgogne-Franche-Comté","Vesoul","70000",47.6194,6.1533,"600",
    [["Vesoul","vesoul"],["Héricourt","hericourt"],["Lure","lure"],["Luxeuil-les-Bains","luxeuil-les-bains"],["Gray","gray"]],
    "La Haute-Saône, département franc-comtois discret, compte environ 600 établissements de restauration. Les fromages franc-comtois et la cuisine de montagne imposent la formation HACCP.",
    "Vesoul, préfecture immortalisée par Brel, et Luxeuil-les-Bains, station thermale, concentrent l&apos;activité. Le comté, la cancoillotte et les vins des Côtes-du-Jura accompagnent une cuisine rustique et généreuse."
  ],
  ["71","Saône-et-Loire","saone-et-loire","Bourgogne-Franche-Comté","Mâcon","71000",46.3069,4.8283,"2 000",
    [["Chalon-sur-Saône","chalon-sur-saone"],["Mâcon","macon"],["Le Creusot","le-creusot"],["Montceau-les-Mines","montceau-les-mines"],["Autun","autun"]],
    "La Saône-et-Loire, entre Bourgogne viticole et Bresse, compte environ 2 000 établissements de restauration. Le bœuf charolais, les vins du Mâconnais et la volaille de Bresse imposent la formation HACCP.",
    "Chalon-sur-Saône et Mâcon sont les pôles gastronomiques. Le charolais, race bovine née dans le département, est la première race à viande d&apos;Europe. La route des vins du Mâconnais (pouilly-fuissé, saint-véran), les escargots de Bourgogne et la pochouse complètent le patrimoine culinaire."
  ],
  ["72","Sarthe","sarthe","Pays de la Loire","Le Mans","72000",48.0061,0.1996,"1 800",
    [["Le Mans","le-mans"],["La Flèche","la-fleche"],["Sablé-sur-Sarthe","sable-sur-sarthe"],["Allonnes","allonnes"],["Coulaines","coulaines"]],
    "La Sarthe, terre des 24 Heures du Mans et des rillettes, compte environ 1 800 établissements de restauration soumis à la formation HACCP.",
    "Le Mans, cité Plantagenêt et ville des 24 Heures, est un pôle touristique et gastronomique. Les rillettes du Mans, le poulet de Loué (Label Rouge) et le jasnières (vin de Loire) sont des produits emblématiques. Le zoo de la Flèche attire des visiteurs."
  ],
  ["73","Savoie","savoie","Auvergne-Rhône-Alpes","Chambéry","73000",45.5646,5.9178,"2 500",
    [["Chambéry","chambery"],["Aix-les-Bains","aix-les-bains"],["Albertville","albertville"],["La Motte-Servolex","la-motte-servolex"],["Saint-Jean-de-Maurienne","saint-jean-de-maurienne"]],
    "La Savoie, département alpin des stations de ski et des fromages, compte environ 2 500 établissements de restauration. La fondue, la raclette et la tartiflette imposent la formation HACCP.",
    "Les stations de ski (Val Thorens, Courchevel, Méribel, La Plagne) génèrent une activité de restauration considérable en hiver. Chambéry, préfecture, et Aix-les-Bains, station thermale, complètent l&apos;offre. Le beaufort AOP, la tomme de Savoie et le reblochon (voisin) sont des trésors fromagers."
  ],
  ["74","Haute-Savoie","haute-savoie","Auvergne-Rhône-Alpes","Annecy","74000",45.8992,6.1294,"3 500",
    [["Annecy","annecy"],["Annemasse","annemasse"],["Thonon-les-Bains","thonon-les-bains"],["Cluses","cluses"],["Sallanches","sallanches"]],
    "La Haute-Savoie, terre du reblochon et de Chamonix, compte environ 3 500 établissements de restauration. Le tourisme de montagne, été comme hiver, impose la formation HACCP à grande échelle.",
    "Annecy, la Venise des Alpes, et Chamonix-Mont-Blanc attirent des millions de touristes. La frontière suisse et genevoise génère un dynamisme économique important. Le reblochon AOP (tartiflette), la fondue savoyarde, la raclette et l&apos;abondance AOP sont des incontournables de la restauration alpine."
  ],
  ["77","Seine-et-Marne","seine-et-marne","Île-de-France","Melun","77000",48.5415,2.6527,"3 500",
    [["Meaux","meaux"],["Chelles","chelles"],["Melun","melun"],["Pontault-Combault","pontault-combault"],["Savigny-le-Temple","savigny-le-temple"]],
    "La Seine-et-Marne, plus grand département francilien, compte environ 3 500 établissements de restauration. Disneyland Paris et Fontainebleau attirent des millions de visiteurs.",
    "Disneyland Paris, premier parc d&apos;attractions d&apos;Europe, génère une activité de restauration considérable. Fontainebleau et son château, Provins et sa cité médiévale (UNESCO) complètent l&apos;offre touristique. Le brie de Meaux AOP et le brie de Melun AOP sont les fromages emblématiques du département."
  ],
  ["78","Yvelines","yvelines","Île-de-France","Versailles","78000",48.8049,2.1204,"3 500",
    [["Versailles","versailles"],["Sartrouville","sartrouville"],["Mantes-la-Jolie","mantes-la-jolie"],["Saint-Germain-en-Laye","saint-germain-en-laye"],["Poissy","poissy"]],
    "Les Yvelines, département du château de Versailles, comptent environ 3 500 établissements de restauration. Le tourisme patrimonial et la vie économique intense imposent la formation HACCP.",
    "Le château de Versailles, monument le plus visité de France, génère une activité de restauration massive. Saint-Germain-en-Laye, Rambouillet et la vallée de Chevreuse offrent des restaurants de qualité. La proximité de Paris en fait un département dynamique pour la restauration."
  ],
  ["79","Deux-Sèvres","deux-sevres","Nouvelle-Aquitaine","Niort","79000",46.3231,-0.4586,"1 200",
    [["Niort","niort"],["Bressuire","bressuire"],["Thouars","thouars"],["Parthenay","parthenay"],["Melle","melle"]],
    "Les Deux-Sèvres, terre du marais poitevin et du chabichou, comptent environ 1 200 établissements de restauration soumis à la formation HACCP.",
    "Niort, ville des mutuelles, et le marais poitevin (Venise Verte) sont les pôles d&apos;attraction. Le chabichou du Poitou AOP, la mogette (haricot blanc) et l&apos;angélique de Niort sont des spécialités. Le tourisme fluvial dans le marais génère une activité de restauration saisonnière."
  ],
  ["80","Somme","somme","Hauts-de-France","Amiens","80000",49.8942,2.2957,"2 000",
    [["Amiens","amiens"],["Abbeville","abbeville"],["Albert","albert"],["Longueau","longueau"],["Péronne","peronne"]],
    "La Somme, département de la baie de Somme et d&apos;Amiens, compte environ 2 000 établissements de restauration. Le tourisme mémoriel et littoral impose la formation HACCP.",
    "Amiens, ville de Jules Verne et de la plus grande cathédrale gothique de France, est un pôle gastronomique. La baie de Somme, Grand Site de France, attire un tourisme nature (phoques, oiseaux). Les ficelles picardes, le gâteau battu et les hortillonnages (jardins flottants) sont emblématiques."
  ],
  ["81","Tarn","tarn","Occitanie","Albi","81000",43.9278,2.1486,"1 500",
    [["Albi","albi"],["Castres","castres"],["Gaillac","gaillac"],["Graulhet","graulhet"],["Mazamet","mazamet"]],
    "Le Tarn, département d&apos;Albi classée UNESCO, compte environ 1 500 établissements de restauration. Les vins de Gaillac (les plus anciens de France) et le pastel imposent la formation HACCP.",
    "Albi, cité épiscopale inscrite au patrimoine UNESCO, et Castres, ville de Jaurès, sont les pôles touristiques. Les vins de Gaillac, parmi les plus anciens vignobles de France, accompagnent une cuisine du Sud-Ouest généreuse. Le saucisson à l&apos;ail et la poule au pot complètent le patrimoine culinaire."
  ],
  ["82","Tarn-et-Garonne","tarn-et-garonne","Occitanie","Montauban","82000",44.0176,1.3547,"1 000",
    [["Montauban","montauban"],["Castelsarrasin","castelsarrasin"],["Moissac","moissac"],["Caussade","caussade"],["Valence-d&apos;Agen","valence-d-agen"]],
    "Le Tarn-et-Garonne, plus petit département d&apos;Occitanie, est réputé pour ses fruits (chasselas de Moissac AOP) et ses melons du Quercy. Environ 1 000 établissements sont soumis à la formation HACCP.",
    "Montauban, ville rose comme Toulouse, et Moissac, dont le cloître est classé UNESCO, attirent les visiteurs. Le chasselas de Moissac AOP, le melon du Quercy et les pruneaux sont des produits phares. La cuisine quercynoise mêle influences du Sud-Ouest et du Midi."
  ],
  ["83","Var","var","Provence-Alpes-Côte d&apos;Azur","Toulon","83000",43.1242,5.9280,"3 500",
    [["Toulon","toulon"],["Fréjus","frejus"],["Hyères","hyeres"],["Draguignan","draguignan"],["La Seyne-sur-Mer","la-seyne-sur-mer"]],
    "Le Var, département de la Côte d&apos;Azur et de la Provence verte, compte environ 3 500 établissements de restauration. Le tourisme balnéaire, Saint-Tropez et les vins de Provence imposent la formation HACCP.",
    "Saint-Tropez, mythe vivant de la Riviera, et les gorges du Verdon attirent des millions de visiteurs. Toulon, préfecture et port militaire, Fréjus et Hyères complètent l&apos;offre. Les rosés de Provence (bandol, côtes-de-provence), l&apos;aïoli et la bouillabaisse varoise sont emblématiques."
  ],
  ["84","Vaucluse","vaucluse","Provence-Alpes-Côte d&apos;Azur","Avignon","84000",43.9493,4.8055,"2 500",
    [["Avignon","avignon"],["Carpentras","carpentras"],["Orange","orange"],["Cavaillon","cavaillon"],["L&apos;Isle-sur-la-Sorgue","l-isle-sur-la-sorgue"]],
    "Le Vaucluse, terre des papes et de la lavande, compte environ 2 500 établissements de restauration. Le Festival d&apos;Avignon et les vins du Rhône (châteauneuf-du-pape) imposent la formation HACCP.",
    "Avignon, cité des Papes et du Festival de théâtre, attire des millions de visiteurs. Le melon de Cavaillon, la truffe noire du Ventoux, les cerises d&apos;Apt et les vins de Châteauneuf-du-Pape sont des produits d&apos;exception. L&apos;Isle-sur-la-Sorgue, capitale de l&apos;antiquité, attire le tourisme."
  ],
  ["85","Vendée","vendee","Pays de la Loire","La Roche-sur-Yon","85000",46.6706,-1.4269,"2 500",
    [["La Roche-sur-Yon","la-roche-sur-yon"],["Les Sables-d&apos;Olonne","les-sables-d-olonne"],["Challans","challans"],["Les Herbiers","les-herbiers"],["Montaigu-Vendée","montaigu-vendee"]],
    "La Vendée, premier département touristique de la côte atlantique, compte environ 2 500 établissements de restauration. Le Puy du Fou et les stations balnéaires imposent la formation HACCP.",
    "Le Puy du Fou, élu meilleur parc du monde, et les plages vendéennes (Les Sables-d&apos;Olonne, Noirmoutier, Saint-Jean-de-Monts) génèrent une activité de restauration considérable. La brioche vendéenne, les mojhettes, le préfou et les huîtres de la baie de Bourgneuf sont des spécialités locales."
  ],
  ["86","Vienne","vienne","Nouvelle-Aquitaine","Poitiers","86000",46.5802,0.3404,"1 500",
    [["Poitiers","poitiers"],["Châtellerault","chatellerault"],["Buxerolles","buxerolles"],["Saint-Benoît","saint-benoit"],["Chauvigny","chauvigny"]],
    "La Vienne, terre du Futuroscope et de l&apos;art roman, compte environ 1 500 établissements de restauration soumis à la formation HACCP.",
    "Le Futuroscope, parc d&apos;attractions dédié aux nouvelles technologies, attire 2 millions de visiteurs par an. Poitiers, ville universitaire et romane, possède une scène gastronomique variée. Le farci poitevin, le chabichou du Poitou AOP et le broyé du Poitou sont des spécialités locales."
  ],
  ["88","Vosges","vosges","Grand Est","Épinal","88000",48.1744,6.4503,"1 000",
    [["Épinal","epinal"],["Saint-Dié-des-Vosges","saint-die-des-vosges"],["Gérardmer","gerardmer"],["Remiremont","remiremont"],["Golbey","golbey"]],
    "Les Vosges, département de montagne et de forêts, comptent environ 1 000 établissements de restauration. Les fermes-auberges, le munster et les stations de ski imposent la formation HACCP.",
    "Gérardmer et La Bresse sont des stations de ski et de tourisme vert. Épinal, ville des images, et Plombières-les-Bains, station thermale, complètent l&apos;offre. Le munster AOP, la tarte aux myrtilles, les brimbelles et la tourte vosgienne sont des spécialités emblématiques."
  ],
  ["89","Yonne","yonne","Bourgogne-Franche-Comté","Auxerre","89000",47.7983,3.5672,"1 000",
    [["Auxerre","auxerre"],["Sens","sens"],["Joigny","joigny"],["Migennes","migennes"],["Avallon","avallon"]],
    "L&apos;Yonne, porte de la Bourgogne, compte environ 1 000 établissements de restauration. Le chablis, l&apos;époisses et les escargots de Bourgogne imposent la formation HACCP.",
    "Auxerre, cité d&apos;art au bord de l&apos;Yonne, et Sens, première cathédrale gothique de France, sont les pôles culturels. Le chablis, vin blanc mondialement connu, attire un tourisme viticole. L&apos;époisses AOP, la gougère et le jambon à la chablisienne sont des spécialités locales."
  ],
  ["90","Territoire de Belfort","territoire-de-belfort","Bourgogne-Franche-Comté","Belfort","90000",47.6397,6.8628,"500",
    [["Belfort","belfort"],["Delle","delle"],["Valdoie","valdoie"],["Bavilliers","bavilliers"],["Offemont","offemont"]],
    "Le Territoire de Belfort, plus petit département de France métropolitaine, compte environ 500 établissements de restauration. Les Eurockéennes de Belfort et le lion de Bartholdi attirent des visiteurs.",
    "Belfort, cité du Lion, est connue pour sa citadelle Vauban et le Festival des Eurockéennes. La gastronomie mêle influences alsaciennes, franc-comtoises et suisses. La croûte aux morilles, la saucisse fumée et les vins du Jura accompagnent une cuisine de caractère."
  ],
  ["91","Essonne","essonne","Île-de-France","Évry-Courcouronnes","91000",48.6321,2.4438,"3 000",
    [["Évry-Courcouronnes","evry-courcouronnes"],["Corbeil-Essonnes","corbeil-essonnes"],["Massy","massy"],["Savigny-sur-Orge","savigny-sur-orge"],["Viry-Châtillon","viry-chatillon"]],
    "L&apos;Essonne, département francilien en plein essor, compte environ 3 000 établissements de restauration. Le plateau de Saclay et les zones d&apos;activité génèrent une demande croissante en formation HACCP.",
    "L&apos;Essonne abrite le plateau de Saclay, futur plus grand campus scientifique d&apos;Europe. Évry-Courcouronnes, préfecture, et les villes de la vallée (Corbeil, Massy) concentrent la restauration. La diversité culturelle du département se reflète dans une offre de restauration variée."
  ],
  ["92","Hauts-de-Seine","hauts-de-seine","Île-de-France","Nanterre","92000",48.8924,2.2073,"5 000",
    [["Boulogne-Billancourt","boulogne-billancourt"],["Nanterre","nanterre"],["Courbevoie","courbevoie"],["Colombes","colombes"],["Asnières-sur-Seine","asnieres-sur-seine"]],
    "Les Hauts-de-Seine, département le plus riche de France, comptent environ 5 000 établissements de restauration. La Défense, premier quartier d&apos;affaires européen, impose des standards HACCP élevés.",
    "La Défense génère une demande massive en restauration d&apos;entreprise et rapide. Boulogne-Billancourt, Nanterre et Neuilly-sur-Seine sont des pôles gastronomiques. La densité de population et le pouvoir d&apos;achat élevé se traduisent par une offre de restauration haut de gamme."
  ],
  ["93","Seine-Saint-Denis","seine-saint-denis","Île-de-France","Bobigny","93000",48.9000,2.4500,"4 000",
    [["Saint-Denis","saint-denis"],["Montreuil","montreuil"],["Aubervilliers","aubervilliers"],["Aulnay-sous-Bois","aulnay-sous-bois"],["Drancy","drancy"]],
    "La Seine-Saint-Denis, département le plus jeune de France, compte environ 4 000 établissements de restauration. Les JO 2024 ont dopé la restauration locale, et la formation HACCP reste indispensable.",
    "Saint-Denis et sa basilique royale, Montreuil et sa scène culturelle, le Stade de France : la Seine-Saint-Denis est un département en transformation. La diversité culturelle se traduit par une restauration monde (africaine, asiatique, caribéenne). Les dark kitchens et food trucks se multiplient."
  ],
  ["94","Val-de-Marne","val-de-marne","Île-de-France","Créteil","94000",48.7840,2.4552,"3 500",
    [["Créteil","creteil"],["Vitry-sur-Seine","vitry-sur-seine"],["Champigny-sur-Marne","champigny-sur-marne"],["Saint-Maur-des-Fossés","saint-maur-des-fosses"],["Ivry-sur-Seine","ivry-sur-seine"]],
    "Le Val-de-Marne, département francilien du sud-est, compte environ 3 500 établissements de restauration. Le MIN de Rungis, plus grand marché de produits frais au monde, est situé dans le département.",
    "Le MIN de Rungis approvisionne les restaurants de toute la France. Créteil, préfecture, et les bords de Marne avec leurs guinguettes historiques concentrent la restauration. Le lac de Créteil et les parcs départementaux attirent un tourisme de proximité."
  ],
  ["95","Val-d&apos;Oise","val-d-oise","Île-de-France","Pontoise","95000",49.0525,2.1006,"3 000",
    [["Argenteuil","argenteuil"],["Cergy","cergy"],["Sarcelles","sarcelles"],["Garges-lès-Gonesse","garges-les-gonesse"],["Franconville","franconville"]],
    "Le Val-d&apos;Oise, département francilien du nord, compte environ 3 000 établissements de restauration. L&apos;aéroport Charles-de-Gaulle et les villes nouvelles génèrent une forte activité de restauration.",
    "L&apos;aéroport Roissy-Charles-de-Gaulle, premier aéroport de France, et Cergy-Pontoise, ville nouvelle, sont des moteurs économiques. Auvers-sur-Oise, village de Van Gogh, et l&apos;abbaye de Royaumont attirent un tourisme culturel. La diversité culinaire reflète le cosmopolitisme du département."
  ],
];

function generateDeptPage(d) {
  const [num, name, slug, region, mainCity, cp, lat, lng, nbRest, cities, intro, content] = d;
  const fullSlug = `${num}-${slug}`;
  const cityLinks = cities.map(([cn,cs]) =>
    `                <li><Link href="/formation-haccp-${cs}" className="text-blue-600 hover:text-blue-800 font-medium underline">${cn}</Link></li>`
  ).join("\n");
  const cityNames = cities.map(c=>c[0]).join(", ");

  return `import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP ${name} (${num}) — Hygiène Alimentaire Obligatoire 2026",
  description: "Formation hygiène alimentaire HACCP dans le ${name} (${num}). Organismes certifiés DRAAF, 14h, attestation officielle. Financement OPCO disponible. Devis gratuit.",
  alternates: { canonical: \`\${SITE_URL}/formation-haccp-${fullSlug}\` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire dans le ${name} (${num}) ?", answer: "Oui, tous les établissements de restauration commerciale du département ${name} (${num}) sont soumis à l&apos;obligation de former au minimum un salarié à l&apos;hygiène alimentaire. Cette formation de 14 heures est obligatoire depuis octobre 2012." },
  { question: "Combien coûte une formation HACCP dans le ${name} ?", answer: "Le tarif varie entre 290€ et 490€ TTC en présentiel. La formation peut être prise en charge à 100% par l&apos;OPCO AKTO pour les salariés du secteur CHR ou par France Travail pour les demandeurs d&apos;emploi." },
  { question: "Où trouver une formation HACCP dans le ${name} ?", answer: "Des sessions sont organisées régulièrement à ${cityNames}. Des formations en ligne sont également disponibles." },
  { question: "Quelle est la DRAAF compétente pour le ${name} ?", answer: "Le département ${name} (${num}) dépend de la DRAAF ${region} pour l&apos;agrément des organismes de formation en hygiène alimentaire." },
  { question: "Combien de restaurants sont concernés dans le ${name} ?", answer: "Le département ${name} compte environ ${nbRest} établissements de restauration commerciale soumis à l&apos;obligation de formation HACCP." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par département", url: "/villes" },
        { name: "Formation HACCP ${name} (${num})", url: "/formation-haccp-${fullSlug}" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — ${name} (${num})",
        description: "Formation HACCP adaptée à la restauration commerciale dans le département ${name}",
        city: "${mainCity}",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness({
        name: "Formation HACCP ${name}",
        city: "${mainCity}",
        postalCode: "${cp}",
        lat: ${lat},
        lng: ${lng}
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Départements</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP ${name} (${num})</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 ${name} (${num}) — ${region}
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">${name} (${num})</span><br />
              <span className="text-2xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              ${intro}
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
            <LeadForm city="${mainCity}" title="Devis gratuit — ${name} (${num})" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation hygiène alimentaire dans le ${name} — Tout savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tous les établissements de restauration commerciale du département ${name} (${num}) doivent justifier d&apos;au minimum un salarié ayant suivi la formation en hygiène alimentaire de 14 heures.
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>${content}</p>
            <p>La formation hygiène alimentaire dans le ${name} dure <strong>14 heures</strong>, conformément au décret du 24 juin 2011 modifié par l&apos;arrêté du 12 février 2024. Elle comprend désormais <strong>4 heures obligatoires de mise en pratique</strong>. Le programme aborde la réglementation européenne (paquet hygiène), les dangers alimentaires (biologiques, chimiques, physiques), les 7 principes de la méthode HACCP, le Plan de Maîtrise Sanitaire (PMS) et la gestion des allergènes.</p>
            <p>Le financement de la formation HACCP dans le ${name} peut être pris en charge par <strong>l&apos;OPCO AKTO</strong> pour les salariés du secteur CHR (cafés, hôtels, restaurants). Les demandeurs d&apos;emploi peuvent bénéficier d&apos;une prise en charge par <strong>France Travail</strong>. Les créateurs d&apos;entreprise peuvent mobiliser le CPF ou les aides régionales.</p>
            <p>Les services de la <strong>DDPP du ${name}</strong> effectuent des contrôles réguliers dans les établissements de restauration. L&apos;absence d&apos;attestation de formation HACCP lors d&apos;un contrôle peut entraîner une <strong>amende de 5e classe</strong> (jusqu&apos;à 1 500 €). Il est donc essentiel pour tout professionnel de la restauration dans le département de s&apos;assurer qu&apos;au moins un membre de son personnel détient cette attestation.</p>
            <p>À l&apos;issue de la formation de 14 heures, le stagiaire reçoit une <strong>attestation officielle</strong> délivrée par un organisme agréé par la DRAAF ${region}. Cette attestation est <strong>valable à vie</strong>, sans obligation de recyclage. Cependant, il est recommandé de mettre à jour ses connaissances régulièrement, notamment après les évolutions réglementaires comme l&apos;arrêté de 2024 sur les heures de pratique.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Principales villes du ${name} pour la formation HACCP</h2>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
${cityLinks}
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Restaurants dans le ${num}", value: "${nbRest}+" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP ${name} (${num})</h2>
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
          <h2 className="text-2xl font-bold mb-3">Trouver ma formation HACCP dans le ${name}</h2>
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

// Main
let count = 0;
const allSlugs = [];
for (const d of DEPTS) {
  const num = d[0];
  if (EXISTING.has(num)) continue;
  const slug = d[2];
  const fullSlug = `${num}-${slug}`;
  const dir = resolve(APP, `formation-haccp-${fullSlug}`);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, "page.tsx"), generateDeptPage(d), "utf-8");
  allSlugs.push(fullSlug);
  count++;
  console.log(`✓ ${num} ${d[1]}`);
}

console.log(`\n✅ ${count} department pages generated.`);
console.log(`\nSlugs for sitemap:\n${JSON.stringify(allSlugs)}`);
