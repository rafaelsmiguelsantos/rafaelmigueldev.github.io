
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Rafael dos Santos Miguel Filho",
  title: "Saudações!",
  subTitle: emoji("Sou Desenvolvedor Web, e pode crer que amo codar! 🚀 Minhas principais experiencias são em JavaScript, .NET Core, TypeScript e no Framework Angular 2. Desenvolvo alguns projetos básicos em ReactJS, React Native e NodeJS. Estou estudando atualmente essas tecnologias para desenvolvimento profissional!"),
  //resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  //github: "",
  linkedin: "https://www.linkedin.com/in/rafael-m-09871b14b/",
  gmail: "miguel.desenvolvimento@hotmail.com",
  //gitlab: "",
  //facebook: "",
  //medium: "",
 //stackoverflow: ""
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "O que eu sei... ",
  subTitle: "Trabalho no frontend com Angular e no backend trabalho com .NET Core e SQL",
  skills: [
    emoji("🚀 Com Angular já domino rotas, services, responsividade, guards, pipes, formulários reativos, Input e Output."),
    emoji("🚀 Foi trabalhando com Angular que tive contato com TypeScript e agora todos meus projetos utilizo TypeScript"),
    emoji("🚀 Depois de estudar por conta própria ReactJS, resolvi me aprofundar mais na stack e estou aplicando em meus projetos pessoais ReactJS e ReactNative, utilizando do TypeScript.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Yarn",
      fontAwesomeClassname: "fab fa-yarn"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Centro Universitário Internacional",
      logo: require("./assets/images/uninter.png"),
      subHeader: "Gestão da Tecnologia da Informação",
      duration: "Abril de 2018 - Agosto 2020",
      desc: "",
    },
    {
      schoolName: "RocketSeat",
      logo: require("./assets/images/rocketseat.png"),
      subHeader: "ReactJS, React Native e NodeJS",
      duration: "Outubro de 2020 - Previsão de concluir em 2021",
      desc: "Curso focado em desenvolvimento web e mobile, utilizando de API em NodeJS.",
      descBullets: [
        "Além do conteudo de qualidade os alunos tem uma comunidade incrivel que ajuda a desenvolver suas habilidades no dia a dia e fixar seu conhecimento.",
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Angular",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend com ReactJS",
      progressPercentage: "65%"
    },
    {
      Stack: "SQL",
      progressPercentage: "50%"
    },
    {
      Stack: ".NET Core",
      progressPercentage: "65%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Programador Trainee",
      company: "EPTV",
      companylogo: require("./assets/images/Eptv.png"),
      date: "Novembro de 2019 – Emprego atual",
      desc: "Entrei como estagiário na equipe de Tecnologia. Realizava suporte aos sites de dominio da EPTV. Depois fui efetivado como Programador Trainee.",
      descBullets: [
        "Hoje atuo em desenvolvimento web tanto no frontend e backend. Atuando diariamente com CSS, HTML, JAVASCRIPT, .NET Core e Framework Angular.",
        "Realizo desenvolvimento e manutenção de sites que são de dominio da EPTV."
      ]
    },
    {
      role: "Jovem Aprendiz",
      company: "Aeroportos Brasil Viracopos",
      companylogo: require("./assets/images/viracopos.png"),
      date: "Março 2018 – Agosto de 2019",
      desc: "Tive a oportunidade de aprender muito e um pouco de cada área. Tive experiencias no administrativo da T.I, atuei com a equipe de Infraestrutura do Aeroporto e nos últimos meses trabalhei com a equipe de Segurança da Informação.",
      descBullets: [
        "Desenvolvi habilidades como comunicação, resolver problemas urgentes, lidar com erros e aprender com os meus erros."
      ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company
/**
 * 
 * 
 */
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji(""),
  subtitle: "",

  achievementsCards: [
    
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
   
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Meus contatos 📱"),
  subtitle: "Se quiser entrar em contato para conversar sobre algum projeto ou apenas queira me conhecer, fique à vontade!",
  number: "+55 - (19) 98605-1939",
  email_address: "miguel@desenvolvimento@hotmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
