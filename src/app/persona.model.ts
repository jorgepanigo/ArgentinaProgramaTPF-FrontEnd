

export interface Persona{
     id?:number;
     firstName:string;
     lastName:string;
     user:string;
     password:string;
     aboutMe:string;
     education:Education[];
     experience:Experience[];
     skills:Skill[];
     proyects:Proyect[];


}

export interface Education{

     id?:number;
     institution:string;
     graduate:string;
     beginDate:Date;
     endDate:Date;

}

export interface Experience{
     id?: number;
     company:string;
     position:string;
     beginDate:Date;
     endDate:Date;
}

export interface Skill{
     id?:number;
     type:string;
     nombre:string;
     progress:number;

}

export interface Proyect{
     id?:number;
     title:string;
     description:string;
     githubLink:string;
}