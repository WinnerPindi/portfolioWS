import project1 from "../assets/projects/Projet-1.png"
import project2 from "../assets/projects/projet-2.png"
import project3 from "../assets/projects/projet-3.png"


export const HERO_CONTENT = `Je suis passionné par la création d'expériences faciles à utiliser, accessibles et qui répondent aux besoins de l'utilisateur`;
export const ABOUT_TEXT = `À 23 ans, résidant dans le paysage dynamique du Canada, mon odyssée du codage a commencé en 2019. Cette première incursion s'est rapidement transformée en un amour ardent pour la programmation Web. Chaque projet dans lequel je me lance transcende le simple codage ; c'est l'occasion d'insuffler l'innovation et la créativité dans le monde numérique. Chaque étape de ce voyage est marquée par la réussite de divers défis et par le plaisir de découvrir quelque chose de nouveau dans chaque projet. Passionné par la création d'expériences utilisateur fluides et d'applications robustes, je cherche constamment à élargir mes compétences et à me tenir au courant des dernières avancées technologiques. Grâce à ma persévérance et à mon engagement envers l'excellence, je m'efforce de laisser un impact significatif sur le domaine en constante évolution du développement Web.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Stagiaire en Informatique / Projet de synthèse",
    company: "Université du Québec à Trois-Rivières",
    description: `Conception et développement d'une application web de réservation comme projet de
    session. Ce projet visait à démontrer une capacité à mener à bien le développement complet d'une
    solution logicielle, de l'idée initiale jusqu'au déploiement.`,
    technologies: [, "React.js","Tailwind css", "Node.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "BookNow",
    description:"Cette application web de réservation a été conçue et développée pour faciliter la réservation d'une chambre d'hotel en ligne",
    image: project1,
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    github: "https://github.com/WinnerPindi/BookNowApp"
  },
  {
    title: "Watowatch",
    description:"Watowatch, une application web React conçue pour recommander des films et des séries. ",
    image: project2,
    technologies: ["React", "The Movie Database"],
    github: "https://github.com/WinnerPindi/react-tv-show-adviser"
  },
  {
    title: "Pokedex",
    image: project3,
    description:"Application web conçue avec la technologie Angular, permettant de gérer les données relatives aux Pokémons",
    technologies: ["Angular"],
    github: "https://github.com/WinnerPindi/ng-pokemon-app"
  },
];

export const CONTACT = {
  email: "win.pindi@gmail.com",
};
