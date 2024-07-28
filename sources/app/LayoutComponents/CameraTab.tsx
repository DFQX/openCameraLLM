import React from 'react';
import { List, Descriptions, ButtonGroup, Rating, Button, Layout } from '@douyinfe/semi-ui';
import { Pagination } from '@douyinfe/semi-ui';
import { Select } from '@douyinfe/semi-ui';
import { Card, Space } from '@douyinfe/semi-ui';
import { Toast,Checkbox, Popover } from '@douyinfe/semi-ui';
import Meta from '@douyinfe/semi-ui/lib/es/card/meta';
import { Modal, Tag, Divider, TagGroup, Input} from '@douyinfe/semi-ui';
import { EditLabel } from '../components/EditLabel';
import {Mark} from '../components/Mark';
import { IconAlignBottom } from '@douyinfe/semi-icons';
import { Image, ImageSourcePropType } from 'react-native';
import { toBase64Image } from '../../utils/base64';

export default function CameraTab(props:{rawData: {uri: string, checked: boolean | undefined, type1: string, type2: string, describeImage: string}[], page: number, pageSize:number, setPageSize:any, 
    setPage:any, setRawData:any, photos:boolean | Uint8Array[]}) {

        let allIdx = 0;

        // 定义标签选择相关的参数
        const [type1num, setType1num] = React.useState(0);
        let labels = ['study', 'drink', 'eat', 'phone', 'computer', 'pad', 'bag', 'book', 'pen', 'sleep']
        let selectList = labels.map((item, index) => {
            return {value:index, label:item}
        })
        const [types, setTypes] = React.useState(selectList);
        const [imgTypeModal, setImgTypeModal] = React.useState(false);
        const [imgIdx, setImgIdx] = React.useState(0);
        function handleImgTypeModalOk(){
            console.log('handleImgTypeModalOk');
            allIdx = (props.page-1)*props.pageSize+imgIdx;
            setImgTypeModal(false);
            props.rawData[allIdx].type1 = types[type1num].label;
            const newData = props.rawData.slice();
            props.setRawData(newData);
        }
        function showDialog(idx:number) {
            setImgTypeModal(true);
            setImgIdx(idx);
            onSelectCheck(idx);
        }

        // 页面选择参数
        const getData = (page: number) => {
            let start = (page - 1) * props.pageSize;
            let end = page * props.pageSize;
            return props.rawData.slice(start, end);
        };

        // 页面全选
        const [checkedAll, setCheckedAll] = React.useState(false);
        function checkedAllChange(){
            let copyData = props.rawData.slice().map((item)=>{
                item.checked = !checkedAll;
                return item;
            })
            props.setRawData(copyData);
            setCheckedAll(!checkedAll);
        }

        async function downloadImage(url: string, filename: string): Promise<void> {
            try {
              const response = await fetch(url);
              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
              const blob = await response.blob();
              const link = document.createElement('a');
              link.href = URL.createObjectURL(blob);
              link.download = filename;
              link.click();
              URL.revokeObjectURL(link.href);
            } catch (error) {
              console.error("Error downloading image:", error);
            }
         }

        // 保存图片
        function downloadImg(){
            const data = props.rawData.slice();
            data.map((item, idx)=>{
                if(item.checked){
                    const now = new Date();
                    const isoString = now.toISOString();
                    if(item.type1!=''){
                        let imgName = isoString+'_'+String(idx)+'_'+item.type1+'.jpeg';
                        console.log(imgName);
                        downloadImage(item.uri, imgName);
                    }
                }
            })
            const filterData = data.filter((item)=>!item.checked || item.type1=='');
            props.setRawData(filterData);
            if(data.length-filterData.length==0){
                Toast.success("只有同时勾选和标注才能被下载");
            }else{
                Toast.success("总共下载了"+String(data.length-filterData.length)+"张图片");
            }
            return;
        }

        function getAllIdx(idx:number){
            return (props.page-1)*props.pageSize+idx;
        }

        function onDelete(idx: number){
            console.log("img delete:", idx);
            allIdx = (props.page-1)*props.pageSize+idx;
            console.log("img delete:", "删除前",props.rawData.length);
            if(allIdx < props.rawData.length){
                props.rawData.splice(allIdx, 1);
                props.setRawData(props.rawData.slice());
                console.log("img delete:","删除后", props.rawData.length);
                Toast.success('第 ' + allIdx + '张图片删除成功');
            }
        }

        function onSelectCheck(idx: number){
            console.log("img select:", idx);
            allIdx = (props.page-1)*props.pageSize+idx;
            console.log("img select:", allIdx);
            props.rawData[allIdx].checked = !props.rawData[allIdx].checked;
            const newData = props.rawData.slice();
            props.setRawData(newData);
        }
        
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
            // paddingLeft: '20px',
            display: 'flex',
            justifyContent: 'center',
        };

        function getAbstrctDesc(desc: string){
            if(desc.length > 20){
                return desc.substring(0,100) + "...";
            }else{
                return desc;
            }
        }

        // if(props.rawData.length>0){
        //     console.log("cameraTab 1: ", props.rawData[0].uri);
        // }
        
        return (
            <Layout style={{ height: '100%' }}>
                <Content style={{height:'92%', margin:'10px', overflow:'auto', overflowX:'hidden', maxHeight:460}}>
                    <List
                        grid={{
                            gutter: 8,
                            span: 4,
                        }}
                        dataSource={getData(props.page)}
                        renderItem={(item,idx) => (
                            <List.Item style={style}>
                                <Card 
                                    bodyStyle={{padding:'5px'}}
                                    shadows='hover'
                                    cover={ 
                                        <img style={{width: 200, height: 200}}
                                            onClick={()=>{onSelectCheck(idx)}}
                                            alt="图像采集" 
                                            src={item.uri}
                                        />
                                    }
                                >
                                    <Checkbox onChange={()=>onSelectCheck(idx)} checked={item.checked} style={{position:'absolute', top:'5px', right:'15px'}}></Checkbox>
                                    <p style={{position:'absolute', top:'5px', left:'15px'}}>{getAllIdx(idx)}</p>
                                    <Popover
                                        showArrow
                                        content={
                                            <article>
                                                <p style={{maxWidth:'250px'}}>{item.describeImage}</p>
                                            </article>
                                        }
                                        arrowPointAtCenter={true}
                                        position='topLeft'
                                    >
                                        <Meta style={{padding:'2px'} }
                                            title='描述'
                                            description={getAbstrctDesc(item.describeImage)}
                                        />
                                    </Popover>
                                    <Space style={{ display: 'flex', justifyContent: 'flex-end'}}>
                                        <Space style={{width:'50%'}}>
                                            {item.type1!="" && (<Tag size='large' shape='circle' color='violet' >{item.type1}</Tag>)}
                                        </Space>
                                        <Space style={{ display: 'flex', justifyContent: 'flex-end'}}>
                                                <Button  onClick={()=>{onDelete(idx)}}>删除</Button>
                                                <Button  onClick={()=>{showDialog(idx)}}>标注</Button>
                                                
                                        </Space>
                                    </Space>
                                </Card>
                            </List.Item>
                        )}
                    />
                    <Mark type1num = {type1num} setType1num={setType1num} types={types} setTypes={setTypes} handleImgTypeModalOk={()=>{handleImgTypeModalOk()}}
                          imgTypeModal={imgTypeModal} setImgTypeModal={setImgTypeModal}></Mark>
                </Content>
                <Footer style={{height: '8%', margin:'10px'}}>
                    <Space style={{width: '100%', display:'flex', justifyContent:'center'}}>
                        <Checkbox
                            checked={checkedAll}
                            onChange={checkedAllChange}>
                            全选
                        </Checkbox>
                        <Button icon={<IconAlignBottom />} onClick={downloadImg}></Button>
                        <EditLabel></EditLabel>
                        <Pagination size='small'  pageSize={props.pageSize} total={props.rawData.length} currentPage={props.page} onChange={cPage => props.setPage(cPage)} />
                        <Select placeholder="每页数量" style={{width: '180px'}} value={props.pageSize} optionList={list} onChange={v => props.setPageSize(v)}></Select>
                    </Space>
                </Footer>
            </Layout>
        );
    }