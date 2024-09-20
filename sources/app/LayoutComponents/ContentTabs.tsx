import React from 'react';
import { Tabs,  Layout } from '@douyinfe/semi-ui';
import { IconCamera, IconLayers } from '@douyinfe/semi-icons';
import CameraTab from './CameraTab';
import ChatTab from './ChatTab';
import { usePhotos } from '../BleCommunication/UsePhotos';
import { Agent } from '../../agent/Agent';
import { InvalidateSync } from '../../utils/invalidateSync';


export default function ContentTabs(props: {device:BluetoothRemoteGATTServer|null}){


    const [ikey, setIkey] = React.useState('1');
    function onTabClick(key: string) {
        setIkey(key);
    }
        // eslint-disable-next-line react/jsx-key
    const tabList = [
        { tab: <span><IconCamera />图像</span>, itemKey: '1' },
        { tab: <span><IconLayers />大模型</span>, itemKey: '2' }
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

    const agent = React.useMemo(() => new Agent(), []);
    const agentState = agent.use();

    // Background processing agent
    const processedPhotos = React.useRef<Uint8Array[]>([]);
    const sync = React.useMemo(() => {
        let processed = 0;
        return new InvalidateSync(async () => {
            if (processedPhotos.current!=null && processedPhotos.current.length > processed) {
                let unprocessed = processedPhotos.current.slice(processed);
                processed = processedPhotos.current.length;
                await agent.addPhoto(unprocessed);
            }
        });
    }, []);
    React.useEffect(() => {
        processedPhotos.current = photos;
        sync.invalidate();
        let rawDataCopy = rawData.slice();
        agent.photos.map(async (v, i) => {
            rawDataCopy[i].describeImage = v.description;
        })
        setRawData(rawDataCopy);
    }, [photos]);

    // React.useEffect(() => {
    //     if (agentState.answer) {
    //         textToSpeech(agentState.answer)
    //     }
    // }, [agentState.answer])

    
    const { Header, Footer, Sider, Content } = Layout;
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(18);
    const contentList = [<CameraTab rawData={rawData} page={page} pageSize={pageSize} 
        setPage={setPage} setPageSize={setPageSize} setRawData={setRawData} photos={photos}/>, 
            <ChatTab agent={agent} agentState={agentState}/>
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
