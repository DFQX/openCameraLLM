import { rotateImage } from '../../modules/imaging';
import React from 'react';
import { toBase64Image } from '../../utils/base64';
import { ImageSourcePropType } from 'react-native';
   
// 发送蓝牙命令
export async function sendBleControl(device: BluetoothRemoteGATTServer, command: number, data: Uint8Array) {
    if(!device.connected){
        return;
    }
    const sendService = await device.getPrimaryService('19B10000-E8F2-537E-4F6C-D104768A1214'.toLowerCase());
    const sendCharacteristic = await sendService.getCharacteristic('f188353b-4580-4778-be92-61a8bf511e0c');
    const buffer = commandBase(command, data);
    console.log("sendBleControl", buffer);
    await sendCharacteristic.writeValue(buffer);
}

// 定义： 0:指令码 1:数组长度 2:命令值 3:命令值...
function commandBase(command: number, data: Uint8Array): Uint8Array{
    let returnValue: Uint8Array = new Uint8Array(0);
    switch(command){
        case 0:
            returnValue = commandSetLE(command, data);
            break;
        case 1:
            returnValue = commandSetPhoto(command, data);
            break;
        case 2:
            returnValue = commandSetAudio(command, data);
            break;
        case 3:
            returnValue = commandSetSD(command, data);
            break;
        default:
            break;
    }
    return returnValue;
}

// 指令：0  设置低功耗模式
function commandSetLE(command: number, data: Uint8Array): Uint8Array{
    const length = 2 + data.length;
    return new Uint8Array([command, length, ...data]);
}

// 指令：1  设置低功耗模式
function commandSetPhoto(command: number, data: Uint8Array): Uint8Array{
    const length = 2 + data.length;
    return new Uint8Array([command, length, ...data]);
}

// 指令：2  设置低功耗模式
function commandSetAudio(command: number, data: Uint8Array): Uint8Array{
    const length = 2 + data.length;
    return new Uint8Array([command, length, ...data]);
}

// 指令：3  设置低功耗模式
function commandSetSD(command: number, data: Uint8Array): Uint8Array{
    const length = 2 + data.length;
    return new Uint8Array([command, length, ...data]);
}