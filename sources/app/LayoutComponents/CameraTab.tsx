import React from 'react';
import { List, Descriptions, ButtonGroup, Rating, Button, Layout } from '@douyinfe/semi-ui';
import { Pagination } from '@douyinfe/semi-ui';
import { Select } from '@douyinfe/semi-ui';
import { SelectProps } from '@douyinfe/semi-ui/lib/es/select';

export default function CameraTab(props:{data: any[], page: number, pageSize:number, setPageSize, setPage}) {


        // function selectPageSize(value: number){
        //     setPageSize(value);
        // }

        const getData = (page: number) => {
            let start = (page - 1) * props.pageSize;
            let end = page * props.pageSize;
            return props.data.slice(start, end);
        };
        const { Header, Footer, Sider, Content } = Layout;

        const list = [
            { value: 6, label: '6'},
            { value: 12, label: '12'},
            { value: 18, label: '18' },
            { value: 24, label: '24'},
            { value: 30, label: '30'},
            { value: 36, label: '36'},
        ];

        const style = {
            border: '1px solid var(--semi-color-border)',
            backgroundColor: 'var(--semi-color-bg-2)',
            borderRadius: '3px',
            paddingLeft: '20px',
        };


        return (
            <Layout>
                <Content style={{height:'92%', margin:'10px'}}>
                    <div>
                        <List
                            grid={{
                                gutter: 12,
                                span: 4,
                            }}
                            dataSource={getData(props.page)}
                            renderItem={item => (
                                <List.Item style={style}>
                                    <div>
                                        <h3 style={{ color: 'var(--semi-color-text-0)', fontWeight: 500 }}>{item.title}</h3>
                                        <Descriptions
                                            align="center"
                                            size="small"
                                            row
                                            data={[
                                                { key: '满意度', value: <Rating allowHalf size="small" value={item.rating} /> },
                                                { key: '反馈数', value: item.feedbacks },
                                            ]}
                                        />
                                        <div style={{ margin: '12px 0', display: 'flex', justifyContent: 'flex-end' }}>
                                            <ButtonGroup theme="borderless" style={{ marginTop: 8 }}>
                                                <Button>编辑</Button>
                                                <Button>更多</Button>
                                            </ButtonGroup>
                                        </div>
                                    </div>
                                </List.Item>
                            )}
                        />
                    </div>
                </Content>
                <Footer style={{height: '8%', margin:'10px'}}>
                    <span style={{width: '100%', display:'flex', justifyContent:'center'}}>
                        <Pagination size='small'  pageSize={props.pageSize} total={props.data.length} currentPage={props.page} onChange={cPage => props.setPage(cPage)} />
                        <Select placeholder="每页数量" style={{width: '180px'}} value={props.pageSize} optionList={list} onChange={v => props.setPageSize(v)}></Select>
                    </span>
                </Footer>
            </Layout>
        );
    }

