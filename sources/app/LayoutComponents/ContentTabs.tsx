import React from 'react';
import { Tabs, TabPane, Layout } from '@douyinfe/semi-ui';
import { IconCamera, IconEyeClosed, IconBox } from '@douyinfe/semi-icons';
import CameraTab from './CameraTab';
import { Pagination } from '@douyinfe/semi-ui';
import { Select } from '@douyinfe/semi-ui';
import { SelectProps } from '@douyinfe/semi-ui/lib/es/select';
import { describeImage } from '../../modules/openai';
import { usePhotos } from '../BleCommunication/UsePhotos';
import { toBase64Image } from '../../utils/base64';
import { ImageSourcePropType } from 'react-native';


export default function ContentTabs(props: {device:BluetoothRemoteGATTServer}){


    const [ikey, setIkey] = React.useState('1');
    function onTabClick(key: string) {
        setIkey(key);
    }
        // eslint-disable-next-line react/jsx-key
    const tabList = [
        { tab: <span><IconCamera />图像</span>, itemKey: '1' },
        { tab: <span><IconEyeClosed />过滤</span>, itemKey: '2' },
        { tab: <span><IconBox />导出</span>, itemKey: '3' },
    ];
    
    // 获取蓝牙的图像
    const rawData0 = [
        {
            src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg",
            checked: false,
            type1: '',
            type2: '',
            describeImage: '这是AI智能体分析的图片描述，图片显示一个人坐在电脑前，正在...'
        },
        {
            src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg",
            checked: false,
            type1: '',
            type2: '',
            describeImage: '这是AI智能体分析的图片描述，图片显示一个人坐在电脑前，正在...'
        },
        {
            src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg",
            checked: false,
            type1: '',
            type2: '',
            describeImage: '这是AI智能体分析的图片描述，图片显示一个人坐在电脑前，正在...'
        },
        {
            src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg",
            checked: false,
            type1: '',
            type2: '',
            describeImage: '这是AI智能体分析的图片描述，图片显示一个人坐在电脑前，正在...'
        },
        {
            src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg",
            checked: false,
            type1: '',
            type2: '',
            describeImage: '这是AI智能体分析的图片描述，图片显示一个人坐在电脑前，正在...'
        },
        {
            src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg",
            checked: false,
            type1: '',
            type2: '',
            describeImage: '这是AI智能体分析的图片描述，图片显示一个人坐在电脑前，正在...'
        },
        {
            src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg",
            checked: false,
            type1: '',
            type2: '',
            describeImage: '这是AI智能体分析的图片描述，图片显示一个人坐在电脑前，正在...'
        },
        {
            src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg",
            checked: false,
            type1: '',
            type2: '',
            describeImage: '这是AI智能体分析的图片描述，图片显示一个人坐在电脑前，正在...'
        },
        {
            src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg",
            checked: false,
            type1: '',
            type2: '',
            describeImage: '这是AI智能体分析的图片描述，图片显示一个人坐在电脑前，正在...'
        },
        {
            src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg",
            checked: false,
            type1: '',
            type2: '',
            describeImage: '这是AI智能体分析的图片描述，图片显示一个人坐在电脑前，正在...'
        },
        {
            src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg",
            checked: false,
            type1: '',
            type2: '',
            describeImage: '这是AI智能体分析的图片描述，图片显示一个人坐在电脑前，正在...'
        },
        {
            src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg",
            checked: false,
            type1: '',
            type2: '',
            describeImage: '这是AI智能体分析的图片描述，图片显示一个人坐在电脑前，正在...'
        },
        {
            src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg",
            checked: false,
            type1: '',
            type2: '',
            describeImage: '这是AI智能体分析的图片描述，图片显示一个人坐在电脑前，正在...'
        },
        {
            src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg",
            checked: false,
            type1: '',
            type2: '',
            describeImage: '这是AI智能体分析的图片描述，图片显示一个人坐在电脑前，正在...'
        },
        {
            src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg",
            checked: false,
            type1: '',
            type2: '',
            describeImage: '这是AI智能体分析的图片描述，图片显示一个人坐在电脑前，正在...'
        },
        {
            src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg",
            checked: false,
            type1: '',
            type2: '',
            describeImage: '这是AI智能体分析的图片描述，图片显示一个人坐在电脑前，正在...'
        },
        {
            src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg",
            checked: false,
            type1: '',
            type2: '',
            describeImage: '这是AI智能体分析的图片描述，图片显示一个人坐在电脑前，正在...'
        },
        {
            src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg",
            checked: false,
            type1: '',
            type2: '',
            describeImage: '这是AI智能体分析的图片描述，图片显示一个人坐在电脑前，正在...'
        },
    ];
    const [rawData, setRawData] = React.useState<{uri: string, checked: boolean | undefined, type1: string, type2: string, describeImage: string}[]>([]);
    const [subscribed, photos] = usePhotos(props.device, rawData, setRawData);

    
    const { Header, Footer, Sider, Content } = Layout;
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(18);
    const contentList = [<CameraTab rawData={rawData} page={page} pageSize={pageSize} 
        setPage={setPage} setPageSize={setPageSize} setRawData={setRawData} photos={photos}/>, 
            <div>快速起步</div>, 
            <div>帮助</div>
            ];

    return (
        <Layout>
            <header style={{ height: '5%' }}>
                <Tabs
                    type="card"
                    tabList={tabList}
                    onChange={key => {
                        onTabClick(key);
                    }}
                    >
                </Tabs>
            </header>
            <Content style={{ height: '95%' }}>
                {contentList[parseInt(ikey) - 1]}
            </Content>
        </Layout>
    );
}
