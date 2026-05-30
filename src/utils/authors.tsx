import Astro from 'astro';
import { getCollection } from 'astro:content';

// Fetch all team names dynamically
const teamMembers = await getCollection('team');
const teamNames = teamMembers.map(m => m.data.name.trim());

// We also manually include common variations or other common researchers of IPLAB in these papers (e.g. Giovanni Maria Farinella, Michele Mazzamuto, Francesco Ragusa)
const labResearchers = [
  ...teamNames,
  "Giovanni Maria Farinella",
  "Giovanni M. Farinella",
  "G. M. Farinella",
  "G.M. Farinella",
  "Michele Mazzamuto",
  "M. Mazzamuto",
  "Francesco Ragusa",
  "F. Ragusa",
  "Daniele Di Mauro",
  "D. Di Mauro",
  "D. di Mauro",
  "Alessandro Flaborea",
  "A. Flaborea",
  "Leonardo Plini",
  "L. Plini",
  "Zaira Manigrasso",
  "Z. Manigrasso",
  "Rosario Leonardi",
  "R. Leonardi",
  "Irene D'Ambra",
  "I. D'Ambra",
  "Antonio Finocchiaro",
  "A. Finocchiaro",
  "Davide Marana",
  "D. Marana",
  "Giuseppe Lando",
  "G. Lando",
  "Luigi Seminara",
  "L. Seminara",
  "Rosario Forte",
  "R. Forte",
  "Antonino Furnari",
  "A. Furnari",
  "Asfand Yaar",
  "A. Yaar",
  "Andrea Moschetto",
  "A. Moschetto",
  "Emanuele Galiano",
  "E. Galiano",
  "Michela Tasca",
  "M. Tasca",
  "Raffaele Calì",
  "R. Calì",
  "Raffaele Cali",
  "R. Cali",
  "Christian Quattrocchi",
  "C. Quattrocchi"
];

// Helper to render author names with underline for lab members
export function renderAuthors(authorsStr: string) {
  // We split by comma (and sometimes 'and')
  const authors = authorsStr.split(/, | and /g).map(a => a.trim());
  return authors.map((author, index) => {
    const isLabMember = labResearchers.some(r => {
      // Direct exact match or matching lastName with initials
      const n1 = r.toLowerCase();
      const n2 = author.toLowerCase();
      if (n1 === n2) return true;
      // Handle abbreviations like "Seminara, L." or "Seminara, Luigi"
      if (n2.includes(r.split(' ').pop()!.toLowerCase())) {
        // If author contains last name and first letter matches
        const rParts = r.split(' ');
        const rFirstInit = rParts[0][0].toLowerCase();
        if (n2.startsWith(rFirstInit) || n2.endsWith(rFirstInit) || n2.includes(rFirstInit + '.')) {
          return true;
        }
      }
      return false;
    });

    const isLast = index === authors.length - 1;
    return (
      <span key={author}>
        {isLabMember ? <span class="underline decoration-gray-400 font-[900]">{author}</span> : <span>{author}</span>}
        {!isLast && ", "}
      </span>
    );
  });
}
