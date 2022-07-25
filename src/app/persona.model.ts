

export interface Persona{
     id?:number;
     profileImage:string;
     profileBackground:string;
     firstName:string;
     lastName:string;
     city:string;
     country:string;
     profession:string;
     mail:string;
     phone:string;
     user:string;
     password:string;
     aboutMe:string;
     educationList:Education[];
     experienceList:Experience[];
     skillList:Skill[];
     proyectList:Proyect[];
     linkedin:string;
     github:string;


}

export interface Education{

     id?:number;
     institution:string;
     institutionImg:string;
     degree:string;
     beginDate:Date;
     endDate:Date;

}

export interface Experience{
     id?: number;
     company:string;
     position:string;
     beginDate:Date;
     endDate:Date;
     companyImg:string;
}

export interface Skill{
     id?:number;
     type:string;
     name:string;
     progress:number;

}

export interface Proyect{
     id?:number;
     title:string;
     description:string;
     githubLink?:string;
     image?:string;
     category?:string;

}

export interface Header{
     
     id:number;
     profileImage:string;
     profileBackground:string;
     firstName:string;
     lastName:string;
     city:string;
     country:string;
     profession:string;
     mail:string;
     phone:string;
     linkedin:string;
     github:string;
}

export interface User{
     user:string;
     password:string;
}