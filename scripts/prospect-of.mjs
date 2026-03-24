// C:\haccp-site\scripts\prospect-of.mjs
// Mode DRY-RUN — affiche seulement, n'envoie pas

const PROSPECTS = [
  {
    nom: "OAFormation",
    email: "contact@oaformation.fr",
    prenom_contact: "l'équipe",
    specialite: "Formation HACCP",
  },
  {
    nom: "FMP Formation",
    email: "contact@fmp-formation.fr",
    prenom_contact: "l'équipe",
    specialite: "Formation HACCP & Permis exploitation",
  },
  {
    nom: "France ProFormation",
    email: "contact@franceproformation.fr",
    prenom_contact: "l'équipe",
    specialite: "Formation HACCP",
  },
  {
    nom: "CNFCE",
    email: "contact@cnfce.com",
    prenom_contact: "l'équipe",
    specialite: "Formation professionnelle restauration",
  },
  {
    nom: "Zest Formation",
    email: "contact@zest-formation.fr",
    prenom_contact: "l'équipe",
    specialite: "Formation HACCP",
  },
];

function generateEmail(prospect) {
  const sujet = `Leads qualifiés HACCP — Restaurateurs en recherche de formation`;

  const corps = `Bonjour ${prospect.prenom_contact},

Je génère régulièrement des demandes de restaurateurs et professionnels de la restauration
qui cherchent activement une formation HACCP obligatoire.

Ces demandes proviennent de personnes en situation concrète :
- Ouverture d'un nouvel établissement
- Contrôle sanitaire en préparation
- Mise en conformité réglementaire
- Renouvellement de certification

Chaque lead inclut : nom, ville, type d'établissement, disponibilités et coordonnées directes.

Je propose une collaboration simple :
→ Je vous cède ces leads qualifiés à prix fixe, payé d'avance
→ Tarif : 15€/lead ou pack 10 leads à 120€ (soit 12€/lead)
→ Livraison sous 48h par email sécurisé
→ Leads exclusifs — non partagés avec d'autres organismes

Pour tester la qualité, je vous propose 3 leads offerts sans engagement.

Seriez-vous disponible pour un échange rapide de 15 minutes cette semaine ?

Cordialement,
Ayoub Alilou
Responsable acquisition — Secteur Formation Professionnelle
Email : 2adevellopment@gmail.com
Tél : +212 669 949 349`;

  return { sujet, corps };
}

// DRY RUN — Affichage seulement
console.log("=".repeat(60));
console.log("MODE DRY-RUN — Emails NON envoyés");
console.log("=".repeat(60));

for (const prospect of PROSPECTS) {
  const { sujet, corps } = generateEmail(prospect);
  console.log("\n" + "─".repeat(60));
  console.log(`À : ${prospect.email}`);
  console.log(`Objet : ${sujet}`);
  console.log("─".repeat(40));
  console.log(corps);
}

console.log("\n" + "=".repeat(60));
console.log(`Total : ${PROSPECTS.length} emails prêts à envoyer`);
console.log("Pour envoyer : changer DRY_RUN = false et ajouter BREVO_API_KEY");
console.log("=".repeat(60));
