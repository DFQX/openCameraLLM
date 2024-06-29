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




export const Main = React.memo(() => {

    const [device, connectDevice] = useDevice();

    const [isLowPowerMode, setIsLowPowerMode] = React.useState(false);

    const { Title } = Typography;

    function onChangeLowPowerMode(){
        setIsLowPowerMode(isLowPowerMode ? false : true)
        console.log(isLowPowerMode)
    }

    const { Header, Footer, Sider, Content } = Layout;
    const commonStyle = {
        height: 72,
        lineHeight: '72px',
        backgroundColor: Theme.background,
    };

    
    return (
        // <SafeAreaView style={styles.container}>
        //     {!device && (
        //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
        //             <RoundButton title="Connect to the device" action={connectDevice} />
        //         </View>
        //     )}
        //     {device && (
        //         <DeviceView device={device} />
        //     )}
        // </SafeAreaView>
        <Layout className="components-layout-demo">
            <Header style={commonStyle}>
                <Space style={{marginBottom:'10px'}}>    
                    图像采集系统
                    {/* <h1 style={{background:Theme.text,}}>AI图像采集系统</h1> */}
                </Space>
            </Header>
            <Layout style={{ height: '80%'}}>
                <Sider style={{ width: '240px', background: 'var(--semi-color-fill-2)' }}>
                    <SiderBleConfig connectDevice={connectDevice} isLowPowerMode={isLowPowerMode} onChangeLowPowerMode={onChangeLowPowerMode} />
                </Sider>
                <Content >
                    <ContentTabs />
                </Content>
            </Layout>

            <Footer style={commonStyle}>Footer</Footer>
        </Layout>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.background,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});