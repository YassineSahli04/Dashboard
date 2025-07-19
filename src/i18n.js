import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
            dashboard: "DASHBOARD",
            welcome: "Welcome to your dashboard!",
            french: "French",
            english: "English",
            software:"Software Engineer",
            totalPositions2025: "Total Available IT Positions in 2025",
            meanSalary2025: "Mean IT Salary in 2025",
            jobSeekersIT: "Job Seekers in the IT Field",
            topCitiesJobs: "IT Jobs in the Top 5 IT Cities",
            availablePositionsIn: "Available positions for each field in",
            totalPositions: "Total Positions",
            openPositions: "Open Positions (in thousands)",
            aiEngineer: "AI Engineer",
            cybersecurityEngineer: "Cybersecurity Engineer",
            fullstackEngineer: "Full-Stack Software",
            topCitiesTitle: "Top 5 Cities Hiring in Tech (2025): AI, Cybersecurity & Fullstack Roles",
            annualSalaryTitle: "Annual Salary By Field in 2024-2025",
            supplyDemandTitleStart: "Job Market Supply and Demand in ",
            supplyDemandTitleEnd:" Field in 2025",
            open:"Open Positions",
            seekers:"Job Seekers",
            availablePositions:"Available Positions"
        },
      },
      fr: {
        translation: {
            dashboard: "TABLEAU DE BORD",
            welcome: "Bienvenue sur votre tableau de bord !",
            french: "Français",
            english: "Anglais",
            software:"Ingénieur Logiciel",
            totalPositions2025: "Total des postes TI disponibles en 2025",
            meanSalary2025: "Salaire moyen en TI en 2025",
            jobSeekersIT: "Chercheurs d'emploi dans le domaine des TI",
            topCitiesJobs: "Emplois TI dans les 5 principales villes en TI",
            availablePositionsIn: "Postes disponibles pour chaque domaine en",
            totalPositions: "Postes totaux",
            openPositions: "Postes ouverts (en milliers)",
            aiEngineer: "Ingénieur en IA",
            cybersecurityEngineer: "Ingénieur en cybersécurité",
            fullstackEngineer: "Développeur Full-Stack",
            topCitiesTitle: "Top 5 villes qui recrutent dans la tech (2025) : IA, cybersécurité et fullstack",
            annualSalaryTitle: "Salaire annuel par domaine en 2024-2025",
            supplyDemandTitleStart: "Offre et demande sur le marché de l’emploi dans le domaine ",
            supplyDemandTitleEnd:" en 2025",
            open: "Postes ouverts",
            seekers: "Chercheurs d'emploi",
            availablePositions:"Postes disponibles"
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });


export default i18n;