import {
  cloud,
  sre,
  engineer,
  shell,
  azure,
  python,
  kubernetes,
  ansible,
  terraform,
  docker,
  telekom,
  accenture,
  carrent,
  jobit,
  tripguide,
  jenkins,
  devops,
  argo,
  actions,
  elastic,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "DevOps Engineer",
    icon: devops,
  },
  {
    title: "Cloud Engineer",
    icon: cloud,
  },
  {
    title: "Site Reliability Engineer",
    icon: sre,
  },
  {
    title: "Software Engineer",
    icon: engineer,
  },
];

const technologies = [
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Shell",
    icon: shell,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Jenins",
    icon: jenkins,
  },
  {
    name: "Ansible",
    icon: ansible,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Argo CD",
    icon: argo,
  },
  {
    name: "GitHub Actions",
    icon: actions,
  },
  {
    name: "Elasticsearch",
    icon: elastic,
  },
];

const experiences = [
  {
    title: "System Administrator",
    company_name: "Deutsche Telekom",
    icon: telekom,
    iconBg: "#383E56",
    date: "Jul 2020 - Mar 2021",
    points: [
      "Administering and maintaining the IT-Shop along with various technology tools.",
      "Handling the management of user accounts and workstations.",
      "Monitoring system performance and ensuring maintenance as per requirements.",
      "Troubleshooting system outages and addressing technical issues effectively.",
    ],
  },
  {
    title: "Application Development Associate",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Dec 2022",
    points: [
      "Deploying infrastructure and integrating aspects such as source control, security, compliance, CI/CD, monitoring, and feedback mechanisms.",
      "Creating scalable and serverless infrastructure using cutting-edge technologies.",
      "Engaging with various cloud technologies and covering all facets of the DevOps ecosystem from packaging to operations.",
      "Establishing monitoring systems for service health, including fault detection, alerting, and recovery strategies.",
    ],
  },
  {
    title: "Custom Software Engineering Analyst",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#383E56",
    date: "Dec 2022 - Nov 2023",
    points: [
      "Deploying infrastructure and integrating aspects such as source control, security, compliance, CI/CD, monitoring, and feedback mechanisms.",
      "Creating scalable and serverless infrastructure using cutting-edge technologies.",
      "Engaging with various cloud technologies and covering all facets of the DevOps ecosystem from packaging to operations.",
      "Establishing monitoring systems for service health, including fault detection, alerting, and recovery strategies.",
    ],
  },
  {
    title: "Custom Software Engineering Senior Analyst",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Present",
    points: [
      "Deploying infrastructure and integrating aspects such as source control, security, compliance, CI/CD, monitoring, and feedback mechanisms.",
      "Creating scalable and serverless infrastructure using cutting-edge technologies.",
      "Engaging with various cloud technologies and covering all facets of the DevOps ecosystem from packaging to operations.",
      "Establishing monitoring systems for service health, including fault detection, alerting, and recovery strategies.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "István stands out as a cloud SME/DevOps Engineer, showcasing exceptional technical acumen and a commitment to resolving complex challenges, making him an invaluable asset to any project.",
    name: "Gurpreet Singh Kambo",
    designation: "Senior Manager",
    company: "Bank of Montreal",
    image:
      "https://media.licdn.com/dms/image/C5603AQEm_q87bKrOMg/profile-displayphoto-shrink_800_800/0/1660433544025?e=1707955200&v=beta&t=4wy05bkVWwWUuXhpQKWGAaALbd0xMAev9HLlApaG3kQ",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
