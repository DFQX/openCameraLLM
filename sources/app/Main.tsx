import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { RoundButton } from './components/RoundButton';
import { Theme } from './components/theme';
import { useDevice } from '../modules/useDevice';
import { DeviceView } from './DeviceView';
import { startAudio } from '../modules/openai';
import { Layout } from '@douyinfe/semi-ui';
import  Connect  from './Connect';
import { Divider, Typography } from '@douyinfe/semi-ui';
import { Space, Button } from '@douyinfe/semi-ui';
import { Switch } from '@douyinfe/semi-ui';
import { Input } from '@douyinfe/semi-ui';
import { Tabs, TabPane } from '@douyinfe/semi-ui';
import { IconFile, IconGlobe, IconHelpCircle } from '@douyinfe/semi-icons';
import ContentTabs from './LayoutComponents/ContentTabs';
import SiderBleConfig from './LayoutComponents/SiderBleConfig';
import { sendBleControl } from './BleCommunication/BleControl';




export const Main = React.memo(() => {


    const [isLowPowerMode, setIsLowPowerMode] = React.useState(false);
    const [isTakePhoto, setIsTakePhoto] = React.useState(false);
    const [isTakeAudio, setIsTakeAudio] = React.useState(false);
    const [isSaveSd, setIsSaveSd] = React.useState(false);
    const [serviceUUID, setServiceUUID] = React.useState('19B10000-E8F2-537E-4F6C-D104768A1214');
    const [characteristicUUID, setCharacteristicUUID] = React.useState('19B10005-E8F2-537E-4F6C-D104768A1214');

    const [device, connectDevice] = useDevice( serviceUUID );


    const { Title } = Typography;

    function onChangeLowPowerMode(){
        if(!device){
            return;
        }
        let sw = !isLowPowerMode;
        setIsLowPowerMode(sw);
        let data = new Uint8Array(1);
        if(sw){
            data[0] = 1;
        }else{
            data[0] = 0;
        }
        sendBleControl(device, 0, data);
        console.log("onChangeLowPowerMode", sw);
    }

    function onChangeTakePhoto(){
        if(!device){
            return;
        }
        let sw = !isTakePhoto;
        setIsTakePhoto(sw);
        let data = new Uint8Array(1);
        if(sw){
            data[0] = 1;
        }else{
            data[0] = 0;
        }
        sendBleControl(device, 1, data);
        console.log("onChangeTakePhoto", sw);
    }

    function onChangeTakeAudio(){
        if(!device){
            return;
        }
        let sw = !isTakeAudio;
        setIsTakeAudio(sw);
        let data = new Uint8Array(1);
        if(sw){
            data[0] = 1;
        }else{
            data[0] = 0;
        }
        sendBleControl(device, 2, data);
        console.log("onChangeTakeAudio", sw);
    }

    function onChangeTakeSaveSd(){
        if(!device){
            return;
        }
        let sw = !isSaveSd;
        setIsSaveSd(sw);
        let data = new Uint8Array(1);
        if(sw){
            data[0] = 1;
        }else{
            data[0] = 0;
        }
        sendBleControl(device, 3, data);
        console.log("onChangeTakeSaveSd", sw);
    }

    const { Header, Footer, Sider, Content } = Layout;
    const commonStyle = {
        height: 72,
        lineHeight: '72px',
        backgroundColor: Theme.background,
    };

    
    return (
        <Layout className="components-layout-demo">
            <Header style={commonStyle}>
                <Space style={{marginBottom:'10px', display:'flex', justifyContent:'center'}}>    
                    <h2 style={{margin:'0px', color:'white'}}>OpenCameraLLM</h2>
                </Space>
            </Header>
            <Layout style={{ height: '80%'}}>
                <Sider style={{ width: '240px', background: 'var(--semi-color-fill-2)' }}>
                    <SiderBleConfig connectDevice={connectDevice} isLowPowerMode={isLowPowerMode} 
                    isTakePhoto={isTakePhoto} isTakeAudio={isTakeAudio} isSaveSd={isSaveSd}
                    onChangeLowPowerMode={onChangeLowPowerMode} onChangeTakePhoto={onChangeTakePhoto}
                    onChangeTakeAudio={onChangeTakeAudio} onChangeTakeSaveSd={onChangeTakeSaveSd}
                    serviceUUID={serviceUUID} characteristicUUID={characteristicUUID} 
                    setServiceUUID={setServiceUUID} setCharacteristicUUID={setCharacteristicUUID}/>
                </Sider>
                <Content style={{overflow:'hidden'}}>
                    {device && <ContentTabs device={device} />}
                    {/* {<ContentTabs device={device} />} */}
                </Content>
            </Layout>

            <Footer style={commonStyle}>
                <Space style={{marginBottom:'10px', display:'flex', justifyContent:'center'}}>    
                    <p style={{margin:'0px', color:'white'}}>本项目是openGlass的进一步改进，优化UI设计</p>
                </Space>
            </Footer>
        </Layout>
    );
});
