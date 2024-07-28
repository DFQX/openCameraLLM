import { rotateImage } from '../../modules/imaging';
import React from 'react';
import { toBase64Image } from '../../utils/base64';
import { ImageSourcePropType } from 'react-native';
   
// 蓝牙设置
export function usePhotos(device: BluetoothRemoteGATTServer|null, rawData:{uri: string, checked: boolean | undefined, type1: string, type2: string, describeImage: string}[], setRawData:any) {
    // Subscribe to device
    const [photos, setPhotos] = React.useState<Uint8Array[]>([]);
    const [subscribed, setSubscribed] = React.useState<boolean>(false);
    if(device==null){
        return [subscribed, photos] as const;
    }
    React.useEffect(() => {
        (async () => {
            let previousChunk = -1;
            let buffer: Uint8Array = new Uint8Array(0);
            function onChunk(id: number | null, data: Uint8Array) {
                // Resolve if packet is the first one
                if (previousChunk === -1) {
                    if (id === null) {
                        return;
                    } else if (id === 0) {
                        previousChunk = 0;
                        buffer = new Uint8Array(0);
                    } else {
                        return;
                    }
                } else {
                    if (id === null) {
                        console.log('Photo received');
                        rotateImage(buffer, '0').then((rotated) => {
                            // console.log('Rotated photo', rotated);
                            setPhotos((p) => [...p, rotated]);
                            setRawData((r: any)=>[...r,{
                                uri: toBase64Image(rotated),
                                checked: false,
                                type1: '',
                                type2: '',
                                describeImage: ''
                            }]);
                        });
                        previousChunk = -1;
                        return;
                    } else {
                        if (id !== previousChunk + 1) {
                            previousChunk = -1;
                            console.error('Invalid chunk', id, previousChunk);
                            return;
                        }
                        previousChunk = id;
                    }
                }
                // Append data
                buffer = new Uint8Array([...buffer, ...data]);
            }
            // Subscribe for photo updates
            const service = await device.getPrimaryService('19B10000-E8F2-537E-4F6C-D104768A1214'.toLowerCase());
            const photoCharacteristic = await service.getCharacteristic('19b10005-e8f2-537e-4f6c-d104768a1214');
            await photoCharacteristic.startNotifications();
            setSubscribed(true);
            photoCharacteristic.addEventListener('characteristicvaluechanged', (e) => {
                let value = (e.target as BluetoothRemoteGATTCharacteristic).value!;
                let array = new Uint8Array(value.buffer);
                if (array[0] == 0xff && array[1] == 0xff) {    // End of photo
                    onChunk(null, new Uint8Array());                   
                } else {                                      // 前两个字节是包序号
                    let packetId = array[0] + (array[1] << 8);
                    let packet = array.slice(2);
                    onChunk(packetId, packet);
                }
            });
        })();
    }, []);
    return [subscribed, photos] as const;
}