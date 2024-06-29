import * as React from 'react';
import { Button } from '@douyinfe/semi-ui';

export default function Connect(props: {onPress?: () => void, action?: () => Promise<any>}){
    const doAction = React.useCallback(() => {
        if (props.onPress) {
            props.onPress();
            return;
        }
        if (props.action) {
            (async () => {
                try {
                    await props.action!();
                } finally {
                }
            })();
        }
    }, [props.onPress, props.action]);

    return(
        <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
            {/* <RoundButton title="Connect to the device" action={connectDevice} /> */}
            <Button size='large' theme='solid' type='primary' style={{ marginRight: 8 }} onClick={doAction}>连接蓝牙</Button>
        </div>
    )
}

