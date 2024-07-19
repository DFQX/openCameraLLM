import {readJsonFile, writeJsonFile} from "../utils/localDB";
enum dbPath {
    ImgTypePath='type.json',
}

export function getImgType(){
    const res = readJsonFile(dbPath.ImgTypePath)
    console.log("read Json:", res);
    return res;
}

export function setImgType(data: any){
    writeJsonFile(dbPath.ImgTypePath, data)
}