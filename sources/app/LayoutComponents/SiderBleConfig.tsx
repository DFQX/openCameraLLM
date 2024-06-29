import React from 'react';
import { Divider, Typography } from '@douyinfe/semi-ui';
import { Space, Button } from '@douyinfe/semi-ui';
import { Switch } from '@douyinfe/semi-ui';
import { Input } from '@douyinfe/semi-ui';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import  Connect  from '../Connect';

export default function SiderBleConfig(props:{connectDevice:() => Promise<any>, isLowPowerMode?: boolean, onChangeLowPowerMode?: () => void}) {
    const { Title } = Typography;
    return (
        <div style={{width:'240px'}}>    
            <Divider margin='12px' align='center'>
                设置蓝牙
            </Divider>
            <div style={{flex:'center', marginLeft:'15px', marginRight:'15px'}}>
                <Input placeholder='Server-UUID' size='large' style={{marginBottom:"5px"}}></Input>
                <Input placeholder='Service-UUID' size='large' style={{marginTop:'5px'}}></Input>
            </div>
            <Divider margin='12px' align='center'>
                连接
            </Divider>
            <View>
                <Connect action={props.connectDevice} />
            </View>
            <Divider margin='12px' align='center'>
                发送命令
            </Divider>
            <div style={{ marginLeft:'15px', marginRight:'15px'}}>
                <div style={{alignItems: 'center'}}>
                    <div style={{float:'left'}}>低功耗模式</div>
                    <Switch style={{float:'right'}} size="default" checked={props.isLowPowerMode} onChange={props.onChangeLowPowerMode} />
                </div>
                <br/>
                <br/>
                <div style={{alignItems: 'center' }}>
                    <div style={{float:'left'}}>打开摄像头</div>    
                    <Switch style={{float:'right'}} checked={props.isLowPowerMode} onChange={props.onChangeLowPowerMode} />
                </div>
                <br/>
                <br/>
                <div style={{ alignItems: 'center' }}>
                    <div style={{float:'left'}}>打开麦克风</div>  
                    <Switch style={{float:'right'}}  checked={props.isLowPowerMode} onChange={props.onChangeLowPowerMode} />
                </div>
                <br/>
                <br/>
                <div style={{ alignItems: 'center' }}>
                    <div style={{float:'left'}}>图像存储</div>  
                    <Switch style={{float:'right'}} checked={props.isLowPowerMode} onChange={props.onChangeLowPowerMode} />
                </div>
            </div>
        </div>
        
    )
}