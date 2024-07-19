import * as fs from 'fs';

export function readJsonFile(path:string){
    // if(fs.existsSync(path)){
    //     return JSON.parse(fs.readFileSync(path, 'utf8'));
    // }
    return JSON.parse(fs.readFileSync(path, 'utf8'));

    // return {};
}

export function writeJsonFile(path:string, data:any){
    fs.writeFileSync(path, JSON.stringify(data, null, 4));
}