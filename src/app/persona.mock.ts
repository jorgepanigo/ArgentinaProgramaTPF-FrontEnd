import { Persona } from "./persona.model";

export const persona:Persona = {
     "id":1,
     "perfilImage":"#",
     "firstName":"Jorge",
     "lastName":"Panigo",
     "user":"jpanigo",
     "city":"La Plata",
     "country":"Argentina",
     "profession": "Jr FullStack Java Developer",
     "mail":"jorgepanigo@gmail.com",
     "phone":"2215988023",
     "password":"admin",
     "aboutMe":"Esta es una breve descripcion de mi perfil y mis objetivos laborales y profesionales",
     "education":[
                    {
                         "id":1,
                         "institution":"UTN Facultad Regional La Plata",
                         "graduate":"Ingenieria en Sistemas",
                         "beginDate":new Date(),
                         "endDate":new Date()
                         
                    },
                    {
                         "id":2,
                         "institution":"Escuela Nacional de Comercio Nro 4",
                         "graduate":"Bachiller Contable",
                         "beginDate":new Date(),
                         "endDate":new Date()        
                    }
                 ],
     "experience":[
                         {
                              "id":1,
                              "company":"Fravega",
                              "position":"Jefe de Salon",
                              "beginDate":new Date(),
                              "endDate":new Date()                            
                         },
                         {
                              "id":2,
                              "company":"Musimundo",
                              "position":"Subgerente",
                              "beginDate":new Date(),
                              "endDate":new Date()
                         }
                    ],
     "skills":[
          {
               "id":1,
               "nombre":"JavaScript",
               "progress":55,
               "type":"Hard"
          },
          {
               "id":2,
               "nombre":"Java",
               "progress":75,
               "type":"Hard"
          }

               ],
     "proyects":[
          {
               "id":1,
               "title":"TAGAT",
               "description":"Proyecto de desarrollo de software para una terminal tactil que cubra de demanda de mostrador del departamento de alumnos de la Universidad Tecnologica Nacional FRLP",
               "githubLink":"#"
          },
          {
               "id":2,
               "title":"Silicon Viajes",
               "description":"Proyecto final del curso dictado por el Silicon Misiones en 2021. Sistema de gestion de paquetes turisticos para agencia de viajes.",
               "githubLink":"#"
          }
     ]
     
}