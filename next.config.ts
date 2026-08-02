import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/formation-haccp-bordeaux-ville",
        destination: "/blog/formation-haccp-bordeaux",
        permanent: true,
      },
      // Nomenclature secteurs : une seule famille d'URLs (celle des dossiers
      // réels, liée depuis la home). Les variantes historiques font 301.
      {
        source: "/formation-haccp-boucherie",
        destination: "/formation-haccp-boucherie-charcuterie",
        permanent: true,
      },
      {
        source: "/formation-haccp-snack-kebab",
        destination: "/formation-haccp-snack",
        permanent: true,
      },
      {
        source: "/formation-haccp-restaurant-traditionnel",
        destination: "/formation-haccp-restaurant",
        permanent: true,
      },
      {
        source: "/formation-haccp-cafe-bar-restaurant",
        destination: "/formation-haccp-restaurant",
        permanent: true,
      },
      {
        source: "/formation-haccp-hotel-restaurant",
        destination: "/formation-haccp-hotel",
        permanent: true,
      },
      // Lien "financement" de la home : la page dédiée n'existe pas,
      // on envoie vers le guide OPCO (le financeur principal des CHR).
      {
        source: "/formation-haccp-financement",
        destination: "/financement-opco",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
