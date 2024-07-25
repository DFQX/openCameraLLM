import React from 'react';
import { Agent, AgentState } from '../../agent/Agent';
import { TextArea } from '@douyinfe/semi-ui';
import { Layout, Avatar, Space, RadioGroup, Radio } from '@douyinfe/semi-ui';
import { Divider, Button } from '@douyinfe/semi-ui';
import {IconSend} from '@douyinfe/semi-icons';
import { RadioChangeEvent } from '@douyinfe/semi-ui/lib/es/radio';

export default function ChatTab(props:{agent: Agent, agentState: AgentState}){

    const [answer, setAnswer] = React.useState("");
    const [question, setQuestion] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [mode, setMode] = React.useState(0);
    const [prompt, setPrompt] = React.useState(`你是一个需要通读图像描述并回答用户问题的智能人工智能。\n根据拍摄的图片描述回答问题。\n不要在回答中提及图片、场景或描述，只回答问题即可。\n不要试图概括或提供可能的场景。\n仅使用图像描述中的信息来回答问题。\n简明扼要。`);

    async function handleOnEnterPress(){
        setAnswer('');
        setLoading(true);
        props.agent.answer(question, mode, prompt).then ((value) => {
            setLoading(false);
            console.log('value:',value);
            if(value){
                setAnswer(value);
            }
        });
    }

    function removeNewlines(str: string): string {
        return str.replace(/[\r\n]+/g, '');
    }

    function handleOnChange(value:string){
        setQuestion(removeNewlines(value));
    }

    function handlePromptChange(value:string){
        console.log('handlePromptChange:', value);
        setPrompt(value);
    }

    function handlePrimarySave(){
        setPrompt(prompt);
    }

    function handleRadioChange(e: RadioChangeEvent){
        console.log('handleRadioChange:', e.target.value);
        switch(e.target.value){
            case 0:
                setPrompt(`你是一个需要通读图像描述并回答用户问题的智能人工智能。\n根据拍摄的图片描述回答问题。\n不要在回答中提及图片、场景或描述，只回答问题即可。\n不要试图概括或提供可能的场景。\n仅使用图像描述中的信息来回答问题。\n简明扼要。`);
                break;
            case 1:
                setPrompt(`你是一个回答用户问题的人工智能。\n回答问题尽量详细。
                    `);
                break;
            case 2:
                setPrompt('');
                break;
        }
        setMode(Number(e.target.value));
    }


    const { Header, Footer, Sider, Content } = Layout;

    return (
        <Layout style={{width: '100%', padding:'30px', display:'flex', justifyContent:'center'}}>
            <Content style={{width:'65%', overflowX:'visible'}}>
                <Space align='start' spacing='medium' style={{width:'100%'}}>
                    <Avatar border={{motion:loading}} contentMotion={loading} style={{ color: '#f56a00'}}>Q</Avatar>
                    <TextArea rows={15}  value={answer} placeholder='这里是答案'/>
                </Space>
                <br/><br/>
                <Space align='center' spacing='medium' style={{width:'100%'}}>
                    <Avatar border={{motion:false}} contentMotion={false} style={{ color: '#87d068'}}>A</Avatar>
                    <TextArea rows={1} onEnterPress={handleOnEnterPress} onChange={handleOnChange}  maxCount={100} value={question} placeholder='请输入问题, 然后按下Enter键'/>
                </Space>
            </Content>
            <Sider style={{width: '35%', paddingLeft:'20px'}}>
                <Divider margin='12px' align='center'>
                    Prompt设置
                </Divider>
                <Space style={{backgroundColor:'var(--semi-color-fill-0)', alignContent:'center', alignItems:'center', justifyContent:'center', display:'flex'}}>
                    <RadioGroup direction="vertical" onChange={handleRadioChange} value={mode}>
                        <Radio value={0}>图片描述背景</Radio>
                        <Radio value={1}>默认Prompt</Radio>
                        <Radio value={2}>自定义Prompt</Radio>
                    </RadioGroup>
                </Space>

                <Divider margin='12px' align='center'>
                    填入Prompt
                </Divider>
                <TextArea rows={9} onChange={handlePromptChange} value={prompt}/>
                {/* <Divider margin='12px' align='center'></Divider> */}
                {/* <Space style={{margin:'13px', display:'flex', justifyContent:'center'}}>
                    <Button theme="solid" style={{padding:'10px'}} type="primary" onClick={handlePrimarySave} icon={<IconSend />} >保存</Button>
                </Space> */}
            </Sider>
        </Layout>
    )

}