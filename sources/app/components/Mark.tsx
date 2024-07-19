import React from 'react';
import { Select } from '@douyinfe/semi-ui';
import { Space , Button} from '@douyinfe/semi-ui';
import { Modal, Tag, Divider, Input, Toast} from '@douyinfe/semi-ui';


export function Mark(props:{ type1num:number, setType1num: any, types:{ value: number; label: string; }[], setTypes:any,
    imgTypeModal:boolean, setImgTypeModal:any, handleImgTypeModalOk:()=>void})
{
    enum TagColor {
        Red = 'red',
        Blue = 'blue',
        Green = 'green',
        Yellow = 'yellow',
        Orange = 'orange',
    }

    const color: TagColor[] = [TagColor.Red, TagColor.Blue, TagColor.Green, TagColor.Yellow, TagColor.Orange];
    const [inputDisabled, setInputDisabled] = React.useState(false);

    const [labelText, setLabelText] = React.useState("");

    function type1Select(value: number){
        console.log('type1Select: ', value);
        props.setType1num(value);
    }

    function handleLabelChange(value:string){
        console.log("handleLabelChange:",handleLabelChange);
        setLabelText(value);
    }
    
    function handleEnterPress(){
        if(labelText==""){
            Toast.warning("标签输入不能为空！");
            return;
        }
        console.log("handleEnterPress:",labelText);
        let list = props.types.slice();
        list = [...list, {value: list.length, label: labelText}];
        props.setTypes(list);
        setLabelText("");
    }

    function handTagClose(idx:number|string){
        console.log("handTagClose: "+idx);
        if(typeof idx==='string' || idx==undefined) return;
        const typeList = props.types.slice();
        typeList.splice(idx, 1);
        props.setTypes(typeList);
        console.log("handTagClose: "+typeList.length);
    }

    return (
        <>
            <Modal
                title="图片标注"
                visible={props.imgTypeModal}
                onOk={props.handleImgTypeModalOk}
                onCancel={props.handleImgTypeModalOk}
                footer={
                    <Input disabled={inputDisabled}  placeholder='+添加标签' size='default' value={labelText} onChange={handleLabelChange} onEnterPress={() => {handleEnterPress()}}></Input>
                }
                style={{width: '400px'}}
            >
                {<Select size='large' placeholder="分类" style={{ width: '100%', height:21,}} optionList={props.types} value={props.type1num} onSelect={v=>{if(typeof v === 'number')type1Select(v)}}></Select>}
                <Divider margin='12px' align='center'></Divider>
                <div style={{
                        backgroundColor: 'var(--semi-color-fill-0)',
                        display: 'flex',
                        width:'100%'
                    }}>
                    <Space wrap style={{width:'100%'}}>
                        <Space wrap>
                            {
                                props.types.map((item,idx) => (
                                <Tag color={color[idx % color.length]} 
                                    tagKey={idx} closable={!inputDisabled} 
                                    onClose={(_,e,i)=>{e.preventDefault();handTagClose(i)}}> 
                                    {item.label} 
                                </Tag>)
                                )
                            }
                        </Space>
                    </Space>
                </div>
            </Modal>
        </>
    )
}