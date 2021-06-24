import Express from "express";
import Router from "./App/Router/Router"
import * as DotEnv from "dotenv"
DotEnv.config();

const App = Express();

App.use('/',Router)
App.disable('etag');

const Port:number = parseInt(process.env.PORT_APP!)

App.listen(Port,()=>{
    console.log(` ⚡ Your app run in port ${Port}`);    
})