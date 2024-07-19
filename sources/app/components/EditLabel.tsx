import React from 'react';
import { Select } from '@douyinfe/semi-ui';
import { Space , Button} from '@douyinfe/semi-ui';
import { Modal, Tag, Divider, Input} from '@douyinfe/semi-ui';


export function EditLabel(){

    // const [imgType, setImgType] = React.useState(getImgType());
    const [imgType, setImgType] = React.useState({
        "type1": [{
                "name": "study",
                "type2": [{
                        "name": "desktop",
                        "type3": [{
                                "name": "body",
                                "type4": [{
                                        "name": "study"
                                    },
                                    {
                                        "name": "drink"
                                    },
                                    {
                                        "name": "eat"
                                    },
                                    {
                                        "name": "phone"
                                    },
                                    {
                                        "name": "computer"
                                    },
                                    {
                                        "name": "pad"
                                    },
                                    {
                                        "name": "bag"
                                    },
                                    {
                                        "name": "book"
                                    },
                                    {
                                        "name": "pen"
                                    },
                                    {
                                        "name": "sleep"
                                    }
                                ]
                            },
                            {
                                "name": "nobody"
                            }
                        ]
                    },
                    {
                        "name": "chest",
                        "type3": [{
                                "name": "phone"
                            },
                            {
                                "name": "computer"
                            },
                            {
                                "name": "pad"
                            },
                            {
                                "name": "pen"
                            },
                            {
                                "name": "book"
                            },
                            {
                                "name": "bag"
                            },
                            {
                                "name": "drink"
                            },
                            {
                                "name": "eat"
                            },
                            {
                                "name": "study"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "dining",
                "type2": [{
                        "name": "large"
                    },
                    {
                        "name": "small"
                    },
                    {
                        "name": "middle"
                    }
                ]
            },
            {
                "name": "exercise",
                "type2": [{
                        "name": "outdoor",
                        "type3": [{
                                "name": "run"
                            },
                            {
                                "name": "other"
                            }
                        ]
                    },
                    {
                        "name": "indoor",
                        "type3": [{
                                "name": "treadmill"
                            },
                            {
                                "name": "yoga"
                            },
                            {
                                "name": "rope skipping"
                            },
                            {
                                "name": "power training"
                            },
                            {
                                "name": "other"
                            }
                        ]
                    }
                ]
            }
        ]
    })

    enum TagColor {
        Red = 'red',
        Blue = 'blue',
        Green = 'green',
        Yellow = 'yellow',
        Orange = 'orange',
      }
      
      // 假设 color 应该是 TagColor 类型的数组
      const color: TagColor[] = [TagColor.Red, TagColor.Blue, TagColor.Green, TagColor.Yellow, TagColor.Orange];

    const [imgTypeModal, setImgTypeModal] = React.useState(false);
    function showDialog() {
        setImgTypeModal(true);
    }
    const [inputDisabled, setInputDisabled] = React.useState(false);
    const [labelList, setLabelList] = React.useState([{}]);

    const [type1Show, setType1Show] = React.useState(false);
    const [type2Show, setType2Show] = React.useState(false);
    const [type3Show, setType3Show] = React.useState(false);
    const [type4Show, setType4Show] = React.useState(false);

    const [type1num, setType1num] = React.useState<number|undefined>(undefined);
    const [type2num, setType2num] = React.useState<number|undefined>(undefined);
    const [type3num, setType3num] = React.useState<number|undefined>(undefined);
    const [type4num, setType4num] = React.useState<number|undefined>(undefined);
    let typenumList: [number | undefined, number | undefined, number | undefined, number | undefined] = [undefined, undefined, undefined, undefined];
    const [typeIdxList, setTypeIdxList] =  React.useState<[number | undefined, number | undefined,number | undefined,number | undefined]>([undefined,undefined,undefined,undefined]);
    let typenum: number|undefined = undefined;

    const [type1List, setType1List] = React.useState([{}]);
    const [type2List, setType2List] = React.useState([{}]);
    const [type3List, setType3List] = React.useState([{}]);
    const [type4List, setType4List] = React.useState([{}]);

    const [labelText, setLabelText] = React.useState("");

    function getType(idx: number){
        let tempList: string[] = [];
        if(idx==1){
            console.log("getType1", imgType.type1);
            imgType.type1.map((v)=>{tempList = [...tempList, v.name]})
            let tagList: React.SetStateAction<{}[]>=[];
            let selectList: React.SetStateAction<{}[]>=[];
            tempList.map((v, idx)=>{   //设置下面分类的标签
                tagList.push({tagKey: idx.toString(), color: color[idx%5], children: v, closable: true,});
                selectList.push({value: idx, label: v,});
            })
            setLabelList(tagList);
            setType1List(selectList);
            setType2List([{}]);
            setType3List([{}]);
            setType4List([{}]);
            console.log("getType1", tempList);
            setType1Show(true);
            setType2Show(false);
            setType3Show(false);
            setType4Show(false);
            setType1num(undefined);
            setType2num(undefined);
            setType3num(undefined);
            setType4num(undefined);
            setInputDisabled(true);
        }else if(idx==2){
            if(typenumList[0] != undefined){
                imgType.type1[typenumList[0]].type2.map((v)=>{tempList = [...tempList, v.name]});
                console.log("getType2:", imgType.type1[typenumList[0]].type2);
            }
            let tagList: React.SetStateAction<{}[]>=[];
            let selectList: React.SetStateAction<{}[]>=[];
            tempList.map((v, idx)=>{   //设置下面分类的标签
                tagList.push({tagKey: idx.toString(), color: color[idx%5], children: v, closable: true,});
                selectList.push({value: idx, label: v,});
            })
            setLabelList(tagList);
            setType2List(selectList);
            setType3List([{}]);
            setType4List([{}]);
            setType1Show(true);
            setType2Show(true);
            setType3Show(false);
            setType4Show(false);
        }else if(idx==3){
            console.log("getType3: "+typenumList)
            if(typenumList[0]!=undefined && typenumList[1]!=undefined && 'type3' in imgType.type1[typenumList[0]].type2[typenumList[1]]){
                imgType.type1[typenumList[0]].type2[typenumList[1]].type3.map((v)=>{tempList = [...tempList, v.name]})
                console.log("getType3:", imgType.type1[typenumList[0]].type2[typenumList[1]].type3);
            }
            let tagList: React.SetStateAction<{}[]>=[];
            let selectList: React.SetStateAction<{}[]>=[];
            tempList.map((v, idx)=>{   //设置下面分类的标签
                tagList.push({tagKey: idx.toString(), color: color[idx%5], children: v, closable: true,});
                selectList.push({value: idx, label: v,});
            })
            console.log("type3:", selectList);
            setLabelList(tagList);
            setType3List(selectList);
            setType4List([{}]);
            setType1Show(true);
            setType2Show(true);
            setType3Show(true);
            setType4Show(false);
        }else if(idx==4){
            if(typenumList[0]!=undefined && typenumList[1]!=undefined && 'type3' in imgType.type1[typenumList[0]].type2[typenumList[1]] && 'type4' in imgType.type1[typenumList[0]].type2[typenumList[1]].type3[typenumList[2]]){
                imgType.type1[typenumList[0]].type2[typenumList[1]].type3[typenumList[2]].type4.map((v)=>{tempList = [...tempList, v.name]});
                console.log("getType4:", imgType.type1[typenumList[0]].type2[typenumList[1]].type3[typenumList[2]].type4);
            }
            let tagList: React.SetStateAction<{}[]>=[];
            let selectList: React.SetStateAction<{}[]>=[];
            tempList.map((v, idx)=>{   //设置下面分类的标签
                tagList.push({tagKey: idx, color: color[idx%5], children: v, closable: true,});
                selectList.push({value: idx, label: v,});
            })
            setLabelList(tagList);
            setType4List(selectList);
            setType1Show(true);
            setType2Show(true);
            setType3Show(true);
            setType4Show(true);
        }

    }

    function setTypeList(){
        const typeList = labelList.slice();
        setLabelList(typeList);
    }

    function handTagClose(idx:number|string){
        console.log("handTagClose: "+idx);
        if(typeof idx==='string' || idx==undefined) return;
        const typeList = labelList.slice();
        typeList.splice(idx, 1);
        console.log("handTagClose: "+typeList.length);
        setLabelList(typeList);
    }

    function getTypeNum(){
        const copyTypenumList = typenumList.slice();
        for(let i=copyTypenumList.length-1;i>=0;i--){
            if(typeof copyTypenumList[i]==='number'){
                return i;
            }
        }
        return undefined;
    }

    function type1Select(value: number){
        console.log("type1select ", "value:"+value+" type1num:"+type1num)
        setType1num(value);
        setType2num(undefined);
        setType3num(undefined);
        setType4num(undefined);
        typenumList = [value, undefined, undefined, undefined];
        setTypeIdxList(typenumList);
        getType(2);
        typenum = getTypeNum();
        setInputDisabled(true);
        console.log("type1select ", "inputDisabled:"+inputDisabled);
    }
    function type2Select(value: number){
        console.log("type2select ", "value:"+value+" type2num:"+type2num)
        setType2num(value)
        setType3num(undefined);
        setType4num(undefined);
        console.log("type2select:", typenumList)
        typenumList = [type1num, value, undefined, undefined];
        setTypeIdxList(typenumList);
        getType(3)
        typenum = getTypeNum();
        setInputDisabled(true);
    }
    function type3Select(value: number){
        console.log("type3select ", "value:"+value)
        setType3num(value)
        setType4num(undefined);
        typenumList = [type1num, type2num, value, undefined];
        setTypeIdxList(typenumList);
        getType(4)
        typenum = getTypeNum();
        setInputDisabled(false);
    }
    function type4Select(value: number){
        console.log("type4select ", "value:"+value)
        setType4num(value)
        typenumList = [type1num, type2num, type3num, value];
        setTypeIdxList(typenumList);
        typenum = getTypeNum();
        setInputDisabled(false);
        // getType(4)
    }

    function handleImgTypeModalOk(){
        setImgTypeModal(false);
    }

    function handleEnterPress(){
        console.log("handleEnterPress:",labelText);
        let list = labelList.slice();
        list.push({children: labelText});
        setLabelList(list);
        const templist = typeIdxList.slice();
        switch (3){
            case 3:
                let t4 = type4List.slice();
                t4.push({value: t4.length, label: labelText})
                setType4List(t4);
                if(templist[0]!=undefined && templist[1]!=undefined && 'type3' in imgType.type1[templist[0]].type2[templist[1]] && 'type4' in imgType.type1[templist[0]].type2[templist[1]].type3[templist[2]]){
                    imgType.type1[templist[0]].type2[templist[1]].type3[templist[2]].push({name: labelList});
                }
                console.log("handleEnterPress: imgType "+imgType);
                setImgType(imgType);
                break;
        }
    }

    function handleLabelChange(value:string){
        console.log("handleLabelChange:",handleLabelChange);
        setLabelText(value);
    }

    return <>
        <Button onClick={showDialog}>修改标注</Button>
        <Modal
            title="修改标注"
            visible={imgTypeModal}
            onOk={handleImgTypeModalOk}
            onCancel={handleImgTypeModalOk}
            footer={
                <Button type="primary" onClick={handleImgTypeModalOk}>
                    确认
                </Button>
            }
            style={{width: '600px'}}
        >
            <span>
                <Tag size="default" color='light-blue' onClick={()=>getType(1)}> type1 </Tag>
                {type1Show && <Select placeholder="分类1" style={{ width: '100px', height:21, marginLeft:12 }} optionList={type1List} value={type1num} onChange={v=>{if(typeof v === 'number')type1Select(v)}}></Select>}
                {type2Show && <Select placeholder="分类2" style={{ width: '100px', height:21, marginLeft:12 }} optionList={type2List} value={type2num} onChange={v=>{if(typeof v === 'number')type2Select(v)}}></Select>}
                {type3Show && <Select placeholder="分类3" style={{ width: '100px', height:21, marginLeft:12 }} optionList={type3List} value={type3num} onChange={v=>{if(typeof v === 'number')type3Select(v)}}></Select>}
                {type4Show && <Select placeholder="分类4" style={{ width: '100px', height:21, marginLeft:12 }} optionList={type4List} value={type4num} onChange={v=>{if(typeof v === 'number')type4Select(v)}}></Select>}
            </span>
            <Divider margin='12px' align='center'></Divider>
            <div style={ {
                    backgroundColor: 'var(--semi-color-fill-0)',
                    display: 'flex',
                    width:'100%'
                }}>
                <Space wrap style={{width:'100%'}}>
                    {(labelList[0] && Object.keys(labelList[0]).length > 0) && <Space wrap>
                        {
                            labelList.map((item,idx) => (
                            <Tag color={color[idx % color.length]} 
                                tagKey={idx} closable={!inputDisabled} 
                                onClose={(_,e,i)=>{e.preventDefault();handTagClose(i)}}> 
                                {(item !==null && typeof item ==='object' && Object.keys(item).length>0) && item.children} 
                            </Tag>)
                            )
                        }
                    </Space>}
                    <Input disabled={inputDisabled}  placeholder='+添加标签' size='default' value={labelText} onChange={handleLabelChange} onEnterPress={() => {handleEnterPress()}}></Input>
                </Space>
            </div>
            
        </Modal>
    </>
    
}