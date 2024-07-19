import { rotateImage } from '../../modules/imaging';
import React from 'react';
import { toBase64Image } from '../../utils/base64';
import { ImageSourcePropType } from 'react-native';
   
// 蓝牙设置
export function BleListen(device: BluetoothRemoteGATTServer) {
    // Subscribe to device
    const [photos, setPhotos] = React.useState<Uint8Array[]>([]);
    const [subscribed, setSubscribed] = React.useState<boolean>(false);
    React.useEffect(() => {
        // 定义： 0:指令码 1:数组长度 2:命令值 3:命令值...
        function valid(array: Uint8Array){
            if(array==null || array.length==0 || array[1]!=array.length){
                return false;
            }
            return true;
        }

        function commandSetLE(array: Uint8Array){

        }

        (async () => {

            // 监听
            let buffer: Uint8Array = new Uint8Array(0);
            const service = await device.getPrimaryService('19B10000-E8F2-537E-4F6C-D104768A1214'.toLowerCase());
            const commandCharacteristic = await service.getCharacteristic('19b10005-e8f2-537e-4f6c-d104768a1214');
            await commandCharacteristic.startNotifications();
            setSubscribed(true);
            commandCharacteristic.addEventListener('characteristicvaluechanged', (e) => {
                let value = (e.target as BluetoothRemoteGATTCharacteristic).value!;
                let array = new Uint8Array(value.buffer);
            });
        })();
    }, []);
    return [subscribed, photos] as const;
}