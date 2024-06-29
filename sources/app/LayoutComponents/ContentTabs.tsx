import React from 'react';
import { Tabs, TabPane, Layout } from '@douyinfe/semi-ui';
import { IconCamera, IconEyeClosed, IconBox } from '@douyinfe/semi-icons';
import CameraTab from './CameraTab';
import { Pagination } from '@douyinfe/semi-ui';
import { Select } from '@douyinfe/semi-ui';
import { SelectProps } from '@douyinfe/semi-ui/lib/es/select';

export default function ContentTabs(){
    const data = [
        {
            title: '审核管理平台',
            rating: 4.5,
            feedbacks: 124,
        },
        {
            title: '扁鹊',
            rating: 4,
            feedbacks: 108,
        },
        {
            title: '直播审核平台',
            rating: 4.5,
            feedbacks: 244,
        },
        {
            title: '抖音安全测试',
            feedbacks: 189,
        },
        {
            title: '审核管理平台',
            rating: 4.5,
            feedbacks: 124,
        },
        {
            title: '扁鹊',
            rating: 4,
            feedbacks: 108,
        },
        {
            title: '直播审核平台',
            rating: 4.5,
            feedbacks: 244,
        },
        {
            title: '抖音安全测试',
            feedbacks: 189,
        },
        {
            title: '审核管理平台',
            rating: 4.5,
            feedbacks: 124,
        },
        {
            title: '扁鹊',
            rating: 4,
            feedbacks: 108,
        },
        {
            title: '直播审核平台',
            rating: 4.5,
            feedbacks: 244,
        },
        {
            title: '抖音安全测试',
            feedbacks: 189,
        },
        {
            title: '审核管理平台',
            rating: 4.5,
            feedbacks: 124,
        },
        {
            title: '扁鹊',
            rating: 4,
            feedbacks: 108,
        },
        {
            title: '直播审核平台',
            rating: 4.5,
            feedbacks: 244,
        },
        {
            title: '抖音安全测试',
            feedbacks: 189,
        },
        {
            title: '审核管理平台',
            rating: 4.5,
            feedbacks: 124,
        },
        {
            title: '扁鹊',
            rating: 4,
            feedbacks: 108,
        },
        {
            title: '直播审核平台',
            rating: 4.5,
            feedbacks: 244,
        },
        {
            title: '抖音安全测试',
            feedbacks: 189,
        },
        {
            title: '审核管理平台',
            rating: 4.5,
            feedbacks: 124,
        },
        {
            title: '扁鹊',
            rating: 4,
            feedbacks: 108,
        },
        {
            title: '直播审核平台',
            rating: 4.5,
            feedbacks: 244,
        },
        {
            title: '抖音安全测试',
            feedbacks: 189,
        },
    ];
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
    const { Header, Footer, Sider, Content } = Layout;
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(18);
    const contentList = [<CameraTab data={data} page={page} pageSize={pageSize} setPage={setPage} setPageSize={setPageSize}/>, 
            <div>快速起步</div>, 
            <div>帮助</div>
            ];

    const list = [
        { value: 6, label: '6'},
        { value: 12, label: '12'},
        { value: 18, label: '18' },
        { value: 24, label: '24'},
        { value: 30, label: '30'},
        { value: 36, label: '36'},
    ];
    return (
        <div >
            <div style={{ height: '5%' }}>
                <Tabs
                    type="card"
                    tabList={tabList}
                    onChange={key => {
                        onTabClick(key);
                    }}
                    >
                </Tabs>
            </div>
            {contentList[parseInt(ikey) - 1]}
        </div>
    );
}
